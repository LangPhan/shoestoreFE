import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ActionFooter = () => {
  return (
    <div className="flex md:block flex-col items-center h-full col-span-2 md:border-r-2 border-mainForeground">
      <h2 className="text-center uppercase text-4xl tracking-wider leading-normal md:text-start md:text-mt text-white max-w-[250px] md:py-14">
        Are you interested?
      </h2>

      <Link
        className="text-ac text-main flex items-center gap-3 md:pb-8"
        to={"/product"}
      >
        Shopping Now{" "}
        <ArrowRight className="text-mc" />
      </Link>
    </div>
  );
};

export default ActionFooter;
