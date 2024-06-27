import { Link } from "react-router-dom";
import Logo from "../Header/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react";
import { navList } from "../Header/Navbar";
import { v4 } from "uuid";

const NavigationFooter = () => {
  return (
    <div className="md:ml-8 py-4 md:my-10 text-white flex flex-col justify-between items-center md:items-start">
      <Link
        className="hidden bg-white md:flex w-fit items-center px-4 py-2 rounded-2xl"
        to={"/"}
      >
        <img
          src="https://www.likelion.edu.vn/logo-black.svg"
          alt="Logo"
          width={220}
        />
      </Link>
      <ul className="flex flex-col my-8 gap-5 items-center md:items-start">
        {navList.map((nav) => {
          return (
            <Link
              key={v4()}
              to={nav.url}
            >
              <li className="hover:text-main transition-all">
                {nav.title}
              </li>
            </Link>
          );
        })}
      </ul>
      <div className="flex gap-4">
        <FacebookIcon className="w-10 h-10 p-2 hover:text-main hover:m hover:rounded-full hover:p-3 duration-500 transition-all hover:bg-slate-100" />
        <InstagramIcon className="w-10 h-10 p-2 hover:text-main hover:m hover:rounded-full hover:p-3 duration-500 transition-all hover:bg-slate-100" />
        <TwitterIcon className="w-10 h-10 p-2 hover:text-main hover:m hover:rounded-full hover:p-3 duration-500 transition-all hover:bg-slate-100" />
        <MailIcon className="w-10 h-10 p-2 hover:text-main hover:m hover:rounded-full hover:p-3 duration-500 transition-all hover:bg-slate-100" />
      </div>
    </div>
  );
};

export default NavigationFooter;
