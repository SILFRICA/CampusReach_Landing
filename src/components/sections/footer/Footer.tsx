import React from "react";
import Button from "../../Button";
import Logo from "../../../assets/campusreachlogo.svg";
import { footLinks } from "./FooterLinks";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full gap-4 py-20 mt-8 text-white bg-emerald-950 lg:gap-8">
      <div className="w-[85%] mx-auto">
        <br />
        <div className="flex items-center justify-center w-full mb-6">
          <Button
            kind="button"
            title="Get a free proposal"
            cnames="bg-forest-green-500"
          />
        </div>
        <br />
        <div className="w-full h-px border border-neutral-600"></div>
        <br />
        <div className="w-full mt-6 footlinks">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Logo" />
            <h1 className="text-sm font-bold md:text-2xl">CampusReach</h1>
          </div>
          <div className="flex flex-col justify-center w-full gap-8 lg:flex-row lg:justify-end lg:gap-10 links">
            {footLinks.map((item) => (
              <div
                className="flex flex-col text-sm"
              >
                <h6 className="mb-6 text-base font-bold">{item.title}</h6>
                {item.links.map((link) => (
                  <a href="#" className="hover:text-forest-green-500">{link}</a>
                ))}
              </div>
            ))}
            <div className="flex flex-col text-sm">
                <h6 className="mb-6 text-base font-bold">Company</h6>
                <a href="#" className="hover:text-forest-green-500">About</a>
                <a href="#" className="hover:text-forest-green-500">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
