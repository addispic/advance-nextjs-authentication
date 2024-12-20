import { z } from "zod";

// signup form schema
export const LoginFormSchema = z.object({
  emailUsername: z
    .string()
    .min(1, { message: "Too short username/email" })
    .trim(),
  password: z
    .string()
    .min(3, { message: "Too short password" })
    .regex(/[a-zA-Z]/, { message: "Must contain letter" })
    .regex(/[0-9]/, { message: "Must contain number" })
    .regex(/[^a-zA-Z0-9]/, { message: "Must contain special character" })
    .trim(),
});
// signup form schema
export const SignupFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(3, { message: "Too short password" })
    .regex(/[a-zA-Z]/, { message: "Must contain letter" })
    .regex(/[0-9]/, { message: "Must contain number" })
    .regex(/[^a-zA-Z0-9]/, { message: "Must contain special character" })
    .trim(),
});
