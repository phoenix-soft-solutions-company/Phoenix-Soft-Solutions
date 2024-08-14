import React from "react";
import service from "../../constants/images/services/software-maintain.jpg";
import {
  FaBug, // Icon for Rectification and Stability Enhancement
  FaRocket, // Icon for Progressive Updates and Feature Expansion
  FaShieldAlt, // Icon for System Vigilance and Safety Assurance
  FaLifeRing, // Icon for Expert Assistance and Guidance
  FaTachometerAlt, // Icon for Optimizing for Peak Performance
  FaLock, // Icon for Robust Security Strengthening
} from "react-icons/fa";

const Software = () => {
  const cards = [
    {
      icon: <FaBug className="text-4xl text-red-500" />,
      title: "Rectification and Stability Enhancement",
      description:
        "We prioritize identifying and fixing software defects to enhance stability and reliability. Our rigorous testing protocols aim not only to correct immediate issues but also to preempt future problems. This approach significantly improves the end-user experience and bolsters client satisfaction, ensuring that the software remains dependable and efficient.",
    },
    {
      icon: <FaRocket className="text-4xl text-red-500" />,
      title: "Progressive Updates and Feature Expansion",
      description:
        "Our commitment to developing new features extends the capabilities of existing software, keeping it ahead in a competitive market. This continuous evolution not only meets dynamic user needs but also ensures that the software stays relevant and aligned with the latest market trends. Our development team collaborates closely with our clients to understand their evolving needs, crafting features that provide tangible value.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-red-500" />,
      title: "System Vigilance and Safety Assurance",
      description:
        "Our infrastructure monitoring service is dedicated to maintaining and protecting software infrastructure. By proactively identifying and resolving issues, we optimize system performance, minimize downtime, and enhance reliability. This vigilant monitoring also plays a crucial role in safeguarding the system against unauthorized access, ensuring the utmost security and peace of mind for our clients.",
    },
    {
      icon: <FaLifeRing className="text-4xl text-red-500" />,
      title: "Expert Assistance and Guidance",
      description:
        "Our team of experienced Developers and Engineers offers comprehensive technical support for software projects we have developed or for existing client software. This support extends beyond troubleshooting to include strategic advice on software use and enhancements, ensuring clients can fully leverage their software for maximum benefit.",
    },
    {
      icon: <FaTachometerAlt className="text-4xl text-red-500" />,
      title: "Optimizing for Peak Performance",
      description:
        "Through our services, we focus on enhancing the performance of software to ensure it operates at peak efficiency. This optimization includes streamlining processes, reducing resource usage, and improving response times, which collectively lead to a smoother, more efficient user experience and increased operational productivity.",
    },
    {
      icon: <FaLock className="text-4xl text-red-500" />,
      title: "Robust Security Strengthening",
      description:
        "In our maintenance and support efforts, enhancing software security is a top priority. We continuously update security protocols to defend against new threats, ensuring the software's integrity and the safety of user data. This proactive approach to security helps in maintaining user trust and complying with regulatory standards, keeping the software secure in an ever-changing digital landscape.",
    },
  ];

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
            Software Maintenance and Support
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between p-16 mx-8">
        {/* Left Side - Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-2xl lg:text-4xl font-serif font-bold tracking-widest text-gray-900 mb-4">
            Maximizing Software Potential with Advanced Software Maintenance and
            Support Services
          </h1>
          <p className="text-lg lg:text-xl text-gray-700">
            As businesses increasingly rely on sophisticated software
            development solutions, the necessity for robust software maintenance
            and support services becomes paramount. We recognize this critical
            need and offer a suite of services designed to enhance, secure, and
            optimize software systems. This section delves into the various
            aspects of our service offerings, each tailored to ensure that your
            software not only functions flawlessly but also evolves in tandem
            with your business needs.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={service}
            className="object-cover w-full h-full"
            alt="DevOps Service"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 mx-16">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg text-center"
          >
            {card.icon}
            <h2 className="text-xl font-bold mt-4">{card.title}</h2>
            <p className="text-gray-600 mt-2">{card.description}</p>
          </div>
        ))}
      </div>
      {/* Wave Section */}
      <div className="relative bg-red-500 text-white py-16">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-red-500">
          <svg
            viewBox="0 0 1440 320"
            className="absolute inset-x-0 bottom-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f87171"
              fillOpacity="1"
              d="M0,96L30,117.3C60,139,120,181,180,186.7C240,192,300,160,360,149.3C420,139,480,149,540,186.7C600,224,660,288,720,293.3C780,299,840,245,900,229.3C960,213,1020,235,1080,240C1140,245,1200,235,1260,218.7C1320,203,1380,181,1410,170.7L1440,160L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="relative z-10 text-center px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Get Started with Us</h2>
          <p className="text-lg mb-6">
            Contact us today to enhance your business with our expert software
            maintenance and support services. Let’s collaborate to ensure your
            systems run smoothly and efficiently.
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

export default Software;
