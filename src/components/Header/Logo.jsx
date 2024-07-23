import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link
      className="dark:bg-white flex items-center p-2 rounded-2xl"
      to={"/"}
    >
      <motion.img
        initial={{
          x: -30,
          opacity: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1.2,
          },
        }}
        className="w-[180px] md:w-[220px]"
        src="https://www.likelion.edu.vn/logo-black.svg"
        alt="Logo"
      />
    </Link>
  );
};

export default Logo;
