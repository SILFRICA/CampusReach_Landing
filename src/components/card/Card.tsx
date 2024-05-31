import React from "react";

interface CardProps {
  img: string;
  title: string;
  description: string;
  cardColor: string;
  iconColor: string;
  cnames: string;
}

const Card: React.FC<CardProps> = ({
  img,
  title,
  description,
  cardColor,
  iconColor,
  cnames,
}) => {
  return (
    <div className={`${cardColor} w-full p-4 rounded-xl`}>
      <div className={`lg:w-[95%] h-[85%] ${cnames}`}>
        <div className={`${iconColor} pt-1 rounded-full`}>
          <img src={`${img}`} alt="icon" className="object-contain w-full h-5/6"/>
        </div>
        <div>
          <h4 className="text-2xl font-bold 2xl:text-3xl">{title}</h4>
          <span className="text-cr-gray-600 text-balance">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
