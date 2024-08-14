import React from "react";
import service from "../../constants/images/services/marketing.jpg"; // Make sure the image path is correct

const Marketing = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img
          src={service}
          className="object-cover w-full h-full"
          alt="Digital & Social Media Marketing"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            Digital & Social Media Marketing
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-serif font-bold mb-4">
          Social Media Marketing Services
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl">
          <div className="w-full mt-10 px-8 lg:px-32 mb-8">
            <img
              src={service}
              className="object-cover w-full h-auto rounded-lg shadow-lg"
              alt="Cybersecurity"
            />
          </div>
          <p className="mb-4 text-justify">
            Is your brand getting the reach it deserves online? With Phoenix
            Digital media strategies, your brand will reach the stratosphere.
            Physical advertising/marketing strategies are a thing of the past,
            your brand’s online presence is what counts today! Are you utilizing
            the internet’s full potential to market your brand?
          </p>
          <p className="mb-4 text-justify">
            Here at Phoenix Digital, we specialize in all social media marketing
            strategies in Sri Lanka and worldwide. We offer a bespoke service by
            optimizing new trends and online platforms with content creation
            aimed at your customer base and what social media platforms they are
            using.
          </p>
          <p className="text-justify">
            Build a strong social media presence with a leading social media
            marketing agency in Sri Lanka.
          </p>

          {/* Button */}
          <div className="mt-6">
            <a
              href="/Company/Contactus"
              className="inline-block px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow hover:bg-red-600 transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
