import React from "react"
import { Container, Details, Form, SmallInput } from "./BookRegister.styles"
import { Title } from "@components/Text"
import { Input, Label } from "@components/form/Input"
import { ButtonGroup, Error } from "@pages/registrar/Registrar.styles"
import { SwitchInput, SwitchRoot } from "@components/form/Switch"
import { Button } from "@components/form/Button"
import { useForm } from "react-hook-form"
import { Navigate, useNavigate } from "react-router"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerBookSchema } from "@schemas/registerBook.schema"
import { z } from "zod"
import { useMutation } from "react-query"
import { instance } from "src/API/calls"
import useUserStore from "@stores/UseUserStore"
import { AxiosError } from "axios"

type fieldValues = z.infer<typeof registerBookSchema>

const BookRegister = () => {
  const { isLoggedIn, userData } = useUserStore()
  const [isForAdults, setIsForAdults] = React.useState(false)
  const { register, formState, handleSubmit } = useForm<fieldValues>({
    resolver: zodResolver(registerBookSchema)
  })
  const nav = useNavigate()
  const mutation = useMutation({
    mutationFn: async (data: Partial<IBook>) => {
      const response = await instance.post("/book", data)

      return response.data
    },
    mutationKey: ["registerBook"],
    onSuccess: async (data) => {
      nav(`/${userData?.username}`)
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        alert(`🚑️ Erro ao registrar livro: ${error.response?.data.error} 🚑️`)
      }
    }
  })

  const handlePostBook = async (data: Partial<IBook>) => {
    const newBook = {
      ...data,
      authorsName:
        data.authorsName instanceof Array
          ? data.authorsName
          : data.authorsName?.split(", "),
      year: Number(data.year),
      pages: Number(data.pages),
      userId: userData?.id
    }

    await mutation.mutateAsync(newBook)
  }

  if (!isLoggedIn && !userData) return <Navigate to="/" />
  return (
    <Container>
      <Title>Trocar livro</Title>
      <Form onSubmit={handleSubmit(handlePostBook)}>
        <Label>
          <span>ISBN</span>
          <Input {...register("isbn")} placeholder="xxxxxxxxxxxxx" />
          <Error>{formState.errors.isbn?.message?.toString()}</Error>
        </Label>
        <Label>
          <span>Título</span>
          <Input
            {...register("title")}
            placeholder="exemplo@etec.sp.gov.br"
            type="text"
          />
          <Error>{formState.errors.title?.message?.toString()}</Error>
        </Label>
        <Label>
          <span>Editora</span>
          <Input
            {...register("publisher")}
            placeholder="Editora Exemplo"
            type="text"
          />
          <Error>{formState.errors.publisher?.message?.toString()}</Error>
        </Label>
        <Label>
          <span>Autor(es)</span>
          <Input
            {...register("authorsName")}
            placeholder="F. de Tal, C. de Tal"
            type="text"
          />
          <Error>{formState.errors.authorsName?.message?.toString()}</Error>
        </Label>
        <Label>
          <span>Idioma</span>
          <Input
            {...register("language")}
            placeholder="Português"
            type="text"
          />
          <Error>{formState.errors.language?.message?.toString()}</Error>
        </Label>
        <Label>
          <span>Imagem da Capa</span>
          <Input
            {...register("coverUrl")}
            placeholder="https://exemplo.com/capa-do-livro.jpg"
            type="text"
          />
          <Error>{formState.errors.coverUrl?.message?.toString()}</Error>
        </Label>
        <Details>
          <Label>
            <span>Número de Páginas</span>
            <SmallInput
              {...register("pages")}
              placeholder="123"
              type="number"
            />
            <Error>{formState.errors.pages?.message?.toString()}</Error>
          </Label>
          <Label>
            <span>Ano de Lançamento</span>
            <SmallInput
              {...register("year")}
              placeholder="1999"
              type="number"
              max={new Date().getFullYear()}
            />
            <Error>{formState.errors.year?.message?.toString()}</Error>
          </Label>
          <Label
            style={{
              flexDirection: "column",
              gap: "0.5rem",
              alignItems: "start",
              justifySelf: "end"
            }}
          >
            <span style={{ display: "block" }}>Para adultos</span>
            <SwitchRoot
              onCheckedChange={(check) => {
                setIsForAdults(check)
              }}
              checked={isForAdults}
            >
              <SwitchInput />
            </SwitchRoot>
          </Label>
        </Details>
        <ButtonGroup>
          <Button
            variant={["outlined"]}
            type="button"
            onClick={() => nav(`/${userData?.username}`)}
          >
            Cancelar
          </Button>
          <Button disabled={mutation.isLoading}>
            {mutation.isLoading ? "Carregando..." : "Trocar"}
          </Button>
        </ButtonGroup>
      </Form>
    </Container>
  )
}

export default BookRegister
