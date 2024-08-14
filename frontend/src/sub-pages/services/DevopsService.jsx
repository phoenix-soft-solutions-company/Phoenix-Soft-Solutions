import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import devops from "../../constants/images/services/devops.jpg";
import devops1 from "../../constants/images/services/devo.jpg";
import devops2 from "../../constants/images/services/devo2.jpg";

const DevOps = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img
          src={devops}
          className="object-cover w-full h-full"
          alt="DevOps Service Hero"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            DEVOPS SERVICE
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 lg:p-16">
        {/* First Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold uppercase">
            DevOps Development Services
          </h1>
          <div className="w-24 h-1 bg-red-500 mx-auto my-4"></div>
          <p className="text-lg lg:text-xl">
            As a long-standing DevOps Services Company, Saigon Technology offers
            high-quality and affordable DevOps consulting and implementation
            services for startups and enterprises in the world.
          </p>
          <img
            src={devops1}
            alt="DevOps Consulting Services"
            className="mt-8 w-full lg:w-1/2 mx-auto"
          />
        </div>
      </div>
      {/* Second Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold uppercase mb-3">
          DevOps to Revolutionize Your IT Operations
        </h1>

        <p className="text-lg lg:text-xl">
          You can fully optimize the software development related activities for
          your business with DevOps.
          <br></br> <br></br>DevOps (Development & Operations) is a technique
          that was created to integrate software developers with operation teams
          so that high-quality<br></br> software could be delivered more
          quickly. Specifically, the use of tool-chain pipelines, monitoring,
          collaboration, automation, and <br></br>cloud adoption are all
          components that are leveraged by a DevOps services company.
        </p>
        <div className="w-24 h-1 bg-red-500 mx-auto my-4"></div>
        {/* New Section */}
        <div className="text-center mb-12 mt-11 bg-gray-100">
          <h1 className="text-3xl lg:text-4xl font-bold uppercase ">
            Taking Advantage of Partnering with Saigon<br></br> Technology for
            DevOps Services
          </h1>
          <img
            src={devops2}
            alt="Saigon Technology DevOps Services"
            className="mt-8 w-full lg:w-1/2 mx-auto"
          />

          {/* Centering the List with Left Padding */}
          <div className="flex justify-center mt-8">
            <ul className="list-none space-y-4 text-left pl-8 max-w-3xl">
              <li className="flex items-start">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-red-500 mr-2"
                />
                <span className="text-lg lg:text-xl">
                  <span className="font-bold">
                    Speed up the rollout of new software:
                  </span>{" "}
                  Integrate and automate supervision, quality assessment, and
                  corrective actions using toolchains of DevOps Services &
                  DevOps solutions.
                </span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-red-500 mr-2"
                />
                <span className="text-lg lg:text-xl">
                  <span className="font-bold">
                    Generate software of an excellent caliber:
                  </span>{" "}
                  Produce software outputs of the highest possible quality, with
                  prolonged release validation to be performed at each level of
                  the software development life cycle (SDLC) to ensure code
                  quality is always at its best.
                </span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-red-500 mr-2"
                />
                <span className="text-lg lg:text-xl">
                  <span className="font-bold">
                    Boost the efficiency of developing software:
                  </span>{" "}
                  By automatically detecting errors and eliminating them, the
                  downtime will be minimized as much as possible.
                </span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-red-500 mr-2"
                />
                <span className="text-lg lg:text-xl">
                  <span className="font-bold">Fourth</span> item in the list
                  with a brief description.
                </span>
              </li>
            </ul>
          </div>
        </div>
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
            Contact us today to streamline your development and operations with
            our expert DevOps services and solutions. Let’s work together to
            enhance efficiency and scalability in your business.
          </p>
          <a href="/Company/Contactus" className="block">
            <button className="bg-white text-red-500 py-2 px-6 rounded-full font-semibold">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DevOps;
