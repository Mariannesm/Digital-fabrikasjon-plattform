import { z } from 'zod'

export const projectLoginSchema = z.object({
  slug: z.string().min(1, { message: 'Prosjektnavn er påkrevd' }),
  password: z.string().min(1, { message: 'Passord er påkrevd' }),
})

export type ProjectLoginData = z.infer<typeof projectLoginSchema>
