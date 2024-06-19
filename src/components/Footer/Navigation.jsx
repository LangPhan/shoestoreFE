import { Link } from "react-router-dom";
import Logo from "../Header/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  TwitterIcon,
  XIcon,
} from "lucide-react";

const NavigationFooter = () => {
  return (
    <div className="ml-8 my-10 text-white flex flex-col justify-between">
      <Link
        className="bg-white flex w-fit items-center px-4 py-2 rounded-2xl"
        to={"/"}
      >
        <img
          src="https://www.likelion.edu.vn/logo-black.svg"
          alt="Logo"
          width={220}
        />
      </Link>
      <ul className="flex flex-col my-8 gap-5 ">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/product"}>
          <li>Product</li>
        </Link>
      </ul>
      <div className="flex gap-4">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <MailIcon />
      </div>
    </div>
  );
};

export default NavigationFooter;
