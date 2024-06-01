import React from "react";
import Button from "../../Button";
import Logo from "../../../assets/campusreachlogo.svg";
import { footLinks } from "./FooterLinks";

const FooterWithHero: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full gap-4 py-20 mt-8 text-white bg-emerald-950 lg:gap-8">
      <div className="w-[85%] mx-auto">
        <div className="flex flex-col items-center w-full text-center">
          <h3 className="w-2/3 text-2xl font-bold lg:text-5xl">
            Leave Traditional Marketing Agencies & Freelancers Behind
          </h3>
          <p className="w-[60%] my-6">
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

export default FooterWithHero;
