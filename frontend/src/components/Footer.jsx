import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import "./Styles.css";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Logo from "../constants/images/logo2.png";

function Footer() {
  return (
    <div className="bg-red-600 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 xl:gap-10 py-8 px-4 md:px-10">
        <div className="lg:col-span-2 flex flex-col lg:flex-row">
          <img src={Logo} alt="logo" className="w-[150px] h-[150px] mx-auto sm:mx-0" />

          <div className="lg:ml-6 text-center sm:text-left mt-4 sm:mt-0">
            <p>
              Phoenix Soft Solutions is one of the reputed and leading IT companies of Australia. We provide
              next-generation digital services that look great and are easy-to-use, which helps our clients
              grow their businesses successfully.
            </p>
            <div className="flex flex-row justify-center sm:justify-start gap-3 lg:gap-5 mt-3">
              <a
                href="https://www.facebook.com/phoenixsoftsolutionsnz?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-wider font-mono underline-animation">SERVICES</h1>
          <p className="text-md mt-2">
            <span>Web Development</span>
            <br />
            <span>App Development</span>
            <br />
            <span>Desktop Application</span>
            <br />

            <span>Cyber Security System Development</span>
            <br />
            <span>UI/UX Designing</span>
          </p>
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-wider font-mono underline-animation">QUICK LINKS</h1>
          <ul className="list-none mt-2">
            <li className="flex flex-row transform transition-transform duration-300 hover:translate-x-2">
              <ArrowRightIcon className="text-white h-5 w-5 mr-2 font-semibold" />
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li className="flex flex-row transform transition-transform duration-300 hover:translate-x-2">
              <ArrowRightIcon className="text-white h-5 w-5 mr-2 font-semibold" />
              <Link to="/company" className="">
                Company
              </Link>
            </li>
            <li className="flex flex-row transform transition-transform duration-300 hover:translate-x-2">
              <ArrowRightIcon className="text-white h-5 w-5 mr-2 font-semibold" />
              <Link to="/service" className="">
                Service
              </Link>
            </li>
            <li className="flex flex-row transform transition-transform duration-300 hover:translate-x-2">
              <ArrowRightIcon className="text-white h-5 w-5 mr-2 font-semibold" />
              <Link to="/domain" className="">
                Domain
              </Link>
            </li>
            <li className="flex flex-row transform transition-transform duration-300 hover:translate-x-2">
              <ArrowRightIcon className="text-white h-5 w-5 mr-2 font-semibold" />
              <Link to="/hosting" className="">
                Hosting
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-wider font-mono underline-animation">CONTACT US</h1>

          <div className="mt-4 space-y-3">
            <div className="flex">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white mr-2 mt-1" />
              <span>
                1/46 Martin Place,
                <br /> Sydney NSW 2000,
                <br /> Australia.
              </span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-white mr-2" />
              <span>info@phoenixsoftsolutions.com</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-white mr-2" />
              <span>+61 2-7912 3603</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-600 text-white">
        {/* Other footer content */}
        <div className="mt-4 mb-4" style={{ borderTop: "6px solid white" }}></div>{" "}
        {/* Thicker white horizontal line */}
        {/* White horizontal line */}
        <div className="pl-4 sm:pl-0">
          <p className="text-base font-mono text-start sm:text-center">
            &copy; {new Date().getFullYear()} Phoenix Soft Solutions. All Rights Reserved.
          </p>
          <div className="flex flex-row justify-end pr-5 mt-2 mb-5 text-sm">
            <a
              className="mr-4"
              href="https://www.termsfeed.com/live/5a224dd5-578c-41ff-b204-65c76070d75b"
              target="_blank"
              rel="noreferrer">
              Cookies Policy
            </a>
            <a
              className="mr-4"
              href="https://www.termsfeed.com/live/54489c69-9a77-493c-ae5b-4ddfce02f7ce"
              target="_blank"
              rel="noreferrer">
              Terms & Conditions
            </a>
            <a
              href="https://www.termsfeed.com/live/072f03ab-4e8f-409f-95e3-190ba13ed2b0"
              target="_blank"
              rel="noreferrer">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
