import authStore from "@/stores/authStore";
import { Loader2 } from "lucide-react";
import {
  useEffect,
  useLayoutEffect,
} from "react";
import { useNavigate } from "react-router-dom";

const RequireAuth = ({
  children,
  roles,
}) => {
  const navigate = useNavigate();
  const { isAuth, user, isFetching } =
    authStore();
  useEffect(() => {
    if (!isFetching) {
      if (
        !isAuth ||
        !roles.includes(user?.role)
      ) {
        return navigate("/auth");
      }
    }
  }, [isAuth, user, isFetching]);
  if (isFetching) {
    return (
      <Loader2 className="h-5 w-5 animate-spin mx-auto" />
    );
  }
  return children;
};

export default RequireAuth;
