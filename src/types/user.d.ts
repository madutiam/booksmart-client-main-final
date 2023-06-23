interface IUser {
  id: string
  fullName: string
  email: string
  username: string
  avatarUrl: string
  createdAt: Date
  userClass: string
  isStudent: boolean
  books: Book[]
  favoriteBooks: Book[]
}
