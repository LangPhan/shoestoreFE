import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Logo from "../Header/Logo";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AuthContainer = () => {
  return (
    <section className="relative min-h-screen min-w-screen py-10 flex flex-col gap-5 justify-start items-center bg-product-banner bg-cover bg-no-repeat bg-center before:absolute before:inset-0 before:bg-black before:opacity-10 before:z-0">
      <Logo />
      <Tabs
        defaultValue="signIn"
        className="w-screen px-2 md:w-[400px] py-5 rounded-md drop-shadow-2xl z-50 bg-slate-100 dark:bg-background"
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
          <SignIn />
        </TabsContent>
        <TabsContent value="signUp">
          <SignUp />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default AuthContainer;
