import React from "react";
import heading from "../constants/images/tech/technology-heading.jpg";
import Aboutus from "../sub-pages/company/Aboutus";
import Contactus from "../sub-pages/company/Contactus";


const CompanyPage = () => {
  return (
    <div className="min-h-screen relative">
      <header className="relative w-full h-[50vh]">
        <img src={heading} alt="header" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest">COMPANY</h1>
        </div>
      </header>

      <Aboutus showHeaderImage={false} />

      <h2 className="text-2xl md:text-5xl font-bold mb-4 text-center mt-10 font-mono">CONTACT US</h2>
      <Contactus showHeaderImage={false} />
    </div>
  );
};

export default CompanyPage;
