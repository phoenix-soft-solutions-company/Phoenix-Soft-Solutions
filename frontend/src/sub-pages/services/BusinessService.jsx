import React from "react";
import service from "../../constants/images/services/management.jpg";
import heading from "../../constants/images/services/busi.jpg";
import service1 from "../../constants/images/services/busi11.jpg";
import service2 from "../../constants/images/services/busi22.jpg";
const Business = () => {
  return (
    <div className="min-h-screen relative pt-16">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img
          src={heading}
          className="object-cover w-full h-full"
          alt="Mobile Development"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            Business Management
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center text-center mt-12 px-4">
        <h1 className="text-2xl lg:text-4xl font-bold mb-4">
          Accounting Services
        </h1>
        <p className="text-lg lg:text-xl max-w-2xl mb-8">
          Businesses may occur different kinds of financial accounting
          requirements, some seek to reduce the cost or burden of holding an
          accounting department inhouse, while some seek other financial
          accounting needs, for their decision-making and other purposes.
        </p>
        <img
          src={service}
          className="object-cover w-auto h-80"
          alt="Business Strategy"
        />
        <p className="text-lg lg:text-xl max-w-2xl mb-8">
          The maintenance of a proper accounting system is made mandatory by the
          Company’s Act, so accounting experts of the team Business Eye is ready
          to undertake this responsibility of your and to fill it promptly and
          efficiently.
        </p>
      </div>

      {/* First Card Section with Title, List, and Image */}
      <div className="flex justify-center mt-12 px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden lg:flex lg:items-start max-w-4xl">
          {/* Left Side: Title and List */}
          <div className="p-6 lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              We offer following accountancy related services for your
              requirement,
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Accounting Process Outsourcing</li>
              <li>Secondment of finance & Administration Staff</li>
              <li>Clearing of Accounting Backlogs</li>
              <li>Financial Reporting Advisory Services</li>
              <li>
                Preparation of Financial Accounts for Management Decision Making
              </li>
              <li>
                Preparation of Financial Accounts for Business Financing
                Purposes
              </li>
              <li>
                Special Assignments on Stocks & Fixed Assets Verifications
              </li>
            </ul>
          </div>

          {/* Right Side: Image */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <img
              src={service1}
              className="object-contain max-w-full max-h-full"
              alt="Business Strategies"
            />
          </div>
        </div>
      </div>

      {/* Second Card Section with Image on Left and Text on Right */}
      <div className="flex justify-center mt-12 px-4 mb-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden lg:flex lg:items-start max-w-4xl">
          {/* Left Side: Image */}
          <div className="lg:w-1/2">
            <img
              src={service2}
              className="object-cover w-full h-full"
              alt="Business Strategy"
            />
          </div>

          {/* Right Side: Title, Paragraph, and List */}
          <div className="p-6 lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              We help you to make the accountancy process as pain free as
              possible
            </h2>
            <p className="mb-4">
              You have full freedom to decide the nature, Time and the scope of
              our accounting Service. <br></br>Pls refer the following to decide
              how our Service should be obtain if not what are the option
              available for you.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Remote Work</li>
              <li>Visit Work</li>
              <li>Fully Outsource Work</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
