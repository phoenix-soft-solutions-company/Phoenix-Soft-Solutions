import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaTwitter,
} from "react-icons/fa";
import heading from "../../constants/images/company/headcon.jpg";
import { emaiJsCredentials } from "../../constants/emailJs";

// Initialize EmailJS
const initializeEmailJS = () => {
  emailjs.init(emaiJsCredentials.EMAILJS_PUBLIC_KEY); // EmailJS public key
};

const Contactus = ({ showHeaderImage = true }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    initializeEmailJS();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    const { name, email, subject, message } = formData;

    emailjs
      .send(
        emaiJsCredentials.EMAILJS_SERVICE_ID,
        emaiJsCredentials.EMAILJS_TEMPLATE_ID,
        { name, email, subject, message },
        emaiJsCredentials.EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setMessage("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          setError("Failed to send message!");
        }
      );
  };

  return (
    <div className="min-h-screen relative ">
      {showHeaderImage && (
        <header className="relative w-full h-[50vh]">
          <img src={heading} alt="header" className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest">CONTACT US</h1>
          </div>
        </header>
      )}

      <div id="contact-us" className="p-4 md:p-8 bg-white mt-4">
        <div className="flex flex-col gap-5 px-2 sm:px-4 lg:px-8">
          {/* Contact Us Description */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-5xl font-bold  text-center mb-2 font-mono">CONTACT US</h2>
            <p className="text-lg">
              We would love to hear from you! <br></br>Whether you have a question about our services,{" "}
              <br></br>need assistance, or just want to give feedback, feel free to reach out to us. <br></br>
              Our team is here to help you.
            </p>
          </div>
          {/* main Box */}
          <div className="flex flex-col lg:flex-row justify-center ">
            {/* Combined Info Box with Map */}
            <div className="w-full  p-6 border border-red-300 rounded-lg shadow-md bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6">
                {/* Address */}
                <div className="w-full flex mb-6 lg:mb-0 lg:mr-4">
                  <FaMapMarkerAlt style={{ fontSize: "2rem" }} className="text-red-600 mr-4 mt-1" />
                  <div>
                    <p className="text-lg">
                      Phoenix Soft Solutions (Pvt) Ltd
                      <br /> 1/46 Martin Place <br />
                      Sydney NSW 2000 <br />
                      Australia
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="w-full flex mb-6 lg:mb-0 lg:mr-4">
                  <FaEnvelope style={{ fontSize: "2rem" }} className="text-red-600 mr-4 mt-1" />
                  <div>
                    <p className="text-lg">info@phoenixsoftsolutions.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="w-full flex">
                  <FaMobileAlt style={{ fontSize: "2rem" }} className="text-red-600 mr-4 mt-1" />
                  <div>
                    <p className="text-lg">+61 2-7912 3603 </p>
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
                  tabIndex="0"></iframe>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Box 1 */}
            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">New Zealand</h3>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-5 sm:gap-x-10 mb-2">
                <div className="flex flex-row">
                  <FaMapMarkerAlt className="text-red-600 mr-4 mt-1" style={{ fontSize: "2rem" }} />
                  <p className="text-lg">
                    <span>Phoenix Soft Solutions (Pvt) Ltd,</span>
                    <br />
                    <span>Level 6,</span> <br />
                    <span>40 Taranaki Street Wellington,</span> <br />
                    <span>6211 New Zealand</span>
                    <br />
                  </p>
                </div>
                <div className="flex">
                  <FaMobileAlt className="text-red-600 mr-4" style={{ fontSize: "2rem" }} />
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
                  tabIndex="0"></iframe>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">United Kingdom </h3>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-5 sm:gap-x-10 mb-2">
                <div className="flex flex-row">
                  <FaMapMarkerAlt className="text-red-600 mr-4 mt-1" style={{ fontSize: "2rem" }} />
                  <p className="text-lg">
                    <span>Phoenix Soft Solutions (Pvt) Ltd,</span>
                    <br />
                    <span>66, Fieldside Road,</span> <br />
                    <span>Bromley,</span> <br />
                    <span>United Kingdom.</span>
                    <br />
                  </p>
                </div>
                <div className="flex">
                  <FaMobileAlt className="text-red-600 mr-4" style={{ fontSize: "2rem" }} />
                  <p className="text-lg">+447908678192</p>
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
                  tabIndex="0"></iframe>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Sri Lanka</h3>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-5 sm:gap-x-10 mb-2">
                <div className="flex flex-row">
                  <FaMapMarkerAlt className="text-red-600 mr-4 mt-1" style={{ fontSize: "2rem" }} />
                  <p className="text-lg">
                    <span>Phoenix Soft Solutions (Pvt) Ltd,</span>
                    <br />
                    <span>No. 23,</span> <br />
                    <span>Matara Road,</span> <br />
                    <span>Tangalle.</span>
                    <br />
                  </p>
                </div>
                <div className="flex">
                  <FaMobileAlt className="text-red-600 mr-4" style={{ fontSize: "2rem" }} />
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
                  tabIndex="0"></iframe>
              </div>
            </div>

            {/* Box 4 */}
            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Sweden</h3>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-5 sm:gap-x-10 mb-2">
                <div className="flex flex-row">
                  <FaMapMarkerAlt className="text-red-600 mr-4 mt-1" style={{ fontSize: "2rem" }} />
                  <p className="text-lg">
                    <span>Phoenix Soft Solutions (Pvt) Ltd,</span>
                    <br />
                    <span>Isafjordsgatan 15,</span> <br />
                    <span>166 45 Kista,</span> <br />
                    <span>Sweden.</span>
                    <br />
                  </p>
                </div>
                <div className="flex">
                  <FaMobileAlt className="text-red-600 mr-4" style={{ fontSize: "2rem" }} />
                  <p className="text-lg">+46 766920017</p>
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
                  tabIndex="0"></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* New Section with Heading and Contact Box */}
        <div className="flex flex-col lg:flex-row mx-2 lg:mx-6 bg-gray-200 items-center mt-8 rounded-md">
          {/* Left Side with Heading */}
          <div className="w-full lg:w-1/2 p-4 sm:px-10 md:px-40 lg:px-10 md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold mb-4 lg:ml-10">
              Have Any <br />
              Questions?
            </h1>
            <div className="flex gap-4 md:gap-6 lg:ml-10">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-400">
                <FaFacebook className="text-3xl md:text-5xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-400">
                <FaTwitter className="text-3xl md:text-5xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-400">
                <FaLinkedin className="text-3xl md:text-5xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-400">
                <FaInstagram className="text-3xl md:text-5xl" />
              </a>
            </div>
          </div>

          {/* Right Side with Contact Box */}
          <div className="w-full lg:w-1/2 p-4 sm:px-10 md:px-40 lg:px-4 mt-5">
            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-12 md:p-14">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Contact Us</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="border border-gray-300 p-2 rounded"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="border border-gray-300 p-2 rounded"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="border border-gray-300 p-2 rounded"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="border border-gray-300 p-2 rounded h-32"
                />
                <button type="submit" className="bg-red-600 text-white py-2 rounded mt-4">
                  Send Message
                </button>
                {message && (
                  <div className="text-center bg-blue-500 text-white p-2">
                    <p>{message}</p>
                  </div>
                )}
                {error && (
                  <div className="text-center bg-red-600 text-black p-2">
                    <p>{error}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
