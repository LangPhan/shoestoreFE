import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-full w-full">
      <ul className="flex w-full h-full gap-1 justify-center items-center">
        <Link to={"/"}>
          <li className="min-w-[120px] text-center hover:text-main hover:font-semibold hover:bg-slate-200 transition-all rounded-3xl px-6 py-2">
            Home
          </li>
        </Link>{" "}
        <Link to={"/product"}>
          <li className="min-w-[120px] text-center hover:text-main hover:font-semibold hover:bg-slate-200 rounded-3xl px-6 py-2">
            Product
          </li>
        </Link>{" "}
        <Link to={"/"}>
          <li className="min-w-[120px] text-center hover:text-main hover:font-semibold hover:bg-slate-200 rounded-3xl px-6 py-2">
            Home
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
