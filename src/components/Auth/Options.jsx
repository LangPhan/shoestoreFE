import { authApi } from "@/api";
import { Label } from "@/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { useMutation } from "@tanstack/react-query";
import {
  Loader2,
  MailIcon,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import {
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import { toast } from "react-toastify";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
} from "../ui/alert-dialog";

const Options = () => {
  const [option, setOption] =
    useState("email");
  const [isLoading, setIsLoading] =
    useState(false);
  const [setShowVerify] =
    useOutletContext();

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
    onSuccess: () => {
      return navigate("email");
    },
    onError: (err) => {
      toast.error(err.message);
    },
    onMutate: () => {
      setIsLoading(true);
    },
  });

  const smsMutation = useMutation({
    mutationKey: "sendOTPBySms",
    mutationFn: () =>
      authApi.sendOTP(
        accessToken,
        "sendSms"
      ),
    onSuccess: () => {
      return navigate("sms");
    },
    onError: (err) => {
      toast.error(err.message);
    },
    onMutate: () => {
      setIsLoading(true);
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
        <AlertDialogCancel
          onClick={() =>
            setShowVerify(false)
          }
        >
          Cancel
        </AlertDialogCancel>
        <AlertDialogAction
          disabled={isLoading}
          onClick={() =>
            handleSelected()
          }
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting....
            </>
          ) : (
            "Confirm"
          )}
        </AlertDialogAction>
      </AlertDialogFooter>
    </>
  );
};

export default Options;
