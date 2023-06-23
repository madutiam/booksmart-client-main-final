interface IBook {
  isbn: string
  title: string
  category: string[]
  coverUrl: string | null
  createdAt: Date
  forAdults: boolean
  pages: string | number
  language: string
  authorsName: string | string[]
  publisher: string
  year: string | number
  userOwner: Partial<User>
}
