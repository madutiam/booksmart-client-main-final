import { Title } from "@components/Text"
import PageList from "@interfaces/books/PageList/PageList"
import React from "react"
import { useQuery } from "react-query"
import { instance } from "src/API/calls"
import { Container } from "./Dashboard.styles"

const Dashboard = () => {
  const { data, isLoading } = useQuery<IBook[]>("getBooks", {
    queryFn: () => instance.get("/book").then((res) => res.data)
  })

  if (isLoading || !data) return <h1>Loading...</h1>
  return (
    <Container>
      <Title>Livros para troca</Title>
      <PageList books={data} />
    </Container>
  )
}

export default Dashboard
