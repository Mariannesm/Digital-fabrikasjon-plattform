import { z } from 'zod';

export const loginUserSchema = z.object({
  email: z.string().email({ message: 'Ugyldig e-postadresse' }),
  password: z.string().min(1, { message: 'Passord er påkrevd' }),
});
