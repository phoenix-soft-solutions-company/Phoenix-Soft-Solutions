import React from "react";
import service from "../../constants/images/services/frontend.webp";
import {
  FaCode,
  FaMobileAlt,
  FaDesktop,
  FaDatabase,
  FaTools,
  FaCloud,
  FaGlobe,
  FaUserAlt,
  FaShieldAlt,
} from "react-icons/fa";

const Frontend = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img
          src={service}
          className="object-cover w-full h-full"
          alt="Frontend Development"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase text-center">
            FRONTEND DEVELOPMENT SERVICE
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Unveiling Our Front-End Development Services
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
          Explore our commitment to high-quality, interactive user interfaces in
          front-end development services. We're excited to share how our
          expertise can transform your digital presence, creating seamless and
          interactive experiences for your users. Let's explore what we have to
          offer!
        </p>
      </div>

      {/* Cards Section */}
      <div className="py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center mb-4">
            <FaMobileAlt className="text-3xl sm:text-4xl mb-4 text-red-500" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              UI/UX Design
            </h2>
            <p className="text-sm sm:text-base text-justify">
              We meticulously understand your needs, analyze and research the
              market to come up with designs that help you stand out in the
              market. By focusing on enhancing the UI and UX, it ensures your
              web applications are visually appealing and easy to navigate. Our
              designs are crafted to meet your needs, providing a seamless
              interaction between your users and your digital platform.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center mb-4">
            <FaDesktop className="text-3xl sm:text-4xl mb-4 text-red-500" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Front-End Web Development with React
            </h2>
            <p className="text-sm sm:text-base text-justify">
              With comprehensive front-end web development with React, our team
              is skilled in harnessing the power of cutting-edge front-end
              technologies and tools. We build interactive and responsive
              websites that optimize performance across the board. That means
              you’ll notice more efficient rendering, lazy loading of images,
              code splitting, and a more accessible and responsive user
              interface.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center mb-4">
            <FaDatabase className="text-3xl sm:text-4xl mb-4 text-red-500" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Front-end Development with Angular
            </h2>
            <p className="text-sm sm:text-base text-justify">
              The team leverages Angular, a robust framework for building
              dynamic and efficient web applications. Angular’s powerful
              features, such as dependency injection and two-way data binding,
              enable us to create interactive, real-time applications. We ensure
              high performance and maintainability, delivering a seamless user
              experience.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center mb-4">
            <FaTools className="text-3xl sm:text-4xl mb-4 text-red-500" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Front-end Development with Vue.js
            </h2>
            <p className="text-sm sm:text-base text-justify">
              We specialize in Vue.js, a progressive JavaScript framework that
              creates intuitive user interfaces. Vue.js easily integrates with
              existing projects and offers a flexible architecture for
              developing complex web applications. Our developers ensure the
              applications are easy to maintain, performant, and provide a
              smooth user experience.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center mb-4">
            <FaCloud className="text-3xl sm:text-4xl mb-4 text-red-500" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              HTML & CSS Responsive Web Design
            </h2>
            <p className="text-sm sm:text-base text-justify">
              You’ll want a website that looks great and functions well on all
              devices, providing a seamless experience for your users with
              versatile designs, incorporating layouts, flexible images, and
              CSS3 media queries. They adjust seamlessly to diverse screen
              dimensions, ensuring a uniform user experience across various
              platforms.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center mb-4">
            <FaGlobe className="text-3xl sm:text-4xl mb-4 text-red-500" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Custom JavaScript Development with Frameworks
            </h2>
            <p className="text-sm sm:text-base text-justify">
              We excel in custom JavaScript development, leveraging various
              frameworks like React, Angular and Vue to build dynamic and
              engaging web applications. The benefits of using JavaScript
              include elevating user interfaces and building SPAs that only load
              once with a more dynamic update thereafter. It also organizes UI
              into reusable components, which makes the development process more
              efficient. We leverage these frameworks to build scalable,
              maintainable applications that meet your needs.
            </p>
          </div>

          {/* Card 7 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center mb-4">
            <FaUserAlt className="text-3xl sm:text-4xl mb-4 text-red-500" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              CMS Theming
            </h2>
            <p className="text-sm sm:text-base text-justify">
              With our CMS theming services, you can personalize your website on
              CMS platforms like WordPress, Drupal, Joomla, Magento, or Shopify.
              Our front-end developers craft unique themes that align with your
              business objectives for brand consistency, ensuring your website
              stands out and connects with your target audience.
            </p>
          </div>

          {/* Card 8 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center mb-4">
            <FaShieldAlt className="text-3xl sm:text-4xl mb-4 text-red-500" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Single-Page Applications
            </h2>
            <p className="text-sm sm:text-base text-justify">
              Our team is experienced in building SPAs that offer a smooth and
              fast user experience. These applications initiate with a solitary
              HTML page and dynamically evolve in response to the user's
              interaction with the app. This approach reduces loading time and
              enhances user engagement, providing a seamless browsing
              experience.
            </p>
          </div>

          {/* Card 9 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center mb-4">
            <FaCode className="text-3xl sm:text-4xl mb-4 text-red-500" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Progressive Web Applications (PWAs)
            </h2>
            <p className="text-sm sm:text-base">
              Saigon Technology creates PWAs that offer a native app-like
              experience while running on the web. With offline access, push
              notifications, and performance optimizations, PWAs deliver an
              engaging and reliable user experience, fostering higher user
              retention and satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
