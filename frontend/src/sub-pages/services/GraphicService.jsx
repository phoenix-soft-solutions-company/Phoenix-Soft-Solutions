import React from "react";
import service from "../../constants/images/services/graphic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Graphic = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img
          src={service}
          className="object-cover w-full h-full"
          alt="Graphic Design"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            Graphic Design
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-serif font-bold mb-4">
          Our Graphic Design Services
        </h1>

        <p className="mb-4 text-justify max-w-4xl">
          Graphic Designing in your website is the most important, needed
          effectively to attract customers to your Company. People are conscious
          of how others see them. As much as possible people demonstrate a
          strong sense of individualism so that they’ll have a distinct and
          recognizable personality through your website.
        </p>
        <p className="mb-4 text-justify max-w-4xl">
          Our designs don't stop at just being unique and attractive. Our team
          of highly experienced and talented designers deliver designs that are
          user friendly, meet international standards and most importantly, make
          a significant contribution to the bottom line of every client.
        </p>
        <p className="mb-4 text-justify max-w-4xl">
          We deliver a comprehensive graphic design solution that is unmatched
          by any other company in Sri Lanka for all your advertising & marketing
          needs.
        </p>
        <ul className="list-disc list-inside text-justify max-w-4xl">
          <li className="mb-2 flex items-center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-red-500 mr-2"
            />
            Logo Design
          </li>
          <li className="mb-2 flex items-center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-red-500 mr-2"
            />
            Banner Design
          </li>
          <li className="mb-2 flex items-center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-red-500 mr-2"
            />
            Advertisement Design
          </li>
          <li className="mb-2 flex items-center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-red-500 mr-2"
            />
            Creative Slider Image Design
          </li>
          <li className="mb-2 flex items-center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-red-500 mr-2"
            />
            Flash and Interactive Design
          </li>
        </ul>
      </div>
      {/* Wave Section */}
      <div className="relative bg-red-500 text-white py-16">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-red-500">
          <svg
            viewBox="0 0 1440 320"
            className="absolute inset-x-0 bottom-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f87171"
              fillOpacity="1"
              d="M0,96L30,117.3C60,139,120,181,180,186.7C240,192,300,160,360,149.3C420,139,480,149,540,186.7C600,224,660,288,720,293.3C780,299,840,245,900,229.3C960,213,1020,235,1080,240C1140,245,1200,235,1260,218.7C1320,203,1380,181,1410,170.7L1440,160L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="relative z-10 text-center px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Get Started with Us</h2>
          <p className="text-lg mb-6">
            Contact us today to secure your business with our expert cyber
            security services and solutions. Let’s work together to protect what
            matters most.
          </p>
          <button className="bg-white text-red-500 py-2 px-6 rounded-full font-semibold">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Graphic;
