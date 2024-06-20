import React from "react";
import ActionFooter from "./Action";
import NavigationFooter from "./Navigation";

const Footer = () => {
  return (
    <footer className="w-full bg-black">
      <div className="container-main">
        <div className="h-[50px] w-full"></div>
        <div className="grid grid-cols-3 px-10 border-y-2 border-mainForeground">
          <ActionFooter />
          <NavigationFooter />
        </div>
        <div className="h-[50px] w-full flex items-center justify-center">
          <p className=" text-white text-sc">
            Copyright GROUP2 2024 - All
            Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
