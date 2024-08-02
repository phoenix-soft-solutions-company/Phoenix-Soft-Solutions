import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Styles.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" bg-red-800 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-16 xl:justify-items-center py-8 px-4 md:px-10">
        <div className="">
          <h1 className="text-xl font-bold tracking-wider font-mono underline-animation">
            ABOUT US
          </h1>
          <div className="flex flex-row mt-2">
            <p className="text-md">
              Learn more about our company and values.Learn more about our
              company and values.Learn more about our company and values.Learn
              more about our company and values.
            </p>
          </div>
        </div>

        <div className="">
          <h1 className="text-xl font-bold tracking-wider font-mono underline-animation">
            Head Office
          </h1>
          <p className="text-md mt-2">
            <span>Xcrop (Pvt) Ltd,</span>
            <br />
            <span>1/46 Martin Place,</span> <br />
            <span>Sydney NSW 2000,</span> <br />
            <span>Australia.</span>
            <br />
            <span>Email: info@xcrop.com</span>
            <br />
            <span>Phone: +</span>
          </p>
        </div>

        <div className="">
          <h1 className="text-xl font-bold tracking-wider font-mono underline-animation">
            Branches
          </h1>
          <p className="text-md mt-2">
            <span>New Zealand - +</span>
            <br />
            <span>United Kingdom - +44 73 089 6025 </span>
            <br />
            <span>Sri Lanka - +94 77 844 3682</span>
            <br />
            <span>Sweden - +46 76 692 1940</span>
            <br />
            <span>Branch 1 - +4</span>
          </p>
        </div>

        <div className="">
          <h1 className="text-xl font-bold tracking-wider font-mono underline-animation">
            QUICK LINKS
          </h1>
          <p className="text-md mt-2">
            <span>
              <Link to="/" className="">
                Home
              </Link>
            </span>
            <br />
            <span>
              <Link to="/company" className="">
                Company
              </Link>
            </span>
          </p>
        </div>
      </div>

      <div className="pl-4 sm:pl-0">
        <p className="text-sm font-mono text-start sm:text-center">
          &copy; {new Date().getFullYear()} Xcrop. All Rights Reserved.
        </p>
        <div className="flex flex-row justify-start sm:justify-center gap-3 lg:gap-5 mt-2 mb-5">
          <a
            href="https://www.facebook.com"
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
        </div>
      </div>
    </div>
  );
}

export default Footer;
