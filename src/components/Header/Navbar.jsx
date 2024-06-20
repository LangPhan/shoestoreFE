import { Link } from "react-router-dom";
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
    <nav className="h-full w-full">
      <ul className="flex w-full h-full gap-1 justify-center items-center">
        {navList.map((nav) => {
          return (
            <Link
              key={v4()}
              to={nav.url}
            >
              <li className="min-w-[120px] text-center hover:text-main hover:font-semibold hover:bg-slate-200 transition-all rounded-3xl px-6 py-2">
                {nav.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
