import React from "react";
import CompanyMap from "../components/CompanyMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import slide1 from "../constants/images/slides/slide1.jpg";
import slide3 from "../constants/images/slides/slide3.jpg";
import slide4 from "../constants/images/slides/slide4.jpg";
import icon1 from "../constants/images/icons/Icon1.png";
import icon2 from "../constants/images/icons/Icon2.png";
import icon3 from "../constants/images/icons/Icon3.png";
import icon4 from "../constants/images/icons/Icon4.png";
import icon5 from "../constants/images/icons/Icon5.png";
import icon6 from "../constants/images/icons/Icon6.png";
import icon7 from "../constants/images/icons/Icon7.png";
import icon8 from "../constants/images/icons/Icon8.png";
import icon9 from "../constants/images/icons/Icon9.png";
import leftImage from "../constants/images/left_home.jpg";
import rightImage from "../constants/images/RightHome.jpg";
import icon11 from "../constants/images/icons/ico1.png";
import icon12 from "../constants/images/icons/ico2.png";
import icon13 from "../constants/images/icons/ico3.png";
import icon14 from "../constants/images/icons/ico4.png";


function Home() {
  return (
    <div className="home-page">
      <div className="relative w-full overflow-hidden">
        <div className="flex flex-col items-center">
          {[slide1, slide3, slide4].map((slide, index) => (
            <div key={index} className="relative w-full">
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h3 className="text-2xl">Slide {index + 1} label</h3>
                <p className="text-lg">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap my-12">
          <div className="w-full md:w-1/2 bg-gray-100 flex justify-center items-center">
            <img
              src={leftImage}
              alt="Description"
              className="max-w-full max-h-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 bg-gray-100 flex flex-col justify-center items-center p-5">
            <div>
              <h1 className="text-red-600 text-5xl mb-10">
                We provide the best{" "}
                <span className="text-6xl text-red-800">IT Solution</span>{" "}
                services
              </h1>
              <p className="text-black text-xl text-justify">
                We offer one of the most comprehensive, affordably-priced
                service and maintenance IT support plans in the IT industry.
              </p>
              <div className="flex mt-5">
                <div className="w-1/2 text-black">
                  <ul className="list-none pl-5 text-xl">
                    <li>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-red-600 mr-2"
                      />
                      We Understand Customer Challenges
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-red-600 mr-2"
                      />
                      We Collect Clients Needs
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-red-600 mr-2"
                      />
                      We Craft the right solutions
                    </li>
                  </ul>
                </div>
                <div className="w-1/2 text-black">
                  <ul className="list-none pl-5 text-xl">
                    <li>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-red-600 mr-2"
                      />
                      We Deliver Quality Services
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-red-600 mr-2"
                      />
                      We Ensure Customer Satisfaction
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-red-600 mr-2"
                      />
                      We Provide Ongoing Support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-12">
          <h1 className="font-bold text-3xl pb-3 border-b-4 border-red-600 inline-block">
            OUR SERVICES
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-5 rounded shadow hover:bg-red-200 hover:border-red-700 border border-transparent">
            <img
              src={icon1}
              alt="Web Application Development"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl mb-2">Web Application Development</h2>
            <p className="text-lg">
              To help businesses successfully communicate with their intended
              demographic, Xcrop Technology provides services that include the
              complete spectrum of the software development life cycle.
            </p>
          </div>
          <div className="bg-white p-5 rounded shadow hover:bg-pink-100 hover:border-red-700">
            <img
              src={icon2}
              alt="Mobile App Development"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl mb-2">Mobile App Development</h2>
            <p className="text-lg">
              To achieve our client's business objectives, we design and build
              feature-rich handheld apps for a wide range of mobile platforms,
              with a particular emphasis on delivering superior user experience
              and making use of cutting-edge mobile technology.
            </p>
          </div>
          <div className="bg-white p-5 rounded shadow hover:bg-pink-100 hover:border-red-700">
            <img
              src={icon3}
              alt="Custom Software Development"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl mb-2">Custom Software Development</h2>
            <p className="text-lg">
              Our expertise is in building scalable and effective software
              solutions for businesses of all sizes, with a focus on meeting
              their unique needs to encourage expansion and innovative concepts.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-5 rounded shadow hover:bg-pink-100 hover:border-red-700">
            <img
              src={icon4}
              alt="DevOps Services"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl mb-2">DevOps Services</h2>
            <p className="text-lg">
              We provide appropriate services to facilitate communication and
              coordination between software development and IT operations.
              Experience the power of seamless coordination as we accelerate
              software delivery and supercharge efficiency.
            </p>
          </div>
          <div className="bg-white p-5 rounded shadow hover:bg-pink-100 hover:border-red-700">
            <img
              src={icon5}
              alt="Software Development Outsourcing"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl mb-2">Software Development Outsourcing</h2>
            <p className="text-lg">
              By utilizing Xcrop Technology's services, businesses can leverage
              our expertise and infrastructure for the smooth completion of
              their projects at accelerated lower overall costs.
            </p>
          </div>
          <div className="bg-white p-5 rounded shadow hover:bg-pink-100 hover:border-red-700">
            <img
              src={icon6}
              alt="Software QA Testing"
              className="mx-auto mb-3 w-16"
            />
            <h2 className="text-2xl mb-2">Software QA Testing</h2>
            <p className="text-lg">
              Xcrop Technology offers thorough testing and bug-fixing to improve
              overall performance and guarantee the quality, stability, and
              functioning of software programs as part of our services.
            </p>
          </div>
        </div>

        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="pb-4">
              <div className="service-card h-full bg-white p-5 rounded shadow">
                <img
                  src={icon7}
                  alt="Cloud Migration Services"
                  className="mx-auto mb-3 w-16"
                />
                <h2 className="text-2xl font-semibold mb-2">
                  Cloud Migration Services
                </h2>
                <p className="text-lg">
                  Experience a seamless transition to the cloud with our
                  exceptional services. We empower businesses to effortlessly
                  move their software and infrastructure, unlocking the
                  incredible benefits of scalability, top-notch security, and
                  remarkable cost-efficiency.
                </p>
              </div>
            </div>
            <div className="pb-4">
              <div className="service-card h-full bg-white p-5 rounded shadow">
                <img
                  src={icon8}
                  alt="PoC Development Services"
                  className="mx-auto mb-3 w-16"
                />
                <h2 className="text-2xl font-semibold mb-2">
                  PoC Development Services
                </h2>
                <p className="text-lg">
                  With our exceptional expertise, we empower you to embark on a
                  journey of innovation, ensuring that your concepts are
                  thoroughly tested and validated before embarking on full-scale
                  development.
                </p>
              </div>
            </div>
            <div className="pb-4">
              <div className="service-card h-full bg-white p-5 rounded shadow">
                <img
                  src={icon9}
                  alt="AI Development Services"
                  className="mx-auto mb-3 w-16"
                />
                <h2 className="text-2xl font-semibold mb-2">
                  AI Development Services
                </h2>
                <p className="text-lg">
                  By combining cutting-edge AI with machine learning, we can
                  create smart software that can streamline business operations
                  and enhance decision-making. Let us transform your business
                  into a realm of efficiency and innovation.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <a
              href="/service" // Replace with your desired URL
              className="text-lg px-6 py-3 bg-red-600 text-white hover:bg-red-700 rounded"
            >
              Explore in detail
            </a>
          </div>

          <div className="py-10 text-center">
            <h1 className="text-4xl font-bold mb-4 border-b-4 border-red-600 inline-block">
              OUR RETAINED CLIENTS
            </h1>
            <p className="text-xl mt-4">
              Thank you for your precious feedback and support.
              <br /> We always do our best to contribute to your growth as our
              slogan: Your success is our mission.
            </p>
          </div>
        </div>
        <CompanyMap />
        <div>
          <h2 className="text-[#780a15] text-2xl mb-2">Our Benefits...</h2>
          <h1 className="text-[#e81c30] text-4xl mb-12">Why Choose Us?</h1>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-4">
            <div className="text-center">
              <img
                src={icon11}
                alt="Icon 1"
                className="w-24 h-24 mb-2 mx-auto"
              />
              <h3 className="text-[#e81c30] text-2xl mb-2">
                Best Technological Solutions
              </h3>
              <p className="text-xl">
                Inspired IT specialists are looking forward to understand the
                varied project requirements & come up with the superlative
                solutions.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="text-center">
              <img
                src={icon12}
                alt="Icon 2"
                className="w-24 h-24 mb-2 mx-auto"
              />
              <h3 className="text-[#e81c30] text-2xl mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-xl">
                We consider our success on the basis of the clients’
                successfully performing websites or mobile apps.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-4">
            <div className="text-center">
              <img
                src={icon13}
                alt="Icon 3"
                className="w-24 h-24 mb-2 mx-auto"
              />
              <h3 className="text-[#e81c30] text-2xl mb-2">Value Added</h3>
              <p className="text-xl">
                Our value added services guarantee the clients to have outcomes
                beyond the expectations.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="text-center">
              <img
                src={icon14}
                alt="Icon 4"
                className="w-24 h-24 mb-2 mx-auto"
              />
              <h3 className="text-[#e81c30] text-2xl mb-2">
                Customer Tailored Support
              </h3>
              <p className="text-xl">
                We are dedicated to ensuring that our customers can contact us
                in the best way for them.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
        <div className="text-center">
          <img
            src={rightImage}
            alt="Example"
            className="w-full h-auto max-w-full max-h-[500px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
