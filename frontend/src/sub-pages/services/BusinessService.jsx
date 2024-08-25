import React from "react";
import service from "../../constants/images/services/management.jpg";
import heading from "../../constants/images/services/busi.jpg";
import service1 from "../../constants/images/services/busi11.jpg";
import { CheckCircleIcon } from "@heroicons/react/20/solid"; // Import the check-circle icon

const Business = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img
          src={heading}
          className="object-cover w-full h-full"
          alt="Business Management"
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
          Business Registration
        </h1>
        <p className="text-lg lg:text-xl max-w-2xl mb-8">
          Our team of business registration consultants has extensive experience
          in establishing legal entities for founders, entrepreneurs, and
          conglomerates. With a track record of incorporating over 1500
          organizations across South Asia, we offer valuable insights and
          expertise at any stage of your business journey.
        </p>
        <img
          src={service}
          className="object-cover w-auto h-80 mb-8"
          alt="Business Strategy"
        />
        <p className="text-lg lg:text-xl max-w-2xl mb-8">
          Benefit from the lessons learned by other business owners to sidestep
          common pitfalls and set yourself up for success. Whether you’re
          starting a small business, launching a non-profit, or seeking capital
          for your tech startup, connect with one of our advisors to ensure a
          strong foundation for your venture.
        </p>
      </div>

      {/* Trademark Section */}
      <div className="p-6">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center">
          Trademark
        </h2>
        <p className="text-lg lg:text-xl px-4 lg:px-28 mb-8 text-justify">
          We simplify the process of trademark registration and safeguard your
          valuable assets. Serving thousands of growing businesses across Sri
          Lanka, we ensure that your company name and logo are legally
          protected, preventing others from claiming them. From filing to final
          registration, we handle every step to provide you with comprehensive
          protection.
        </p>
      </div>

      {/* New Card Section */}
      <div className="p-6 bg-gray-100 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/2 p-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center lg:text-left">
              Business & Strategic Planning
            </h2>
            <p className="text-lg lg:text-xl mb-4">
              The business plan is a road map for operating your company and an
              essential means of measuring its progress along the way. It is
              important in any stage of the business cycle whether you are
              looking to raise investment or define a strategic direction in
              which to move your business.
            </p>
            <p className="text-lg lg:text-xl mb-4">
              A good business plan will help you to save money and time by
              focusing your activities as well as giving you more control over
              your finances, marketing and daily operations. Any strategic
              document needs to be well prepared and easily understood, with
              defined objectives, a detailed action plan and agreed timeframes.
            </p>
            <p className="text-lg lg:text-xl">
              Smaller companies don’t always have clear strategies and policies,
              often being preoccupied with short-term issues and sometimes
              day-to-day survival. When clear objectives are established a
              company is more likely to meet its goals.
            </p>
          </div>
          <div className="lg:w-1/2 p-4">
            <img
              src={service1}
              className="object-cover w-full h-auto"
              alt="Expertise"
            />
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="p-6 bg-gray-100 mt-12">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center">
          Key Disciplines
        </h2>
        <ul className="list-disc list-inside text-lg lg:text-xl mt-4 px-4 lg:px-28">
          <li className="flex items-center mb-2">
            <CheckCircleIcon className="w-6 h-6 text-red-500 mr-2" />
            Business plan advice and support
          </li>
          <li className="flex items-center mb-2">
            <CheckCircleIcon className="w-6 h-6 text-red-500 mr-2" />
            Definition and development of business strategy
          </li>
          <li className="flex items-center mb-2">
            <CheckCircleIcon className="w-6 h-6 text-red-500 mr-2" />
            Market and competitor analysis
          </li>
          <li className="flex items-center mb-2">
            <CheckCircleIcon className="w-6 h-6 text-red-500 mr-2" />
            Management review
          </li>
          <li className="flex items-center mb-2">
            <CheckCircleIcon className="w-6 h-6 text-red-500 mr-2" />
            Investment proposal preparation and support
          </li>
          <li className="flex items-center mb-2">
            <CheckCircleIcon className="w-6 h-6 text-red-500 mr-2" />
            Business development plan
          </li>
        </ul>
      </div>
      {/* New Section with Title, Image, Paragraphs, and List */}
      <div className="p-6 mt-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Information Technology
          </h2>
          <img
            src={heading}
            className="mx-auto object-cover w-auto h-80 mb-8"
            alt="Approach"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg lg:text-xl mb-4">
            At Phoenix Soft Solutions, we recognize that Information and
            Communications Technology (ICT) offers transformative opportunities
            for companies to reevaluate their operations and harness
            cutting-edge innovations to drive productivity and growth. In
            today’s competitive landscape, failing to adapt to technological
            advancements can result in being outpaced by competitors or new
            market entrants.
          </p>
          <p className="text-lg lg:text-xl mb-4">
            While many companies rely heavily on the technology that supports
            their operations, it's crucial to remember that the effectiveness of
            these systems hinges on the people who use them. Technology should
            be viewed as a sophisticated toolset designed to enhance job
            performance, with systems and employees needing to work in harmony.
          </p>
          <p className="text-lg lg:text-xl mb-8">
            We specialize in both the strategic and operational aspects of
            technology implementation. Our services include:
          </p>
          <ul className="list-none px-4 lg:px-28">
            <li className="flex items-start mb-4">
              <CheckCircleIcon className="w-10 h-10 text-red-500 mr-3 mt-1" />
              <span className="text-lg lg:text-xl">
                Developing IT Strategy: Crafting a comprehensive IT strategy
                aligned with your business goals, and creating an actionable
                implementation plan.
              </span>
            </li>
            <li className="flex items-start mb-4">
              <CheckCircleIcon className="w-10 h-10 text-red-500 mr-3 mt-1" />
              <span className="text-lg lg:text-xl">
                IT Audits: Evaluating your current IT infrastructure to ensure
                it meets your business needs and identifying areas for
                improvement.
              </span>
            </li>
            <li className="flex items-start mb-4">
              <CheckCircleIcon className="w-10 h-10 text-red-500 mr-3 mt-1" />
              <span className="text-lg lg:text-xl">
                Business Process and Workflow Reviews: Analyzing how IT can
                optimize productivity and streamline operations.
              </span>
            </li>
            <li className="flex items-start mb-4">
              <CheckCircleIcon className="w-10 h-10 text-red-500 mr-3 mt-1" />
              <span className="text-lg lg:text-xl">
                Cost-Benefit Analysis: Assessing the financial implications of
                IT investments to ensure they deliver value.
              </span>
            </li>
            <li className="flex items-start mb-4">
              <CheckCircleIcon className="w-10 h-10 text-red-500 mr-3 mt-1" />
              <span className="text-lg lg:text-xl">
                Benchmarking: Comparing your IT practices against industry
                best-in-class standards to identify opportunities for
                enhancement.
              </span>
            </li>
            <li className="flex items-start mb-4">
              <CheckCircleIcon className="w-10 h-10 text-red-500 mr-3 mt-1" />
              <span className="text-lg lg:text-xl">
                Interim Management: Providing experienced IT leadership on a
                temporary basis, such as an IT director, to guide your
                technology initiatives.
              </span>
            </li>
            <li className="flex items-start mb-4">
              <CheckCircleIcon className="w-10 h-10 text-red-500 mr-3 mt-1" />
              <span className="text-lg lg:text-xl">
                Project Management: Overseeing IT projects to ensure they are
                completed on time, within scope, and on budget.
              </span>
            </li>
          </ul>
          <p className="text-lg lg:text-xl mb-8">
            With Phoenix Soft Solutions, you gain a partner dedicated to
            integrating technology seamlessly with your business strategy,
            ensuring that your IT systems and workforce are poised for success.
          </p>
        </div>
      </div>
      {/* Wave Section */}
      <div className="relative bg-red-600 text-white py-16">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-red-600">
          <svg
            viewBox="0 0 1440 320"
            className="absolute inset-x-0 bottom-0"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#f8f7fa"
              fillOpacity="1"
              d="M0,96L30,117.3C60,139,120,181,180,186.7C240,192,300,160,360,149.3C420,139,480,149,540,186.7C600,224,660,288,720,293.3C780,299,840,245,900,229.3C960,213,1020,235,1080,240C1140,245,1200,235,1260,218.7C1320,203,1380,181,1410,170.7L1440,160L1440,320L0,320Z"></path>
          </svg>
        </div>
        <div className="relative z-10 text-center px-4 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Get Started with Us</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 text-black">
            Contact us today to enhance your business with our cutting-edge AI services and solutions. Let’s
            collaborate to drive innovation and unlock new opportunities for growth.
          </p>
          <a href="/Company/Contactus" className="block">
            <button className="bg-white text-red-500 py-2 px-6 rounded-full font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
              Get in Touch
            </button>
          </a>
        </div>
        </div>
    </div>
  );
};

export default Business;
