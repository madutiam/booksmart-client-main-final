import React from "react"
import './homeSheet.css'
import {
  Active,
  Background,
  BarSection,
  Buttons,
  CardItem,
  Cards,
  Container,
  Content,
  Final,
  Image,
  Prase,
  PraseText,
  Section
} from "./Home.styles"
import { Title } from "@components/Text"
import { HomePic } from "@assets/index"
import { useQuery } from "react-query"
import { instance } from "src/API/calls"
import ScrollList from "@interfaces/books/ScrollList/ScrollList"
import { Button } from "@components/form/Button"
import useUserStore from "@stores/UseUserStore"
import { Navigate } from "react-router"
import { Link } from "react-router-dom"



const Home = () => {
  const { isLoggedIn } = useUserStore()
  const { data: bookResponse } = useQuery("books", {
    queryFn: () => instance.get("/book")
  })

  if (isLoggedIn) return <Navigate to="/dashboard" />
  return (
    <Container>
      
      <Image src={HomePic} alt="" />
      <Prase>
        <PraseText>
          A leitura abre a mente, impulsiona sonhos e alimenta a alma.
        </PraseText>
        <p>- Érico Teixeira</p>
      </Prase>
      <BarSection>
        <Title as="h2">Conheça nossos livros</Title>
        <ScrollList books={bookResponse ? bookResponse.data : []} />
        <Background />
      </BarSection>

      <Section>
    
        <Title as="h2">Motivos para você trocar livros</Title>
        <CardsContainer />
      </Section>

      <Final>
        <div>
          <Title as="h2">Ainda não tem uma conta?</Title>
          <Link to={"/registrar"}>
            <Button variant="rounded">Cadastre-se</Button>
          </Link>
        </div>
        <div>
          <Title as="h2">Já tem uma conta?</Title>
          <Link to={"/login"}>
            <Button variant="rounded">Entre</Button>
          </Link>
        </div>
      </Final>
    </Container>
  )
}

const CardsContainer = () => {
  const ref = React.useRef<HTMLUListElement>(null)
  const [active, setActive] = React.useState(1)
  const [items, setItems] = React.useState<HTMLLIElement[] | null>(null)

  const handleClick = (e: React.MouseEvent) => {
    const children = Array.from(
      ref.current?.children as HTMLCollectionOf<HTMLLIElement>
    ).filter((child) => child instanceof HTMLLIElement)

    if (e.target instanceof HTMLButtonElement) {
      const direction = e.target.dataset.direction as "prev" | "next"
      setActive((prev) => {
        children[prev].classList.remove("active")

        if (prev >= children.length - 1 && direction === "next") {
          children[0].classList.add("active")
          return 0
        } else if (prev === 0 && direction === "prev") {
          children[children.length - 1].classList.add("active")
          return children.length - 1
        }

        if (direction === "prev") {
          children[prev - 1].classList.add("active")
          return prev - 1
        } else if (direction === "next") {
          children[prev + 1].classList.add("active")
          return prev + 1
        } else {
          return prev
        }
      })
    }
  }

  React.useEffect(() => {
    const children = ref.current?.children as HTMLCollectionOf<HTMLLIElement>
    children[1].classList.add("active")
    setItems(
      Array.from(children).filter((child) => child instanceof HTMLLIElement)
    )
  }, [])
  return (
    <Cards onClick={handleClick}>
      <Buttons>
        <button data-direction="prev">anterior</button>
        <button data-direction="next">proximo</button>
      </Buttons>
      <Content ref={ref}>
        <CardItem>Obtém um livro totalmente gratuito!</CardItem>
        <CardItem>interage com novas pessoas!</CardItem>
        <CardItem>Pode enriquecer seu conhecimento!</CardItem>
      </Content>
      <Active>
        {items?.map((item, index) => (
          <span data-active={active === index}></span>
        ))}
      </Active>
    </Cards>
  )
}

export default Home
