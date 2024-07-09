import { AlertDialogDescription } from "../ui/alert-dialog";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { otpSchema } from "./schemas/otpSchema";

const SmsOTP = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      pin: "",
    },
  });

  const accessToken = JSON.parse(
    localStorage.getItem("token")
  ).accessToken;
  const mutation = useMutation({
    mutationKey: "verifyOTP",
    mutationFn: (data) =>
      authApi.verifyOTP(
        accessToken,
        data.pin
      ),
    onSuccess: (data) => {
      const isVerified =
        JSON.parse(data);
      if (isVerified) {
        toast.success(
          "Registration Successfully"
        );
        return navigate("/");
      }
      toast.error(
        "Please check your OTP again"
      );
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(
            onSubmit
          )}
          className="w-2/3 space-y-6"
        >
          <AlertDialogDescription>
            Please enter the OTP code
            sent to your phone.
          </AlertDialogDescription>
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Your OTP
                </FormLabel>
                <FormControl>
                  <InputOTP
                    maxLength={6}
                    {...field}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot
                        index={0}
                      />
                      <InputOTPSlot
                        index={1}
                      />
                      <InputOTPSlot
                        index={2}
                      />
                      <InputOTPSlot
                        index={3}
                      />
                      <InputOTPSlot
                        index={4}
                      />
                      <InputOTPSlot
                        index={5}
                      />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SmsOTP;
