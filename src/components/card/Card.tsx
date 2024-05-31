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
      <div className={`lg:w-[85%] h-[85%] ${cnames}`}>
        <div className={`${iconColor} pt-1 rounded-full`}>
          <img src={`${img}`} alt="icon" />
        </div>
        <div>
          <h4 className="text-2xl font-bold lg:text-3xl">{title}</h4>
          <span className="text-cr-gray-600">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
