import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      className="dark:bg-white flex items-center py-2 rounded-2xl"
      to={"/"}
    >
      <img
        className="w-[180px] md:w-[220px]"
        src="https://www.likelion.edu.vn/logo-black.svg"
        alt="Logo"
      />
    </Link>
  );
};

export default Logo;
