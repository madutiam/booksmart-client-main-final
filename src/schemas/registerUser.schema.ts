import z from "zod"

const usernameRegex = /^[a-zA-Z0-9]{4,20}$/

export const registerUserSchema = z.object({
  username: z
    .string()
    .min(3, "Apelido muito curto")
    .max(20, "Apelido muito longo")
    .regex(
      usernameRegex,
      "O nome de usuário deve conter apenas caracteres alfanuméricos"
    ),
  email: z
    .string()
    .email()
    .regex(/@etec\.sp\.gov\.br$/, "O e-mail deve ser institucional"),
  pass: z
    .object({
      password: z.string().min(8, "Senha muito curta"),
      confirmPassword: z.string().min(8, "Senha muito curta")
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "As senhas não coincidem",
      path: ["confirmPassword"]
    }),
  isStudent: z.boolean().default(false).nullable(),
  userClass: z.string().trim().nullable().default("")
})
