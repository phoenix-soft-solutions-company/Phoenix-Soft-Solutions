import React from "react";
import service1 from "../../constants/images/services/web about 2.jpg";
import icon1 from "../../constants/images/icons/ico1.png";
import icon2 from "../../constants/images/icons/ico1.png";
// import icon3 from "../../constants/images/icons/ico1.png";
import icon4 from "../../constants/images/icons/ico1.png";
import icon5 from "../../constants/images/icons/ico1.png";
import icon6 from "../../constants/images/icons/ico1.png";
import icon7 from "../../constants/images/icons/ico1.png";
import icon8 from "../../constants/images/icons/ico1.png";
import icon9 from "../../constants/images/icons/ico1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const boxes = [
  {
    title: "Back-end Development",
    description:
      "At the core of our web application development, we engineer robust, scalable, and secure server-side solutions. Our expertise lies in knitting together advanced databases and server technologies, forming the backbone of high-performance web applications.",
    icon: icon1,
  },
  {
    title: "Front-end Development",
    description:
      "We excel in crafting front-end designs for web apps, focusing on intuitive, user-friendly interfaces. Harnessing the latest technological advancements, we ensure our applications are not just visually appealing but also offer seamless interactivity.",
    icon: icon2,
  },
  {
    title: "Custom Web App Development",
    description:
      "We delve into creating custom web app development that resonates with your specific business needs and focuses on the user experience, user interface, scalability and flexibility, offering tailor-made digital solutions.",
    icon: icon4,
  },
  {
    title: "Web Portal Development",
    description:
      "As a part of our service spectrum, we develop dynamic web portals with several integration capabilities. These portals amalgamate various online services into one engaging platform, thereby enriching user interaction and experience.",
    icon: icon5,
  },
  {
    title: "Progressive Web Apps Development",
    description:
      "We are at the forefront of creating Progressive Web Apps (PWAs), blending the best features of web and mobile applications with cross-platform capabilities. These PWAs are engineered for high performance and reliability, ensuring seamless functionality across all devices.",
    icon: icon6,
  },
  {
    title: "Mobile Responsive Web Apps",
    description:
      "Our focus on mobile-responsive web apps ensures optimal viewing and functionality across a multitude of devices, catering to the modern user's needs with responsive design techniques and fluid grid layouts.",
    icon: icon7,
  },
  {
    title: "Integration and Testing",
    description:
      "The team seamlessly integrates third-party services and APIs, conducting thorough unit, integration, and user acceptance testing to identify and resolve bugs, ensuring high-quality web applications tailored to your specific needs.",
    icon: icon8,
  },
  {
    title: "Application Support & Maintenance",
    description:
      "Our commitment extends beyond deployment. We provide continuous support and maintenance with ongoing technical support, ensuring the web applications remain up-to-date with upgrades and security management.",
    icon: icon9,
  },
];

const Web = () => {
  return (
    <div className="min-h-screen relative">
      <div className="relative w-full h-[50vh]">
        <img src={service1} className="object-cover w-full h-full" alt="Web Development" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            Web Development
          </h1>
        </div>
      </div>

      <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 text-center mt-10 mb-2 relative">
        Do you Need an Expert Web
        <br /> Application Development Company?
        <span className="block h-1 w-1/12 bg-red-700 mt-2 mx-auto"></span>
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center p-5 gap-5 lg:gap-x-20 xl:gap-x-40">
        <div className="w-full lg:w-1/2 max-w-2xl lg:max-w-xl bg-gray-100 p-6 rounded-lg border-2 border-red-500 shadow-md">
          <p className="text-xl leading-relaxed flex items-start">
            <FontAwesomeIcon icon={faCheckCircle} className="text-red-600 mr-2" />
            Saigon Technology stands at the forefront as a distinguished web application development company,
            boasting a rich legacy of over 12 years in the industry. Our voyage through the realms of web
            development is consistently marked by the benefits of unwavering allegiance to the Agile Mindset,
            crafting tailor-made solutions that range from nurturing startup ventures to developing complex,
            multi-faceted systems for substantial corporate entities.
          </p>
        </div>
        <div className="w-full lg:w-1/2 max-w-md">
          <img src={service1} className="w-full h-auto rounded-lg" alt="Web Development" />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-center items-center p-5 gap-5 lg:gap-x-20 xl:gap-x-40">
        <div className="w-full lg:w-1/2 max-w-md">
          <img src={service1} className="w-full h-auto rounded-lg" alt="Web Development" />
        </div>
        <div className="w-full lg:w-1/2 max-w-2xl lg:max-w-xl bg-gray-100 p-6 rounded-lg border-2 border-red-500 shadow-md">
          <p className="text-xl leading-relaxed flex items-start">
            <FontAwesomeIcon icon={faCheckCircle} className="text-red-600 mr-2" />
            Web application development services refer to the overall designing, development, testing, and
            deployment of applications for the web or cloud, which will be installed on a single or multiple
            remote servers, which users can then access later via the internet. Our prowess in web application
            development is evident in our meticulous handling of bespoke solutions. Whether it's pioneering
            web apps or navigating through intricate system integrations, our approach and rich web experience
            are characterized by a blend of acute precision and unwavering professionalism while keeping
            abreast of the latest technologies.
          </p>
        </div>
      </div>

      <section className="p-10 bg-gray-200 text-center lg:mt-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-5 font-serif">
          Our Web Application Development Services
        </h1>
        <p className="text-xl text-gray-700 mb-10 sm:px-5 lg:px-232 xl:px-52">
          Embarking on a digital transformation journey, our company emerges as a vanguard in web application
          development services. Our team's commitment extends from the germination of an idea to its
          flourishing into a fully-fledged digital entity, ensuring meticulous attention to every detail
          throughout the process.
        </p>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="relative bg-white border-2 border-gray-200 rounded-lg p-4 shadow-md flex flex-col items-start h-auto sm:h-[450px] md:h-[400px] w-72 md:w-80 mx-auto">
                <img src={box.icon} className="absolute top-4 left-4 w-12 h-12" alt={`Icon ${index + 1}`} />
                <h2 className="text-xl font-semibold text-blue-600 mt-14 mb-2 text-start">{box.title}</h2>
                <p className="text-start text-lg text-gray-700">{box.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Web;
