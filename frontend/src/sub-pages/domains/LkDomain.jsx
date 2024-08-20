import React from "react";
import heading from "../../constants/images/tech/technology-heading.jpg";

function LkDomain() {
  return (
    <div className="min-h-screen relative pt-16">
      <header className="relative w-full h-[50vh]">
        <img
          src={heading}
          alt="header"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest">
           LK DOMAIN
          </h1>
        </div>
      </header>

      <h1 className="mt-8 text-center text-3xl lg:text-4xl font-bold text-gray-800">
        Maintenance
      </h1>
    </div>
  );
}
export default LkDomain;
