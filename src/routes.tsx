import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "@pages/home/Home"
import Registrar from "@pages/registrar/Registrar"
import Login from "@pages/login/Login"
import UserPage from "@pages/userPage/UserPage"
import BookRegister from "@pages/bookRegister/BookRegister"
import Dashboard from "@pages/dashboard/Dashboard"
import Faq from "@pages/faq/Faq"
import Meet from "@pages/meet/Meet"

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: '/faq',
        element: <Faq /> , 
      },
      {
        path: '/meeting',
        element: <Meet /> , 
      },
      {
        path: "/registrar",
        element: <Registrar />
      },
      {
        path: "/:username",
        element: <UserPage />
      },
      {
        path: "/:username/:isbn",
        element: <h1>Pagina do livro do usuário</h1>
      },
      {
        path: "/trocar",
        element: <BookRegister />
      }
    ]
  }
])

export default router
