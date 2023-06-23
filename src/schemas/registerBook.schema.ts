import { z } from "zod"

export const registerBookSchema = z.object({
  isbn: z.string().min(10, "ISBN muito curto").max(13, "ISBN muito longo"),
  publisher: z.string(),
  title: z.string().min(3, "Título muito curto"),
  forAdults: z.boolean().default(false),
  pages: z.string().min(1, "Número de páginas inválido"),
  authorsName: z.string().min(2, "Nome muito curto"),
  coverUrl: z.string().url().nullable(),
  year: z.string().min(1, "Ano inválido"),
  language: z.string()
})
