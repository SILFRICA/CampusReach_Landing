import Navbar from "./components/navbar/Navbar";
import Logo from "./assets/campusreachlogo.svg";
import JayHC from "./assets/Icon_and_wordmark_white1 1.png";
import Raize from "./assets/Raize GRADIENT 1.svg";
import Muzingo from "./assets/Muzingo-logo 1.png";
import Sambe1 from "./assets/NG84Uba1_400x400 1.png";
import Sambe2 from "./assets/NG84Uba1_400x400 2.png";
import Tubda from "./assets/image 3.png";
import Genie from "./assets/image 1.png";
import Charisol from "./assets/charisol-logo 1.png";
import "./App.css";
import Button from "./components/Button";
import AccelCard from "./components/accelCard/AccelCard";
import GroupImg1 from "./assets/Group 420.png";
import GroupImg2 from "./assets/Group 421.png";
import PieChart from "./assets/Group 7.svg";
import MenuBtn from "./components/MenuBtn";
import Group1 from "./assets/Group 368.png";
import Group2 from "./assets/Group 378.png";
import TestimonyLogo1 from "./assets/30881 1.png";
import Card from "./components/card/Card";
import gear from "./assets/gear.svg";
import handshake from "./assets/handshake.svg";
import bolt from "./assets/bolt.svg";
import WhyStartups from "./components/sections/WhyStartups";
import CampusReachVs from "./components/card/CampusReachVs";
import LogoWithText from "./assets/logo_with_text.png";
import HowItWorks from "./components/sections/how-it-works/HowItWorks";
import FAQs from "./components/sections/faqs/FAQs";
import FooterWithHero from "./components/sections/footer/FooterWithHero";

function App() {
  return (
    <>
      <div className="h-screen py-4 mb-8 top-section">
        <div className="relative h-[10%] flex justify-center items-center w-full">
          <header className="flex lg:w-[80%] w-full justify-between max-md:mx-4">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Logo" />
              <h1 className="text-sm font-bold md:text-2xl text-forest-green-900">
                CampusReach
              </h1>
            </div>
            <div className="absolute flex-col justify-between hidden gap-8 lg:flex lg:w-2/3 lg:flex-row lg:relative">
              <Navbar />
              <Button
                kind="button"
                title="Get a proposal"
                cnames="bg-forest-green-500"
              />
            </div>
            <MenuBtn />
          </header>
        </div>
        <div className="flex h-[90%] flex-col justify-center items-center text-center hero-section">
          <div className="flex flex-col items-center justify-center w-full xl:w-2/3">
            <h1 className="text-3xl font-bold lg:text-6xl">
              Unlock <span className="text-forest-green-500">10x</span> Growth
              in Campus Communities
            </h1>
            <br />
            <p className="w-[95%] font-medium text-center text-cr-gray-600 lg:text-2xl xl:max-w-5/6">
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
      <div className="flex flex-col w-full gap-20 mb-8 h-fit start-ups">
        <h4 className="text-lg font-bold text-center md:text-2xl">
          Join the founders from fast-growing startups
        </h4>
        <div className="flex flex-wrap justify-center gap-4 md:max-w-[75%] mx-auto founders-box">
          <div className="md:w-52 w-28 h-16 bg-[#0B55B4] flex items-center justify-center rounded-[20px]">
            <img
              src={JayHC}
              alt="Jay Healthcare"
              className="object-contain w-[90%] md:w-[fit-content]"
            />
          </div>
          <div className="flex items-center justify-center rounded-[20px] w-28 md:w-auto h-16 bg-gray-200">
            <img
              src={Raize}
              alt="Raize"
              className="w-2/3 h-16 md:w-auto rounded-[20px]"
            />
          </div>
          <div className="flex items-center justify-center rounded-[20px] w-28 md:w-auto h-16 bg-gray-200">
            <img
              src={Muzingo}
              alt="Muzingo"
              className="w-2/3 h-16 md:w-auto rounded-[20px]"
            />
          </div>
          <div className="w-fit h-16 bg-[#0D0F36] flex items-center justify-center rounded-[20px] md:w-auto">
            <img src={Sambe1} alt="Sambe1" className="w-1/3" />
            <img src={Sambe2} alt="Sambe2" className="w-1/2" />
          </div>
          <div className="flex items-center justify-center rounded-[20px] w-28 md:w-auto h-16 bg-gray-200">
            <img
              src={Tubda}
              alt="Tubda"
              className="rounded-[17px] w-2/3 h-16 md:w-auto"
            />
          </div>
          <div className="flex items-center justify-center rounded-[20px] w-28 md:w-auto h-16 bg-gray-200">
            <img
              src={Genie}
              alt="Genius Club"
              className="w-2/3 h-16 md:w-auto rounded-[20px]"
            />
          </div>
          <div className="flex items-center justify-center rounded-[20px] w-28 md:w-auto h-16 bg-gray-200">
            <img
              src={Charisol}
              alt="Charisol"
              className="w-2/3 h-16 md:w-auto rounded-[20px]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full pt-4 pb-8 bg-cr-gray-200 second-section">
        <div className="flex flex-col items-center w-5/6 gap-5 mt-10">
          <h3 className="text-3xl font-bold text-center lg:text-5xl">
            Accelerate Your Growth Across Campus Communities
          </h3>
          <p className="mb-3 text-center text-cr-gray-600">
            Launching impactful marketing campaigns in campus communities
            demands significant time and resources. Let CampusReach handle the
            heavy lifting for you, providing invaluable insights and data
            through our network of student marketers. Whether virtual or
            physical, we ensure your campaign's success on any campus, anywhere
          </p>
          <div className="grid w-full grid-rows-2 gap-10 lg:grid-cols-2">
            <AccelCard
              title="End-to-End Campaign Management"
              description="We handle every aspect of your campaign, from strategy to student-creator management, allowing you to focus on your business while we accelerate your growth efficiently"
              cnames="lg:h-[400px] bg-cr-pink-300"
              textWidth="w-[70%]"
              image={GroupImg1}
            />
            <AccelCard
              title="First-Class Customer Support"
              description="Our marketers double as your first line of customer support, aiding new users in onboarding onto your platform or accessing your services. This ensures a seamless first-user experience, enhancing user satisfaction."
              cnames="lg:h-[400px] bg-cr-light-green"
              textWidth="w-[70%]"
              image={GroupImg2}
            />
            <AccelCard
              title="Insightful User Feedback"
              description="Our campaigns gather invaluable product, and market insights from your target customers through our experienced student marketers. These insights are compiled into a comprehensive document, empowering you to enhance your product value."
              cnames="lg:h-[250px] bg-cr-gray-300 px-2"
              textWidth="text-left grid w-5/6 place-items-start"
              image=""
            />
            <AccelCard
              title="Access to Underserved Markets"
              description="Utilizing our network of student marketers, we can penetrate under-served markets with campaigns that are not only 10x more affordable but also highly effective, providing you with access to untapped opportunities."
              cnames="lg:h-[250px] bg-cr-yellow-200 px-2"
              textWidth="text-left grid w-5/6 place-items-start"
              image=""
            />
            <div className="col-span-2 lg:h-[350px] bg-white h-[300px] rounded-xl flex justify-center items-center md:-mt-40">
              <div className="grid grid-rows-2 gap-4 lg:grid-cols-2 place-items-center h-2/3">
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
                      <li className="text-[#FF3A29] list-disc text-xl">
                        <span className="text-black">UNN</span>
                      </li>
                      <li className="text-[#FFB200] list-disc text-xl">
                        <span className="text-black">UNIZIK</span>
                      </li>
                      <li className="text-[#4339F2] list-disc text-xl">
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
              cnames="lg:h-[250px] bg-cr-yellow-200 px-2"
              textWidth="text-left grid w-5/6 place-items-start"
              image=""
            />
            <AccelCard
              title="Campus Representative Management"
              description="Establish a physical presence in campus communities by leveraging student representatives. You have the flexibility to manage them yourself or allow us to handle them, ensuring your objectives are met."
              cnames="lg:h-[250px] bg-cr-pink-300 px-2"
              textWidth="text-left grid w-5/6 place-items-start"
              image=""
            />
          </div>
        </div>
      </div>
      <section className="py-4 mb-8 campaign">
        <div className="w-[85%] mx-auto">
          <h3 className="mb-4 text-2xl font-bold text-center lg:mb-8 lg:text-5xl">
            Our Campaign Channels
          </h3>
          <br />
          <div className="grid grid-cols-2 place-items-center">
            <div className="w-full">
              <img src={Group1} alt="grouped-img" className="w-[20rem]" />
            </div>
            <div className="flex flex-col items-start gap-4 lg:w-10/12">
              <h4 className="text-2xl font-bold lg:text-3xl">
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
          <div className="grid grid-cols-2 mb-10 place-items-center lg:mb-14">
            <div className="flex flex-col items-start gap-4 lg:w-10/12">
              <h4 className="text-2xl font-bold lg:text-3xl">
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
            <div className="w-full lg:flex lg:justify-end">
              <img src={Group2} alt="grouped-img" className="w-[20rem]" />
            </div>
          </div>
          <div
            className="w-full lg:h-[320px] flex flex-col lg:flex-row justify-center items-center bg-cr-gray-250 
          rounded-xl gap-10 mb-8 lg:mb-10 pt-4 pl-4 lg:pt-0 lg:pl-0"
          >
            <div className="relative w-full lg:w-[300px] h-[250px] bg-contain rounded-lg testimony-img">
              <img
                src={TestimonyLogo1}
                alt="logo"
                className="absolute bottom-8 left-8"
              />
            </div>
            <div className="lg:w-[65%] font-normal testimony-details text-right pr-8 pb-8 lg:pb-0 lg:pr-0 lg:text-start text-pretty">
              <p className="2xl:text-2xl text-balance">
                <b>&ldquo;</b> We recently collaborated with CampusReach for a
                campaign promoting our product, Playmuzingo. Their dedication
                and expertise resulted in an exceptional 9/10 rating for
                campaign performance. The ROI was remarkable. Highly recommended{" "}
                <b>&rdquo;</b>
              </p>
              <br />
              <h5 className="font-semibold">Dolapo Olisa</h5>
              <p className="font-lightbold">CEO of Charisol</p>
            </div>
          </div>
          <div className="w-full my-8 text-2xl font-bold text-center lg:text-5xl lg:my-10">
            <span className="w-full">
              3000+ students and merchants in communities reached for businesses
            </span>
          </div>
          <div className="grid w-full gap-8 lg:grid-cols-3">
            <Card
              cardColor="bg-cr-gray-250 text-black h-[250px] lg:h-[400px]"
              cnames="flex flex-col justify-between items-start mt-4"
              iconColor="bg-black h-10 w-10"
              img={gear}
              title="Over #1million"
              description="In ad spend managed"
            />
            <Card
              cardColor="bg-cr-gray-250 text-black h-[250px] lg:h-[400px]"
              cnames="flex flex-col justify-between items-end lg:items-start mt-4"
              iconColor="bg-black h-10 w-10"
              img={handshake}
              title="Over 20+"
              description="Startups booked"
            />
            <Card
              cardColor="bg-cr-gray-250 text-black h-[250px] lg:h-[400px]"
              cnames="flex flex-col justify-between items-start mt-4"
              iconColor="bg-black h-10 w-10"
              img={bolt}
              title="2 weeks"
              description="To launch from strategy to execution"
            />
          </div>
          <br />
          <div className="flex justify-center w-full">
            <Button
              kind="button"
              title="Get a free proposal"
              cnames="bg-forest-green-500"
            />
          </div>
          <br />
          <div className="w-full my-8 text-2xl font-bold text-center lg:text-5xl lg:my-10">
            <span className="w-full">Why Startups love us</span>
          </div>
          <WhyStartups />
        </div>
      </section>
      <br />
      <section className="h-[450px] bg-cr-teal-100 justify-center items-center gap-4 lg:gap-8 flex flex-col">
        <h3 className="text-4xl font-semibold lg:text-7xl lg:font-bold">
          Sound too good to be true?
        </h3>
        <span className="text-sm font-normal text-center lg:text-lg lg:w-1/2 text-cr-gray-600">
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
      <section className="py-4 mb-8 versus">
        <CampusReachVs />
      </section>

      <section className="">
        <div className="w-[85%] mx-auto">
          <div
            className="w-full lg:h-[320px] flex flex-col lg:flex-row justify-center items-center bg-[#0000001C] 
          rounded-xl gap-10 mb-8 lg:mb-10 pt-4 pl-4 lg:pt-0 lg:pl-0"
          >
            <div className="relative w-full lg:w-[300px] h-[250px] bg-contain rounded-lg ceo-img">
              <img
                src={LogoWithText}
                alt="logo"
                className="absolute px-1 bg-white rounded-lg bottom-8 left-8"
              />
            </div>
            <div className="lg:w-[65%] font-normal testimony-details text-right pr-8 pb-8 lg:pb-0 lg:pr-0 lg:text-start text-pretty">
              <p className="2xl:text-2xl text-balance">
                <b>&ldquo;</b> We built CampusReach to bridge the gap between
                businesses and campus communities and we are proud that the
                businesses we have facilitated this access for, have brought a
                lot more impact into these communities. <b>&rdquo;</b>
              </p>
              <br />
              <h5 className="font-semibold">Ian Reward</h5>
              <p className="font-lightbold">CEO Silfrica</p>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <br />
      <FAQs />
      <br />
      <FooterWithHero />
    </>
  );
}

export default App;
