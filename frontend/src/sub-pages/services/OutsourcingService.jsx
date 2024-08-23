import React from "react";
import service from "../../constants/images/services/sedevelopment.webp";
import sideImage from "../../constants/images/services/se.jpg"; // Adjust path if needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Outsourcing = () => {
  return (
    <div className="min-h-screen relative ">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img src={service} className="object-cover w-full h-full" alt="Mobile Development" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            SOFTWARE DEVELOPMENT OUTSOURCING
          </h1>
        </div>
      </div>

      {/* Header Section */}
      <div className="mt-8 flex flex-col items-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center">
          Discover Your Ideal Software
          <br /> Outsourcing Company
        </h1>
        <div className="w-24 h-1 mt-2 bg-red-500"></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-start mt-12 mx-8 lg:mx-24">
        {/* Left Side Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img src={sideImage} className="object-cover w-full h-full" alt="Outsourcing Service" />
        </div>

        {/* Right Side Paragraphs */}
        <div className="w-full lg:w-1/2 lg:pl-12 space-y-4">
          <p className="flex items-start text-lg">
            <FontAwesomeIcon icon={faCheckCircle} className="text-red-600 text-xl mr-2 mt-1" />
            Phoenix Soft Solutions has one goal: your success is our mission! We are a top software
            outsourcing company with over 12 years of experience. We have completed over 800 projects in many
            areas. This means we keep up with tech changes.
          </p>
          <p className="flex items-start text-lg">
            <FontAwesomeIcon icon={faCheckCircle} className="text-red-600 text-xl mr-2 mt-1" />
            Skilled project managers and tech team leaders lead our end-to-end services. Teams of developers
            with experience across many domains handle the coding. This method ensures high-quality products
            from start to finish. It lets you focus on your business.
          </p>
          <p className="flex items-start text-lg">
            <FontAwesomeIcon icon={faCheckCircle} className="text-red-600 text-xl mr-2 mt-1" />
            With over 350 developers, we offer flexible engagement models. These fit your budget and goals.
            Our advanced methods reduce project risks and fast-track your market entry. <br />
            <br />
            Let's explore these details with Saigon Technology!
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center py-8">
        <h1 className="text-2xl lg:text-3xl font-serif font-bold text-center mb-4">
          Entrust Your Software<br></br> Development Outsourcing to <br></br>
          Phoenix Soft Solutions
        </h1>
        <p className="text-gray-700 text-center max-w-2xl">
          Choose Phoenix Soft Solutions for your software development. We promise top-quality results at a
          lower cost. Our approach ensures a smooth process from start to finish. Enjoy a stress-free
          experience as we handle your needs.
        </p>
      </div>

      {/* Card Section */}
      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-serif font-bold flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-red-600 text-xl mr-2" />
              Experience Excellence
            </h3>
            <p className="text-gray-700">
              Are you looking for software developers? We have been creating solutions for global companies
              for over 12 years. Our team grows with technology. That’s why we gain knowledge to meet complex
              needs. We are ready to handle your project requirements with precision.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-serif font-bold flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-red-600 text-xl mr-2" />
              Harvest of Project Experiences
            </h3>
            <p className="text-gray-700">
              We have worked on over 800 diverse projects. Our experience covers many areas and industries.
              Our team is equipped to handle any project challenges. From our past projects, we have learned
              valuable insights. These help us improve and create innovative solutions. Trust us to deliver
              effective results.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-serif font-bold flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-red-600 text-xl mr-2" />
              Cost-Effective Solutions with a Vietnamese Team
            </h3>
            <p className="text-gray-700">
              Software development can be pricey in the US and Europe. But, outsourcing developers from
              Vietnam offers a budget-friendly option. We charge between $30 and $49 per hour, based on the
              services you choose. You get expert solutions every time, no matter the price or place.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-serif font-bold flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-red-600 text-xl mr-2" />
              Gateway to Skilled Professionals
            </h3>
            <p className="text-gray-700">
              We select only the top IT talent in Vietnam, focusing on the top 1% of graduates. Our hiring
              process is strict, ensuring we work with the best developers. We offer intern training in tech,
              English, and management as well.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-serif font-bold flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-red-600 text-xl mr-2" />
              Various Flexible Engagement Models
            </h3>
            <p className="text-gray-700">
              Our team of over 350 developers excels in many fields. This allows us to offer different work
              models to suit your needs. We provide staff augmentation, dedicated development teams,
              fixed-price options, and an ODC model. Each is designed to match client demands, helping you
              meet your budget and deadlines.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-serif font-bold flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-red-600 text-xl mr-2" />
              Adoption of Agile Principles
            </h3>
            <p className="text-gray-700">
              We use agile principles to stay swift and responsive with outsourcing software development. This
              style shapes our client-focused approach. It supports ongoing improvements and suits changing
              needs and market shifts.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-serif font-bold flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-red-600 text-xl mr-2" />
              Spectrum of Data Security and Quality Management
            </h3>
            <p className="text-gray-700">
              We hold ISO 9001 and ISO/IEC 27001 certificates. These ensure top quality. It means secure
              information handling in software outsourcing and development. No matter the project's
              complexity, we maintain quality at every stage.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-serif font-bold flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-red-600 text-xl mr-2" />
              Frontline Technological Adoption
            </h3>
            <p className="text-gray-700">
              Our use of cutting-edge technology and AI keeps us up-to-date. We adopt the latest methods to
              meet the demands of the digital age. This ensures your product gets the newest solutions, giving
              you a market advantage.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-serif font-bold flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-red-600 text-xl mr-2" />
              Unified Communication
            </h3>
            <p className="text-gray-700">
              Our team has completed numerous projects worldwide. The locations include the US, Australia, UK,
              Switzerland, and Singapore. Phoenix Soft Solutions’s developers are fluent in English and
              understand various cultural nuances. This makes the team ideal for any project.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-serif font-bold flex items-center mb-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-red-600 text-xl mr-2" />
              Professional Project Management
            </h3>
            <p className="text-gray-700">
              We ensure timely delivery with our outsourcing software development services. We do this by
              assigning an experienced Project Manager and a Tech Lead to each project. You will meet these
              key team members before we start working on your project.
            </p>
          </div>
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
          <h2 className="text-3xl font-bold mb-4">Get Started with Us</h2>
          <p className="text-lg mb-6 text-black">
            Contact us today to elevate your business with our expert software development outsourcing
            services. Let’s collaborate to build innovative solutions that drive success.
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

export default Outsourcing;
