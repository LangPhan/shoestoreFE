import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="mx-auto grid w-full gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">
          Login
        </h1>
        <p className="text-balance text-muted-foreground">
          Fill form below to login to
          your account
        </p>
      </div>
      <form className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="username">
            Username
          </Label>
          <Input
            id="username"
            type="text"
            placeholder="Enter your username"
            required
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
            id="password"
            type="password"
            placeholder="Enter your password"
            required
            autoComplete="on"
          />
        </div>
        <Button
          type="submit"
          className="w-full"
        >
          Login
        </Button>
        <Button
          variant="outline"
          className="w-full"
        >
          Login with Google
        </Button>
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

export default SignIn;
