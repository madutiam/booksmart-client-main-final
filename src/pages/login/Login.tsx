import { LoginPic } from "@assets/index"
import { Background, ButtonGroup } from "@pages/registrar/Registrar.styles"
import React from "react"
import { Container, Form } from "./Login.styles"
import { Title } from "@components/Text"
import { Input, Label } from "@components/form/Input"
import { Button } from "@components/form/Button"
import { useNavigate } from "react-router"
import { instance } from "src/API/calls"
import { useMutation } from "react-query"
import { useForm } from "react-hook-form"
import useGetUser from "@hooks/useGetUser"
import useUserStore from "@stores/UseUserStore"
import { AxiosError } from "axios"

const Login = () => {
  const nav = useNavigate()
  const { userData } = useUserStore()
  const { getUserData } = useGetUser()
  const mutation = useMutation({
    mutationFn: async (data: Partial<IUser>) => {
      return instance.post("/auth/login", data).then((res) => res.data)
    },
    mutationKey: "loginUser",
    onSuccess: async (data) => {
      localStorage.setItem("token", data.token)

      await getUserData.mutateAsync().then((res) => nav(`/${res.username}`))
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        alert(`🚑️ Erro ao fazer login: ${error.response?.data.error} 🚑️`)
      }
    }
  })
  const { handleSubmit, register } = useForm<{
    email: string
    password: string
  }>()

  React.useEffect(() => {
    console.log(userData)
  }, [userData])

  const handleLoginUser = async (data: { email: string; password: string }) => {
    const loginData = {
      email: data.email,
      password: data.password
    }

    await mutation.mutateAsync(loginData)
  }

  return (
    <Container>
      <Background src={LoginPic} />
      <Title style={{ textAlign: "center" }}>Faça seu login!</Title>
      <Form onSubmit={handleSubmit(handleLoginUser)}>
        <Label>
          <span>E-mail ou username</span>
          <Input {...register("email")} placeholder="fulano_123" />
        </Label>
        <Label>
          <span>Senha</span>
          <Input
            {...register("password")}
            placeholder="********"
            type="password"
          />
        </Label>
        <ButtonGroup>
          <Button
            variant={["outlined"]}
            type="button"
            onClick={() => nav("/registrar")}
          >
            Cadastre-se
          </Button>
          <Button disabled={mutation.isLoading}>
            {mutation.isLoading ? "Carregando..." : "Entrar"}
          </Button>
        </ButtonGroup>
      </Form>
    </Container>
  )
}

export default Login
