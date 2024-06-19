import React from "react";
import "../../../styles/infinite.scss";
import JayHC from "../../../assets/jeay logo.png";
import Raize from "../../../assets/Raize GRADIENT 1.svg";
import Muzingo from "../../../assets/Muzingo-logo 1.png";
import Sambe from "../../../assets/sambe.png";
import Tubda from "../../../assets/image 3.png";
import Genie from "../../../assets/image 1.png";
import Charisol from "../../../assets/charisol-logo 1.png";

const FounderStartups: React.FC = () => {
  const foundersImgs: string[] = [
    JayHC,
    Raize,
    Muzingo,
    Sambe,
    Tubda,
    Genie,
    Charisol,
  ];
  return (
    <div className="flex flex-col justify-around w-full my-10 h-fit start-ups animate-appear">
      <h4 className="text-xl font-bold text-center md:text-2xl">
        Join the founders from fast-growing startups
      </h4>
      <div className="flex justify-center items-center gap-8 lg:gap-20 md:max-w-[65%] mx-auto founders-box infinite-wrapper">
        {foundersImgs.map((fLogo, index) => (
          <img
            src={fLogo}
            alt="founders-logo"
            className={`w-14 md:w-28 lg:h-16 rounded-[20px] item-${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FounderStartups;
