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
              <Button kind="button" title="Get a proposal" />
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
            <p className="font-medium text-center text-cr-gray-600 lg:text-2xl xl:max-w-5/6">
              Leverage student marketers/influencers across 25 campuses to drive
              affordable and time-effective campaigns. We manage your campaign
              from start to finish to achieve your marketing goals in campus
              communities
            </p>
            <br />
            <br />
            <Button kind="button" title="Get a free proposal" />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-20 h-80 start-ups">
        <h4 className="text-lg font-bold text-center md:text-2xl">
          Join the founders from fast-growing startups
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 place-content-center place-items-center md:max-w-[75%] mx-auto founders-box">
          <div className="md:w-52 w-28 h-16 bg-[#0B55B4] flex items-center justify-center rounded-[20px]">
            <img
              src={JayHC}
              alt="Jay Healthcare"
              className="object-contain w-[90%] md:w-[fit-content]"
            />
          </div>
          <div className="flex items-center justify-center">
            <img src={Raize} alt="Raize" className="w-2/3 h-16 md:w-auto" />
          </div>
          <div className="flex items-center justify-center">
            <img src={Muzingo} alt="Muzingo" className="w-2/3 h-16 md:w-auto" />
          </div>
          <div className="w-[fit-content] h-16 bg-[#0D0F36] flex items-center justify-center rounded-[20px]">
            <img src={Sambe1} alt="Sambe1" className="w-1/3" />
            <img src={Sambe2} alt="Sambe2" className="w-1/2" />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={Tubda}
              alt="Tubda"
              className="rounded-[17px] w-2/3 h-16 md:w-auto"
            />
          </div>
          <div className="flex items-center justify-center rounded-[20px]">
            <img
              src={Genie}
              alt="Genius Club"
              className="w-2/3 h-16 md:w-auto"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={Charisol}
              alt="Charisol"
              className="w-2/3 h-16 md:w-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-4 bg-cr-gray-200 second-section">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
