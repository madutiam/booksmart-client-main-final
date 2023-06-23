import React from "react"
import { useForm } from "react-hook-form"
import {
  Background,
  ButtonGroup,
  Container,
  Error,
  Form
} from "./Registrar.styles"
import { Title } from "@components/Text"
import { Input, Label } from "@components/form/Input"
import { Button } from "@components/form/Button"
import { RegisterPic } from "@assets/index"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerUserSchema } from "@schemas/registerUser.schema"
import { z } from "zod"
import { SwitchInput, SwitchRoot } from "@components/form/Switch"
import { useMutation } from "react-query"
import { instance } from "src/API/calls"
import useUserStore from "@stores/UseUserStore"
import { useNavigate } from "react-router"
import { AxiosError } from "axios"

type fieldValues = z.infer<typeof registerUserSchema>

const Registrar = () => {
  const { setUserData, setIsLoggedIn } = useUserStore()
  const nav = useNavigate()
  const [isStudent, setIsStudent] = React.useState(false)
  const { register, handleSubmit, formState, setValue, setError } =
    useForm<fieldValues>({
      resolver: zodResolver(registerUserSchema),
      defaultValues: {
        isStudent: false
      }
    })
  const mutation = useMutation({
    mutationFn: async (data: Partial<IUser>) => {
      const response = await instance.post("/user", data)

      return response.data
    },

    mutationKey: "registerUser",
    onError: (error) => {
      if (error instanceof AxiosError) {
        alert(`🚑️ Erro ao criar usuário: ${error.response?.data.error} 🚑️`)
      }
    },
    onSuccess: async (data, variables, context) => {
      console.log({ data, variables, context })

      alert("✨ Usuário criado com sucesso! ✨")

      localStorage.setItem("token", data)

      const response = await instance.get("/auth/me", {
        headers: { Authorization: `Bearer ${data}` }
      })
      if (response.status < 400) {
        setUserData(response.data)
        setIsLoggedIn(true)
        nav(`/${response.data.username}`)
      }
    }
  })

  const handleCreateUser = handleSubmit(async (data, e) => {
    e?.preventDefault()

    if (data.isStudent && data.userClass?.length === 0) {
      setError("userClass", { message: "Campo obrigatório" })
      return
    }

    const newUser = {
      username: data.username.replaceAll(" ", "").slice(0, 10).toLowerCase(),
      email: data.email,
      password: data.pass.password,
      isStudent: data.isStudent || false,
      userClass: data.userClass?.toUpperCase() || ""
    }

    await mutation.mutateAsync(newUser)
  })

  return (
    <Container>
      <Title style={{ textAlign: "center" }}>
        Junte-se à família Booksmart
      </Title>
      <Form onSubmit={handleCreateUser}>
        <Label>
          <span>Nome de usuário</span>
          <Input {...register("username")} placeholder="fulano_123" />
          <Error>{formState.errors.username?.message?.toString()}</Error>
        </Label>
        <Label>
          <span>Email institucional</span>
          <Input
            {...register("email")}
            data-invalid={formState.errors.email}
            placeholder="exemplo@etec.sp.gov.br"
            type="email"
          />
          <Error>{formState.errors.email?.message?.toString()}</Error>
        </Label>
        <Label>
          <span>Senha</span>
          <Input
            {...register("pass.password")}
            placeholder="**********"
            type="password"
          />
          <Error>{formState.errors.pass?.password?.message?.toString()}</Error>
        </Label>
        <Label>
          <span>Confirmar senha</span>
          <Input
            {...register("pass.confirmPassword")}
            placeholder="**********"
            type="password"
          />
          <Error>
            {formState.errors.pass?.confirmPassword?.message?.toString()}
          </Error>
        </Label>
        <Label
          style={{ flexDirection: "row", gap: "0.5rem", alignItems: "center" }}
        >
          <span style={{ display: "block" }}>Estudante</span>
          <SwitchRoot
            onCheckedChange={(check) => {
              setValue("isStudent", check)
              setIsStudent(check)
            }}
          >
            <SwitchInput />
          </SwitchRoot>
        </Label>
        {isStudent && (
          <Label>
            <span>Turma</span>
            <Input {...register("userClass")} placeholder="1AM3" type="text" />
            <Error>{formState.errors.userClass?.message?.toString()}</Error>
          </Label>
        )}
        <ButtonGroup>
          <Button
            variant={["outlined"]}
            type="button"
            onClick={() => nav("/login")}
          >
            Fazer login
          </Button>
          <Button disabled={mutation.isLoading}>
            {mutation.isLoading ? "Carregando..." : "Cadastrar"}
          </Button>
        </ButtonGroup>
      </Form>
      <Background src={RegisterPic} />
    </Container>
  )
}

export default Registrar
