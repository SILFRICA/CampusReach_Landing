import React from 'react';
import MenuBtn from "./MenuBtn";
import Navbar from "./navbar/Navbar";
import Button from "./Button";
import Logo from "../assets/campusreachlogo.svg";


const HeaderLayout: React.FC = () => {
  return (
    <div className="relative h-[10vh] flex justify-center items-center w-full">
          <header className="flex lg:w-[80%] w-full justify-between max-md:mx-4">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Logo" />
              <h1 className="text-sm font-bold md:text-2xl text-forest-green-900">
                CampusReach
              </h1>
            </div>
            <div className="absolute flex-col justify-between hidden gap-8 lg:flex lg:w-2/3 lg:flex-row lg:relative">
              <Navbar />
              <Button
                kind="button"
                title="Get a proposal"
                cnames="bg-forest-green-500"
              />
            </div>
            <MenuBtn />
          </header>
        </div>
  )
}

export default HeaderLayout