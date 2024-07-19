import { Outlet, ScrollRestoration } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetUser, useRefreshToken } from "@/hooks/useAuth";
import { useEffect } from "react";
import authStore from "@/stores/authStore";
import ChatAdmin from "@/components/ChatAdmin";

const RootPage = () => {
  let token = {};
  try {
    const tokenString = localStorage.getItem("token");
    if (tokenString) {
      token = JSON.parse(tokenString);
    }
  } catch (error) {}

  const accessToken = token?.accessToken;
  const refreshToken = token?.refreshToken;
  const { isSuccess, isError, error, isFetching } = useGetUser({
    accessToken,
  });
  // set user when accessToken is valid
  const { setUser, setFetching } = authStore();

  useEffect(() => {
    setFetching(isFetching);
    if (isSuccess) {
      setUser(accessToken);
    }
  }, [isSuccess, isFetching]);

  //handle refresh token when token in valid
  const { mutate } = useRefreshToken();
  useEffect(() => {
    if (isError && error.status === 401) {
      mutate(refreshToken);
    }
  }, [error]);
  return (
    //Root Layout config
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
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
