import { NavLink } from "react-router-dom";
import { navList } from "./Navbar";
import { v4 } from "uuid";
import { SheetClose } from "../ui/sheet";
import Profile from "./Profile";

const NavMobile = () => {
  return (
    <>
      <nav className=" flex flex-col gap-4">
        {navList.map((nav) => {
          return (
            <NavLink
              key={v4()}
              to={nav.url}
              className={({
                isActive,
              }) =>
                `${
                  isActive &&
                  "text-main"
                }`
              }
            >
              <SheetClose key={v4()}>
                {nav.title}
              </SheetClose>
            </NavLink>
          );
        })}
      </nav>
      <div className="my-5">
        <Profile isShow={true} />
      </div>
    </>
  );
};

export default NavMobile;
