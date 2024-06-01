import React from "react";
import FormField from "./inputs/FormField";
import CampaignBox from "./proposalbox/CampaignBox";
import { ProposalList, icons, boxTitles } from "./proposalbox/ProposalData";
import ItemBox from "./proposalbox/ItemBox";
import Button from "../../Button";

const HowItWorks: React.FC = () => {
  return (
    <section className="my-8 how-it-works">
      <div className="w-[85%] mx-auto">
        <div className="w-full text-center">
          <small className="text-gray-300">How it works</small>
          <h3 className="text-2xl font-bold lg:text-5xl">
            All you need do is approve
          </h3>
        </div>
        <br />
        <div className="grid grid-rows-1 gap-8 mt-6 lg:grid-cols-3 lg:mt-8">
          <div className="bg-cr-gray-150 h-fit lg:h-[420px] w-full p-4 rounded-xl">
            <div className="flex flex-col items-start justify-between mt-4 lg:w-[95%] h-full gap-8 pl-4">
              <header>
                <span className="text-base font-semibold lg:text-xl text-cr-gray-400">
                  One
                </span>
                <h4 className="text-base font-semibold lg:text-xl">
                  Let us know what you need
                </h4>
              </header>
              <div className="flex flex-col h-full card-body justify-start gap-4 lg:w-[90%]">
                <FormField
                  label="What campus do you want to launch your campaign on?"
                  id="campus"
                  name="campus"
                  type="select"
                  options={[
                    { value: "", label: "Select Campus", selected: true },
                  ]}
                  disabled={true}
                />
                <FormField
                  label="Your campaign goal?"
                  id="goal"
                  name="goal"
                  type="text"
                  placeholder="2000 sales"
                  disabled={true}
                />
                <FormField
                  label="Your budget?"
                  id="budget"
                  name="budget"
                  type="select"
                  options={[
                    { value: "100000", label: "#100,000", selected: true },
                  ]}
                  disabled={true}
                />
                <FormField
                  label="Date for launch?"
                  id="launchDate"
                  name="date"
                  type="date"
                  disabled={true}
                />
              </div>
            </div>
          </div>
          <div className="bg-cr-gray-150 h-fit lg:h-[420px] w-full p-4 rounded-xl">
            <div className="flex flex-col items-start justify-between mt-4 lg:w-[95%] h-full gap-8 pl-4">
              <header>
                <span className="text-base font-semibold lg:text-xl text-cr-gray-400">
                  Two
                </span>
                <h4 className="text-base font-semibold lg:text-xl">
                  Get a tailored proposal
                </h4>
              </header>
              <div className="flex flex-col items-center justify-around w-full h-full gap-4 py-4 mx-auto bg-white card-body">
                {ProposalList.map((item, index) => (
                  <CampaignBox
                    key={index}
                    title={item.title}
                    icon={icons[index]}
                    items={item.items}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="bg-cr-gray-150 h-fit lg:h-[420px] w-full p-4 rounded-xl">
            <div className="flex flex-col items-start justify-between mt-4 lg:w-[95%] h-full gap-8 pl-4">
              <header>
                <span className="text-base font-semibold lg:text-xl text-cr-gray-400">
                  Three
                </span>
                <h4 className="text-base font-semibold lg:text-xl">
                  We take care of the rest
                </h4>
              </header>
              <div className="grid w-full h-full grid-cols-1 gap-4 card-body place-items-center place-content-center">
                <ItemBox title={boxTitles[0]} />
                <div className="flex w-full gap-4 justify-evenly">
                  <ItemBox title={boxTitles[1]} />
                  <ItemBox title={boxTitles[2]} />
                </div>
                <ItemBox title={boxTitles[3]} />
                <ItemBox title={boxTitles[4]} />
                <ItemBox title={boxTitles[5]} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full mt-6 lg:mt-8">
          <Button
            kind="button"
            title="Get a free proposal"
            cnames="bg-forest-green-500"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
