import React from "react"
import { Container, Item } from "./PageList.styles"
import Book from "../book/Book"

interface Props {
  books: IBook[]
}

const PageList = ({ books }: Props) => {
  return (
    <Container>
      {books.map((book) => (
        <Item key={book.isbn}>
          <Book book={book} />
        </Item>
      ))}
    </Container>
  )
}

export default PageList
