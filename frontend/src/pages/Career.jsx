import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import heading from "../constants/images/tech/technology-heading.jpg";
import card1 from "../constants/images/Career/benifit1.jpg";
import card2 from "../constants/images/Career/benifit2.jpg";
import card3 from "../constants/images/Career/benifit3.jpg";
import card4 from "../constants/images/Career/benifit4.jpg";
import card5 from "../constants/images/Career/benifit5.jpg";
import card6 from "../constants/images/Career/benifit6.jpg";

const Career = () => {
  return (
    <div className="min-h-screen relative pt-16">
      <header className="relative w-full h-[40vh] md:h-[50vh]">
        <img
          src={heading}
          alt="header"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-widest">
            CAREER
          </h1>
        </div>
      </header>

      <section className="p-6 md:p-8 bg-white text-black flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center">
          OUR VALUES
        </h1>

        <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg max-w-6xl w-full">
          <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row md:gap-x-10 lg:gap-x-0 xl:gap-x-4">
            <div className="w-full md:w-1/2 pr-4">
              <ul className="list-none space-y-4 md:space-y-6 text-base md:text-lg text-black">
                {[
                  "How we play",
                  "We're in this together",
                  "Bring your best",
                ].map((title, index) => (
                  <li
                    key={index}
                    className="flex items-start transform transition-transform duration-300 hover:translate-x-2"
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-red-600 mr-2 w-6 h-6"
                    />
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-2">
                        {title}
                      </h3>
                      <p>
                        {index === 0 &&
                          "It's important to know that what matters to us also matters to you."}
                        {index === 1 &&
                          "We work with, not for, our partners and teams to make them more successful. We work best in high-performing teams and consider our partners to be on the team with us. We have shared goals and a drive to succeed."}
                        {index === 2 &&
                          "Achieving great things requires us to maintain high standards and deliver excellence. We strive to be deliberate, commit, take responsibility, and see things through."}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-1/2 pl-4">
              <ul className="list-none space-y-4 md:space-y-6 text-base md:text-lg text-black">
                {["Be a pioneer", "Ask Why?", "Be ready to help"].map(
                  (title, index) => (
                    <li
                      key={index}
                      className="flex items-start transform transition-transform duration-300 hover:translate-x-2"
                    >
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-red-600 mr-2 w-6 h-6"
                      />
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-2">
                          {title}
                        </h3>
                        <p>
                          {index === 0 &&
                            "We’re always looking to experiment, learn, and improve. We constantly iterate over build, measure, learn. We’re agile in how we think about problems and how we deliver solutions."}
                          {index === 1 &&
                            "Asking why drives our desire to deliver the right thing. We position ourselves for breakthroughs that give our partners an unfair advantage in their market."}
                          {index === 2 &&
                            "Our industry has huge potential, but in many ways is self-serving. We choose to be different, serving with integrity, commitment, and excellence. To achieve this, simply be ready to help."}
                        </p>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="p-6 md:p-8 bg-gray-100 text-black flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center">
          OUR BENEFITS
        </h1>

        <div className="max-w-5xl w-full space-y-6 md:space-y-8">
          {[
            {
              title: "Opportunities to learn and share what you know",
              description:
                "Success at X Croup means you'll always be facing new challenges - which means you're learning and empowered to overcome your current challenges. To facilitate learning, we provide coaches and learning tracks through our X Croup Academy program. Our current learning tracks include: Product Discovery, Tech Practices, Agile Facilitation, Product Management and People Leadership. Plus, there are plenty of opportunities to showcase your skills to your VPT and others at X Croup through our weekly CoPX experience discussions, fortnightly lunch presentations and cross-team huddles.",
              imgSrc: card1,
              imgAlt: "Learning opportunities",
            },
            {
              title:
                "Create impactful software and share in the financial upside",
              description:
                "At X Croup, we love building impactful and purposeful software for our customers. Our customers are building SaaS businesses and the awesome thing about SaaS is that when you are creating an impact for good, then scaling the business also scales the impact. X Croup Ventures is our team ESOP, giving everyone who works at X Croup a chance to own shares in our customers. So when our customers win, we not only take pride in knowing we’ve achieved an awesome impact, but we share in the financial upside.",
              imgSrc: card2,
              imgAlt: "Showcasing skills",
              reverse: true,
            },
            {
              title: "A supportive & encouraging team environment",
              description:
                "Our Virtual Product Teams are a core feature of X Croup. We value collaboration and co-working, and as part of a VPT, you'll have access to, and be supported by other talented people who are passionate about the success of our partners and X Croup.",
              imgSrc: card3,
              imgAlt: "Supportive environment",
            },
            {
              title: "An office worth coming to",
              description:
                "We strive to provide an environment where people want to be. This includes a variety of spaces to meet and connect, healthy snacks, table tennis, heaps of space and natural light, morning teas, regular lunches, drinks, team activities and a personal health allowance. But most of all, a truly inclusive team who enjoy working together.",
              imgSrc: card4,
              imgAlt: "Office environment",
              reverse: true,
            },
            {
              title: "Flexible working",
              description:
                "Whether you’re up with the sun or prefer a lie in, our teams work closely together to create schedules that work for them and our clients. If you like to sit or stand at your desk, or tuck yourself away on a sofa, we have flexible spaces to ensure everyone is comfortable. We support working from home too.",
              imgSrc: card5,
              imgAlt: "Flexible working",
            },
            {
              title: "Celebrations",
              description:
                "We love celebrating the awesome things our teams achieve, from promotions, completed projects, anniversaries and personal milestones, to everyone sharing weekly props to acknowledge the great work their peers are doing.",
              imgSrc: card6,
              imgAlt: "Celebrations",
              reverse: true,
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-4 ${
                card.reverse ? "md:flex-row-reverse" : ""
              } ${index % 2 === 1 ? "md:space-x-8" : "md:space-x-4"}`}
            >
              <div className="w-full md:w-1/2 mb-4 md:mb-0 ">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-red-600">
                  {card.title}
                </h3>
                <p>{card.description}</p>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={card.imgSrc}
                  alt={card.imgAlt}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center mb-8">
        <div className="w-full mb-4">
          <img
            src={card1}
            alt="Open positions"
            className="rounded-lg object-cover w-full h-48 md:h-64"
          />
        </div>
        <div className="w-full text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-red-600">
            Apply to our open positions
          </h3>
          <p>
            Create your own role. We’re always on the lookout for talented
            people to join the growing team at Phoenix Soft Solutions. Is it
            you?
          </p>
        </div>
        <div className="mt-6">
          <a
            href="/Company/Contactus"
            className="inline-block px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow hover:bg-red-600 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="p-6 md:p-8 bg-white text-black flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center">
          FAQ
        </h1>

        <div className="max-w-4xl w-full space-y-4 md:space-y-6">
          {[
            {
              question: "I want to learn and develop. Will X Croup support me?",
              answer:
                "Yes, X Croup is committed to your professional development. We offer various learning opportunities through our X Croup Academy program, including coaching, learning tracks, and regular knowledge-sharing sessions.",
            },
            {
              question: "What sort of tech stack is used at X Croup?",
              answer:
                "At X Croup, we use a modern tech stack that includes a variety of tools and technologies. The specifics can vary depending on the project, but we emphasize using the latest industry standards and best practices to deliver high-quality solutions.",
            },
            {
              question: "How does X Croup implement and practice Agile?",
              answer:
                "We practice Agile through iterative development, regular stand-ups, sprint planning, and retrospectives. Our teams are empowered to adapt and improve processes continuously, ensuring that we meet our partners' needs effectively.",
            },
            {
              question:
                "What sort of people and skillsets typically work for X Croup?",
              answer:
                "Our teams are diverse, consisting of individuals with various skill sets including software development, product management, Agile facilitation, and more. We value people who are innovative, collaborative, and committed to delivering excellence.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md mb-4"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-black-600">
                {faq.question}
              </h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Career;
