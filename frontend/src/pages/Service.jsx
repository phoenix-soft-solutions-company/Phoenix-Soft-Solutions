
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import slide3 from "../constants/images/services/web.png";
import service1 from "../constants/images/services/web.png";
import service2 from "../constants/images/services/web.png";
import service3 from "../constants/images/services/web.png";
import service4 from "../constants/images/services/web.png";
import service5 from "../constants/images/services/web.png";
import service6 from "../constants/images/services/web.png";
import service7 from "../constants/images/services/web.png";
import service8 from "../constants/images/services/web.png";
import service9 from "../constants/images/services/web.png";
import service10 from "../constants/images/services/web.png";
import service11 from "../constants/images/services/web.png";
import service12 from "../constants/images/services/web.png";
const serviceNames = [
  {
    name: "Web Application Development",
    description:
      "To help businesses successfully communicate with their intended demographic, Xcrop Technology provides services that include the complete spectrum of the software development life cycle.",
    image: service1,
    link: "/services/web",
  },
  {
    name: "Mobile App Development",
    description:
      "To achieve our client's business objectives, we design and build feature-rich handheld apps for a wide range of mobile platforms, with a particular emphasis on delivering superior user experiences and making use of cutting-edge mobile technology.",
    image: service2,
    link: "/services/mobile",
  },
  {
    name: "Custom Software Development",
    description:
      "Our expertise is in building scalable and effective software solutions for businesses of all sizes, with a focus on meeting their unique needs in order to encourage expansion and innovative concepts.",
    image: service3,
    link: "/services/custom-software",
  },
  {
    name: "DevOps Services",
    description:
      "We provide appropriate services to facilitate communication and coordination between the software development and IT operations departments. Experience the power of seamless coordination, as we accelerate software delivery and supercharge efficiency.",
    image: service4,
    link: "/services/devops",
  },
  {
    name: "Software Development Outsourcing",
    description:
      "By utilizing Saigon Technology’s services, businesses may make use of our expertise and infrastructure for the smooth completion of their projects at a lower overall cost.",
    image: service5,
    link: "/services/outsourcing",
  },
  {
    name: "Software QA Testing",
    description:
      "Saigon Technology offers thorough testing and bug-fixing to improve overall performance and guarantee the quality, stability, and functioning of software programs as part of our services.",
    image: service6,
    link: "/services/qa-testing",
  },
  {
    name: "Cloud Migration Services",
    description:
      "Experience a seamless transition to the cloud with our exceptional services. We empower businesses to effortlessly move their software and infrastructure, unlocking the incredible benefits of scalability, top-notch security, and remarkable cost-efficiency.",
    image: service7,
    link: "/services/cloud-migration",
  },
  {
    name: "PoC Development Services",
    description:
      "With our exceptional expertise, we empower you to embark on a journey of innovation, ensuring that your concepts are thoroughly tested and validated before embarking on full-scale development.",
    image: service8,
    link: "/services/poc-development",
  },
  {
    name: "AI Development Services",
    description:
      "By combining cutting-edge AI with machine learning, we can create smart software that can streamline business operations and enhance decision-making. Let us transform your business into a realm of efficiency and innovation.",
    image: service9,
    link: "/services/ai-development",
  },
  {
    name: "Front-end Development Services",
    description:
      "Experience superior front-end development services with Saigon Technology. Elevate your digital presence by outsourcing front-end development to us.",
    image: service10,
    link: "/services/frontend-development",
  },
  {
    name: "Back-end Development Services",
    description:
      "Discover how Saigon Technology's superior back-end development services can accelerate your business growth. Your vision, our expertise.",
    image: service11,
    link: "/services/backend-development",
  },
  {
    name: "Software Maintenance and Support",
    description:
      "Explore Saigon Technology's superior software maintenance and support services for optimal efficiency, security, and performance. Contact us today.",
    image: service12,
    link: "/services/maintenance-support",
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
    <div className="flex flex-col min-h-screen">
      <header className="relative w-full h-[50vh]">
        <img
          src={slide3}
          alt="Header Image"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-4xl">Our Services</h1>
        </div>
      </header>
      <div className="flex-1 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {serviceNames.map((service, index) => (
            <div
              className="bg-gray-100 p-4 border border-red-800 text-center cursor-pointer transition-transform transform hover:translate-y-[-10px] hover:text-red-700"
              key={index}
              onClick={() => handleBoxClick(index)}
            >
              <h5 className="flex items-center justify-between">
                {service.name}
                <FontAwesomeIcon icon={faChevronDown} />
              </h5>
            </div>
          ))}
        </div>
        <hr className="my-4" />
        {serviceNames.map((service, index) => (
          <div
            key={index}
            className={`my-8 ${index % 2 === 0 ? "text-left" : "text-right"}`}
            ref={(el) => (sectionsRefs.current[index] = el)}
          >
            <div
              className={`flex items-center ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              }`}
            >
              <div className="flex-1 px-4">
                <h2 className="text-2xl mb-4 underline text-red-700">
                  {service.name}
                </h2>
                <p className="text-lg mb-4">{service.description}</p>
                <button
                  className="bg-red-700 text-white py-2 px-4 text-base rounded hover:bg-red-500"
                  onClick={() => handleReadMoreClick(service.link)}
                >
                  Read More
                </button>
              </div>
              <div className="flex-1 text-center">
                <img
                  src={service.image}
                  alt={service.name}
                  className="max-w-full h-auto border-2 border-blue-700 rounded-lg"
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
