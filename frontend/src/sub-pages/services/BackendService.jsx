import React from "react";
import { FaMobileAlt, FaDesktop, FaDatabase, FaTools, FaCloud, FaGlobe } from "react-icons/fa"; // Import the required icons
import service from "../../constants/images/services/backend.jpg";

const Backend = () => {
  return (
    <div className="min-h-screen relative ">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] sm:h-[50vh]">
        <img
          src={service}
          className="object-cover w-full h-full"
          alt="Backend Development"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold tracking-widest text-white uppercase text-center">
            Backend Development Service
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center py-8 sm:py-12 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Our Backend Development Services
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl">
          We are your dependable partner in backend development. Our passion is
          to ignite innovation. We strive to help businesses meet their goals.
          Experience the difference that our expertise and dedication make
          firsthand.
        </p>
      </div>

      {/* Cards Section */}
      <div className="py-8 sm:py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center mb-4">
            <FaMobileAlt className="text-3xl sm:text-4xl mb-4 text-red-500" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Custom Backend Development
            </h2>
            <p className="text-sm sm:text-base text-justify">
              Backend development, the heart of software and web applications,
              involves crafting functional structures and custom backend layers
              with solutions that offer scalability. Our developers focus on
              server, database, and app integration, using tools like Java,
              Python, Ruby on Rails, Django, MongoDB, and MySQL. Their mission
              is to build and maintain the server side of applications, ensuring
              smooth operations and creating tailored backend systems.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center mb-4">
            <FaDesktop className="text-3xl sm:text-4xl mb-4 text-red-500" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Mobile App Backend Development
            </h2>
            <p className="text-sm sm:text-base text-justify">
              We craft backend systems for diverse applications, including
              multimedia, enterprise mobile apps, social networks, and smart
              devices. Our team manages business logic, application servers, and
              data synchronization across platforms. Prioritizing speed and
              secure data storage, our scalable backend systems integrate with
              third-party services, ensuring smooth operation and adaptability
              to your evolving needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center mb-4">
            <FaDatabase className="text-3xl sm:text-4xl mb-4 text-red-500" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Backend Web Applications
            </h2>
            <p className="text-sm sm:text-base text-justify">
              Our dedicated team specializes in developing infrastructures for
              IoT, large-scale systems, and web portals. We are committed to
              delivering systems that can handle high loads and ensure stability
              through server-side logic. You can ensure your platform operates
              smoothly and efficiently by leveraging our backend software
              development expertise.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center mb-4">
            <FaTools className="text-3xl sm:text-4xl mb-4 text-red-500" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              API Development and Integration
            </h2>
            <p className="text-sm sm:text-base text-justify">
              Backend API development is necessary for infrastructure support to
              app integration with third-party services. It facilitates
              communication, manages data, and executes business logic. We are
              proficient in .NET and Java technologies, using tools and
              frameworks such as Express.js, Swagger/OpenAPI, Django, SoapUI,
              and Postman. With these, we construct, verify, document, and
              launch APIs. These APIs ensure all parts of the application work
              together flawlessly.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center mb-4">
            <FaCloud className="text-3xl sm:text-4xl mb-4 text-red-500" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Backend Testing
            </h2>
            <p className="text-sm sm:text-base text-justify">
              QA testing ensures your backend is sturdy and dependable. This
              process guarantees efficient data handling and smooth coordination
              between application components. Our engineers use manual and
              automated methods to test for functionality, performance,
              security, and more. We utilize various tools, including Postman
              for API testing and OWASP ZAP for scanning security
              vulnerabilities.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center mb-4">
            <FaGlobe className="text-3xl sm:text-4xl mb-4 text-red-500" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Cloud Backend Solutions
            </h2>
            <p className="text-sm sm:text-base text-justify">
              Cloud backend services provide the benefits of accessibility,
              scalability, and adaptability. We construct the backend for
              easy-to-use cloud-based mobile and web applications by working
              alongside frontend developers and utilizing cloud computing
              platforms such as Azure, AWS, and FaaS tools.
            </p>
          </div>
        </div>
      </div>

      {/* Wave Section */}
      <div className="relative bg-red-600 text-white py-12 sm:py-16">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-red-600">
          <svg
            viewBox="0 0 1440 320"
            className="absolute inset-x-0 bottom-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f8f7fa"
              fillOpacity="1"
              d="M0,96L30,117.3C60,139,120,181,180,186.7C240,192,300,160,360,149.3C420,139,480,149,540,186.7C600,224,660,288,720,293.3C780,299,840,245,900,229.3C960,213,1020,235,1080,240C1140,245,1200,235,1260,218.7C1320,203,1380,181,1410,170.7L1440,160L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="relative z-10 text-center px-4 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Get Started with Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 text-black">
            Contact us today to elevate your business with our expert backend
            development services. Let’s collaborate to create stunning,
            user-friendly websites and applications that drive success.
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

export default Backend;
