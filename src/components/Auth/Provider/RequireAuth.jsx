import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import authStore from "@/stores/authStore";
import { Loader2 } from "lucide-react";
import {
  useLayoutEffect,
  useState,
} from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

const RequireAuth = ({
  children,
  roles = [],
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDialog, setOpenDialog] =
    useState(false);
  const { isAuth, user, isFetching } =
    authStore();
  useLayoutEffect(() => {
    if (!isFetching) {
      if (
        !isAuth ||
        (roles.length > 0 &&
          !roles.includes(
            user?.role
          )) ||
        !user?.verify
      ) {
        return setOpenDialog(true);
      }
    }
  }, [isAuth, user, isFetching]);

  if (isFetching) {
    return (
      <div className="flex min-h-[100px] items-center justify-center">
        <Loader2 className="z-10 h-10 w-10 animate-spin mx-auto text-main" />
      </div>
    );
  }

  const handleLogin = () => {
    return navigate("/auth", {
      replace: true,
      state: {
        backURI: location.pathname,
      },
    });
  };
  if (
    isAuth &&
    roles.length > 0 &&
    roles.includes(user?.role) &&
    children
  ) {
    return children;
  }

  return (
    <>
      <Dialog
        open={openDialog}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setOpenDialog(false);
          }
          navigate(-1);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              Login to Continue
            </DialogTitle>
            <DialogDescription>
              {!isAuth
                ? "Please login to your account before using this feature"
                : user?.verify
                ? "Please using account has ADMIN role to access this resources"
                : "Please verify your account before using this feature"}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              onClick={() =>
                handleLogin()
              }
            >
              Login
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RequireAuth;
