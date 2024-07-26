import React from "react";
import heading from "../constants/images/tech/technology-heading.jpg";
import nodejs from "../constants/images/tech/nodejs.png";
import php from "../constants/images/tech/php.png";
import python from "../constants/images/tech/python.png";
import reactImg from "../constants/images/tech/react.png";
import angular from "../constants/images/tech/angular.png";
import aws from "../constants/images/tech/AWS.png";
import android from "../constants/images/tech/Android.png";
import java from "../constants/images/tech/java.png";
import ios from "../constants/images/tech/IOS.png";
import js from "../constants/images/tech/js.png";
import webapp from "../constants/images/tech/web_app.png";
import mobileapp from "../constants/images/tech/mobile_app.png";
import bussinessapp from "../constants/images/tech/Busines_app.png";
import custom from "../constants/images/tech/Busines_app.png";
import service1 from "../constants/images/tech/transport.png";
import service2 from "../constants/images/tech/account.png";
import service3 from "../constants/images/tech/health.png";
import service4 from "../constants/images/tech/bussines.png";
import service5 from "../constants/images/tech/bank.png";
import service6 from "../constants/images/tech/ecommernce.png";

const images = [
  nodejs,
  php,
  python,
  reactImg,
  angular,
  aws,
  android,
  java,
  ios,
  js,
];

const titles = [
  "Node.js",
  "PHP",
  "Python",
  "React",
  "Angular",
  "AWS",
  "Android",
  "Java",
  "iOS",
  "JavaScript",
];

const boxes = [
  {
    image: webapp,
    topic: "Web Applications",
    paragraph:
      "Custom web development, corporate extranets and intranets, CRM systems and e-commerce portals. Cloud-enabled and SaaS applications that boast high scalability, security and accessibility. Mobile-friendly web app development.",
  },
  {
    image: mobileapp,
    topic: "Mobile Apps",
    paragraph:
      "Cross-device and cross-platform compatible applications for iOS, Android. Hybrid solutions that combine both mobile and web app advantages and deliver exceptional user experience on any device and platform. Well-designed user interfaces following the latest trends in UX/UI design. Native development: Java Kotlin and Object C.",
  },
  {
    image: bussinessapp,
    topic: "Business Application",
    paragraph:
      "Feature-rich systems for companies from various industries. The technology solutions are compliant with strict business and industry requirements and standards. We develop networked and standalone applications for Windows, Mac OS, Linux/Unix leveraging the best of relevant technologies.",
  },
  {
    image: custom,
    topic: "Customize Software Solutions",
    paragraph:
      "As the top custom software development company in Vietnam, we have served more than 100 enterprises and startup clients from developed countries since 2012, with the power of top senior designers and developers, in the heart of Ho Chi Minh City, Vietnam.",
  },
];

const services = [
  {
    image: service1,
    topic: "Transportation and Logistics",
  },
  {
    image: service2,
    topic: "Accounting",
  },
  {
    image: service3,
    topic: "Healthcare",
  },
  {
    image: service4,
    topic: "Business Software Development",
  },
  {
    image: service5,
    topic: "Banking and Finance",
  },
  {
    image: service6,
    topic: "E-commerce",
  },
];

const Technology = () => {
  return (
    <div className="min-h-screen relative">
      <header className="relative w-full h-[50vh]">
        <img
          src={heading}
          alt="header"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest">
            TECHNOLOGIES
          </h1>
        </div>
      </header>
      <div className="container mx-auto mt-8 mb-10">
        <h1 className="text-center text-6xl font-bold tracking-wider font-mono uppercase px-4 mt-8 relative inline-block after:block after:h-1 after:w-1/2 after:bg-red-500 after:mt-2 after:mx-auto">
          Explore Our Technologies
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 justify-center p-10">
          {images.map((image, index) => (
            <div
              className="border border-gray-200 p-4 text-center shadow-lg transition-transform transform hover:scale-105 m-0"
              key={index}
            >
              <div className="flex items-center justify-center mx-auto h-40 w-60">
                <img
                  src={image}
                  alt={titles[index]}
                  className="object-contain h-full w-full "
                />
              </div>
              <h2 className="mt-4 text-lg lg:text-2xl font-semibold font-mono">
                {titles[index]}
              </h2>
            </div>
          ))}
        </div>
        <h1 className="text-center text-6xl font-bold tracking-wider font-mono uppercase px-4 mt-8 relative inline-block after:block after:h-1 after:w-1/2 after:bg-red-500 after:mt-2 after:mx-auto">
          Our Technology Boxes
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 mt-8 px-10 mb-10">
          {boxes.map((box, index) => (
            <div
              className="border border-red-500 p-6 text-center shadow-lg m-0"
              key={index}
            >
              <div className="flex items-center justify-center mx-auto h-80 w-90 mb-4">
                <img
                  src={box.image}
                  alt={box.topic}
                  className="object-contain h-full w-full"
                />
              </div>
              <h2 className="text-xl font-bold mb-2">{box.topic}</h2>
              <p className="text-gray-700">{box.paragraph}</p>
            </div>
          ))}
        </div>
        <h1 className="text-center text-6xl font-bold tracking-wider font-mono uppercase px-4 mt-8 relative inline-block after:block after:h-1 after:w-1/2 after:bg-red-500 after:mt-2 after:mx-auto">
          DOMAIN EXPERTISE
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 mt-8 px-10 mb-10">
          {services.map((service, index) => (
            <div
              className="border border-red-500 p-6 text-center shadow-lg m-0"
              key={index}
            >
              <div className="flex items-center justify-center mx-auto h-80 w-90 mb-4">
                <img
                  src={service.image}
                  alt={service.topic}
                  className="object-contain h-full w-full"
                />
              </div>
              <h2 className="text-xl font-bold mb-2">{service.topic}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
