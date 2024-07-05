import authStore from "@/stores/authStore";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({
  children,
  role,
}) => {
  const { isAuth, checkAccessToken } =
    authStore();
  useEffect(() => {
    if (!isAuth) {
      checkAccessToken();
      console.log("checked");
    }
  }, [isAuth]);
  return isAuth ? (
    children
  ) : (
    <h2>Hello</h2>
  );
};

export default RequireAuth;
