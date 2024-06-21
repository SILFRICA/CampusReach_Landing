import React from "react";
import Button from "../../components/Button";
import Group422 from "../../assets/Group422.png";
import LazyLoadImage from "../../components/media/LazyLoadImage";

const Creators: React.FC = () => {
  return (
    <>
      <div className="h-auto py-4 lg:mb-8 top-section">
        <div className="w-[85%] mx-auto flex items-center justify-evenly h-[90dvh] creator-section animate-fadeIn">
          <div className="flex flex-col items-start justify-center w-full text-left xl:w-2/3">
            <h1 className="text-4xl font-bold lg:text-6xl">
              Build your practical{" "}
              <span className="text-forest-green-500">Experience</span> driving
              growth for brands
            </h1>
            <br />
            <p className="w-full text-sm font-normal lg:font-medium lg:text-xl text-cr-gray-600">
              CampusReach is a community for student marketers/influencers. You
              earn income driving growth for businesses which adds to your CV
            </p>
            <br />
            <Button kind="button" title="Apply Now" cnames="bg-black" />
          </div>
          <figure className="w-[300px] h-[300px] transition-all hover:drop-shadow-[0_25px_25px_rgba(0,202,172,1)]">
            <LazyLoadImage
              src={Group422}
              alt="creator-logo"
              className="w-fit h-fit"
              placeholderShape="rounded-full"
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Creators;
