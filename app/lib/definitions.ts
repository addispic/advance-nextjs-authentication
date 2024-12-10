import {z} from 'zod'

// signup form schema
export const SignupFormSchema = z.object({
    username: z
        .string()
        .min(3,{message: 'username must be at least 3 character.'})
        .regex(/^[a-bA-Z]/,{message: 'Username must start with letter'})
        .trim(),
    email: z
        .string()
        .email({message: 'Invalid email address'})
        .trim(),
    password: z
        .string()
        .min(3,{message: 'Password must be at least 3 characters'})
        .regex(/[a-zA-Z]/,{message: 'Password must contain at least 1 characters'})
        .regex(/[0-9]/,{message: 'Password must be at least contain 1 digit'})
        .regex(/[^a-zA-Z0-9]/,{message: 'Password must contain at least 1 special character'})
        .trim()
})

// signup form schema
export const LoginFormSchema = z.object({
    username: z
        .string()
        .min(3,{message: 'username must be at least 3 character.'})
        .regex(/^[a-bA-Z]/,{message: 'Username must start with letter'})
        .trim(),
    password: z
        .string()
        .min(3,{message: 'Password must be at least 3 characters'})
        .regex(/[a-zA-Z]/,{message: 'Password must contain at least 1 characters'})
        .regex(/[0-9]/,{message: 'Password must be at least contain 1 digit'})
        .regex(/[^a-zA-Z0-9]/,{message: 'Password must contain at least 1 special character'})
        .trim()
})