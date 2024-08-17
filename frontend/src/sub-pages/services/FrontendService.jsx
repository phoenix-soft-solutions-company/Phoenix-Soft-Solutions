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
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img src={service} className="object-cover w-full h-full" alt="Mobile Development" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            FRONTEND DEVELOPMENT SERVICE
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">Unveiling Our Front-End Development Services</h1>
        <p className="text-lg lg:text-xl leading-relaxed max-w-2xl">
          Explore our commitment to high-quality, interactive user interfaces in front-end development
          services. We're excited to share how our expertise can transform your digital presence, creating
          seamless and interactive experiences for your users. Let's explore what we have to offer!
        </p>
      </div>

      {/* Cards Section */}
      <div className="py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 mx-8 md:p-10">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center mx-auto mb-4">
            <FaMobileAlt className="text-4xl mb-4 text-red-500" />
            <h2 className="text-xl font-semibold mb-2">UI/UX Design</h2>
            <p className="text-base">
              We meticulously understand your needs, analyze and research the market to come up with designs
              that help you stand out in the market. By focusing on enhancing the UI and UX, it ensures your
              web applications are visually appealing and easy to navigate. Our designs are crafted to meet
              your needs, providing a seamless interaction between your users and your digital platform.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center mx-auto mb-4">
            <FaDesktop className="text-4xl mb-4 text-red-500" />
            <h2 className="text-xl font-semibold mb-2">Front-End Web Development with React</h2>
            <p className="text-base">
              With comprehensive front-end web development with React, our team is skilled in harnessing the
              power of cutting-edge front-end technologies and tools. We build interactive and responsive
              websites that optimize performance across the board. That means you’ll notice more efficient
              rendering, lazy loading of images, code splitting, and a more accessible and responsive user
              interface.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center mx-auto mb-4">
            <FaDatabase className="text-4xl mb-4 text-red-500" />
            <h2 className="text-xl font-semibold mb-2">Front-end Development with Angular</h2>
            <p className="text-base">
              The team leverages Angular, a robust framework for building dynamic and efficient web
              applications. Angular’s powerful features, such as dependency injection and two-way data
              binding, enable us to create interactive, real-time applications. We ensure high performance and
              maintainability, delivering a seamless user experience.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center mx-auto mb-4">
            <FaTools className="text-4xl mb-4 text-red-500" />
            <h2 className="text-xl font-semibold mb-2">Front-end Development with Vue.js</h2>
            <p className="text-base">
              We specialize in Vue.js, a progressive JavaScript framework that creates intuitive user
              interfaces. Vue.js easily integrates with existing projects and offers a flexible architecture
              for developing complex web applications. Our developers ensure the applications are easy to
              maintain, performant, and provide a smooth user experience.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center mx-auto mb-4">
            <FaCloud className="text-4xl mb-4 text-red-500" />
            <h2 className="text-xl font-semibold mb-2">HTML & CSS Responsive Web Design</h2>
            <p className="text-base">
              You’ll want a website that looks great and functions well on all devices, providing a seamless
              experience for your users with versatile designs, incorporating layouts, flexible images, and
              CSS3 media queries. They adjust seamlessly to diverse screen dimensions, ensuring a uniform user
              experience across various platforms.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center mx-auto mb-4">
            <FaGlobe className="text-4xl mb-4 text-red-500" />
            <h2 className="text-xl font-semibold mb-2">Custom JavaScript Development with Frameworks</h2>
            <p className="text-base">
              We excel in custom JavaScript development, leveraging various frameworks like React, Angular and
              Vue to build dynamic and engaging web applications. The benefits of using JavaScript include
              elevating user interfaces and building SPAs that only load once with a more dynamic update
              thereafter. It also organizes UI into reusable components, which makes the development process
              more efficient. We leverage these frameworks to build scalable, maintainable applications that
              meet your needs.
            </p>
          </div>

          {/* Card 7 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center mx-auto mb-4">
            <FaUserAlt className="text-4xl mb-4 text-red-500" />
            <h2 className="text-xl font-semibold mb-2">CMS Theming</h2>
            <p className="text-base">
              With our CMS theming services, you can personalize your website on CMS platforms like WordPress,
              Drupal, Joomla, Magento, or Shopify. Our front-end developers craft unique themes that align
              with your business objectives for brand consistency, ensuring your website stands out and
              connects with your target audience.
            </p>
          </div>

          {/* Card 8 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center mx-auto mb-4">
            <FaShieldAlt className="text-4xl mb-4 text-red-500" />
            <h2 className="text-xl font-semibold mb-2">Single-Page Applications</h2>
            <p className="text-base">
              Our team is experienced in building SPAs that offer a smooth and fast user experience. These
              applications initiate with a solitary HTML page and dynamically evolve in response to the user's
              interaction with the app. This approach reduces loading time and enhances user engagement,
              providing a seamless browsing experience.
            </p>
          </div>

          {/* Card 9 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center mx-auto mb-4">
            <FaCode className="text-4xl mb-4 text-red-500" />
            <h2 className="text-xl font-semibold mb-2">Progressive Web Applications (PWAs)</h2>
            <p className="text-base">
              Saigon Technology creates PWAs that offer a hybrid web solution, combining the best features of
              web and mobile apps. These reliable, fast, and engaging applications provide an immersive user
              experience. PWAs can work offline, load quickly, and be installed on the user’s device,
              enhancing user engagement and satisfaction.
            </p>
          </div>
        </div>
      </div>
      {/* Wave Section */}
      <div className="relative bg-red-500 text-white py-16">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-red-500">
          <svg
            viewBox="0 0 1440 320"
            className="absolute inset-x-0 bottom-0"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#f87171"
              fillOpacity="1"
              d="M0,96L30,117.3C60,139,120,181,180,186.7C240,192,300,160,360,149.3C420,139,480,149,540,186.7C600,224,660,288,720,293.3C780,299,840,245,900,229.3C960,213,1020,235,1080,240C1140,245,1200,235,1260,218.7C1320,203,1380,181,1410,170.7L1440,160L1440,320L0,320Z"></path>
          </svg>
        </div>
        <div className="relative z-10 text-center px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Get Started with Us</h2>
          <p className="text-lg mb-6">
            Contact us today to elevate your business with our expert frontend development services. Let’s
            collaborate to create stunning, user-friendly websites and applications that drive success.
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

export default Frontend;
