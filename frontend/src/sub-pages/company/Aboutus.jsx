import React from "react";
import { FaInfoCircle, FaDotCircle, FaCheckCircle } from "react-icons/fa";
import heading from "../../constants/images/tech/technology-heading.jpg";
import leftImage from "../../constants/images/company/aa.jpg";
import rightImage from "../../constants/images/company/vision & mission.jpg";
import CounterExp from "../../components/CounterExp";
import DevPlan from "../../components/DevPlan"

const Aboutus = ({ showHeaderImage = true }) => {
  return (
    <div className="min-h-screen relative pt-16">
      {showHeaderImage && (
        <header className="relative w-full h-[50vh]">
          <img
            src={heading}
            alt="header"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest">
              ABOUT US
            </h1>
          </div>
        </header>
      )}

      <div className="flex flex-col lg:flex-row p-4 md:p-8">
        <div className="lg:w-1/2">
          <div>
            <img
              src={leftImage}
              alt="Left Side"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px]"
            />
          </div>
        </div>

        <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
          <div className="flex items-center mb-4">
            <FaInfoCircle className="text-xl sm:text-2xl text-red-500 mr-2" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
              About Company
            </h2>
          </div>

          <h1 className="mb-4 lg:mb-10 font-bold">
            <span className="text-red-600 text-xl sm:text-2xl lg:text-4xl xl:text-5xl">
              We provide the best{" "}
            </span>
            <span className="text-red-800 text-2xl sm:text-3xl lg:text-5xl xl:text-6xl">
              IT{" "}
            </span>
            <br />
            <span className="text-red-800 text-2xl sm:text-3xl lg:text-5xl xl:text-6xl">
              Solution
            </span>
            <span className="text-red-600 text-xl sm:text-2xl lg:text-4xl xl:text-5xl">
              {" "}
              services
            </span>
          </h1>

          <p className="mb-4 text-sm sm:text-md lg:text-lg">
            Phoenix Soft Solutions is one of the reputed and leading IT
            companies of Australia. We provide next-generation digital
            services that look great and are easy to use, helping our clients
            grow their businesses successfully. As a result, in just a few
            years, the company has served more than 150+ customers,
            demonstrating a strong reputation for building websites and
            software.
          </p>
          <p className="mb-4 text-sm sm:text-md lg:text-lg">
            Every company wants satisfactory success, and that is only possible
            when its clients are satisfied. Thus, we focus on providing
            customized and quality products that always give the best results to
            our customers. We have teams that always use the latest technologies
            and tools to fulfill clients' requirements precisely.
          </p>

          <div className="flex flex-col sm:flex-row mt-5 text-xs sm:text-sm lg:text-md">
            <div className="w-full md:w-1/2 text-black mb-4 sm:mb-0">
              <ul className="list-none pl-0">
                <li className="flex flex-row">
                  <FaCheckCircle className="text-red-600 mr-2 mt-1" />
                  <span>Marketing Experts</span>
                </li>
                <li className="flex flex-row">
                  <FaCheckCircle className="text-red-600 mr-2 mt-1" />
                  <span>Business Analysts</span>
                </li>
                <li className="flex flex-row">
                  <FaCheckCircle className="text-red-600 mr-2 mt-1" />
                  <span>Digital Marketing Experts</span>
                </li>
                <li className="flex flex-row">
                  <FaCheckCircle className="text-red-600 mr-2 mt-1" />
                  <span>Graphic Design Experts</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 text-black">
              <ul className="list-none pl-0">
                <li className="flex flex-row">
                  <FaCheckCircle className="text-red-600 mr-2 mt-1" />
                  <span>UI and UX Developers</span>
                </li>
                <li className="flex flex-row">
                  <FaCheckCircle className="text-red-600 mr-2 mt-1" />
                  <span>Web Application Developers</span>
                </li>
                <li className="flex flex-row">
                  <FaCheckCircle className="text-red-600 mr-2 mt-1" />
                  <span>Android / iOS Application Developers</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center sm:justify-start mt-8">
            <a
              href="#contact-us"
              className="border-2 border-red-700 bg-red-700 text-white py-2 px-4 sm:px-6 text-sm sm:text-base rounded hover:bg-white hover:text-red-700 transition duration-500"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

     <div className="px-2 sm:px-4 lg:px-10 py-4">
  <CounterExp />
</div>

<div className="flex flex-col-reverse xl:flex-row-reverse gap-2 xl:gap-10 p-4 md:p-8 bg-gray-100 mt-2 lg:mt-8">
  <div className="xl:w-1/2 mb-8 md:mb-0">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
      VISION & MISSION
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="w-full">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 flex items-center">
          <FaDotCircle className="text-red-600 mr-2 lg:mr-4" />
          Our Vision
        </h3>
        <p className="text-base sm:text-lg lg:text-xl">
          "Our vision is to satisfy our clients with our Phoenix Soft Solutions and to be recognized as an all-time preferred IT company with complete reliability & authenticity."
        </p>
      </div>

      <div className="w-full">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 flex items-center">
          <FaDotCircle className="text-red-600 mr-2 lg:mr-4" />
          Our Mission
        </h3>
        <p className="text-base sm:text-lg lg:text-xl">
          "Our mission is to provide the best services at the best price, to develop and maintain the bond between client and company to grow together."
        </p>
      </div>

      <div className="w-full">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 flex items-center">
          <FaDotCircle className="text-red-600 mr-2 lg:mr-4" />
          Our Values
        </h3>
        <p className="text-base sm:text-lg lg:text-xl">
          "To become successful, every company needs a strong base of values, which leads the whole team towards the company's vision-mission. Our core values support and shape the company's culture and motivate our employees to achieve their goals."
        </p>
      </div>
    </div>
  </div>

  <div className="xl:w-1/2">
    <img
      src={rightImage}
      alt="Vision & Mission"
      className="w-full h-auto"
    />
  </div>
</div>

<div>
  <DevPlan />
</div>
</div>
  );
};

export default Aboutus;
