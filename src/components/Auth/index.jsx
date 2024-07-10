import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import Logo from "../Header/Logo";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const AuthContainer = () => {
  const [showVerify, setShowVerify] =
    useState(false);

  return (
    <section className="relative min-h-screen min-w-screen flex flex-col gap-5 justify-center items-center bg-product-banner bg-cover bg-no-repeat bg-center before:absolute before:inset-0 before:bg-black before:opacity-10 before:z-0">
      <Logo />
      <Tabs
        defaultValue="signIn"
        className="w-[95%] min-[420px]:w-[400px] px-2 py-5 rounded-md drop-shadow-2xl z-50 bg-slate-100 dark:bg-background"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signIn">
            Sign In
          </TabsTrigger>
          <TabsTrigger value="signUp">
            Sign Up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="signIn">
          <SignIn
            setShowVerify={
              setShowVerify
            }
          />
        </TabsContent>
        <TabsContent value="signUp">
          <SignUp
            setShowVerify={
              setShowVerify
            }
          />
        </TabsContent>
      </Tabs>
      <AlertDialog open={showVerify}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Please verify your account
              before using
            </AlertDialogTitle>
            <Outlet />
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};

export default AuthContainer;
