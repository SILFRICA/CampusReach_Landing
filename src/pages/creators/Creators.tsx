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
      <section className="py-4 second-section h-[1000px] flex flex-col justify-center items-center">
        <div className="w-[80%] mx-auto border border-yellow-300">
          <h1 className="mb-4 text-2xl font-bold text-center lg:mb-8 lg:text-5xl animate-appear">We know the potential you have</h1>
          <br />
          <div className="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-2 place-items-center lg:mb-1 animate-appear">
            <div className="flex flex-col items-start order-2 gap-4 lg:w-10/12 lg:order-1">
              <h4 className="text-lg font-bold lg:text-3xl">
                Student marketing
              </h4>
              <span className="text-cr-gray-600">
                You understand lead generation marketing and how to create
                marketing strategies to drive a target group of people to take
                an action leveraging platforms, language and content.
              </span>
              <Button kind="button" title="Learn More" cnames="bg-black" />
            </div>
            <figure className="w-full h-[300px] transition-all hover:drop-shadow-[0_25px_25px_rgba(0,202,172,1)] lg:order-2 order-1 lg:pl-[40%]">
              <LazyLoadImage
                src={Group422}
                alt="creator-logo"
                className="w-[20rem] h-fit"
                placeholderShape="rounded-full"
              />
            </figure>
          </div>
          <br />
          <div className="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-2 place-items-center lg:mb-14 animate-appear">
            <figure className="w-full h-[300px] transition-all hover:drop-shadow-[0_25px_25px_rgba(0,202,172,1)]">
              <LazyLoadImage
                src={Group422}
                alt="creator-logo"
                className="w-[20rem] h-fit"
                placeholderShape="rounded-full"
              />
            </figure>
            <div className="flex flex-col items-start gap-4 lg:w-10/12">
              <h4 className="text-lg font-bold lg:text-3xl">
                Student Influencing
              </h4>
              <span className="text-cr-gray-600">
                You are a student influencer across any niche with at least 1000
                followers/subscribers/contacts across any social platform and
                has an engaging audience.
              </span>
              <Button kind="button" title="Learn More" cnames="bg-black" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Creators;
