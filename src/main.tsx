import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { GlobalStyle } from "./styles/Global.tsx"
import { RouterProvider } from "react-router"
import router from "./routes.tsx"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } }
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
