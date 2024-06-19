import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ActionFooter = () => {
  return (
    <div className="h-full col-span-2 border-r-2 border-mainForeground">
      <h2 className="uppercase text-mt text-white max-w-[250px] py-14">
        Are you interested?
      </h2>

      <Link
        className="text-ac text-main flex items-center gap-3 pb-8"
        to={"/product"}
      >
        Shopping Now{" "}
        <ArrowRight className="text-mc" />
      </Link>
    </div>
  );
};

export default ActionFooter;
