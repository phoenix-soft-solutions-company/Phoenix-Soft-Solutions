import React from "react";
import service from "../../constants/images/services/qa.jpg";
import anotherImage from "../../constants/images/services/qa3.jpg"; // Update this with your image source
import cardImage from "../../constants/images/services/qa1.jpg";
import cardImage2 from "../../constants/images/services/qa2.jpg";

const Card = ({ title, paragraph }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full max-w-4xl">
    <h2 className="text-xl font-semibold mb-2 text-red-600">{title}</h2>
    <p>{paragraph}</p>
  </div>
);

// ImageCard Component for image-based cards (image first)
const ImageCard = ({ image, title, paragraph }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full max-w-md flex flex-col items-center pt-16">
    <img src={image} alt="Card" className="w-full h-auto rounded-lg mb-4" />
    <h2 className="text-xl font-semibold mb-2 text-red-600">{title}</h2>
    <p className="text-center">{paragraph}</p>
  </div>
);

const Qa = () => {
  const cardData = [
    {
      title: "Vietnam's top 1% software engineer team",
      paragraph:
        "Saigon Technology is proud to be one of the firms that have attracted a lot of outstanding software engineers in the top 1% of Vietnam - particularly the team of Testers/Quality Control Engineers - and stands out for its QA testing services benefited many international initiatives.",
    },
    {
      title: "Concentrate all of our efforts on your project",
      paragraph:
        "You will assemble and allocate 100% of the human resources you have chosen to work only on developing your software project. This is not only a promise, but also a guiding principle of Saigon Technology over the last ten years, since customer-focus and result-orientation are the two most prominent values among the five iconic core principles.",
    },
    {
      title: "Ready to kick-off the project after only 3 working-day",
      paragraph:
        "Following an exchange of information and execution of the relevant contract, Saigon Technology will assemble a team as fast as possible to begin the project within three business days of receiving the crucial details. When it comes to processing projects quicker, we know more than anyone else that it will improve the speed of competition and help companies better compete in today's fast-paced marketplace.",
    },
    {
      title: "Same time-zone with you",
      paragraph:
        "The needs of the client come first, and the business time zones of the stakeholders are adjusted to accommodate the preferred agenda. In order to maintain the highest possible level of client satisfaction at all times, we make it a point to modify the working or meeting schedule wherever possible so that it is most suitable for the individual in question.",
    },
    {
      title: "The most affordable service prices in the Pacific-Asia region",
      paragraph:
        "Our costs for quality assurance testing services are among the most affordable in the Pacific Asia area, which is just another one of our many strengths. It goes without saying that we never lose sight of the importance of the quality aspect while doing so, preventing us from focusing on the price point alone. Because, in the end, what motivates clients to remain loyal to Saigon Technology and follow us for a longer period of time is still the professional working attitude and superior output quality.",
    },
    {
      title: "Validated Quality Assurance Procedures",
      paragraph:
        "Throughout our ten years of supporting software development clients, we have consistently devoted a significant amount of time and resources in enhancing our expertise and broadening the range of our offerings. Significantly, Saigon Technology has invested in testing and upgrading the quality assurance methods since its inception and continued growth in the IT industry.",
    },
  ];

  const secondCardData = [
    {
      image: cardImage,
      title: "MANUAL TESTING",
      paragraph:
        "In manual testing, the QA Analyst performs the tests by hand, and the results are recorded. Finding errors in software that is still in the development phase is the purpose of this process. The person conducting the test, in particular, will be responsible for ensuring that the program or software in consideration has all of its required components. Following that, testing reports will be prepared to serve as the foundation for the next step of software development.",
    },
    {
      image: cardImage2, // Replace with your image source
      title: "AUTOMATED TESTING",
      paragraph:
        "Automation is achieved via the use of test scripting and code written by the software testers. In order to create test scripts and verify the product, testers make use of relevant automation technologies. The completion of the test execution in a shorter period of time is the desired end objective.",
    },
    // Add more data here if needed
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img
          src={service} // Replace with your image source
          className="object-cover w-full h-full"
          alt="Mobile Development"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            software QA testing
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-center">
          Phoenix Soft Solutions - WITH A DECADE OF
          <br /> EXPERIENCE IN QA TESTING SERVICES
        </h1>
        <div className="text-center mb-8">
          <p className="mb-4">
            “Two of our many essential service categories are QA and Software
            Testing services, which are meant to <br /> ensure that the software
            meets all of its standards and expectations before it is released.
          </p>
          <p className="mb-4">
            This guarantee contributes significantly to the success of the
            software in the future. In order to assist our
            <br /> clients in delivering high-quality software in a timely
            manner, we offer comprehensive quality assurance
            <br /> services under strict time constraints.”
          </p>
        </div>
        <img
          src={anotherImage} // Replace with your image source
          className="w-full max-w-md"
          alt="DevOps Services"
        />
        <p className="mb-4 text-center mt-8">
          The customizable service model offered by Phoenix Soft Solutions
          includes web app/ mobile app and custom app testing. With
          <br /> ten years of experience in the worldwide IT market - especially
          for QA testing software, we have numerous non-tech
          <br /> and tech company clients from key nations such as the United
          States, Canada, the United Kingdom, Australia, Germany, and the
          <br /> Netherlands… to seek guidance on appropriate software
          solutions; and have subsequently opted to continue with and
          <br /> delegate the project to Phoenix Soft Solutions for many years.
        </p>

        {/* Text-Based Card Section */}
        <div className="w-full max-w-4xl text-center mt-12">
          <h1 className="text-2xl lg:text-3xl font-serif font-bold mb-4">
            OUR COMMITMENT TO EXCELLENCE
          </h1>
          <div className="border-b-4 border-red-500 w-1/3 mx-auto"></div>
        </div>
        <div className="flex flex-col items-center mt-12 px-4">
          {cardData.map((card, index) => (
            <Card key={index} title={card.title} paragraph={card.paragraph} />
          ))}
        </div>

        {/* Image-Based Card Section */}
        <div className="w-full max-w-4xl text-center mt-12">
          <h1 className="text-2xl lg:text-3xl font-serif font-bold mb-4">
            HOW IS QA TESTING SOFTWARE HANDLED?
          </h1>
          <div className="border-b-4 border-red-500 w-1/3 mx-auto"></div>
        </div>
        <div className="flex flex-wrap justify-center px-4 mt-12 gap-4">
          {secondCardData.map((card, index) => (
            <ImageCard
              key={index}
              image={card.image}
              title={card.title} // Pass the title here
              paragraph={card.paragraph}
            />
          ))}
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
            Contact us today to enhance your business with our expert Software
            QA Testing services and solutions. Let’s work together to ensure
            your software performs flawlessly and meets the highest quality
            standards.
          </p>
          <a href="/Company/Contactus" className="block">
            <button className="bg-white text-red-500 py-2 px-6 rounded-full font-semibold">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Qa;
