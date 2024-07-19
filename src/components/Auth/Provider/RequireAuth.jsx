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
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
          !roles.includes(user?.role))
      ) {
        return setOpenDialog(true);
      }
    }
  }, [isAuth, user, isFetching]);

  if (isFetching) {
    return (
      <Loader2 className="h-5 w-5 animate-spin mx-auto" />
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

  return (
    <>
      {isAuth &&
        roles.length > 0 &&
        roles.includes(user?.role) &&
        children}
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
                : "Please using account has ADMIN role to access this resources"}
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
