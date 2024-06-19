import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RootPage = () => {
  return (
    //Root Layout config
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <main className="">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default RootPage;
