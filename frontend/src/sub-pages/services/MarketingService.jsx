import React from "react";
import service from "../../constants/images/services/marketing.jpg"; // Make sure the image path is correct

const Marketing = () => {
  return (
    <div className="min-h-screen relative pt-16">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img src={service} className="object-cover w-full h-full" alt="Digital & Social Media Marketing" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            Digital & Social Media Marketing
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-serif font-bold mb-4">Social Media Marketing Services</h1>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl">
          <div className="w-full mt-10 px-8 lg:px-32 mb-8">
            <img
              src={service}
              className="object-cover w-full h-auto rounded-lg shadow-lg"
              alt="Cybersecurity"
            />
          </div>
          <p className="mb-4 text-justify">
            Is your brand getting the reach it deserves online? With Phoenix Digital media strategies, your
            brand will reach the stratosphere. Physical advertising/marketing strategies are a thing of the
            past, your brand’s online presence is what counts today! Are you utilizing the internet’s full
            potential to market your brand?
          </p>
          <p className="mb-4 text-justify">
            Here at Phoenix Digital, we specialize in all social media marketing strategies in Sri Lanka and
            worldwide. We offer a bespoke service by optimizing new trends and online platforms with content
            creation aimed at your customer base and what social media platforms they are using.
          </p>
          <p className="text-justify">
            Build a strong social media presence with a leading social media marketing agency in Sri Lanka.
          </p>
        </div>
      </div>
      {/* Wave Section */}
      <div className="relative bg-red-500 text-white py-16">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-red-500">
          <svg
            viewBox="0 0 1440 320"
            className="absolute inset-x-0 bottom-0"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#f87171"
              fillOpacity="1"
              d="M0,96L30,117.3C60,139,120,181,180,186.7C240,192,300,160,360,149.3C420,139,480,149,540,186.7C600,224,660,288,720,293.3C780,299,840,245,900,229.3C960,213,1020,235,1080,240C1140,245,1200,235,1260,218.7C1320,203,1380,181,1410,170.7L1440,160L1440,320L0,320Z"></path>
          </svg>
        </div>
        <div className="relative z-10 text-center px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Get Started with Us</h2>
          <p className="text-lg mb-6">
            Contact us today to elevate your brand with our expert digital marketing and social media
            marketing services. Let’s collaborate to enhance your online presence and drive impactful results.
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

export default Marketing;
