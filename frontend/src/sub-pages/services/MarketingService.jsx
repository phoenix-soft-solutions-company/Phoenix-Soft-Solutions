import React from "react";
import service from "../../constants/images/services/marketing.jpg";

const marketing = () => {
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
            Digital  & social media marketing
          </h1>
        </div>
      </div>
    </div>
  );
};

export default marketing;
