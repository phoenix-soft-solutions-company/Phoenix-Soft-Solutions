import React from "react";
import service from "../../constants/images/services/cyber.png";
import middle from "../../constants/images/services/cyber2.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Cyber = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img
          src={service}
          className="object-cover w-full h-full"
          alt="Cyber Security"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            Cyber security system development
          </h1>
        </div>
      </div>

      {/* Centered Text Section */}
      <div className="flex flex-col items-center justify-center text-center mt-8">
        <h4 className="text-xl font-semibold">
          Let our Compliance, Security, and Risk experts Assist with your
          Cybersecurity Program
        </h4>
        <h1 className="text-3xl lg:text-4xl font-bold mt-2 text-red-500">
          Cyber Security Consulting<br></br> Services and Strategies to put
          <br></br> you on top.
        </h1>
      </div>

      {/* Two-Side Section */}
      <div className="flex flex-col lg:flex-row justify-between mt-16 px-8 lg:px-32">
        {/* Left Side */}
        <div className="lg:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">
            Strategy and Advisory Services
          </h2>
          <p className="text-lg mb-4 text-justify">
            Every business faces its own set of challenges, from rules and
            regulations to highly sophisticated data security threats. And
            regardless of company size, one-on-one counsel from a dedicated
            cyber security engineer is often essential to keep pace. Still short
            of hiring a CISO or multiple security experts, it can be challenging
            to pinpoint hidden vulnerabilities, draft the right action plan, or
            choose the best technologies for your environment to safeguard data
            assets and comply with new laws—particularly within our fast-paced
            and ever-adapting threat landscape.<br></br> <br></br>But with our
            Cyber Security Consulting, we offer a no-compromise solution that
            eliminates new hire commitments while delivering the executive-level
            counsel needed to succeed. Gain a level of service previously only
            afforded by larger enterprises. We’ll work alongside management to
            best align security policies and practices with business objectives
            to advance your operational goals.<br></br>
            <br></br> Tap into a vast knowledge base while implementing cyber
            security strategies that work perfectly with your business model and
            budget. Enjoy on-demand and as-needed support from experienced
            consultants who are able to step in when you need us most. We
            specialize in executive advisory support, vendor assessment, and
            policy and technical implementation. And we’re available on a
            one-time or ongoing basis to ensure you address the myriad of
            security situations that present themselves throughout the year.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            Affordable Part-Time / On-Demand Cybersecurity Professionals
          </h2>
          <p className="text-lg text-justify">
            Every business faces its own set of challenges, from rules and
            regulations to highly sophisticated data security threats. And
            regardless of company size, one-on-one counsel from a dedicated
            cyber security engineer is often essential to keep pace. Still short
            of hiring a CISO or multiple security experts, it can be challenging
            to pinpoint hidden vulnerabilities, draft the right action plan, or
            choose the best technologies for your environment to safeguard data
            assets and comply with new laws—particularly within our fast-paced
            and ever-adapting threat landscape. But with our Cyber Security
            Consulting, we offer a no-compromise solution that eliminates new
            hire commitments while delivering the executive-level counsel needed
            to succeed. Gain a level of service previously only afforded by
            larger enterprises. We’ll work alongside management to best align
            security policies and practices with business objectives to advance
            your operational goals. Tap into a vast knowledge base while
            implementing cyber security strategies that work perfectly with your
            business model and budget. Enjoy on-demand and as-needed support
            from experienced consultants who are able to step in when you need
            us most. We specialize in executive advisory support, vendor
            assessment, and policy and technical implementation. And we’re
            available on a one-time or ongoing basis to ensure you address the
            myriad of security situations that present themselves throughout the
            year.
          </p>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 p-4 mt-8 lg:mt-0">
          <h2 className="text-2xl font-bold mb-4">
            Security Engineers and Architects
          </h2>
          <p className="text-lg mb-4 text-justify">
            Simple strategies go only so far to take organizations where they
            need to be. That’s why we take an individualized approach,
            connecting management with the most suitable firewall consultants,
            intrusion prevention consultants, SIEM consultants (QRadar, Splunk,
            Log Rhythm, AlienVault), network access control (NAC) security
            consultants (CISCO ISE, Forescout CounterACT), antivirus security
            consultants, and vulnerability scanning consultants (Qualys, Tenable
            Nessus, IBM App Scan, and Rapid7). We know the leading security
            products. We understand how to implement them in very unique
            environments. Our team of hands-on experts focus on security
            controls and standards specific to your business.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            We Shelter Clients from Risk
          </h2>
          <p className="text-lg text-justify">
            We take an impartial look at operations, benchmarking your
            environment with comparable organizations and situations. From
            security program design through audit preparation, our clients
            benefit from insight gleaned from our unique vantage point.<br></br>{" "}
            <br></br>Blending business acumen with cyber security expertise, we
            can step in to consult on vendor risk management, business
            continuity planning, technical security controls, vulnerability
            management, web application security, and compliance matters under
            GDPR, HIPAA, CMMC and PCI. We also conduct penetration testing and
            forensic investigation, with cyber security project managers at hand
            to plan, orchestrate, and execute major undertakings and ensure an
            optimal ROI. And our clients gain all of this on an on-demand,
            part-time, or full-time basis. This reduces the likelihood of data
            breaches for those that we provide security solutions for.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full mt-16 px-8 lg:px-32">
        <img
          src={middle}
          className="object-cover w-full h-auto rounded-lg shadow-lg"
          alt="Cybersecurity"
        />
      </div>

      {/* Justified Text Section */}
      <div className="flex flex-col items-center justify-center text-center mt-16 px-8">
        <h4 className="text-xl font-semibold text-red-500">
          Company Strengths at a glance
        </h4>
        <h1 className="text-3xl lg:text-4xl font-bold mt-4">
          Our Strong Points
        </h1>
        <p className="text-lg mt-4 text-justify">
          Cyber Security Services (CSS) has been listed in the top ten cyber
          security consulting companies on Google since 2013. We have provided
          consulting services for some of the largest companies around the globe
          to the smallest of startups. We are ready to deliver on security
          strategy, architecture, engineering, and risk objectives. Let us
          provide a delivery project plan that lowers overall costs and enhances
          the bottom line.
        </p>
      </div>

      {/* Card Section */}
      <div className="flex flex-col lg:flex-row justify-between mt-16 px-8 lg:px-32 mb-10 ">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8 lg:w-1/2 lg:mb-0 lg:mr-4 ">
          <h2 className="text-2xl font-bold mb-2 text-red-500">
            Risk and Compliance
          </h2>
          <p className="text-lg text-justify">
            At CSS, we help with your Risk and Compliance programs. We also
            setup standards that make sense for your industry. If a program
            already exists, we piggyback off of what you are currently doing and
            make adjustments as needed.
          </p>
          <ul className="list-none mt-4">
            <li className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-red-500 mr-2"
              />
              SOC 2 Type I and 2 Planning
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-red-500 mr-2"
              />
              ISO 27001:2022 Delivery
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-red-500 mr-2"
              />
              Risk Assessments
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-red-500 mr-2"
              />
              Governance, Risk, and Compliance (GRC) Setup
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-red-500 mr-2"
              />
              Internal Audit of Controls
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-red-500 mr-2"
              />
              PCI, HIPAA, FERPA, FACTA, GLBA Programs
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-red-500 mr-2"
              />
              ISO 27001, NIST Cybersecurity Framework, CMMC and NIST 800-161
              Programs
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 lg:w-1/2 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-red-500">
            Threat Protection and Response
          </h2>
          <p className="text-lg text-justify">
            We understand that vCISO is focused on strategic risk and compliance
            objectives throughout the year, but some organizations require
            hands-on cybersecurity expertise. Our team of professionals are
            ready to jump in where you need us the most. Our experts are
            assigned based on your specific needs.
          </p>
          <ul className="list-none mt-4">
            <li className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-red-500 mr-2"
              />
              Threat Hunting
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-red-500 mr-2"
              />
              Incident Response Program
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-red-500 mr-2"
              />
              Incident Tabletop Exercises (TTX)
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-red-500 mr-2"
              />
              Ransomware Prevention Program
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-red-500 mr-2"
              />
              Vulnerability Scanning and Vulnerability Management
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-red-500 mr-2"
              />
              Security Engineering and Architecture Assistance
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-red-500 mr-2"
              />
              Identity & Access Management
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-red-500 mr-2"
              />
              Managed Detection and Response (MDR) with CrowdSTrike
            </li>
          </ul>
        </div>
      </div>

      {/* Wave Section */}
      <div className="relative bg-red-500 text-white py-16">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-red-500">
          <svg
            viewBox="0 0 1440 320"
            className="absolute inset-x-0 bottom-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f87171"
              fillOpacity="1"
              d="M0,96L30,117.3C60,139,120,181,180,186.7C240,192,300,160,360,149.3C420,139,480,149,540,186.7C600,224,660,288,720,293.3C780,299,840,245,900,229.3C960,213,1020,235,1080,240C1140,245,1200,235,1260,218.7C1320,203,1380,181,1410,170.7L1440,160L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="relative z-10 text-center px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Get Started with Us</h2>
          <p className="text-lg mb-6">
            Contact us today to secure your business with our expert cyber
            security services and solutions. Let’s work together to protect what
            matters most.
          </p>
          <button className="bg-white text-red-500 py-2 px-6 rounded-full font-semibold">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cyber;
