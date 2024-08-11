import React from "react";
import service1 from "../../constants/images/services/webabout.jpg";

const outsourcing = () => {
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
            SOFTWARE DEVELOPMENT OUTSOURCING
          </h1>
        </div>
      </div>
    </div>
  );
};

export default outsourcing;
