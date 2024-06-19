import Logo from "./Logo";
import Navbar from "./Navbar";
import Tool from "./Tool";

const Header = () => {
  return (
    <header className="h-[80px] w-full flex justify-center px-10">
      <div className="w-full max-w-[1400px] flex justify-between items-center">
        <Logo />
        <Navbar />
        <Tool />
      </div>
    </header>
  );
};

export default Header;
