import {
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RootPage = () => {
  return (
    //Root Layout config
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <>
        <Outlet />
        <ScrollRestoration />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="colored"
          transition:Bounce
        />
      </>
    </ThemeProvider>
  );
};

export default RootPage;
