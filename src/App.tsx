import React from "react"
import { Outlet } from "react-router"
import Header from "@interfaces/header/Header"
import { Container, GlobalContainer } from "./styles/styles"
import Footer from "@interfaces/footer/Footer"
import useGetUser from "@hooks/useGetUser"

const App = () => {
  const { getUserData } = useGetUser()

  React.useEffect(() => {
    getUserData.mutateAsync()
  }, [])

  return (
    <GlobalContainer>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </GlobalContainer>
  )
}

export default App
