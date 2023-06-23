import { create } from "zustand"

interface IUserStore {
  userData: IUser | null
  isLoggedIn: boolean
  setUserData: (userData: IUser) => void
  setIsLoggedIn: (isLoggedIn: boolean) => void
  logoutUser: () => void
}

const useUserStore = create<IUserStore>((set) => ({
  userData: null,
  setUserData: (userData: IUser) => set({ userData }),
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  logoutUser: () => {
    localStorage.removeItem("token")
    set({ userData: null, isLoggedIn: false })
  }
}))

export default useUserStore
