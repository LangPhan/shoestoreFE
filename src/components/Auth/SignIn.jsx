import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/api";
import authStore from "@/stores/authStore";
import loginSchema from "./schemas/loginSchema";
import { memo } from "react";
import { toast } from "react-toastify";

//Define schema for login form

const SignIn = ({ setShowVerify }) => {
  const navigate = useNavigate();
  const { login } = authStore();
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const mutation = useMutation({
    mutationKey: "postUserLogin",
    mutationFn: (accInfo) => {
      return authApi.login(accInfo);
    },
    onSuccess: (data) => {
      if (
        !data.user.verify &&
        !data.user.verify === null
      ) {
        login(data.token);
        return setShowVerify(true);
      }
      login(data.token);
      toast.success(
        "Login Successfully"
      );
      navigate("/");
    },
    onError: (err) => {
      setError("", err);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="mx-auto px-2   grid w-full gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">
          Login
        </h1>
        <p className="text-balance text-muted-foreground">
          Fill form below to login to
          your account
        </p>
      </div>
      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className="grid gap-4"
      >
        <div className="grid gap-2">
          <Label htmlFor="username">
            Username
          </Label>
          <Input
            {...register("username")}
            id="username"
            type="text"
            placeholder="Enter your username"
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">
              Password
            </Label>
            <Link
              href="/forgot-password"
              className="ml-auto inline-block text-sm underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Input
            {...register("password")}
            id="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="on"
          />
        </div>
        <div className="min-h-6 text-red-500">
          {Object.values(errors)
            .length > 0 &&
            Object.values(errors)[0]
              .message}
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Signing In"
            : "Sign In"}
        </Button>
        {/* <Button
          variant="outline"
          className="w-full"
        >
          Login with Google
        </Button> */}
      </form>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link
          href="#"
          className="underline"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default memo(SignIn);
