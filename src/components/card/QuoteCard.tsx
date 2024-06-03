import React from "react";

interface QuoteCardProps {
    bgColor: string;
    imgBgClass: string;
    img: string;
    imgClass: string;
    quote: string;
    name: string;
    role: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({bgColor, imgBgClass, imgClass, img, quote, name, role}) => {
  return (
    <div
      className={`w-full lg:h-[320px] flex flex-col lg:flex-row justify-center items-center ${bgColor} 
          rounded-xl gap-10 my-8 lg:my-10 pt-4 pl-4 lg:pt-0 lg:pl-0`}
    >
      <div className={`relative w-full lg:w-[300px] h-[250px] bg-contain rounded-lg ${imgBgClass}`}>
        <img
          src={img}
          alt="logo"
          className={`absolute bottom-8 left-8 ${imgClass}`}
        />
      </div>
      <div className="lg:w-[65%] font-normal testimony-details text-right pr-8 pb-8 lg:pb-0 lg:pr-0 lg:text-start text-pretty">
        <p className="2xl:text-2xl text-balance">
          <b>&ldquo;</b> {quote} {" "}<b>&rdquo;</b>
        </p>
        <br />
        <h5 className="font-semibold">{name}</h5>
        <p className="font-lightbold">{role}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
