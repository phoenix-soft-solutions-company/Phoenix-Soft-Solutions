import React from "react";
import devops from "../../constants/images/services/devopshead.jpg";

const DevOps = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img
          src={devops}
          className="object-cover w-full h-full"
          alt="DevOps Service"
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
            high quality and affordable Devops<br></br> consulting and
            implementation services for startups and enterprises in the world.
          </p>
          <img
            src={devops}
            alt="Description 1"
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
          your business with DevOps.<br></br> <br></br>DevOps (Development &
          Operations) is a technique that was created to integrate software
          developers with operation teams so that high-quality<br></br> software
          could be delivered more quickly. Specifically, the use of tool-chain
          pipelines, monitoring, collaboration, automation, and <br></br>cloud
          adoption are all components that are leveraged by a DevOps services
          company.
        </p>
        <div className="w-24 h-1 bg-red-500 mx-auto my-4"></div>
        {/* New Section */}
        <div className="text-center mb-12 mt-11 bg-gray-100">
          <h1 className="text-3xl lg:text-4xl font-bold uppercase ">
            Taking Advantage of Partnering with Saigon<br></br> Technology for
            DevOps Services
          </h1>
          <img
            src={devops}
            alt="New Section Image"
            className="mt-8 w-full lg:w-1/2 mx-auto"
          />

          {/* Centering the List with Left Padding */}
          <div className="flex justify-center mt-8">
            <ul className="text-lg lg:text-xl space-y-4 text-left list-disc list-inside pl-8 max-w-3xl">
              <li>
                <span className="font-bold">
                  Speed up the rollout of new software:
                </span>{" "}
                Integrate and automate supervision, quality assessment, and
                corrective actions using toolchains of DevOps Services & DevOps
                solutions.
              </li>
              <li>
                <span className="font-bold">
                  Generate software of an excellent caliber:
                </span>{" "}
                Produce software outputs of the highest possible quality, with
                prolonged release validation to be performed at each level of
                the software development life cycle (SDLC) to ensure code
                quality is always at its best.
              </li>
              <li>
                <span className="font-bold">
                  Boost the efficiency of developing software:
                </span>{" "}
                By automatically detecting errors and eliminating them, the
                downtime will be minimized as much as possible.
              </li>
              <li>
                <span className="font-bold">Fourth</span> item in the list with
                a brief description.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOps;