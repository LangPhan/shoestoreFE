import authStore from "@/stores/authStore";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ChatUser from "../Chat/User/ChatUser";

const ActionFooter = () => {
  const { isAuth } = authStore();
  return (
    <div className="flex md:block flex-col items-center h-full col-span-2 md:border-r-2 border-mainForeground">
      <h2 className="text-center uppercase text-4xl tracking-wider leading-normal md:text-start md:text-mt text-white max-w-[250px] md:py-14">
        Are you interested?
      </h2>
      <div className="flex flex-col md:flex-row gap-4 md:justify-between md:mr-10">
        <Link
          className="text-ac text-main flex items-center gap-3 md:pb-8"
          to={"/product"}
        >
          Shopping Now{" "}
          <ArrowRight className="text-mc" />
        </Link>
        {isAuth && <ChatUser />}
      </div>
    </div>
  );
};

export default ActionFooter;
