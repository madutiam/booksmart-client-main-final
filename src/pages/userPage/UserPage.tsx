import React from "react"
import {
  Container,
  Info,
  Profile,
  Section,
  Type,
  Username
} from "./UserPage.styles"
import { useNavigate, useParams } from "react-router"
import { useQuery } from "react-query"
import { instance } from "src/API/calls"
import { Title } from "@components/Text"
import Avatar from "@interfaces/user/avatar/Avatar"
import PageList from "@interfaces/books/PageList/PageList"
import ScrollList from "@interfaces/books/ScrollList/ScrollList"
import { Button } from "@components/form/Button"

const getFallback = (fullName: string) => {
  return fullName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

const UserPage = () => {
  const nav = useNavigate()
  const { username } = useParams()
  const { data, isLoading } = useQuery<IUser>(["user", username], {
    queryFn: () => instance.get(`/user/${username}`).then((res) => res.data)
  })

  if (isLoading) return <h1>Carregando...</h1>
  if (!data) return <h1>Usuário não encontrado</h1>
  return (
    <Container>
      <Profile>
        <Avatar
          src={data.avatarUrl}
          fallback={getFallback(data.fullName)}
          delayMs={0}
          className="avatar"
        />
        <Info>
          <Title style={{ lineHeight: "100%" }}>{data.fullName}</Title>
          <Username>{data.username}</Username>
          <Type>{data.isStudent ? data.userClass : "Funcionário"}</Type>
        </Info>
      </Profile>
      <Section>
        <Title>Livros de {data.username}</Title>
        {data.books.length > 0 ? (
          <PageList books={data.books} />
        ) : (
          <Button onClick={() => nav("/trocar")}>Trocar livro</Button>
        )}
      </Section>
      <Section>
        <Title>Seus favoritos</Title>
        <ScrollList books={data.favoriteBooks} />
      </Section>
    </Container>
  )
}

export default UserPage
