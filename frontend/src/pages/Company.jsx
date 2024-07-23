import React from "react";
import { FaInfoCircle, FaCheckCircle, FaCircle } from "react-icons/fa";
import heading from "../constants/images/tech/technology-heading.jpg";
import leftImage from "../constants/images/left_home.jpg"; // Corrected image path
import rightImage from "../constants/images/vision & mission.jpg"; // Add your new image path here

const CompanyPage = () => {
  return (
    <div>
      <div className="relative">
        <img
          src={heading}
          alt="Company Background"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">About Us</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-8">
        <div className="md:w-1/2">
          <img src={leftImage} alt="Left Side" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <div className="flex items-center mb-4">
            <FaInfoCircle className="text-2xl text-blue-500 mr-2" />
            <h2 className="text-2xl font-bold">About Company</h2>
          </div>
          <h1 className="text-6xl font-bold mb-4">
            We Provide the best{" "}
            <span className="text-blue-600">
              IT
              <br /> Solutions
            </span>{" "}
            services
          </h1>
          <p className="mb-4">
            Phoenix Business Solutions is one of the reputed and leading IT
            companies of Sri Lanka. We provide next generation digital services
            that look great and are easy-to-use which helps our clients to grow
            their business successfully. As a result, just in few years, the
            company has served more than 150+ customers which shows that we have
            made a strong reputation for building websites and softwares.
          </p>
          <p className="mb-4">
            Every company wants satisfactory success and that is only possible
            when its clients are satisfied. Thus we focus on providing
            customized and quality products which always give the best results
            to our customers.
          </p>
          <p className="mb-4">
            We have the following teams which always use the latest technologies
            and tools to fulfill client's requirements exactly.
          </p>
          <div className="flex flex-wrap mt-5">
            <div className="w-full md:w-1/2 text-black mb-4">
              <ul className="list-none pl-0 text-xl">
                <li className="flex items-center mb-3">
                  <FaCheckCircle className="text-red-600 mr-2" />
                  <span>Marketing Experts</span>
                </li>
                <li className="flex items-center mb-3">
                  <FaCheckCircle className="text-red-600 mr-2" />
                  <span>Business Analysts</span>
                </li>
                <li className="flex items-center mb-3">
                  <FaCheckCircle className="text-red-600 mr-2" />
                  <span>Digital Marketing Experts</span>
                </li>
                <li className="flex items-center mb-3">
                  <FaCheckCircle className="text-red-600 mr-2" />
                  <span>Graphic Design Experts</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 text-black mb-4">
              <ul className="list-none pl-0 text-xl">
                <li className="flex items-center mb-3">
                  <FaCheckCircle className="text-red-600 mr-2" />
                  <span>UI and UX Developers</span>
                </li>
                <li className="flex items-center mb-3">
                  <FaCheckCircle className="text-red-600 mr-2" />
                  <span>Web Application Developers</span>
                </li>
                <li className="flex items-center mb-3">
                  <FaCheckCircle className="text-red-600 mr-2" />
                  <span>Android / iOS Application Developers</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-left">
            <a
              href="/contact" // Link to your contact page
              className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* New Section with Heading, Two Column Layout on Left, and Image on Right */}
      <div className="flex flex-col md:flex-row p-8 bg-gray-100">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">VISION & MISSION</h1>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-2 flex items-center">
                <FaCircle className="text-blue-600 mr-2" />
                Our Vision
              </h3>
              <p className="text-lg">
                "Our vision is to satisfy our clients with our<br></br> Phoenix
                Business Solutions and to be <br></br> recognized as all time
                preferred IT<br></br> company with complete reliability &
                <br></br>
                authenticity."
              </p>
            </div>
            <div className="w-full md:w-1/2 pl-4">
              <h3 className="text-2xl font-semibold mb-2 flex items-center">
                <FaCircle className="text-blue-600 mr-2" />
                Our Mission
              </h3>
              <p className="text-lg">
                "Our mission is to provide the best<br></br> services at best
                price, to develop and<br></br> maintain the bond between client
                and<br></br> company to grow together."
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-2 flex items-center">
                <FaCircle className="text-blue-600 mr-2" />
                Our Values
              </h3>
              <p className="text-lg">
                "To become successful every company<br></br> needs a strong base
                of values, which leads<br></br> the whole team towards the
                company's<br></br> vision - mission. Our core values support
                <br></br> and shape company's culture and motivate<br></br> our
                employees to achieve their goals."
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={rightImage} alt="Right Side" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
