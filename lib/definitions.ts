import { z } from "zod";

// signup form schema
export const SignupFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" })
    .regex(/^[a-zA-Z]/, { message: "Username must start with letter" })
    .trim(),
  email: z.string().email({ message: "Valid email address required" }).trim(),
  password: z
    .string()
    .min(3, { message: "Password must be at least 3 characters" })
    .regex(/[a-zA-Z]/, {
      message: "Password must contain at least 1 character",
    })
    .regex(/[0-9]/, { message: "Password must contain at 1 number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at 1 special character",
    })
    .trim(),
});
