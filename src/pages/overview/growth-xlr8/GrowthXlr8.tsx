import React from 'react';
import AccelCard from '../../../components/accelCard/AccelCard';
import GroupImg1 from "../../../assets/Group 420.png";
import GroupImg2 from "../../../assets/Group 421.png";
import PieChart from "../../../assets/piechart2.svg";

const GrowthXlr8: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-5/6 gap-5 mt-10">
          <h3 className="text-3xl font-bold text-center lg:text-5xl animate-appear">
            Accelerate Your Growth Across Campus Communities
          </h3>
          <p className="mb-3 text-sm text-center lg:text-lg lg:text-center text-cr-gray-600 animate-appear">
            Launching impactful marketing campaigns in campus communities
            demands significant time and resources. Let CampusReach handle the
            heavy lifting for you, providing invaluable insights and data
            through our network of student marketers. Whether virtual or
            physical, we ensure your campaign's success on any campus, anywhere
          </p>
          <div className="grid w-full grid-cols-1 gap-4 lg:gap-10 lg:grid-cols-2">
            <AccelCard
              title="End-to-End Campaign Management"
              description="We handle every aspect of your campaign, from strategy to student-creator management, allowing you to focus on your business while we accelerate your growth efficiently"
              cnames="lg:h-[400px] lg:col-span-1 col-span-2 bg-cr-pink-300 animate-appear"
              textWidth="lg:w-[70%]"
              image={GroupImg1}
            />
            <AccelCard
              title="First-Class Customer Support"
              description="Our marketers double as your first line of customer support, aiding new users in onboarding onto your platform or accessing your services. This ensures a seamless first-user experience, enhancing user satisfaction."
              cnames="lg:h-[400px] bg-cr-light-green col-span-2 lg:col-span-1 animate-appear"
              textWidth="lg:w-[70%]"
              image={GroupImg2}
            />
            <AccelCard
              title="Insightful User Feedback"
              description="Our campaigns gather invaluable product, and market insights from your target customers through our experienced student marketers. These insights are compiled into a comprehensive document, empowering you to enhance your product value."
              cnames="lg:h-[250px] bg-cr-gray-300 px-2 col-span-2 lg:col-span-1 animate-appear"
              textWidth="text-left grid lg:w-5/6 place-items-start"
              image=""
            />
            <AccelCard
              title="Access to Underserved Markets"
              description="Utilizing our network of student marketers, we can penetrate under-served markets with campaigns that are not only 10x more affordable but also highly effective, providing you with access to untapped opportunities."
              cnames="lg:h-[250px] bg-cr-yellow-200 px-2 col-span-2 lg:col-span-1 animate-appear"
              textWidth="text-left grid lg:w-5/6 place-items-start"
              image=""
            />
            <div className="col-span-2 lg:h-[350px] bg-white h-fit py-8 lg:py-3 rounded-xl flex justify-center items-center animate-appear">
              <div className="grid grid-rows-1 gap-4 lg:grid-cols-2 place-items-center h-fit lg:h-2/3">
                <div className="w-[85%] h-full justify-center flex flex-col">
                  <h6 className="mb-4 text-2xl font-bold">
                    Comprehensive Marketing Analytics
                  </h6>
                  <p className="text-sm font-normal text-cr-gray-600">
                    Gain valuable insights from our campaigns through
                    comprehensive marketing analysis and data. This data
                    empowers you to retarget leads effectively across various
                    channels, optimizing your marketing efforts for maximum
                    impact.
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start h-full gap-4 py-4">
                  <div className="font-semibold text-left">
                    Campuses & audience
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold text-black">Campuses</span>{" "}
                    <span className="text-cr-gray-600">audience</span>{" "}
                    <select
                      name="campuses"
                      id="campusAndAudience"
                      className="font-semibold"
                    >
                      <option value="7">Last 7 days</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between lg:w-[80%] w-full gap-4">
                    <img src={PieChart} alt="chart" />
                    <ul className="flex flex-col justify-start">
                      <li className="text-xl list-disc text-forest-green-500">
                        <span className="text-black">UNN</span>
                      </li>
                      <li className="text-[#9A79FB] list-disc text-xl">
                        <span className="text-black">UNIZIK</span>
                      </li>
                      <li className="text-[#FBD779] list-disc text-xl">
                        <span className="text-black">ESUT</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <AccelCard
              title="Engaging Local Merchants"
              description="Extend your reach beyond students to local merchants within campus communities. Our campaigns facilitate connections with these merchants through our student reps, expanding your market reach"
              cnames="lg:h-[250px] bg-cr-yellow-200 px-2 col-span-2 lg:col-span-1 animate-appear"
              textWidth="text-left grid lg:w-5/6 place-items-start"
              image=""
            />
            <AccelCard
              title="Campus Representative Management"
              description="Establish a physical presence in campus communities by leveraging student representatives. You have the flexibility to manage them yourself or allow us to handle them, ensuring your objectives are met."
              cnames="lg:h-[250px] bg-cr-pink-300 px-2 col-span-2 lg:col-span-1 animate-appear"
              textWidth="text-left grid lg:w-5/6 place-items-start"
              image=""
            />
          </div>
        </div>
  )
}

export default GrowthXlr8