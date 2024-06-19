import React from "react";
import Card from "../card/Card";
import FlashOn from "../../assets/flat-color-icons_flash-on.svg";
import MoneyBag from "../../assets/emojione_money-bag.svg";
import gtm from "../../assets/logos_google-tag-manager.svg";
import PersonIdea from "../../assets/person_idea.svg";
import GrowthBook from "../../assets/logos_growth-book-icon.svg";
import Customerio from "../../assets/logos_customerio-icon.svg";

const WhyStartups: React.FC = () => {
  return (
    <div className="grid w-full gap-2 lg:gap-8 lg:grid-cols-4 animate-appear">
      <Card
        cardColor="bg-cr-gray-210 text-black h-[250px] lg:h-[300px] col-span-2 lg:col-span-1"
        cnames="flex flex-col justify-between items-start mt-4"
        iconColor="bg-white h-10 w-10"
        img={FlashOn}
        title="Lightning Fast"
        description="See your campaigns launched in 2 weeks or less."
      />
      <Card
        cardColor="bg-cr-gray-210 text-black h-[250px] lg:h-[300px] col-span-2 lg:col-span-1"
        cnames="flex flex-col justify-between items-start mt-4"
        iconColor="bg-white h-10 w-10"
        img={MoneyBag}
        title="Affordable"
        description="Our technology reduces costs and we pass the savings on to you"
      />
      <Card
        cardColor="bg-cr-gray-210 text-black h-[250px] lg:h-[300px] col-span-2"
        cnames="flex flex-col justify-between items-start mt-4"
        iconColor="bg-white h-10 w-10"
        img={gtm}
        title="Hassle-free management"
        description="Track performance via weekly update. Rest assured, we self-manage efficiently"
      />
      <Card
        cardColor="bg-cr-gray-210 text-black h-[250px] lg:h-[300px] col-span-2"
        cnames="flex flex-col justify-between items-start mt-4"
        iconColor="bg-white h-10 w-10"
        img={Customerio}
        title="World-class support"
        description="Chat directly with us via Whatsapp or email."
      />
      <Card
        cardColor="bg-cr-gray-210 text-black h-[250px] lg:h-[300px] col-span-2 lg:col-span-1"
        cnames="flex flex-col justify-between items-start mt-4"
        iconColor="bg-white h-10 w-10"
        img={GrowthBook}
        title="Rapid Growth"
        description="Our expertise and technology maximize results and ROI."
      />
      <Card
        cardColor="bg-cr-gray-210 text-black h-[250px] lg:h-[300px] col-span-2 lg:col-span-1"
        cnames="flex flex-col justify-between items-start mt-4"
        iconColor="bg-white h-10 w-10"
        img={PersonIdea}
        title="Creators-brand  fit"
        description="we select creators that align with your brand and values"
      />
    </div>
  );
};

export default WhyStartups;
