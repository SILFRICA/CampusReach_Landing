import React from "react";
import Button from "../../components/Button";
import Group1 from "../../assets/Group 368.png";
import Group2 from "../../assets/Group 378.png";
import TestimonyLogo1 from "../../assets/30881 1.png";
import Card from "../../components/card/Card";
import gear from "../../assets/gear.svg";
import handshake from "../../assets/handshake.svg";
import bolt from "../../assets/bolt.svg";
import WhyStartups from "../../components/sections/WhyStartups";
import CampusReachVs from "../../components/card/CampusReachVs";
import LogoWithText from "../../assets/logo_with_text.png";
import HowItWorks from "../../components/sections/how-it-works/HowItWorks";
import FAQs from "../../components/sections/faqs/FAQs";
import FooterWithHero from "../../components/sections/footer/FooterWithHero";
import GrowthXlr8 from "./growth-xlr8/GrowthXlr8";
import FounderStartups from "../../components/sections/founder-startups/FounderStartups";
import QuoteCard from "../../components/card/QuoteCard";

const Overview: React.FC = () => {
  return (
    <>
      <div className="h-auto py-4 lg:mb-8 top-section">
        <div className="flex flex-col items-center justify-center h-[90dvh] text-center hero-section animate-fadeIn">
          <div className="flex flex-col items-center justify-center w-full xl:w-2/3">
            <h1 className="text-4xl font-bold lg:text-6xl">
              Unlock <span className="text-forest-green-500">10x</span> Growth
              in Campus Communities
            </h1>
            <br />
            <p className="w-full px-4 text-sm font-normal text-center lg:font-medium lg:text-xl text-cr-gray-600">
              Leverage student marketers/influencers across 25 campuses to drive
              affordable and time-effective campaigns. We manage your campaign
              from start to finish to achieve your marketing goals in campus
              communities
            </p>
            <br />
            <br />
            <Button
              kind="button"
              title="Get a free proposal"
              cnames="bg-black"
            />
          </div>
        </div>
      </div>
      <br />
      <FounderStartups />
      <br />
      <div className="flex justify-center w-full pt-4 pb-10 my-6 bg-cr-gray-200 second-section lg:my-10">
        <GrowthXlr8 />
      </div>
      <br />
      <section className="py-4 my-3 lg:my-8 campaign">
        <div className="w-[85%] mx-auto">
          <h3 className="mb-4 text-2xl font-bold text-center lg:mb-8 lg:text-5xl animate-appear">
            Our Campaign Channels
          </h3>
          <br />
          <div className="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-2 place-items-center lg:mb-1 animate-appear">
            <div className="w-full mb-4">
              <img src={Group1} alt="grouped-img" className="w-[20rem]" />
            </div>
            <div className="flex flex-col items-start order-1 gap-4 lg:w-10/12 lg:order-2">
              <h4 className="text-lg font-bold lg:text-3xl">
                Lead Generation Model
              </h4>
              <span className="text-cr-gray-600">
                The lead generation model focuses on personalized engagement
                with your brand's target audience to drive customer acquisition.
                The cost varies depending on the customer acquisition cost
                (CAC), determined by factors such as funnel length, target
                audience, and the final call-to-action (CTA).
              </span>
              <Button kind="button" title="Learn More" cnames="bg-black" />
            </div>
          </div>
          <br />
          <div className="grid grid-cols-1 gap-4 mb-10 lg:grid-cols-2 place-items-center lg:mb-14 animate-appear">
            <div className="flex flex-col items-start order-1 gap-4 lg:w-10/12 lg:order-2">
              <h4 className="text-lg font-bold lg:text-3xl">
                Influencer Model
              </h4>
              <span className="text-cr-gray-600">
                Our influencer model empowers student influencers to craft
                captivating content, leveraging their reach to amplify your
                brand and drive conversions on campus. With tailored content and
                incentives, we ensure high engagement and ROI potential,
                connecting you with the ideal influencers for maximum impact.
              </span>
              <Button kind="button" title="Learn More" cnames="bg-black" />
            </div>
            <div className="w-full mb-4 lg:flex lg:justify-end">
              <img src={Group2} alt="grouped-img" className="w-[20rem]" />
            </div>
          </div>
          <br />
          <QuoteCard
            bgColor="bg-cr-gray-250 animate-appear"
            imgBgClass="bg-cover testimony-img"
            img={TestimonyLogo1}
            imgClass=""
            quote="We recently collaborated with CampusReach for a
          campaign promoting our product, Playmuzingo. Their dedication
          and expertise resulted in an exceptional 9/10 rating for
          campaign performance. The ROI was remarkable. Highly recommended"
            name="Dolapo Olisa"
            role="CEO of Charisol"
          />

          <br />
          <div className="w-full my-8 text-2xl font-bold text-center lg:text-5xl lg:my-10 animate-appear">
            <span className="w-full">
              3000+ students and merchants in communities reached for businesses
            </span>
          </div>
          <div className="grid w-full gap-8 lg:grid-cols-3 animate-appear">
            <Card
              cardColor="bg-cr-gray-250 text-black h-[280px] lg:h-[400px]"
              cnames="flex flex-col justify-between items-start mt-4"
              iconColor="bg-black h-10 w-10"
              img={gear}
              title="Over #1million"
              description="In ad spend managed"
            />
            <Card
              cardColor="bg-cr-gray-250 text-black h-[280px] lg:h-[400px]"
              cnames="flex flex-col justify-between items-start mt-4"
              iconColor="bg-black h-10 w-10"
              img={handshake}
              title="Over 20+"
              description="Startups booked"
            />
            <Card
              cardColor="bg-cr-gray-250 text-black h-[280px] lg:h-[400px]"
              cnames="flex flex-col justify-between items-start mt-4"
              iconColor="bg-black h-10 w-10"
              img={bolt}
              title="2 weeks"
              description="To launch from strategy to execution"
            />
          </div>
          <br />
          <div className="flex justify-center w-full mb-8 lg:mb-10">
            <Button
              kind="button"
              title="Get a free proposal"
              cnames="bg-forest-green-500"
            />
          </div>
          <br />
          <div className="w-full my-10 text-2xl font-bold text-center lg:text-5xl lg:my-10 animate-appear">
            <span className="w-full">Why Startups love us</span>
          </div>
          <WhyStartups />
        </div>
      </section>
      <br />
      <section className="h-[450px] bg-cr-teal-100 justify-center items-center gap-4 lg:gap-8 flex flex-col">
        <h3 className="text-3xl font-semibold text-center lg:text-7xl lg:font-bold animate-appear">
          Sound too good to be true?
        </h3>
        <span className="w-full text-sm font-normal text-center lg:w-1/2 lg:text-lg text-cr-gray-600 animate-appear">
          We get that a lot. See it firsthand: Fill out a simple form for a
          detailed proposal in just 5 days, while others take weeks.
        </span>
        <Button
          kind="button"
          title="Get a free proposal"
          cnames="bg-forest-green-500"
        />
      </section>
      <br />
      <section className="py-4 my-10 versus animate-appear">
        <CampusReachVs />
      </section>

      <section className="my-10">
        <div className="w-[85%] mx-auto">
          <QuoteCard
            bgColor="bg-[#0000001C] animate-appear"
            imgBgClass="bg-cover ceo-img"
            img={LogoWithText}
            imgClass="px-1 bg-white rounded-lg"
            quote="We built CampusReach to bridge the gap between
            businesses and campus communities and we are proud that the
            businesses we have facilitated this access for, have brought a
            lot more impact into these communities."
            name="Ian Reward"
            role="CEO Silfrica"
          />
        </div>
      </section>
      <br />

      <HowItWorks />
      <br />
      <FAQs />
      <br />
      <FooterWithHero />
    </>
  );
}

export default Overview;
