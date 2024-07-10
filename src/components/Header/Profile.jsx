import authStore from "@/stores/authStore";
import { User } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { toast } from "react-toastify";

const Profile = () => {
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
      <Skeleton className="w-[140px] h-8"></Skeleton>
    );
  }
  return (
    <div className="w-[140px] h-full cursor-pointer">
      {user !== null && isAuth && (
        <HoverCard
          openDelay={200}
          closeDelay={200}
        >
          <HoverCardTrigger asChild>
            <div className="flex justify-center items-center gap-2">
              <User className="w-8 h-8" />
              <p className="font-bold w-[120px] capitalize truncate">
                {user?.sub}
              </p>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-[140px] px-0 py-2">
            <div
              className="hover:bg-slate-100 text-red-500 font-semibold text-center"
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
