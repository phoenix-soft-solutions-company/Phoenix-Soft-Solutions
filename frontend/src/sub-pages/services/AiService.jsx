import React from "react";
import service from "../../constants/images/services/ai.webp";
import ai1 from "../../constants/images/services/ai1.jpg";
import ai2 from "../../constants/images/services/ai2.jpg";

const AI = () => {
  return (
    <div className="min-h-screen relative pt-16">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img
          src={service}
          className="object-cover w-full h-full"
          alt="AI Development"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            AI Development SERVICE
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center mt-10 px-4">
        <h1 className="text-3xl font-serif font-bold text-center relative mb-6">
          MACHINE LEARNING & AI DEVELOPMENT SERVICES
          <span className="block h-1 w-1/12 bg-red-700 mt-2 mx-auto"></span>
        </h1>

        {/* Reduced Size Image */}
        <img src={ai1} className="w-1/3 h-50 mb-6" alt="AI Service" />

        <p className="text-md text-justify px-8 mx-10 mb-6">
          Phoenix Soft Solutions - a prominent solutions and software
          development company in Australia, specializes in providing corporate
          technology solutions that use Artificial Intelligence (AI) and Machine
          Learning (ML).
          <br /> As a leader in sophisticated and dependable machine learning
          with custom AI solution implementation, we provide premier IT
          consulting services to assist organizations in turning into
          data-driven enterprises. Our Saigon Technology, in particular, is the
          image that represents expert AI development at the most affordable
          service pricing you can get in the Vietnam IT industry.
        </p>

        {/* Light Red Box */}
        <div className="bg-red-100 p-6 rounded-lg shadow-md w-full max-w-5xl mb-14 mt-10 border-2 border-red-500">
          <p className="text-4xl text-red-600 font-bold">
            We provide and deploy the most advanced AI-driven services to
            optimize your business operations.
          </p>
        </div>

        {/* Image and Paragraphs Section */}
        <div className="flex flex-col lg:flex-row items-center w-full max-w-5xl px-4 mb-6">
          <img
            src={ai2}
            className="w-full lg:w-1/2 h-auto mb-4 lg:mb-0 lg:mr-6"
            alt="Example"
          />
          <div className="flex flex-col w-full lg:w-1/2">
            <p className="text-lg text-justify mb-4">
              Phoenix Soft Solutions, headquartered in Ho Chi Minh City,
              Vietnam, and with representative offices in Singapore and the
              United States, provides a broad range of qualified technical
              expertise in machine learning, deep learning, computer vision,
              classification tools, data analytics, natural language processing,
              and other areas.
            </p>
            <p className="text-lg text-justify">
              If you're looking for an AI development firm in Australia, we've
              got a team of data scientists, machine learning engineers, and
              software developers that are well versed in cutting-edge AI
              (Artificial Intelligence), ML (Machine Learning), and Big Data
              tool-sets to help you solve your business challenges. Our AI
              (Artificial Intelligence) development services, in particular,
              will assist empowered business applications in making better and
              more educated decisions, automating corporate processes, and
              detecting anomalies.
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
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f8f7fa"
              fillOpacity="1"
              d="M0,96L30,117.3C60,139,120,181,180,186.7C240,192,300,160,360,149.3C420,139,480,149,540,186.7C600,224,660,288,720,293.3C780,299,840,245,900,229.3C960,213,1020,235,1080,240C1140,245,1200,235,1260,218.7C1320,203,1380,181,1410,170.7L1440,160L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="relative z-10 text-center px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Get Started with Us</h2>
          <p className="text-lg mb-6 text-black">
            Contact us today to enhance your business with our cutting-edge AI
            services and solutions. Let’s collaborate to drive innovation and
            unlock new opportunities for growth.
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

export default AI;
