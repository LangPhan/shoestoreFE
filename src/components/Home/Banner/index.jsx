import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Banner = () => {
  return (
    <section className="w-full flex flex-col md:flex-row gap-10 min-h-fit">
      <LeftSide />
      <RightSide />
    </section>
  );
};

export default Banner;
