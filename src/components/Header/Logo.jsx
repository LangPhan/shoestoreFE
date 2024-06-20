import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      className="dark:bg-white flex items-center py-2 rounded-2xl"
      to={"/"}
    >
      <img
        src="https://www.likelion.edu.vn/logo-black.svg"
        alt="Logo"
        width={220}
      />
    </Link>
  );
};

export default Logo;
