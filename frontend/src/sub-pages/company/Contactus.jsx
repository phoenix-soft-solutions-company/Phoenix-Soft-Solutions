import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaTwitter,
} from "react-icons/fa";
import heading from "../../constants/images/tech/technology-heading.jpg";

const Contactus = () => {
  return (
    <div className="min-h-screen relative">
      <header className="relative w-full h-[50vh]">
        <img
          src={heading}
          alt="header"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest">
            CONTACT US
          </h1>
        </div>
      </header>

      <div id="contact-us" className="p-4 md:p-8 bg-white mt-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Contact Us
        </h2>

        <div className="flex flex-col gap-5 lg:px-32">
          {/* main Box */}
          <div className="flex flex-col lg:flex-row justify-center ">
            {/* Combined Info Box with Map */}
            <div className="w-full  p-6 border border-red-300 rounded-lg shadow-md bg-white">
              <div className="flex flex-col lg:flex-row mb-6">
                {/* Address */}
                <div className="w-full lg:w-1/3 flex mb-6 lg:mb-0 lg:mr-4">
                  <FaMapMarkerAlt
                    style={{ fontSize: "2rem" }}
                    className="text-red-600 mr-4 mt-1"
                  />
                  <div>
                    <p className="text-lg">
                      1/46 Martin Place <br />
                      Sydney NSW 2000 <br />
                      Australia
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="w-full lg:w-1/3 flex mb-6 lg:mb-0 lg:mr-4">
                  <FaEnvelope
                    style={{ fontSize: "2rem" }}
                    className="text-red-600 mr-4 mt-1"
                  />
                  <div>
                    <p className="text-lg">info@xcroup.lk</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="w-full lg:w-1/3 flex">
                  <FaMobileAlt
                    style={{ fontSize: "2rem" }}
                    className="text-red-600 mr-4 mt-1"
                  />
                  <div>
                    <p className="text-lg">+1 234 567 890</p>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="w-full h-64 mt-6">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.863596732978!2d151.2070439153427!3d-33.86736761853927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae402314345f%3A0xd022774568b6a838!2s1%2F46%20Martin%20Pl%2C%20Sydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2slk!4v1635445817895!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Box 1 */}
            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">New Zealand</h3>
              <div className="flex flex-col sm:flex-row gap-5 mb-2">
                <div className="flex flex-row">
                  <FaMapMarkerAlt
                    className="text-red-600 mr-4 mt-1"
                    style={{ fontSize: "2rem" }}
                  />
                  <p className="text-lg">
                    <span>Xcrop (Pvt) Ltd,</span>
                    <br />
                    <span>Level 6,</span> <br />
                    <span>40 Taranaki Street Wellington,</span> <br />
                    <span>6211 New Zealand</span>
                    <br />
                  </p>
                </div>
                <div className="flex">
                  <FaMobileAlt
                    className="text-red-600 mr-4"
                    style={{ fontSize: "2rem" }}
                  />
                  <p className="text-lg">+</p>
                </div>
              </div>

              <div className="w-full h-40">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.989055812208!2d174.77625581545327!3d-41.292073226551706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38afd0b6ed49d3%3A0x457f8071623568b4!2sLevel%206%2F40%20Taranaki%20Street%2C%20Te%20Aro%2C%20Wellington%205011%2C%20New%20Zealand!5e0!3m2!1sen!2slk!4v1635447888707!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">United Kingdom </h3>
              <div className="flex flex-col sm:flex-row gap-5 mb-2">
                <div className="flex flex-row">
                  <FaMapMarkerAlt
                    className="text-red-600 mr-4 mt-1"
                    style={{ fontSize: "2rem" }}
                  />
                  <p className="text-lg">
                    <span>Xcrop (Pvt) Ltd,</span>
                    <br />
                    <span>66, Fieldside Road,</span> <br />
                    <span>Bromley,</span> <br />
                    <span>United Kingdom.</span>
                    <br />
                  </p>
                </div>
                <div className="flex">
                  <FaMobileAlt
                    className="text-red-600 mr-4"
                    style={{ fontSize: "2rem" }}
                  />
                  <p className="text-lg">+44 73 089 6025</p>
                </div>
              </div>
              <div className="w-full h-40">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.895953920795!2d-0.006665!3d51.4223779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487601fc8bcf77ab%3A0x2136125a59307d7e!2s66%20Fieldside%20Rd%2C%20Bromley%2C%20UK!5e0!3m2!1sen!2slk!4v1635447900456!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Sri Lanka</h3>
              <div className="flex flex-col sm:flex-row gap-5 mb-2">
                <div className="flex flex-row">
                  <FaMapMarkerAlt
                    className="text-red-600 mr-4 mt-1"
                    style={{ fontSize: "2rem" }}
                  />
                  <p className="text-lg">
                    <span>Xcrop (Pvt) Ltd,</span>
                    <br />
                    <span>No. 23,</span> <br />
                    <span>Matara Road,</span> <br />
                    <span>Tangalle.</span>
                    <br />
                  </p>
                </div>
                <div className="flex">
                  <FaMobileAlt
                    className="text-red-600 mr-4"
                    style={{ fontSize: "2rem" }}
                  />
                  <p className="text-lg">+94 77 844 3682</p>
                </div>
              </div>
              <div className="w-full h-40">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.1436656219236!2d80.7922016!3d6.0280074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae14ad94214625f%3A0x6653a011d69072f7!2s23%20Matara%20Rd%2C%20Tangalle!5e0!3m2!1sen!2slk!4v1635448217589!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>

            {/* Box 4 */}
            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Sweden</h3>
              <div className="flex flex-col sm:flex-row gap-5 mb-2">
                <div className="flex flex-row">
                  <FaMapMarkerAlt
                    className="text-red-600 mr-4 mt-1"
                    style={{ fontSize: "2rem" }}
                  />
                  <p className="text-lg">
                    <span>Xcrop (Pvt) Ltd,</span>
                    <br />
                    <span>Isafjordsgatan 15,</span> <br />
                    <span>166 45 Kista,</span> <br />
                    <span>Sweden.</span>
                    <br />
                  </p>
                </div>
                <div className="flex">
                  <FaMobileAlt
                    className="text-red-600 mr-4"
                    style={{ fontSize: "2rem" }}
                  />
                  <p className="text-lg">+46 76 692 1940</p>
                </div>
              </div>
              <div className="w-full h-40">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2148.8595582720137!2d17.947693!3d59.401913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9e8d68707a11%3A0xce91cfdfec2737db!2sIsafjordsgatan%2015%2C%20164%2040%20Kista%2C%20Sweden!5e0!3m2!1sen!2slk!4v1635448726765!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* New Section with Heading and Contact Box */}
        <div className="flex flex-col lg:flex-row p-4 md:p-8 lg:px-10 bg-gray-200 items-center mt-8">
          {/* Left Side with Heading */}
          <div className="w-full lg:w-1/2 p-4 sm:px-10 md:px-40 lg:px-4 md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold mb-4">
              Have Any <br />
              Questions?
            </h1>
            <div className="flex gap-4 md:gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-400"
              >
                <FaFacebook className="text-3xl md:text-5xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-400"
              >
                <FaTwitter className="text-3xl md:text-5xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-400"
              >
                <FaLinkedin className="text-3xl md:text-5xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-400"
              >
                <FaInstagram className="text-3xl md:text-5xl" />
              </a>
            </div>
          </div>

          {/* Right Side with Contact Box */}
          <div className="w-full lg:w-1/2 p-4 sm:px-10 md:px-40 lg:px-4 mt-5">
            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-12 md:p-14">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Contact Us
              </h3>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-lg font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="border-2 border-red-700 bg-red-700 text-white py-2 px-6 text-base rounded hover:bg-white hover:text-red-700 transition duration-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
