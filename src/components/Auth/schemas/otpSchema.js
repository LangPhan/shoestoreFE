import { z } from "zod";

export const otpSchema = z.object({
  pin: z.string().min(6, {
    message:
      "OTP must be 6 characters.",
  }),
});