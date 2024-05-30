import React from "react";

interface AccelCardProps {
  title: string;
  description: string;
  cnames: string;
  textWidth: string;
  image: string;
}

const AccelCard: React.FC<AccelCardProps> = ({
  title,
  description,
  cnames,
  textWidth,
  image,
}) => {
  return (
    <div
      className={`h-52 rounded-xl ${cnames} flex flex-col justify-around items-center card`}
    >
      <div className={`${textWidth} card-details`}>
        <h6 className="mb-4 text-2xl font-bold">{title}</h6>
        <p className="text-sm font-normal text-cr-gray-600">{description}</p>
      </div>
      {image && (
        <div className="card-img">
          <img src={image} alt="group-image" />
        </div>
      )}
    </div>
  );
};

export default AccelCard;
