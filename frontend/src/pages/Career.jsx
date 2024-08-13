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
    <div className="min-h-screen relative">
      <header className="relative w-full h-[50vh]">
        <img
          src={heading}
          alt="header"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest">
            CAREER
          </h1>
        </div>
      </header>

      <section className="p-8 bg-white text-black flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-center">OUR VALUES</h2>

        <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-6xl">
          <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row md:gap-x-10 lg:gap-x-0 xl:gap-x-4">
            <div className="w-full md:w-1/2 pr-4">
              <ul className="list-none space-y-6 text-lg text-black lg:text-xl">
                <li className="flex items-start transform transition-transform duration-300 hover:translate-x-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-red-600 mr-2 w-6 h-6"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">How we play</h3>
                    <p>
                      It's important to know that what matters to us also
                      matters to you.
                    </p>
                  </div>
                </li>

                <li className="flex items-start transform transition-transform duration-300 hover:translate-x-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-red-600 mr-2 w-6 h-6"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      We're in this together
                    </h3>
                    <p>
                      We work with, not for, our partners and teams to make them
                      more successful. We work best in high-performing teams and
                      consider our partners to be on the team with us. We have
                      shared goals and a drive to succeed.
                    </p>
                  </div>
                </li>

                <li className="flex items-start transform transition-transform duration-300 hover:translate-x-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-red-600 mr-2 w-6 h-6"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Bring your best
                    </h3>
                    <p>
                      Achieving great things requires us to maintain high
                      standards and deliver excellence. We strive to be
                      deliberate, commit, take responsibility, and see things
                      through.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 pl-4">
              <ul className="list-none space-y-6 text-lg text-black lg:text-xl">
                <li className="flex items-start transform transition-transform duration-300 hover:translate-x-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-red-600 mr-2 w-6 h-6"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Be a pioneer
                    </h3>
                    <p>
                      We’re always looking to experiment, learn, and improve. We
                      constantly iterate over build, measure, learn. We’re agile
                      in how we think about problems and how we deliver
                      solutions.
                    </p>
                  </div>
                </li>

                <li className="flex items-start transform transition-transform duration-300 hover:translate-x-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-red-600 mr-2 w-6 h-6"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Ask Why?</h3>
                    <p>
                      Asking why drives our desire to deliver the right thing.
                      We position ourselves for breakthroughs that give our
                      partners an unfair advantage in their market.
                    </p>
                  </div>
                </li>

                <li className="flex items-start transform transition-transform duration-300 hover:translate-x-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-red-600 mr-2 w-6 h-6"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Be ready to help
                    </h3>
                    <p>
                      Our industry has huge potential, but in many ways is
                      self-serving. We choose to be different, serving with
                      integrity, commitment, and excellence. To achieve this,
                      simply be ready to help.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="p-8 bg-gray-100 text-black flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-center">OUR BENEFITS</h2>

        <div className="max-w-5xl w-full space-y-8">
          {/* Card 1: Text Left, Image Right */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
            <div className="w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-red-600">
                Opportunities to learn and share what you know
              </h3>
              <p>
                Success at X Croup means you'll always be facing new challenges
                - which means you're learning and empowered to overcome your
                current challenges. <br></br> <br></br>To facilitate learning,
                we provide coaches and learning tracks through our X Croup
                Academy program. Our current learning tracks include: Product
                Discovery, Tech Practices, Agile Facilitation, Product
                Management and People Leadership. Plus, there are plenty of
                opportunities to showcase your skills to your VPT and others at
                X Croup through our weekly CoPX experience discussions,
                fortnightly lunch presentations and cross-team huddles.
              </p>
            </div>
            <div className="w-1/2 pl-6">
              <img
                src={card1}
                alt="Learning opportunities"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Card 2: Image Left, Text Right */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center flex-row-reverse">
            <div className="w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-red-600">
                Create impactful software and share in the financial upside
              </h3>
              <p>
                At X Croup, we love building impactful and purposeful software
                for our customers. Our customers are building SaaS businesses
                and the awesome thing about SaaS is that when you are creating
                an impact for good, then scaling the business also scales the
                impact.<br></br> <br></br> X Croup Ventures is our team ESOP,
                giving everyone who works at X Croup a chance to own shares in
                our customers. So when our customers win, we not only take pride
                in knowing we’ve achieved an awesome impact, but we share in the
                financial upside.
              </p>
            </div>
            <div className="w-1/2 pr-6">
              <img
                src={card2}
                alt="Showcasing skills"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Card 1: Text Left, Image Right */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
            <div className="w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-red-600">
                A supportive & encouraging team environment
              </h3>
              <p>
                Our Virtual Product Teams are a core feature of X Croup. We
                value collaboration and co-working, and as part of a VPT, you'll
                have access to, and be supported by other talented people who
                are passionate about the success of our partners and X Croup.
              </p>
            </div>
            <div className="w-1/2 pl-6">
              <img
                src={card3}
                alt="Supportive environment"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Card 2: Image Left, Text Right */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center flex-row-reverse">
            <div className="w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-red-600">
                An office worth coming to
              </h3>
              <p>
                We strive to provide an environment where people want to be.
                This includes a variety of spaces to meet and connect, healthy
                snacks, table tennis, heaps of space and natural light, morning
                teas, regular lunches, drinks, team activities and a personal
                health allowance. But most of all, a truly inclusive team who
                enjoy working together.
              </p>
            </div>
            <div className="w-1/2 pr-6">
              <img
                src={card4}
                alt="Office environment"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Card 1: Text Left, Image Right */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
            <div className="w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-red-600">
                Flexible working
              </h3>
              <p>
                Whether you’re up with the sun or prefer a lie in, our teams
                work closely together to create schedules that work for them and
                our clients. If you like to sit or stand at your desk, or tuck
                yourself away on a sofa, we have flexible spaces to ensure
                everyone is comfortable. We support working from home too.
              </p>
            </div>
            <div className="w-1/2 pl-6">
              <img
                src={card5}
                alt="Flexible working"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Card 2: Image Left, Text Right */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center flex-row-reverse">
            <div className="w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-red-600">
                Celebrations
              </h3>
              <p>
                We love celebrating the awesome things our teams achieve, from
                promotions, completed projects, anniversaries and personal
                milestones, to everyone sharing weekly props to acknowledge the
                great work their peers are doing.
              </p>
            </div>
            <div className="w-1/2 pr-6">
              <img
                src={card6}
                alt="Celebrations"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Card 1: Image Top, Text Bottom */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <div className="w-full mb-4">
          <img
            src={card1}
            alt="Open positions"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="w-full text-center">
          <h3 className="text-2xl font-semibold mb-4 text-red-600">
            Apply to our open positions
          </h3>
          <p>
            Create your own role. We’re always on the lookout for talented
            people to join the growing team at X Croup. Is it you?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Career;
