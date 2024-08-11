import React from "react";
import service1 from "../../constants/images/services/webabout.jpg";

const Custom = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img
          src={service1}
          className="object-cover w-full h-full"
          alt="Mobile Development"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            DEVOPS SERVICE
          </h1>
        </div>
      </div>

      {/* Centered Title with Short Red Underline */}
      <div className="flex justify-center py-8">
        <h1 className="text-3xl lg:text-4xl font-serif font-bold relative text-center">
          Are You Seeking a Custom Software <br /> Development Company?
          <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-red-500"></span>
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row p-8">
        {/* Left Side Image */}
        <div className="lg:w-1/2">
          <img
            src={service1}
            className="object-cover w-full h-full"
            alt="Service"
          />
        </div>

        {/* Right Side Cards */}
        <div className="lg:w-1/2 flex flex-col space-y-6 p-6">
          <div className="bg-white p-4 rounded shadow-lg">
            <p className="text-gray-700 mb-4">
              Custom software development crafts technology solutions to
              precisely fit the distinctive needs of businesses. This bespoke
              approach, different from generic off-the-shelf software, is
              meticulously designed to address the specific challenges and
              requirements of your business. It provides unmatched flexibility
              and efficiency, leading to a more effective software experience
              tailored to your needs.
            </p>
           
          </div>

          <div className="bg-white p-4 rounded shadow-lg">
            <p className="text-gray-700 mb-4">
              At Saigon Technology, a journey spanning over 12 years as a custom
              software development company underscores our commitment to
              excellence. Our team of experienced specialists is skilled at
              creating custom software solutions that resonate perfectly with
              your business's unique demands.
            </p>
          </div>

          <div className="bg-white p-4 rounded shadow-lg">
            <p className="text-gray-700 mb-4">
              Our approach is geared towards catalyzing growth across various
              industries. Opting for our services translates into high-quality
              software development that is cost-effective due to flexible
              models, thereby boosting your return on investment (ROI) and
              enhancing the overall user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom;
