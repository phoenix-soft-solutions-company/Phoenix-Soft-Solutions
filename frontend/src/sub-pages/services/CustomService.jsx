import React from "react";
import service from "../../constants/images/services/custom.jpg";
import service2 from "../../constants/images/services/custom2.jpg";

const Custom = () => {
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
            custom software development
          </h1>
        </div>
      </div>

      {/* Centered Title with Short Red Underline */}
      <div className="flex justify-center py-8">
        <h1 className="text-3xl lg:text-4xl font-serif font-bold relative text-center">
          Are You Seeking a Custom Software <br /> Development Company?
          <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-red-500"></span>
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row p-8">
        {/* Left Side Image */}
        <div className="lg:w-1/2">
          <img
            src={service2}
            className="object-cover w-full h-full"
            alt="Service"
          />
        </div>

        {/* Right Side Cards */}
        <div className="lg:w-1/2 flex flex-col space-y-6 p-6">
          <div className="bg-white p-4 rounded shadow-lg">
            <p className="text-gray-700 mb-4">
              Custom software development crafts technology solutions to
              precisely fit the distinctive needs of businesses. This bespoke
              approach, different from generic off-the-shelf software, is
              meticulously designed to address the specific challenges and
              requirements of your business. It provides unmatched flexibility
              and efficiency, leading to a more effective software experience
              tailored to your needs.
            </p>
          </div>

          <div className="bg-white p-4 rounded shadow-lg">
            <p className="text-gray-700 mb-4">
              At Saigon Technology, a journey spanning over 12 years as a custom
              software development company underscores our commitment to
              excellence. Our team of experienced specialists is skilled at
              creating custom software solutions that resonate perfectly with
              your business's unique demands.
            </p>
          </div>

          <div className="bg-white p-4 rounded shadow-lg">
            <p className="text-gray-700 mb-4">
              Our approach is geared towards catalyzing growth across various
              industries. Opting for our services translates into high-quality
              software development that is cost-effective due to flexible
              models, thereby boosting your return on investment (ROI) and
              enhancing the overall user experience.
            </p>
          </div>
        </div>
      </div>

      {/* Centered Additional Heading and Paragraph */}
      <div className="flex flex-col items-center py-8">
        <h1 className="text-2xl lg:text-3xl font-serif font-bold text-center mb-4">
          Elevating Your Business with Custom <br />
          Software Development Services
        </h1>
        <p className="text-gray-700 text-center max-w-2xl">
          In the dynamic and fast-evolving digital landscape of today,
          businesses need specialized solutions to maintain their competitive
          edge and operational efficiency. Our comprehensive array of custom
          software development services is designed to meet these varied
          demands. Ranging from initial consulting to the final stages of
          development and integration, we provide an extensive suite of services
          to convert your unique challenges into innovative custom software
          solutions.
        </p>
      </div>

      {/* Cards Section */}
      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-serif font-bold mb-2">
              Software Consulting
            </h3>
            <p className="text-gray-700">
              Our journey in custom software development starts with consulting,
              providing expert advice in tested methodologies, technologies, and
              industry best practices. We meticulously assess your requirements,
              conceptualize potential solutions, and strategize to turn your
              visions into tangible realities. This ensures that every facet of
              your software is in complete alignment with your business goals
              and technical specifications.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-serif font-bold mb-2">
              Custom Web Application Development
            </h3>
            <p className="text-gray-700">
              Our expertise in web software application development shines
              through in our web application projects. We craft unique web
              applications that boost your online footprint. Each application is
              intricately designed for seamless functionality, user-friendly
              interfaces, and robust performance, keeping your business ahead in
              the online realm.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-serif font-bold mb-2">
              Custom Mobile Application Development
            </h3>
            <p className="text-gray-700">
              In response to the burgeoning mobile technology sector, our
              services focus on creating responsive, intuitive, fast, and
              engaging mobile applications with a competitive advantage.
              Customized to meet your specific needs, these apps offer an
              enhanced user experience that is compatible with targeted
              platforms (iOS, Android, etc) and devices, driving user engagement
              and contributing to your business's growth.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-serif font-bold mb-2">
              Enterprise Software Development
            </h3>
            <p className="text-gray-700">
              When you want to scale up your business applications with more
              complex requirements, our enterprise software development service
              offers comprehensive solutions to automate and streamline your
              routine business operations. We develop custom software that
              analyses business processes and integrates effortlessly with your
              existing systems, thereby boosting operational productivity.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-serif font-bold mb-2">
              SaaS Application Development
            </h3>
            <p className="text-gray-700">
              We excel in SaaS application development, offering cloud-based
              custom software development solutions with backup and data
              recovery features. These secure solutions are accessible anywhere
              to scale over time and are ideal for businesses looking for
              flexible and cost-efficient software options with minimal
              overheads.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-serif font-bold mb-2">
              API Development & Software Integration
            </h3>
            <p className="text-gray-700">
              Our API development and software integration services bolster your
              software ecosystem. They enable smooth interaction between
              different software systems, ensuring robust, secure, and efficient
              connectivity. This positively augments the overall functionality
              and utility of your software infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom;
