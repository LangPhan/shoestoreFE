import Logo from "./Logo";
import Navbar from "./Navbar";
import Tool from "./Tool";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white dark:bg-black z-50 h-[80px] w-full flex justify-center">
      <div className="container-main flex justify-between items-center">
        <Logo />
        <Navbar />
        <Tool />
      </div>
    </header>
  );
};

export default Header;
