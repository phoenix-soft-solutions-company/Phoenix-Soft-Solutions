import React from "react";
import heading from "../constants/images/tech/technology-heading.jpg";

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
        <h1 className="text-3xl font-bold mb-8 text-center">OUR VALUES</h1>

        <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-3xl text-center">
          <ul className="list-none space-y-6">
            <li>
              <h3 className="text-2xl font-semibold mb-2">How we play</h3>
              <p>
                It's important to know that what matters to us also matters to
                you.
              </p>
            </li>

            <li>
              <h3 className="text-2xl font-semibold mb-2">
                We're in this together
              </h3>
              <p>
                We work with, not for, our partners and teams to make them more
                successful. We work best in high-performing teams and consider
                our partners to be on the team with us. We have shared goals and
                a drive to succeed.
              </p>
            </li>

            <li>
              <h3 className="text-2xl font-semibold mb-2">Bring your best</h3>
              <p>
                Achieving great things requires us to maintain high standards
                and deliver excellence. We strive to be deliberate, commit, take
                responsibility, and see things through.
              </p>
            </li>

            <li>
              <h3 className="text-2xl font-semibold mb-2">Be a pioneer</h3>
              <p>
                We’re always looking to experiment, learn, and improve. We
                constantly iterate over build, measure, learn. We’re agile in
                how we think about problems and how we deliver solutions.
              </p>
            </li>

            <li>
              <h3 className="text-2xl font-semibold mb-2">Ask Why?</h3>
              <p>
                Asking why drives our desire to deliver the right thing. We
                position ourselves for breakthroughs that give our partners an
                unfair advantage in their market.
              </p>
            </li>

            <li>
              <h3 className="text-2xl font-semibold mb-2">Be ready to help</h3>
              <p>
                Our industry has huge potential, but in many ways is
                self-serving. We choose to be different, serving with integrity,
                commitment, and excellence. To achieve this, simply be ready to
                help.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="p-8 bg-gray-100 text-black flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-center">OUR BENEFITS</h2>

        <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl">
          <h3 className="text-2xl font-semibold mb-4">
            Some extras at X Croup
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Success at X Croup means you'll always be facing new challenges -
              which means you're learning and empowered to overcome your current
              challenges.
            </li>
            <li>
              We provide coaches and learning tracks through our X Croup Academy
              program, including Product Discovery, Tech Practices, Agile
              Facilitation, Product Management, and People Leadership.
            </li>
            <li>
              Opportunities to showcase your skills through our weekly CoPX
              experience discussions, fortnightly lunch presentations, and
              cross-team huddles.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Career;
