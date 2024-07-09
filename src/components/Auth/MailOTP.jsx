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
import { otpSchema } from "./schemas/otpSchema";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MailOTP = () => {
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
    mutationKey: "verifyOTPByEmail",
    mutationFn: (data) =>
      authApi.verifyOTP(
        accessToken,
        data.pin
      ),
    onSuccess: (data) => {
      const status = data?.status;
      if (status === true) {
        toast.success(
          "Registration account successfully"
        );
        return navigate("/");
      } else {
        toast.error(
          "Please check your OTP"
        );
      }
    },
    onError: (err) => {
      toast.error(err);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(
          onSubmit
        )}
        className="w-2/3 space-y-6"
      >
        <AlertDialogDescription>
          Please enter the OTP code sent
          to your email.
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
  );
};

export default MailOTP;
