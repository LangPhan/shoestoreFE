import { ThemeProvider } from "@/components/theme-provider";
import {
  useGetUser,
  useRefreshToken,
} from "@/hooks/useAuth";
import authStore from "@/stores/authStore";
import { useEffect } from "react";
import {
  Outlet,
  ScrollRestoration,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RootPage = () => {
  let token = {};
  try {
    const tokenString =
      localStorage.getItem("token");
    if (tokenString) {
      token = JSON.parse(tokenString);
    }
  } catch (error) {}

  const accessToken =
    token?.accessToken;
  const refreshToken =
    token?.refreshToken;
  const {
    data: userInfo,
    isSuccess,
    isError: isAccessTokenInvalid,
    error,
    isFetching,
  } = useGetUser({
    accessToken,
  });
  // set user when accessToken is valid
  const {
    setUser,
    setFetching,
    logout,
  } = authStore();

  const location = useLocation();

  useEffect(() => {
    setFetching(isFetching);
    if (isSuccess) {
      const isCurrentInAuth =
        location.pathname
          .split("/")
          .includes("auth");
      if (userInfo.role === "ADMIN") {
        return setUser(userInfo);
      }
      if (
        !userInfo.verify &&
        !isCurrentInAuth
      ) {
        return logout();
      }
      return setUser(userInfo);
    }
  }, [isSuccess, isFetching]);

  //handle refresh token when token in valid
  const { mutate } = useRefreshToken();
  useEffect(() => {
    if (
      isAccessTokenInvalid &&
      error.status === 401
    ) {
      mutate(refreshToken);
    }
  }, [error]);
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
