import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Banner = () => {
  return (
    <section className="w-full flex gap-10">
      <LeftSide />
      <RightSide />
    </section>
  );
};

export default Banner;
