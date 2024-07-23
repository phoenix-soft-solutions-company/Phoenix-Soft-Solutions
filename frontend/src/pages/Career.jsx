import React from "react";
import CompanyMap from "../components/CompanyMap";
import SlideShow from "../components/SlideShow";
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

function Career() {
  return (
    <div>
      <SlideShow slides={[slide1, slide3, slide4]} />

      <div className="flex flex-col justify-center">
        <div className="text-center py-4 sm:py-6">
          <h1 className="font-bold text-2xl lg:text-3xl pb-1 sm:pb-2 lg:pb-3 border-b-4 border-red-600 inline-block font-serif">
            OUR SERVICES
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] hover:bg-red-200 hover:border-red-700 border border-transparent">
            <img src={icon1} alt="Web Application Development" className="mx-auto mb-3 w-16" />
            <h2 className="text-2xl mb-2">Web Application Development</h2>
            <p className="text-lg">
              To help businesses successfully communicate with their intended demographic, Xcrop Technology
              provides services that include the complete spectrum of the software development life cycle.
            </p>
          </div>

          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] hover:bg-red-200 hover:border-red-700 border border-transparent">
            <img src={icon2} alt="Mobile App Development" className="mx-auto mb-3 w-16" />
            <h2 className="text-2xl mb-2">Mobile App Development</h2>
            <p className="text-lg">
              To achieve our client's business objectives, we design and build feature-rich handheld apps for
              a wide range of mobile platforms, with a particular emphasis on delivering superior user
              experience and making use of cutting-edge mobile technology.
            </p>
          </div>

          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] hover:bg-red-200 hover:border-red-700 border border-transparent">
            <img src={icon3} alt="Custom Software Development" className="mx-auto mb-3 w-16" />
            <h2 className="text-2xl mb-2">Custom Software Development</h2>
            <p className="text-lg">
              Our expertise is in building scalable and effective software solutions for businesses of all
              sizes, with a focus on meeting their unique needs to encourage expansion and innovative
              concepts.
            </p>
          </div>

          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] hover:bg-red-200 hover:border-red-700 border border-transparent">
            <img src={icon4} alt="DevOps Services" className="mx-auto mb-3 w-16" />
            <h2 className="text-2xl mb-2">DevOps Services</h2>
            <p className="text-lg">
              We provide appropriate services to facilitate communication and coordination between software
              development and IT operations. Experience the power of seamless coordination as we accelerate
              software delivery and supercharge efficiency.
            </p>
          </div>

          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] hover:bg-red-200 hover:border-red-700 border border-transparent">
            <img src={icon5} alt="Software Development Outsourcing" className="mx-auto mb-3 w-16" />
            <h2 className="text-2xl mb-2">Software Development Outsourcing</h2>
            <p className="text-lg">
              By utilizing Xcrop Technology's services, businesses can leverage our expertise and
              infrastructure for the smooth completion of their projects at accelerated lower overall costs.
            </p>
          </div>

          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] hover:bg-red-200 hover:border-red-700 border border-transparent">
            <img src={icon6} alt="Software QA Testing" className="mx-auto mb-3 w-16" />
            <h2 className="text-2xl mb-2">Software QA Testing</h2>
            <p className="text-lg">
              Xcrop Technology offers thorough testing and bug-fixing to improve overall performance and
              guarantee the quality, stability, and functioning of software programs as part of our services.
            </p>
          </div>

          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] hover:bg-red-200 hover:border-red-700 border border-transparent">
            <img src={icon7} alt="Cloud Migration Services" className="mx-auto mb-3 w-16" />
            <h2 className="text-2xl font-semibold mb-2">Cloud Migration Services</h2>
            <p className="text-lg">
              Experience a seamless transition to the cloud with our exceptional services. We empower
              businesses to effortlessly move their software and infrastructure, unlocking the incredible
              benefits of scalability, top-notch security, and remarkable cost-efficiency.
            </p>
          </div>

          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] hover:bg-red-200 hover:border-red-700 border border-transparent">
            <img src={icon8} alt="PoC Development Services" className="mx-auto mb-3 w-16" />
            <h2 className="text-2xl font-semibold mb-2">PoC Development Services</h2>
            <p className="text-lg">
              With our exceptional expertise, we empower you to embark on a journey of innovation, ensuring
              that your concepts are thoroughly tested and validated before embarking on full-scale
              development.
            </p>
          </div>

          <div className="bg-white p-4 m-2 rounded shadow-lg max-w-[400px] hover:bg-red-200 hover:border-red-700 border border-transparent">
            <img src={icon9} alt="AI Development Services" className="mx-auto mb-3 w-16" />
            <h2 className="text-2xl font-semibold mb-2">AI Development Services</h2>
            <p className="text-lg">
              By combining cutting-edge AI with machine learning, we can create smart software that can
              streamline business operations and enhance decision-making. Let us transform your business into
              a realm of efficiency and innovation.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <a href="/service" className="text-lg px-6 py-3 bg-red-600 text-white hover:bg-red-700 rounded">
            Explore in detail
          </a>
        </div>
      </div>

      <div className="p-2">
        <div className="text-center py-4 sm:py-6">
          <h1 className="font-bold text-2xl lg:text-3xl pb-1 sm:pb-2 lg:pb-3 border-b-4 border-red-600 inline-block font-serif">
            OUR RETAINED CLIENTS
          </h1>
          <p className="text-lg pt-4 px-4 sm:px-20 lg:px-40 xl:px-60">
            Thank you for your precious feedback and support. We always do our best to contribute to your
            growth as our slogan: Your success is our mission.
          </p>
        </div>
        <div className="p-4 sm:px-10 lg:px-20">
          <CompanyMap />
        </div>
      </div>

      <div className="flex flex-col p-4 lg:px-8">
        <div className="sm:px-10">
          <h2 className="text-[#780a15] text-2xl mb-2">Our Benefits...</h2>
          <h1 className="text-[#e81c30] text-4xl mb-4">Why Choose Us?</h1>
        </div>

        <div className="flex flex-col-reverse xl:flex-row">
          <div className="w-full xl:w-1/2 py-2 flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
              <div className="w-full sm:w-72 p-2 text-center border border-black">
                <img src={icon11} alt="Icon 1" className="w-24 h-24 mb-2 mx-auto" />
                <h3 className="text-[#e81c30] text-xl mb-2">Best Technological Solutions</h3>
                <p className="text-base">
                  Inspired IT specialists are looking forward to understand the varied project requirements &
                  come up with the superlative solutions.
                </p>
              </div>

              <div className="w-full sm:w-72 p-2 text-center border border-black">
                <img src={icon11} alt="Icon 1" className="w-24 h-24 mb-2 mx-auto" />
                <h3 className="text-[#e81c30] text-xl mb-2">Best Technological Solutions</h3>
                <p className="text-base">
                  Inspired IT specialists are looking forward to understand the varied project requirements &
                  come up with the superlative solutions.
                </p>
              </div>

              <div className="w-full sm:w-72 p-2 text-center border border-black">
                <img src={icon11} alt="Icon 1" className="w-24 h-24 mb-2 mx-auto" />
                <h3 className="text-[#e81c30] text-xl mb-2">Best Technological Solutions</h3>
                <p className="text-base">
                  Inspired IT specialists are looking forward to understand the varied project requirements &
                  come up with the superlative solutions.
                </p>
              </div>

              <div className="w-full sm:w-72 p-2 text-center border border-black">
                <img src={icon11} alt="Icon 1" className="w-24 h-24 mb-2 mx-auto" />
                <h3 className="text-[#e81c30] text-xl mb-2">Best Technological Solutions</h3>
                <p className="text-base">
                  Inspired IT specialists are looking forward to understand the varied project requirements &
                  come up with the superlative solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-1/2 flex items-center justify-center">
            <img src={rightImage} alt="Example" className="w-full sm:w-[600px] lg:w-[800px] h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
