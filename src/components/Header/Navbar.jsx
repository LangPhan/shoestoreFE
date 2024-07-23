import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";

export const navList = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About us",
    url: "/about",
  },
  {
    title: "Products",
    url: "/product",
  },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{
        y: -50,
        opacity: 0.4,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 1.2,
          delay: 0.8,
        },
      }}
      className="hidden md:block h-full w-full"
    >
      <ul className="flex w-full h-full px-2 gap-1 justify-center items-center">
        {navList.map((nav) => {
          return (
            <NavLink
              className={({
                isActive,
              }) =>
                `min-w-[120px] text-center hover:text-main hover:font-semibold hover:bg-slate-200 transition-all rounded-3xl px-6 py-2 ${
                  isActive &&
                  "text-main font-semibold"
                }`
              }
              key={v4()}
              to={nav.url}
            >
              <li>{nav.title}</li>
            </NavLink>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
