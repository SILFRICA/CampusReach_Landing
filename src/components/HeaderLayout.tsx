import React from "react";
import MenuBtn from "./MenuBtn";
import Navbar from "./navbar/Navbar";
import Button from "./Button";
import Logo from "../assets/campusreachlogo.svg";

const HeaderLayout: React.FC = () => {
  return (
    <div className="relative h-[10vh] flex justify-center items-center w-full">
      <header className="flex lg:w-[80%] w-full justify-between items-center max-md:mx-4">
        <MenuBtn />
        <div className="flex items-center gap-1 -ml-8 lg:gap-3 lg:ml-0">
          <img src={Logo} alt="Logo" className="w-6 h-6 lg:w-auto lg:h-auto" />
          <h1 className="text-base font-bold md:text-2xl text-forest-green-900">
            CampusReach
          </h1>
        </div>
        <div className="absolute flex-col justify-between hidden gap-8 lg:flex lg:flex-row lg:relative">
          <Navbar />
        </div>
        <Button
          kind="button"
          title="Get a free proposal"
          cnames="bg-forest-green-500 text-xs lg:text-normal"
        />
      </header>
    </div>
  );
};

export default HeaderLayout;
