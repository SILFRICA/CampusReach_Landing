import React from "react";
import Button from "../../Button";
import Logo from "../../../assets/campusreachlogo.svg";
import { footLinks } from "./FooterLinks";

const FooterWithHero: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full gap-4 py-20 mt-8 text-white bg-emerald-950 lg:gap-8">
      <div className="lg:w-[85%] w-[95%] mx-auto">
        <div className="flex flex-col items-center w-full text-center animate-appear">
          <h3 className="text-2xl font-bold lg:w-2/3 lg:text-5xl">
            Leave Traditional Marketing Agencies & Freelancers Behind
          </h3>
          <p className="lg:w-[60%] w-full my-6 text-sm lg:text-base">
            Tired of the hassle and limitations of traditional agencies? Bid
            slow processes farewell and hello to{" "}
            <span className="text-forest-green-500">CampusReach</span>! Our
            streamlined approach delivers results fast, without the headaches.
            Just fill out a quick form, and in 5 days, get a tailored plan to
            supercharge your business. Let's take your marketing to the next
            level - together!
          </p>
        </div>
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
          <div className="flex items-center gap-3 mb-8 lg:mb-0">
            <img src={Logo} alt="Logo" />
            <h1 className="text-sm font-bold md:text-2xl">CampusReach</h1>
          </div>
          <div className="flex flex-row flex-wrap justify-start w-full gap-8 lg:justify-end lg:gap-10 links">
            {footLinks.map((item) => (
              <div
                className="flex flex-col text-sm"
              >
                <h6 className="mb-6 text-base font-bold">{item.title}</h6>
                {item.links.map((link) => (
                  <a href="#" className="text-gray-300 hover:text-forest-green-500">{link}</a>
                ))}
              </div>
            ))}
            <div className="flex flex-col text-sm">
                <h6 className="mb-6 text-base font-bold">Company</h6>
                <a href="#" className="text-gray-300 hover:text-forest-green-500">About</a>
                <a href="#" className="text-gray-300 hover:text-forest-green-500">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterWithHero;
