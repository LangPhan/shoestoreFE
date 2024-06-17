import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

const RootPage = () => {
  return (
    //Root Layout config
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <main>
        <h2 className="text-primary">
          RootPage
        </h2>
        {/* Dark Mode button */}
        <ModeToggle />
        <Outlet />
      </main>
    </ThemeProvider>
  );
};

export default RootPage;
