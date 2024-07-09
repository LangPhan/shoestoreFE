import { Label } from "@/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import {
  MailIcon,
  MessageCircle,
} from "lucide-react";
import {
  AlertDialogAction,
  AlertDialogDescription,
  AlertDialogFooter,
} from "../ui/alert-dialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "@/api";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

const Options = () => {
  const [option, setOption] =
    useState("email");

  const navigate = useNavigate();

  const accessToken = JSON.parse(
    localStorage.getItem("token")
  )?.accessToken;

  const emailMutation = useMutation({
    mutationKey: "sendOTPByEmail",
    mutationFn: () =>
      authApi.sendOTP(
        accessToken,
        "sendEmail"
      ),
    onSuccess: (data) => {
      console.log(data);
      return navigate("email");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
    // onSettled: (data) => {
    //   navigate("email");
    // },
  });

  const smsMutation = useMutation({
    mutationKey: "sendOTPBySms",
    mutationFn: () =>
      authApi.sendOTP(
        accessToken,
        "sendSms"
      ),
    onSuccess: (data) => {
      console.log(data);
      return navigate("sms");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  const handleSelected = () => {
    if (option === "email") {
      return emailMutation.mutate();
    }
    return smsMutation.mutate();
  };

  return (
    <>
      <AlertDialogDescription>
        Choose your method to receive
        your OTP:
      </AlertDialogDescription>
      <RadioGroup
        defaultValue={"email"}
        onValueChange={(value) =>
          setOption(value)
        }
      >
        <div className="flex items-center space-x-2 px-4 py-5 border-[1px] border-secondary rounded-xl hover:border-main transition-colors">
          <RadioGroupItem
            value="email"
            id="email"
          />
          <Label
            htmlFor="email"
            className="flex items-center gap-2 hover:cursor-pointer"
          >
            <MailIcon className="w-8 h-8" />
            Send OTP to my email
          </Label>
        </div>
        <div className="flex items-center space-x-2 px-4 py-5 border-[1px] border-secondary rounded-xl hover:border-main transition-colors duration-100">
          <RadioGroupItem
            value="sms"
            id="sms"
          />
          <Label
            htmlFor="sms"
            className="flex items-center gap-2 hover:cursor-pointer"
          >
            <MessageCircle className="w-8 h-8" />
            Send OTP to my SMS
          </Label>
        </div>
      </RadioGroup>
      <AlertDialogFooter>
        <AlertDialogAction
          onClick={() =>
            handleSelected()
          }
        >
          Confirm
        </AlertDialogAction>
      </AlertDialogFooter>
    </>
  );
};

export default Options;
