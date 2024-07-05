import { z } from "zod";

const registerSchema = z.object({
  username: z.string().min(5, "Must be 5 or more characters long"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Must be 8 or more characters long"),
  confirmPassword: z.string().min(8, "Must be 8 or more characters long"),
  phone: z.string().length(10, "Invalid phone number"),
  streetLine: z.string({ required_error: "Street line is required" }).min(1, "Please provide you current address"),
  city: z.string().default("Hồ Chí Minh"),
  district: z.string({ required_error: "District is required" }),
  ward: z.string({ required_error: "Ward is required" })
})
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"],
  })

export default registerSchema