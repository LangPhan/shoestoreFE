import React from "react";
import ActionFooter from "./Action";
import NavigationFooter from "./Navigation";

const Footer = () => {
  return (
    <footer
      className="relative w-full bg-black"
      id="footer"
    >
      <div className="container-main">
        <div className="h-[50px] w-full"></div>
        <div className="flex flex-col grid-cols-3 px-10 md:grid md:border-y-2 border-mainForeground">
          <ActionFooter />
          <NavigationFooter />
        </div>
        <div className="h-[50px] w-full flex items-center justify-center">
          <p className="text-sm text-white md:text-sc">
            Copyright GROUP2 2024 - All
            Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
