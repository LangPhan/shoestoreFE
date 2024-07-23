import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Products/Banner";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Banner name={"About us"} />
      <AboutUs />
    </div>
  );
};

export default AboutPage;
