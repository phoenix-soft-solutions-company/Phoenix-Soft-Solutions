import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Logo from "../constants/images/logo.png";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-16 py-8 px-4 md:px-10 bg-red-800 text-white">
      <div className="md:pr-10">
        <h1 className="text-xl font-bold tracking-wider font-mono">ABOUT US</h1>
        <p className="text-md">
          Learn more about our company and values.Learn more about our company and values.Learn more about our
          company and values.Learn more about our company and values.
        </p>
        <br />
        <p className="text-sm font-mono">&copy; {new Date().getFullYear()} Xcrop. All Rights Reserved.</p>
      </div>

      <div>
        <h1 className="text-xl font-bold tracking-wider font-mono">CONTACT US</h1>
        <div className="flex flex-col sm:flex-row gap-0 sm:gap-10">
          <div>
            <p className="text-md">
              <span>Xcrop (Pvt) Ltd,</span>
              <br />
              <span>66, Fieldside Road,</span> <br />
              <span>Bromley,</span> <br />
              <span>United Kingdom BR14LA.</span>
            </p>
          </div>
          <div className="mt-5 sm:mt-0">
            <p className="text-md">
              <span>Email: contact@xcrop.com</span>
              <br />
              <span>Phone: +44 7308 296025</span>
            </p>
            <div className="flex flex-row gap-3 lg:gap-5 mt-5">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start">
        <img src={Logo} alt="Company Logo" className="h-32 lg:h-48 w-32 lg:w-48" />
      </div>
    </div>
  );
}

export default Footer;
