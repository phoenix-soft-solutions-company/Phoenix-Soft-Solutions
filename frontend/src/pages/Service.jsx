import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Service from "../constants/images/services/service.jpg";
import webService from "../constants/images/services/webabout.jpg";
import mobileService from "../constants/images/services/mobile_app.png";
import devopService from "../constants/images/services/devops.jpg";
import qaService from "../constants/images/services/qa.jpg";
import aiService from "../constants/images/services/ai.webp";
import softwaremanitainService from "../constants/images/services/software-maintain.jpg";
import customService from "../constants/images/services/custom.jpg";
import backendService from "../constants/images/services/backend.jpg";
import sedevelopmentService from "../constants/images/services/sedevelopment.webp";
import frontendService from "../constants/images/services/frontend.webp";
import cloudService from "../constants/images/services/cloud.webp";
import pocService from "../constants/images/services/poc.jpg";
import marketingService from "../constants/images/services/marketing.jpg";
import cyberService from "../constants/images/services/cyber.jpg";
import managementService from "../constants/images/services/management.jpg";
import graphicService from "../constants/images/services/graphic.jpg";

const serviceNames = [
  {
    name: "Web Application Development",
    description:
      "To help businesses successfully communicate with their intended demographic, Xcrop Technology provides services that include the complete spectrum of the software development life cycle.",
    image: webService,
    link: "/service/web",
  },
  {
    name: "Mobile App Development",
    description:
      "To achieve our client's business objectives, we design and build feature-rich handheld apps for a wide range of mobile platforms, with a particular emphasis on delivering superior user experiences and making use of cutting-edge mobile technology.",
    image: mobileService,
    link: "/service/mobile",
  },
  {
    name: "Custom Software Development",
    description:
      "Our expertise is in building scalable and effective software solutions for businesses of all sizes, with a focus on meeting their unique needs in order to encourage expansion and innovative concepts.",
    image: customService,
    link: "/service/custom",
  },
  {
    name: "DevOps Services",
    description:
      "We provide appropriate services to facilitate communication and coordination between the software development and IT operations departments. Experience the power of seamless coordination, as we accelerate software delivery and supercharge efficiency.",
    image: devopService,
    link: "/service/devops",
  },
  {
    name: "Software Development Outsourcing",
    description:
      "By utilizing Saigon Technology’s services, businesses may make use of our expertise and infrastructure for the smooth completion of their projects at a lower overall cost.",
    image: sedevelopmentService,
    link: "/service/outsourcing",
  },
  {
    name: "Software QA Testing",
    description:
      "Saigon Technology offers thorough testing and bug-fixing to improve overall performance and guarantee the quality, stability, and functioning of software programs as part of our services.",
    image: qaService,
    link: "/service/qa",
  },
  {
    name: "Cloud Migration Services",
    description:
      "Experience a seamless transition to the cloud with our exceptional services. We empower businesses to effortlessly move their software and infrastructure, unlocking the incredible benefits of scalability, top-notch security, and remarkable cost-efficiency.",
    image: cloudService,
    link: "/service/cloud",
  },
  {
    name: "PoC Development Services",
    description:
      "With our exceptional expertise, we empower you to embark on a journey of innovation, ensuring that your concepts are thoroughly tested and validated before embarking on full-scale development.",
    image: pocService,
    link: "/service/poc",
  },
  {
    name: "AI Development Services",
    description:
      "By combining cutting-edge AI with machine learning, we can create smart software that can streamline business operations and enhance decision-making. Let us transform your business into a realm of efficiency and innovation.",
    image: aiService,
    link: "/service/ai",
  },
  {
    name: "Front-end Development Services",
    description:
      "Experience superior front-end development services with Saigon Technology. Elevate your digital presence by outsourcing front-end development to us.",
    image: frontendService,
    link: "/service/frontend",
  },
  {
    name: "Back-end Development Services",
    description:
      "Discover how Phoenix Soft Solutions's superior back-end development services can accelerate your business growth. Your vision, our expertise.",
    image: backendService,
    link: "/service/backend",
  },
  {
    name: "Software Maintenance and Support",
    description:
      "Explore Phoenix Soft Solutions's superior software maintenance and support services for optimal efficiency, security, and performance. Contact us today.",
    image: softwaremanitainService,
    link: "/service/software",
  },
  {
    name: "Digital Marketing and Social Media Marketing",
    description:
      "Explore Phoenix Soft Solutions's superior software maintenance and support services for optimal efficiency, security, and performance. Contact us today.",
    image: marketingService,
    link: "/service/marketing",
  },
  {
    name: "Cyber Security System Development",
    description:
      "Explore Phoenix Soft Solutions's superior software maintenance and support services for optimal efficiency, security, and performance. Contact us today.",
    image: cyberService,
    link: "/service/cyber",
  },
  {
    name: "Business Managements",
    description:
      "Explore Phoenix Soft Solutions's superior software maintenance and support services for optimal efficiency, security, and performance. Contact us today.",
    image: managementService,
    link: "/service/business",
  },
  {
    name: "Graphic Design",
    description:
      "Explore Phoenix Soft Solutions's superior software maintenance and support services for optimal efficiency, security, and performance. Contact us today.",
    image: graphicService,
    link: "/service/graphic",
  },
];

const ServicePage = () => {
  const sectionsRefs = useRef([]);
  const navigate = useNavigate();

  const handleBoxClick = (index) => {
    sectionsRefs.current[index].scrollIntoView({ behavior: "smooth" });
  };

  const handleReadMoreClick = (link) => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <header className="relative w-full h-[50vh]">
        <img src={Service} alt="Header-Service" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest uppercase">
            Our Services
          </h1>
        </div>
      </header>

      <div className="flex-1 py-4 lg:py-8 px-4 md:px-10 lg:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {serviceNames.map((service, index) => (
            <div
              className="bg-grey-100 p-4 border border-red-800 text-center cursor-pointer transition-transform transform hover:-translate-y-2 hover:text-red-700 min-w-76 duration-300 ease-in-out"
              key={index}
              onClick={() => handleBoxClick(index)}>
              <h5 className="flex items-center justify-between text-md xl:text-lg font-sans">
                {service.name}
                <FontAwesomeIcon icon={faChevronDown} />
              </h5>
            </div>
          ))}
        </div>

        <hr className="my-4 lg:my-8 border border-gray-300" />

        {serviceNames.map((service, index) => (
          <div
            key={index}
            className={`my-4 lg:my-8 ${index % 2 === 0 ? "sm:text-left" : "sm:text-right"}`}
            ref={(el) => (sectionsRefs.current[index] = el)}>
            <div
              className={`flex flex-col sm:flex-row items-center bg-red-100 border border-gray-100 rounded-xl shadow-md p-3 sm:p-4 md:px-8 lg:px-20  ${
                index % 2 === 0 ? "" : "sm:flex-row-reverse"
              }`}>
              <div className="flex-1">
                <h2 className="text-2xl mb-4 underline text-red-700 font-mono">{service.name}</h2>
                <p className="text-lg text-gray-600 mb-4">{service.description}</p>
                <button
                  className="border-2 border-red-700 bg-red-700 text-white py-2 px-6 text-base rounded hover:bg-white hover:text-red-700 transition duration-500"
                  onClick={() => handleReadMoreClick(service.link)}>
                  Read More
                </button>
              </div>

              <div className="flex-1 flex items-center justify-center mt-2 sm:mt-0">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-auto max-w-80 xl:w-[500px] xl:max-w-[500px] mx-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
