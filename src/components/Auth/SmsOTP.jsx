import {
  AlertDialogDescription,
  AlertDialogFooter,
} from "../ui/alert-dialog";

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

import { authApi } from "@/api";
import useCountdown from "@/hooks/useCountdown";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Hourglass } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../ui/button";
import { otpSchema } from "./schemas/otpSchema";

const SmsOTP = () => {
  const navigate = useNavigate();

  const countdown = useCountdown(60);

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
          className="space-y-6"
        >
          <AlertDialogDescription>
            Please enter the OTP code
            sent to your phone.
          </AlertDialogDescription>
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem className="flex justify-center flex-col items-center">
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
          <AlertDialogFooter>
            <Button
              onClick={() =>
                navigate(-1)
              }
              disabled={countdown > 0}
            >
              {countdown > 0 ? (
                <>
                  <Hourglass className="animate-spin mr-2" />
                  Back in {countdown}s
                </>
              ) : (
                "Back"
              )}
            </Button>
            <Button
              type="submit"
              disabled={
                mutation.isPending
              }
            >
              {mutation.isPending
                ? "Submitting..."
                : "Submit"}
            </Button>
          </AlertDialogFooter>
        </form>
      </Form>
    </>
  );
};

export default SmsOTP;
