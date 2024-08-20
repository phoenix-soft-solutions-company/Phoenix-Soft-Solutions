import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Styles.css";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function Footer() {
  return (
    <div className=" bg-red-600 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-16 xl:justify-items-center py-8 px-4 md:px-10">
        <div className="">
          <h1 className="text-xl font-bold tracking-wider font-mono underline-animation">
            ABOUT US
          </h1>
          <div className="flex flex-row mt-2">
            <p className="text-md pr-8 lg:text-justify">
              Phoenix Soft Solutions is one of the reputed and leading IT
              companies of New Zealand. We provide next generation digital
              services that look great and are easy-to-use, which helps our
              clients grow their businesses successfully.
            </p>
          </div>
        </div>

        <div className="">
          <h1 className="text-xl font-bold tracking-wider font-mono underline-animation">
            Head Office
          </h1>
          <p className="text-md mt-2">
            <span>Phoenix Soft Solutions (Pvt) Ltd,</span>
            <br />
            <span>1/46 Martin Place,</span> <br />
            <span>Sydney NSW 2000,</span> <br />
            <span>Australia.</span>
            <br />
            <span>Email: info@phoenixsoftsolutions.com</span>
            <br />
            <span>Phone: +61 2-7912 3603 </span>
          </p>
        </div>

        <div className="">
          <h1 className="text-xl font-bold tracking-wider font-mono underline-animation">
            Branches
          </h1>
          <p className="text-md mt-2">
            <span>New Zealand:</span>
            <br />
            <span>United Kingdom: +44 7908 678192</span>
            <br />
            <span>Sri Lanka: +94 77 844 3682</span>
            <br />
            <span>Sweden: +46 766 920017</span>
          </p>
        </div>

        <div className="">
          <h1 className="text-xl font-bold tracking-wider font-mono underline-animation">
            QUICK LINKS
          </h1>
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
      </div>

      <div className="pl-4 sm:pl-0">
        <p className="text-base font-mono text-start sm:text-center">
          &copy; {new Date().getFullYear()} Phoenix Soft Solutions. All Rights
          Reserved.
        </p>
        <div className="flex flex-row justify-start sm:justify-center mt-2 mb-5 text-sm">
          <a
            className="mr-4"
            href="https://www.termsfeed.com/live/5a224dd5-578c-41ff-b204-65c76070d75b"
            target="_blank"
            rel="noreferrer"
          >
            Cookies Policy
          </a>
          <a
            className="mr-4"
            href="https://www.termsfeed.com/live/54489c69-9a77-493c-ae5b-4ddfce02f7ce"
            target="_blank"
            rel="noreferrer"
          >
            Terms & Conditions
          </a>
          <a
            href="https://www.termsfeed.com/live/072f03ab-4e8f-409f-95e3-190ba13ed2b0"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
        </div>
        <div className="flex flex-row justify-start sm:justify-center gap-3 lg:gap-5 mt-2 mb-5">
          <a
            href="https://www.facebook.com/phoenixsoftsolutionsnz?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
