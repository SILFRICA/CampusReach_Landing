import React from 'react';
import JayHC from "../../../assets/Icon_and_wordmark_white1 1.png";
import Raize from "../../../assets/Raize GRADIENT 1.svg";
import Muzingo from "../../../assets/Muzingo-logo 1.png";
import Sambe1 from "../../../assets/NG84Uba1_400x400 1.png";
import Sambe2 from "../../../assets/NG84Uba1_400x400 2.png";
import Tubda from "../../../assets/image 3.png";
import Genie from "../../../assets/image 1.png";
import Charisol from "../../../assets/charisol-logo 1.png";

const FounderStartups: React.FC = () => {
  return (
    <div className="flex flex-col w-full gap-20 my-10 h-fit start-ups animate-appear">
        <h4 className="text-lg font-bold text-center md:text-2xl">
          Join the founders from fast-growing startups
        </h4>
        <div className="flex flex-wrap justify-center gap-4 md:max-w-[75%] mx-auto founders-box">
          <div className="md:w-52 w-28 h-16 bg-[#0B55B4] flex items-center justify-center rounded-[20px]">
            <img
              src={JayHC}
              alt="Jay Healthcare"
              className="object-contain w-[90%] md:w-[fit-content]"
            />
          </div>
          <div className="flex items-center justify-center rounded-[20px] w-28 md:w-auto h-16">
            <img
              src={Raize}
              alt="Raize"
              className="w-2/3 h-16 md:w-auto rounded-[20px]"
            />
          </div>
          <div className="flex items-center justify-center rounded-[20px] w-28 md:w-auto h-16">
            <img
              src={Muzingo}
              alt="Muzingo"
              className="w-full h-16 rounded-[20px]"
            />
          </div>
          <div className="w-fit h-16 bg-[#0D0F36] flex items-center justify-center rounded-[20px] md:w-auto">
            <img src={Sambe1} alt="Sambe1" className="w-1/3" />
            <img src={Sambe2} alt="Sambe2" className="w-1/2" />
          </div>
          <div className="flex items-center justify-center rounded-[20px] w-28 md:w-auto h-16">
            <img
              src={Tubda}
              alt="Tubda"
              className="rounded-[17px] h-16 w-full"
            />
          </div>
          <div className="flex items-center justify-center rounded-[20px] w-28 md:w-auto h-16">
            <img
              src={Genie}
              alt="Genius Club"
              className="w-full h-16 rounded-[20px]"
            />
          </div>
          <div className="flex items-center justify-center rounded-[20px] w-28 md:w-auto h-16">
            <img
              src={Charisol}
              alt="Charisol"
              className="w-full h-16 rounded-[20px]"
            />
          </div>
        </div>
      </div>
  )
}

export default FounderStartups