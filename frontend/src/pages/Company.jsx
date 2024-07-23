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
    <div>
      <div className="relative">
        <img
          src={heading}
          alt="Company Background"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest">
            ABOUT US
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-4 md:p-8">
        <div className="md:w-1/2">
          <img src={leftImage} alt="Left Side" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <div className="flex items-center mb-4">
            <FaInfoCircle className="text-2xl text-red-500 mr-2" />
            <h2 className="text-xl md:text-2xl font-bold">About Company</h2>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            We Provide the best{" "}
            <span className="text-red-600">
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
              <ul className="list-none pl-0 text-lg md:text-xl">
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
              <ul className="list-none pl-0 text-lg md:text-xl">
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
              href="#contact-us"
              className="inline-block px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* New Section with Heading, Two Column Layout on Left, and Image on Right */}
      <div className="flex flex-col md:flex-row p-4 md:p-8 bg-gray-100">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            VISION & MISSION
          </h1>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center">
                <FaCircle className="text-red-600 mr-4" />
                Our Vision
              </h3>
              <p className="text-lg md:text-xl">
                "Our vision is to satisfy our clients with our<br></br> Phoenix
                Business Solutions and to be <br></br> recognized as all time
                preferred IT<br></br> company with complete reliability &
                <br></br>
                authenticity."
              </p>
            </div>
            <div className="w-full md:w-1/2 pl-4">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center">
                <FaCircle className="text-red-600 mr-4" />
                Our Mission
              </h3>
              <p className="text-lg md:text-xl">
                "Our mission is to provide the best<br></br> services at best
                price, to develop and<br></br> maintain the bond between client
                and<br></br> company to grow together."
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center">
                <FaCircle className="text-red-600 mr-4" />
                Our Values
              </h3>
              <p className="text-lg md:text-xl">
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

      {/* Existing Contact Us Section */}
      <div id="contact-us" className="p-4 md:p-8 bg-white mt-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          {/* Address Box */}
          <div className="w-full md:w-1/4 p-6 flex items-center border border-red-300 rounded-lg shadow-md bg-white">
            <FaMapMarkerAlt
              style={{ fontSize: "4rem" }}
              className="text-red-600 mr-4"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Address
              </h3>
              <p className="text-lg">
                1234 Street Name, <br />
                City, State, 12345 <br />
                Country
              </p>
            </div>
          </div>

          {/* Email Box */}
          <div className="w-full md:w-1/4 p-6 flex items-center border border-red-300 rounded-lg shadow-md bg-white">
            <FaEnvelope
              style={{ fontSize: "4rem" }}
              className="text-red-600 mr-4"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Email</h3>
              <p className="text-lg">info@phoenix.com</p>
            </div>
          </div>

          {/* Phone Box */}
          <div className="w-full md:w-1/4 p-6 flex items-center border border-red-300 rounded-lg shadow-md bg-white">
            <FaMobileAlt
              style={{ fontSize: "4rem" }}
              className="text-red-600 mr-4"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Phone</h3>
              <p className="text-lg">+1 234 567 890</p>
            </div>
          </div>
        </div>

        {/* New Section with Heading and Contact Box */}
        <div className="flex flex-col md:flex-row p-4 md:p-8 bg-gray-200 items-center">
          {/* Left Side with Heading */}
          <div className="md:w-1/2 p-4 md:p-8 text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold mb-4">
              Have Any <br />
              Questions?
            </h1>
            <div className="flex justify-center md:justify-start gap-4 md:gap-6 mb-8">
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
          <div className="md:w-1/2 p-4 md:p- mt-5">
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
                  className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg"
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

