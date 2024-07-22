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
    <div className="flex flex-col items-center justify-between py-4 text-white md:ml-8 md:my-10 md:items-start">
      <Link
        className="items-center hidden px-4 py-2 bg-white md:flex w-fit rounded-2xl"
        to={"/"}
      >
        <img
          src="https://www.likelion.edu.vn/logo-black.svg"
          alt="Logo"
          width={220}
        />
      </Link>
      <ul className="flex flex-col items-center gap-5 my-8 md:items-start">
        {navList.map((nav) => {
          return (
            <Link key={v4()} to={nav.url}>
              <li className="transition-all hover:text-main">{nav.title}</li>
            </Link>
          );
        })}
      </ul>
      <div className="flex gap-4">
        <FacebookIcon className="w-10 h-10 p-2 transition-all duration-500 hover:text-main hover:m hover:rounded-full hover:p-3 hover:bg-slate-100" />
        <InstagramIcon className="w-10 h-10 p-2 transition-all duration-500 hover:text-main hover:m hover:rounded-full hover:p-3 hover:bg-slate-100" />
        <TwitterIcon className="w-10 h-10 p-2 transition-all duration-500 hover:text-main hover:m hover:rounded-full hover:p-3 hover:bg-slate-100" />
        <MailIcon className="w-10 h-10 p-2 transition-all duration-500 hover:text-main hover:m hover:rounded-full hover:p-3 hover:bg-slate-100" />
      </div>
    </div>
  );
};

export default NavigationFooter;
