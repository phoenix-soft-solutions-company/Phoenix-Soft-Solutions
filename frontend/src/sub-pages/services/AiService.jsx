import React from "react";
import service from "../../constants/images/services/ai.webp";
import exampleImage from "../../constants/images/services/webabout.jpg"; // Replace with the path to your new image

const AI = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img
          src={service}
          className="object-cover w-full h-full"
          alt="Mobile Development"
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
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-red-500"></div>
        </h1>

        <img src={service} className="w-1/2 h-auto mb-6" alt="AI Service" />

        <p className="text-md text-justify px-8  mx-10  mb-6">
          Saigon Technology - a prominent solutions and software development
          company in Vietnam, specializes in providing corporate technology
          solutions that use Artificial Intelligence (AI) and Machine Learning
          (ML).<br></br> As a leader in sophisticated and dependable machine
          learning with custom AI solution implementation, we provide premier IT
          consulting services to assist organizations in turning into
          data-driven enterprises. Our Saigon Technology, in particular, is the
          image that represents expert AI development at the most affordable
          service pricing you can get in the Vietnam IT industry.
        </p>

        {/* Light Red Box */}
        <div className="bg-red-100 p-6 rounded-lg shadow-md w-full max-w-5xl mb-4 border-2 border-red-500">
          <p className="text-4xl text-red-600 font-bold">
            We provide and deploy the most advanced AI-driven services to
            optimize your business operations.
          </p>
        </div>

        {/* Image and Paragraphs Section */}
        <div className="flex flex-col lg:flex-row items-center w-full max-w-5xl px-4 mb-6">
          <img
            src={exampleImage}
            className="w-full lg:w-1/2 h-auto mb-4 lg:mb-0 lg:mr-6"
            alt="Example"
          />
          <div className="flex flex-col w-full lg:w-1/2">
            <p className="text-lg text-justify mb-4">
              Saigon Technology, headquartered in Ho Chi Minh City, Vietnam, and
              with representative offices in Singapore and the United States,
              provides a broad range of qualified technical expertise in machine
              learning, deep learning, computer vision, classification tools,
              data analytics, natural language processing, and other areas.
            </p>
            <p className="text-lg text-justify">
              If you're looking for an AI development firm in Vietnam, we've got
              a team of data scientists, machine learning engineers, and
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
    </div>
  );
};

export default AI;
