import React from "react";
import {
  FaMobileAlt,
  FaDesktop,
  FaDatabase,
  FaTools,
  FaCloud,
  FaGlobe,
} from "react-icons/fa"; // Import the required icons
import service from "../../constants/images/services/backend.jpg";

const backend = () => {
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
            Backend Development Service
          </h1>
        </div>
      </div>
      {/* Content Section */}
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          Our Backend Development Services
        </h1>
        <p className="text-lg lg:text-xl leading-relaxed max-w-2xl">
          We are your dependable partner in backend development. Our passion is
          to ignite innovation. We strive to help businesses to meet their
          goals. Experience the difference that our expertise and dedication
          make firsthand.
        </p>
      </div>

      {/* Cards Section */}
      <div className="py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 mx-8 md:p-10">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center mx-auto mb-4">
            <FaMobileAlt className="text-4xl mb-4 text-red-500" />
            <h2 className="text-xl font-semibold mb-2">
              Custom Backend Development
            </h2>
            <p className="text-base">
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
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center mx-auto mb-4">
            <FaDesktop className="text-4xl mb-4 text-red-500" />
            <h2 className="text-xl font-semibold mb-2">
              Mobile App Backend Development
            </h2>
            <p className="text-base">
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
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center mx-auto mb-4">
            <FaDatabase className="text-4xl mb-4 text-red-500" />
            <h2 className="text-xl font-semibold mb-2">
              Backend Web Applications
            </h2>
            <p className="text-base">
              Our dedicated team specializes in developing infrastructures for
              IoT, large-scale systems, and web portals. We are committed to
              delivering systems that can handle high loads and ensure stability
              through server-side logic. You can ensure your platform operates
              smoothly and efficiently by leveraging our backend software
              development expertise.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center mx-auto mb-4">
            <FaTools className="text-4xl mb-4 text-red-500" />
            <h2 className="text-xl font-semibold mb-2">
              API Development and Integration
            </h2>
            <p className="text-base">
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
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center mx-auto mb-4">
            <FaCloud className="text-4xl mb-4 text-red-500" />
            <h2 className="text-xl font-semibold mb-2">Backend Testing</h2>
            <p className="text-base">
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
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center mx-auto mb-4">
            <FaGlobe className="text-4xl mb-4 text-red-500" />
            <h2 className="text-xl font-semibold mb-2">
              Cloud Backend Solutions
            </h2>
            <p className="text-base">
              Cloud backend services provide the benefits of accessibility,
              scalability, and adaptability. We construct the backend for
              easy-to-use cloud-based mobile and web applications by working
              alongside frontend developers and utilizing cloud computing
              platforms such as Azure, AWS and FaaS tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default backend;
