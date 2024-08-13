import React from "react";
import heading from "../constants/images/tech/technology-heading.jpg";

// Add your images here
import image1 from "../constants/images/tech/technology-heading.jpg";
import image2 from "../constants/images/tech/technology-heading.jpg";
import image3 from "../constants/images/tech/technology-heading.jpg";
import image4 from "../constants/images/tech/technology-heading.jpg";
import image5 from "../constants/images/tech/technology-heading.jpg";
import image6 from "../constants/images/tech/technology-heading.jpg";

const Career = () => {
  const values = [
    {
      title: "How we play",
      description:
        "It's important to know that what matters to us also matters to you.",
      image: image1,
      reverse: false,
    },
    {
      title: "We're in this together",
      description:
        "We work with, not for, our partners (and teams) to make them more successful. We work best in high-performing teams and consider our partners to be on the team with us. We have shared goals and a drive to succeed.",
      image: image2,
      reverse: true,
    },
    {
      title: "Bring your best",
      description:
        "Achieving great things requires us to maintain high standards and deliver excellence. To achieve this we strive to be deliberate, commit, take responsibility, and see things through.",
      image: image3,
      reverse: false,
    },
    {
      title: "Be a pioneer",
      description:
        "We’re always looking to experiment, learn and improve - that’s why we constantly iterate over build, measure, learn. We’re agile in how we think about problems and how we deliver solutions.",
      image: image4,
      reverse: true,
    },
    {
      title: "Ask Why?",
      description:
        "Asking why drives our desire to deliver the right thing and to position ourselves for breakthroughs in ways that give our partners an unfair advantage in their market.",
      image: image5,
      reverse: false,
    },
    {
      title: "Be ready to help",
      description:
        "Our industry has huge potential, but in many ways is self-serving. We choose to be different. Serving with integrity, with commitment, and with excellence are our non-negotiables. To achieve this is easy: be ready to help.",
      image: image6,
      reverse: true,
    },
  ];

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

      <section className="p-8 bg-white text-black">
        <h2 className="text-center text-3xl font-bold mb-8">OUR VALUES</h2>

        <div className="space-y-12 mx-10 p-10 ">
          {values.map((value, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row p-4 ${
                value.reverse ? "lg:flex-row-reverse" : ""
              } items-center bg-gray-100 shadow-lg rounded-lg overflow-hidden`}
            >
              <div className="lg:w-1/2 p-2 text-left mx-28">
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p>{value.description}</p>
              </div>
              <div className="lg:w-1/2">
                <img
                  src={value.image}
                  alt={value.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="p-8 bg-gray-100 text-black mt-12 ">
        <h2 className="text-center text-3xl font-bold mb-8">OUR BENEFITS</h2>

        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold">Some extras at X Croup</h3>
            <p>
              Success at X Croup means you'll always be facing new challenges -
              which means you're learning and empowered to overcome your current
              challenges.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">
              Opportunities to learn and share what you know
            </h3>
            <p>
              To facilitate learning, we provide coaches and learning tracks
              through our X Croup Academy program. Our current learning tracks
              include: Product Discovery, Tech Practices, Agile Facilitation,
              Product Management, and People Leadership. Plus, there are plenty
              of opportunities to showcase your skills to your VPT and others at
              X Croup through our weekly CoPX experience discussions,
              fortnightly lunch presentations, and cross-team huddles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
