import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import authStore from "@/stores/authStore";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

const Profile = ({ isShow }) => {
  const navigate = useNavigate();
  const token =
    localStorage.getItem("token");
  const {
    user,
    isAuth,
    isFetching,
    logout,
  } = authStore();

  if (isFetching && token) {
    return (
      <Skeleton
        className={`${
          !isShow && "hidden md:block"
        } w-[140px] h-8`}
      ></Skeleton>
    );
  }
  return (
    <div
      className={`${
        !isShow && "hidden md:block"
      } w-full md:w-[140px] h-full cursor-pointer`}
    >
      {user !== null && isAuth && (
        <HoverCard
          openDelay={200}
          closeDelay={200}
          defaultOpen={
            isShow ? true : false
          }
        >
          <HoverCardTrigger asChild>
            <div className="flex justify-center items-center gap-2">
              <User className="min-w-8 min-h-8" />
              <p className="font-semibold max-w-[120px] capitalize truncate">
                {user?.username}
              </p>
            </div>
          </HoverCardTrigger>
          <HoverCardContent
            className={`${
              isShow && "shadow-none"
            } w-[140px] px-0 py-0`}
          >
            {user?.roles ===
              "ADMIN" && (
              <div
                className="hover:bg-slate-100 py-1 font-semibold text-center"
                onClick={() => {
                  navigate("/admin");
                }}
              >
                Manage
              </div>
            )}
            <div
              className="hover:bg-slate-100 py-1 font-semibold text-center"
              onClick={() =>
                navigate("/order")
              }
            >
              Order History
            </div>
            <div
              className="hover:bg-slate-100 py-1 text-red-500 font-semibold text-center"
              onClick={() => {
                logout();
                toast.info(
                  "Logout successfully"
                );
              }}
            >
              Logout
            </div>
          </HoverCardContent>
        </HoverCard>
      )}
      {user === null && !isAuth && (
        <>
          <Button
            variant="outline"
            onClick={() =>
              navigate("/auth")
            }
            className="font-semibold text-base"
          >
            Login
          </Button>
        </>
      )}
    </div>
  );
};

export default Profile;
