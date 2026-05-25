import { z } from "zod"

export const checkoutSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters"),

  email: z
    .string()
    .email("Invalid email address"),

  address: z
    .string()
    .min(10, "Address is too short"),

  phone: z
    .string()
    .min(10, "Phone number must be 10 digits"),
})

export type CheckoutFormData = z.infer<
  typeof checkoutSchema
>