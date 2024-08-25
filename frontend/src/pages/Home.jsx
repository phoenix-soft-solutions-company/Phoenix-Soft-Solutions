import React from "react";
import { Link } from "react-router-dom";
import CompanyMap from "../components/CompanyMap";
import SlideShow from "../components/SlideShow";
import ImageCarousel from "../components/ImageCarousel";
import CounterExp from "../components/CounterExp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import icon1 from "../constants/images/icons/Icon1.png";
import icon2 from "../constants/images/icons/Icon2.png";
import icon3 from "../constants/images/icons/Icon3.png";
import icon4 from "../constants/images/icons/Icon4.png";
import icon5 from "../constants/images/icons/Icon5.png";
import icon6 from "../constants/images/icons/Icon6.png";
import icon7 from "../constants/images/icons/Icon7.png";
import icon8 from "../constants/images/icons/Icon8.png";
import icon9 from "../constants/images/icons/Icon9.png";
import left from "../constants/images/left.png";
import icon11 from "../constants/images/icons/ico1.png";
import icon12 from "../constants/images/icons/ico2.png";
import icon13 from "../constants/images/icons/ico3.png";
import icon14 from "../constants/images/icons/ico4.png";
import CustomerReviews from "../components/CustomerReviews";
import LeatestProjects from "../components/LeatestProjects";
import "./Styles.css";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Logo from "../constants/images/logo1.png";

function Home() {
  return (
    <div className="">
      <div className="h-[60vh] sm:h-[90vh]">
        <SlideShow />
      </div>

      <div className="py-4 px-2 sm:px-4">
        <ImageCarousel />
      </div>

      <div className="flex flex-col lg:flex-row md:py-10 xl:px-20">
        <div className="w-full lg:w-1/2 xl:1/3 flex justify-center items-center relative">
          <div className="p-4 border-l-2 border-t-2 border-red-600 rounded-full relative">
            <div className="p-4 border-r-2 border-b-2 border-red-600 rounded-full relative">
              <img
                src={Logo}
                alt="Description"
                className="w-64 h-64 sm:w-96 sm:h-96 rounded-full"
              />
              <div className="z-[100] py- rounded-sm absolute top-[380px] left-[50px] items-center space-x-4 hidden sm:flex">
                {/* Social Media Icons */}
                <a
                  href="https://www.facebook.com/phoenixsoftsolutionsnz?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-full"
                >
                  <FontAwesomeIcon icon={faFacebook} className="text-5xl" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 text-white p-2 rounded-full"
                >
                  <FontAwesomeIcon icon={faTwitter} className="text-5xl" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white p-2 rounded-full"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-5xl" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 text-white p-3 rounded-full"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-5xl" />
                </a>
              </div>
              <div className="ballLeft absolute top-0 left-0 hidden sm:flex bg-green-500 w-16 h-16 rounded-full" />
            </div>
            <div className="ballRight absolute top-0 right-0 hidden sm:flex bg-yellow-500 w-16 h-16 rounded-full" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 xl:2/3 flex flex-col justify-center items-center p-4">
          <div className="cursor-defalt">
            <h1 className="mb-4 lg:mb-10 font-bold">
              <span className="text-red-600 text-2xl lg:text-4xl xl:text-5xl transform transition-transform duration-300 hover:translate-x-2">
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
            <p className="text-black text-lg lg:text-xl">
              We offer one of the most comprehensive, affordably-priced service
              and maintenance IT support plans in the IT industry.
            </p>
            <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row md:gap-x-10 lg:gap-x-0 xl:gap-x-4 mt-5">
              <div className="">
                <ul className="list-none text-lg text-black lg:text-xl">
                  <li className="transform transition-transform duration-300 hover:translate-x-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-red-600 mr-2"
                    />
                    We Understand Customer Challenges
                  </li>
                  <li className="transform transition-transform duration-300 hover:translate-x-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-red-600 mr-2"
                    />
                    We Collect Clients Needs
                  </li>
                  <li className="transform transition-transform duration-300 hover:translate-x-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-red-600 mr-2"
                    />
                    We Craft the right solutions
                  </li>
                </ul>
              </div>
              <div className="">
                <ul className="list-none text-lg text-black lg:text-xl">
                  <li className="transform transition-transform duration-300 hover:translate-x-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-red-600 mr-2"
                    />
                    We Deliver Quality Services
                  </li>
                  <li className="transform transition-transform duration-300 hover:translate-x-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-red-600 mr-2"
                    />
                    We Ensure Customer Satisfaction
                  </li>
                  <li className="transform transition-transform duration-300 hover:translate-x-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-red-600 mr-2"
                    />
                    We Provide Ongoing Support
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center sm:justify-start mt-8">
              <a
                href="/Company/Contactus"
                className="border-2 border-red-700 bg-red-600 text-white py-2 px-6 text-base rounded hover:bg-white hover:text-red-700 transition duration-500"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="text-center py-4">
          <h1 className="header-underline-animation font-bold text-2xl lg:text-3xl pb-1 sm:pb-2 lg:pb-3 font-serif">
            OUR SERVICES
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto px-2 cursor-defalt">
          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] transform transition-colors duration-300 hover:bg-red-200 hover:border-red-700 border border-transparent">
            <img
              src={icon1}
              alt="Web Application Development"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl mb-2">Web Application Development</h2>
            <p className="text-lg text-justify">
              To help businesses successfully communicate with their intended
              demographic, Phoenix Soft Solutions provides services that include
              the complete spectrum of the software development life cycle.
            </p>
          </div>

          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] transform transition-colors duration-300 hover:bg-red-200 hover:border-red-700 border border-transparent">
            <img
              src={icon2}
              alt="Mobile App Development"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl mb-2">Mobile App Development</h2>
            <p className="text-lg text-justify">
              To achieve our client's business objectives, we design and build
              feature-rich handheld apps for a wide range of mobile platforms,
              with a particular emphasis on delivering superior user experience
              and making use of cutting-edge mobile technology.
            </p>
          </div>

          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] transform transition-colors duration-300 hover:bg-red-200 hover:border-red-700 border border-transparent">
            <img
              src={icon3}
              alt="Custom Software Development"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl mb-2">Custom Software Development</h2>
            <p className="text-lg text-justify">
              Our expertise is in building scalable and effective software
              solutions for businesses of all sizes, with a focus on meeting
              their unique needs to encourage expansion and innovative concepts.
            </p>
          </div>

          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] transform transition-colors duration-300 hover:bg-red-200 hover:border-red-700 border border-transparent">
            <img
              src={icon4}
              alt="DevOps Services"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl mb-2">DevOps Services</h2>
            <p className="text-lg text-justify">
              We provide appropriate services to facilitate communication and
              coordination between software development and IT operations.
              Experience the power of seamless coordination as we accelerate
              software delivery and supercharge efficiency.
            </p>
          </div>

          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] transform transition-colors duration-300 hover:bg-red-200 hover:border-red-700 border border-transparent">
            <img
              src={icon5}
              alt="Software Development Outsourcing"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl mb-2">Software Development Outsourcing</h2>
            <p className="text-lg text-justify">
              By utilizing Phoenix Soft Solutions's services, businesses can
              leverage our expertise and infrastructure for the smooth
              completion of their projects at accelerated lower overall costs.
            </p>
          </div>

          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] transform transition-colors duration-300 hover:bg-red-200 hover:border-red-700 border border-transparent">
            <img
              src={icon6}
              alt="Software QA Testing"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl mb-2">Software QA Testing</h2>
            <p className="text-lg text-justify">
              Phoenix Soft Solutions offers thorough testing and bug-fixing to
              improve overall performance and guarantee the quality, stability,
              and functioning of software programs as part of our services.
            </p>
          </div>

          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] transform transition-colors duration-300 hover:bg-red-200 hover:border-red-700 border border-transparent">
            <img
              src={icon7}
              alt="Cloud Migration Services"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl  mb-2">Cloud Migration Services</h2>
            <p className="text-lg text-justify">
              Experience a seamless transition to the cloud with our exceptional
              services. We empower businesses to effortlessly move their
              software and infrastructure, unlocking the incredible benefits of
              scalability, top-notch security, and remarkable cost-efficiency.
            </p>
          </div>

          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] transform transition-colors duration-300 hover:bg-red-200 hover:border-red-700 border border-transparent">
            <img
              src={icon8}
              alt="PoC Development Services"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl mb-2">PoC Development Services</h2>
            <p className="text-lg text-justify">
              With our exceptional expertise, we empower you to embark on a
              journey of innovation, ensuring that your concepts are thoroughly
              tested and validated before embarking on full-scale development.
            </p>
          </div>

          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] transform transition-colors duration-300 hover:bg-red-200 hover:border-red-700 border border-transparent">
            <img
              src={icon9}
              alt="AI Development Services"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl mb-2">AI Development Services</h2>
            <p className="text-lg text-justify">
              By combining cutting-edge AI with machine learning, we can create
              smart software that can streamline business operations and enhance
              decision-making. Let us transform your business into a realm of
              efficiency and innovation.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <Link
            to="/service"
            className="border-2 border-red-700 bg-red-600 text-white py-4 px-8 text-base rounded hover:bg-white hover:text-red-700 transition duration-500"
          >
            Explore in detail
          </Link>
        </div>
      </div>

      <div className="flex flex-col py-5">
        <div className="text-center py-6">
          <h1 className="header-underline-animation font-bold text-2xl lg:text-3xl pb-1 sm:pb-2 lg:pb-3 font-serif">
            WHAT’S CLIENTS SAY
          </h1>
          <p className="text-lg pt-4 px-4 sm:px-20 lg:px-40 xl:px-60">
            Their commitment to customer satisfaction is evident in every
            interaction. They listen to our needs, respond promptly, and go
            above and beyond to ensure we're completely satisfied.
          </p>
        </div>
        <div className="p-4 sm:px-10 lg:px-20 xl:Px-32">
          <CustomerReviews />
        </div>
      </div>

      <div className="flex flex-col py-5">
        <div className="text-center py-4">
          <h1 className="header-underline-animation font-bold text-2xl lg:text-3xl pb-1 sm:pb-2 lg:pb-3 font-serif">
            OUR PROJECTS
          </h1>
          <p className="text-lg pt-4 px-4 sm:px-20 lg:px-40 xl:px-60">
            We create bespoke web solutions that cater to unique business needs
            and objectives. From highly interactive websites to complex web
            applications, our projects are designed to deliver exceptional user
            experiences and functionality.
          </p>
        </div>
        <div className="p-4 sm:px-10 lg:px-20 xl:Px-32">
          <LeatestProjects />
        </div>
        <div className="flex justify-center">
          <Link
            to="/project"
            className="border-2 border-red-700 bg-red-600 text-white py-4 px-8 text-base rounded hover:bg-white hover:text-red-700 transition duration-500"
          >
            Explore more projects
          </Link>
        </div>
      </div>

      <div className="flex flex-col p-4 lg:px-8">
        <div className="2xl:pl-8">
          <h2 className="text-[#780a15] text-3xl mb-2">Our Benefits...</h2>
          <h1 className="text-[#e81c30] text-5xl font-bold mb-4">
            Why Choose Us?
          </h1>
        </div>

        <div className="flex flex-col-reverse xl:flex-row-reverse">
          <div className="w-full xl:w-1/2 py-2 flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 xmd:grid-cols-3 xl:grid-cols-2 gap-4">
              <div className="w-full sm:w-72 p-2 text-center border border-black">
                <img
                  src={icon11}
                  alt="Icon 1"
                  className="w-24 h-24 mb-2 mx-auto"
                />
                <h3 className="text-[#e81c30] text-xl mb-2">
                  Best Technological Solutions
                </h3>
                <p className="text-base">
                  Inspired IT specialists are looking forward to understand the
                  varied project requirements & come up with the superlative
                  solutions.
                </p>
              </div>

              <div className="w-full sm:w-72 p-2 text-center border border-black">
                <img
                  src={icon12}
                  alt="Icon 2"
                  className="w-24 h-24 mb-2 mx-auto"
                />
                <h3 className="text-[#e81c30] text-xl mb-2">
                  Customer Satisfaction
                </h3>
                <p className="text-base">
                  We consider our success on the basis of the clients’
                  successfully performing websites or mobile apps.
                </p>
              </div>

              <div className="w-full sm:w-72 p-2 text-center border border-black">
                <img
                  src={icon13}
                  alt="Icon 3"
                  className="w-24 h-24 mb-2 mx-auto"
                />
                <h3 className="text-[#e81c30] text-xl mb-2">Value Added</h3>
                <p className="text-base">
                  Our value added services guarantee the clients to have
                  outcomes beyond the expectations.
                </p>
              </div>

              <div className="w-full sm:w-72 p-2 text-center border border-black">
                <img
                  src={icon14}
                  alt="Icon 4"
                  className="w-24 h-24 mb-2 mx-auto"
                />
                <h3 className="text-[#e81c30] text-xl mb-2">
                  Customer Tailored Support
                </h3>
                <p className="text-base">
                  We are dedicated to ensuring that our customers can contact us
                  in the best way for them.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-1/2 flex justify-center items-center p-4 relative 2xl:pl-8">
            <img
              src={left}
              alt="Description"
              className="max-w-full max-h-full h-auto p-4"
            />
          </div>
        </div>
      </div>

      <div className="px-2 sm:px-4 lg:px-10 py-4 ">
        <CounterExp />
      </div>

      <div className="p-2">
        <div className="text-center py-4">
          <h1 className="header-underline-animation font-bold text-2xl lg:text-3xl pb-1 sm:pb-2 lg:pb-3 font-serif">
            OUR RETAINED CLIENTS
          </h1>
          <p className="text-lg pt-4 px-4 sm:px-20 lg:px-40 xl:px-60">
            Thank you for your precious feedback and support. We always do our
            best to contribute to your growth as our slogan: Your success is our
            mission.
          </p>
        </div>
        <div className="p-4 lg:px-10 xl:px-12">
          <CompanyMap />
        </div>
      </div>
    </div>
  );
}

export default Home;
