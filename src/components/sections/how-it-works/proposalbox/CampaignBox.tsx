import React from "react";
import CheckedIcon from "../../../../assets/rounded-check-icon.svg";

interface CampaignBoxProps {
  title: string;
  icon: string;
  items: number;
}

const CampaignBox: React.FC<CampaignBoxProps> = ({ title, icon, items }) => {
  return (
    <div className="flex flex-col w-[80%] items-center gap-1">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-1 w-fit">
          <img src={icon} alt="icon" />
          <h5 className="text-xs font-bold">{title}</h5>
        </div>
        <img src={CheckedIcon} alt="checked-icon" />
      </div>
      {Array.from({ length: items }, (_, index) => (
        <span key={index} className="h-1 w-[80%] bg-cr-gray-to-white"></span>
      ))}
    </div>
  );
};

export default CampaignBox;
