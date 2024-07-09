import authStore from "@/stores/authStore";
import { User } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";

const Profile = () => {
  const token =
    localStorage.getItem("token");
  const { user, isAuth } = authStore();
  if (!isAuth && token) {
    return (
      <Skeleton className="w-[100px] h-6"></Skeleton>
    );
  }
  return (
    <div className="w-[100px] h-full flex justify-center items-center gap-2">
      {user !== null && isAuth && (
        <>
          <User className="w-8 h-8" />
          <p className="font-bold w-[80px] capitalize truncate">
            {user?.sub}
          </p>
        </>
      )}
      {user === null && !isAuth && (
        <>
          <Button variant="ghost">
            Login
          </Button>
        </>
      )}
    </div>
  );
};

export default Profile;
