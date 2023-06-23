import React from "react"
import { Container, Info, Item, Rights } from "./Footer.styles"
import { FooterPic } from "@assets/index"
import { Title } from "@components/Text"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <Container>
      <Info>
        <Item>
          <Title as="h3">Conheça nossa equipe</Title>
          <p>Instigate</p>
        </Item>
        <Item as={Link} to={"/login"}>
          <Title as="h3">Faça Parte!</Title>
          <p>Crie sua conta</p>
        </Item>
        <Item as={Link} to={'/faq'}>
          <Title as={"h3"}>Ajuda</Title>
          <p>FAQ</p>
        </Item>
        <Item>
          <img src={FooterPic} alt="" />
        </Item>
      </Info>
      <Rights>
        <p>© 2023 Instigate. Todos os direitos reservados.</p>
      </Rights>
    </Container>
  )
}

export default Footer
