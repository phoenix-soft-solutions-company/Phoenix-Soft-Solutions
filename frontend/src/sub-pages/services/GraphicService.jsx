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
      
    </div>
  );
};

export default Graphic;
