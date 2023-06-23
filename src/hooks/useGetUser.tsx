import React from "react"
import useUserStore from "@stores/UseUserStore"
import { useMutation } from "react-query"
import { instance } from "src/API/calls"

const useGetUser = () => {
  const { setIsLoggedIn, setUserData } = useUserStore()
  const getUserData = useMutation({
    mutationFn: async () => {
      const token = localStorage.getItem("token")

      if (!token) {
        throw new Error("Token not found")
      }

      return instance
        .get("/auth/me", {
          headers: { Authorization: "Bearer " + token }
        })
        .then((res) => res.data)
    },
    mutationKey: ["getUserData"],
    onSuccess: (data) => {
      setUserData(data)
      setIsLoggedIn(true)
    }
  })

  return { getUserData }
}

export default useGetUser
