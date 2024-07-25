import React from "react";
import {
  FaInfoCircle,
  FaCheckCircle,
  FaCircle,
  FaMapMarkerAlt,
  FaEnvelope,
  FaMobileAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import heading from "../constants/images/tech/technology-heading.jpg";
import leftImage from "../constants/images/left_home.jpg";
import rightImage from "../constants/images/vision & mission.jpg";

const CompanyPage = () => {
  return (
    <div className="min-h-screen relative">
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

      <div className="flex flex-col lg:flex-row p-4 md:p-8">
        <div className="lg:w-1/2">
          <div>
            <img src={leftImage} alt="Left Side" className="w-full h-auto" />
          </div>

          <div className="hidden lg:flex flex-col xl:flex-row mt-5 text-sm lg:text-md">
            <div className="text-black gap-y-4 xl:gap-y-1 xl:w-1/2">
              <ul className="list-none pl-0 text-lg md:text-xl">
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
            <div className="text-black gap-y-4 xl:gap-y-1 xl:w-1/2">
              <ul className="list-none pl-0 text-lg md:text-xl">
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
        </div>

        <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
          <div className="flex items-center mb-4">
            <FaInfoCircle className="text-2xl text-red-500 mr-2" />
            <h2 className="text-xl md:text-2xl font-bold">About Company</h2>
          </div>

          <h1 className="mb-4 lg:mb-10 font-bold">
            <span className="text-red-600 text-2xl lg:text-4xl xl:text-5xl">
              We provide the best{" "}
            </span>
            <span className="text-red-800 text-3xl lg:text-5xl xl:text-6xl">
              IT{" "}
            </span>
            <br />
            <span className="text-red-800 text-3xl lg:text-5xl xl:text-6xl">
              Solution
            </span>
            <span className="text-red-600 text-2xl lg:text-4xl xl:text-5xl">
              {" "}
              services
            </span>
          </h1>

          <p className="mb-4 text-md lg:text-lg">
            X croup is one of the reputed and leading IT companies of new
            zealand d We provide next generation digital services that look
            great and are easy-to-use which helps our clients to grow their
            business successfully. As a result, just in few years, the company
            has served more than 150+ customers which shows that we have made a
            strong reputation for building websites and software.
          </p>
          <p className="mb-4 text-md lg:text-lg">
            Every company wants satisfactory success and that is only possible
            when its clients are satisfied. Thus we focus on providing
            customized and quality products which always give the best results
            to our customers. We have the following teams which always use the
            latest technologies and tools to fulfill client's requirements
            exactly.
          </p>

          <div className="flex flex-col sm:flex-row mt-5 text-sm lg:text-md lg:hidden">
            <div className="w-full md:w-1/2 text-black">
              <ul className="list-none pl-0 text-lg md:text-xl">
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
              <ul className="list-none pl-0 text-lg md:text-xl">
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
              className="border-2 border-red-700 bg-red-700 text-white py-2 px-6 text-base rounded hover:bg-white hover:text-red-700 transition duration-500"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse xl:flex-row-reverse gap-2 xl:gap-10 p-4 md:p-8 bg-gray-100 mt-2 lg:mt-8">
        <div className="xl:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            VISION & MISSION
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="w-full">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center">
                <FaCircle className="text-red-600 mr-2 lg:mr-4" />
                Our Vision
              </h3>
              <p className="text-lg lg:text-xl">
                "Our vision is to satisfy our clients with our Phoenix Business
                Solutions and to be recognized as all time preferred IT company
                with complete reliability & authenticity."
              </p>
            </div>

            <div className="w-full">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center">
                <FaCircle className="text-red-600 mr-2 lg:mr-4" />
                Our Mission
              </h3>
              <p className="text-lg lg:text-xl">
                "Our mission is to provide the best services at best price, to
                develop and maintain the bond between client and company to grow
                together."
              </p>
            </div>

            <div className="w-full">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center">
                <FaCircle className="text-red-600 mr-2 lg:mr-4" />
                Our Values
              </h3>
              <p className="text-lg lg:text-xl">
                "To become successful every company needs a strong base of
                values, which leads the whole team towards the company's vision
                - mission. Our core values support and shape company's culture
                and motivate our employees to achieve their goals."
              </p>
            </div>
          </div>
        </div>

        <div className="xl:w-1/2">
          <img src={rightImage} alt="Right Side" className="w-full h-auto" />
        </div>
      </div>

      {/* Existing Contact Us Section */}
      <div id="contact-us" className="p-4 md:p-8 bg-white mt-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Contact Us
        </h2>
        <div className="flex flex-col lg:flex-row justify-center  gap-3 mb-12">
          {/* Address Box */}
          <div className="w-full lg:w-1/2 p-6 flex items-center border border-red-300 rounded-lg shadow-md bg-white">
            <FaMapMarkerAlt
              style={{ fontSize: "4rem" }}
              className="text-red-600 mr-4"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Address
              </h3>
              <p className="text-lg">
                1/46 Martin Place <br />
                Sydney NSW 2000 <br />
                Australia
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-between">
            {/* Email Box */}
            <div className="w-full sm:w-1/2 p-6 flex items-center border border-red-300 rounded-lg shadow-md bg-white">
              <FaEnvelope
                style={{ fontSize: "4rem" }}
                className="text-red-600 mr-4"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  Email
                </h3>
                <p className="text-lg">info@xcroup.lk</p>
              </div>
            </div>

            {/* Phone Box */}
            <div className="w-full sm:w-1/2 p-6 flex items-center border border-red-300 rounded-lg shadow-md bg-white">
              <FaMobileAlt
                style={{ fontSize: "4rem" }}
                className="text-red-600 mr-4"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  Phone
                </h3>
                <p className="text-lg">+1 234 567 890</p>
              </div>
            </div>
          </div>
        </div>

        {/* New Section with Heading and Contact Box */}
        <div className="flex flex-col lg:flex-row p-4 md:p-8 lg:px-10 bg-gray-200 items-center">
          {/* Left Side with Heading */}
          <div className="w-full lg:w-1/2 p-4 sm:px-10 md:px-40 lg:px-4 md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold mb-4">
              Have Any <br />
              Questions?
            </h1>
            <div className="flex gap-4 md:gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-400"
              >
                <FaFacebook className="text-3xl md:text-5xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-400"
              >
                <FaTwitter className="text-3xl md:text-5xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-400"
              >
                <FaLinkedin className="text-3xl md:text-5xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-400"
              >
                <FaInstagram className="text-3xl md:text-5xl" />
              </a>
            </div>
          </div>

          {/* Right Side with Contact Box */}
          <div className="w-full lg:w-1/2 p-4 sm:px-10 md:px-40 lg:px-4 mt-5">
            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-12 md:p-14">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Contact Us
              </h3>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-lg font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="border-2 border-red-700 bg-red-700 text-white py-2 px-6 text-base rounded hover:bg-white hover:text-red-700 transition duration-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
