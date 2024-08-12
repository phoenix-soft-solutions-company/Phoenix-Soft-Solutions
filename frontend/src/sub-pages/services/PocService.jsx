import React from "react";
import service1 from "../../constants/images/services/webabout.jpg";
import AI from "../../constants/images/icons/microchip.png";
import Blockchain from "../../constants/images/icons/blockchain.png";
import Auto from "../../constants/images/icons/system-integration.png";
import IOT from "../../constants/images/icons/iot.png";
import settings from "../../constants/images/icons/Icon1.png";
import maintance from "../../constants/images/icons/Icon4.png";
import feedback from "../../constants/images/icons/write-review.png";
import project from "../../constants/images/icons/ico3.png";
import risk from "../../constants/images/icons/risk-management.png";

const Poc = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img
          src={service1}
          className="object-cover w-full h-full"
          alt="Mobile Development"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            DEVOPS SERVICE
          </h1>
        </div>
      </div>

      {/* Centered h1 and Paragraph */}
      <div className="flex flex-col items-center justify-center mt-10 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold">
          PoC Development Services We Offer
        </h1>
        <p className="text-lg lg:text-xl mt-4">
          The purpose of Proof of Concept (PoC) development services is to
          assess the waters and ensure that a<br></br> solution or idea will
          work before committing to a larger scale implementation. Significant
          PoC development<br></br> services offered by Saigon Technology
          include:
        </p>
      </div>

      {/* Existing Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-10">
        {/* Card 1 */}
        <div className="bg-white p-2 shadow-lg rounded-lg flex flex-col items-center text-center">
          <img
            src={AI}
            alt="AI Icon"
            className="text-3xl text-red-500 mb-4"
          />
          <h2 className="text-lg font-semibold">
            AI (Artificial Intelligence)
          </h2>
          <p className="mt-2 text-sm">
            There has been a high demand for our AI proof-of-concept development
            service. Our team developed PoC software to prove the usefulness of
            AI in several industries, including predictive modeling, natural
            language processing, and computer vision.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center text-center">
          <img
            src={Blockchain}
            alt="Blockchain Icon"
            className="text-3xl text-red-500 mb-4"
          />
          <h2 className="text-lg font-semibold">Blockchain</h2>
          <p className="mt-2 text-sm">
            Proof-of-concepts (PoCs) have been produced to examine the viability
            and adaptability of blockchain systems in a variety of settings. We
            have applied these smart solutions to different types of services in
            the market, such as: supply chain management and business services.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center text-center">
          <img
            src={Auto}
            alt="Automation Systems Icon"
            className="text-3xl text-red-500 mb-4"
          />
          <h2 className="text-lg font-semibold">Automation Systems</h2>
          <p className="mt-2 text-sm">
            PoCs have been developed as part of our efforts to present clients
            with state-of-the-art, technically comprehensive solutions, and they
            allow us to minimize risk for the ultimate AR & VR product. Since AR
            and VR are extensively employed in industries like healthcare and
            manufacturing, we place a greater emphasis on the process of
            developing proof-of-concept software.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col items-center text-center">
          <img
            src={IOT}
            alt="IoT Icon"
            className="text-3xl text-red-500 mb-4"
          />
          <h2 className="text-lg font-semibold">IoT (Internet of Things)</h2>
          <p className="mt-2 text-sm">
            As with any new technology, the best approach to introduce IoT to a
            company is through a proof of concept with mistakes being minimized.
            A Proof of Concept is a small-scale trial that allows you to test
            out an answer in your own setting. Saigon Technology's PoC
            development services, particularly for IoT, have been consistently
            deployed, and the company has received numerous requirements for
            these services.
          </p>
        </div>
      </div>

      {/* Centered h1 and Paragraph after Existing Cards */}
      <div className="flex flex-col items-center justify-center mt-10 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold">
          Why Choose Our PoC Services?
        </h1>
        <p className="text-lg lg:text-xl mt-4">
          We ensure that your ideas are brought to life with precision and
          innovation.<br></br> Our team works diligently to provide reliable and
          efficient PoC development that can help you make informed decisions.
        </p>
      </div>

      {/* New Cards Section */}
      <div className="grid grid-cols-1 gap-4 p-4 md:p-10">
        {/* Card 5 */}
        <div className="bg-white p-4 shadow-lg rounded-lg flex items-center max-w-2xl mx-auto">
          <img
            src={settings}
            alt="Cloud Solutions Icon"
            className="text-3xl text-red-500 mr-4"
          />
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">Keep the natural settings</h2>
            <p className="mt-2 text-sm">
              It is the practicality of PoC software development services that
              make it possible not to disrupt the environment. Specifically, the
              testing may be performed often and consistently without affecting
              the work of other members.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-white p-4 shadow-lg rounded-lg flex items-center max-w-2xl mx-auto">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">
              Organize your available assets
            </h2>
            <p className="mt-2 text-sm">
              Proof of concept meaning is not the finished product, and budget
              and schedule appropriately. In most cases, a time frame of two
              weeks - called ‘sprint’ - is considered to be appropriate for
              accomplishing what has to be done.
            </p>
          </div>
          <img
            src={maintance}
            alt="Mobile Applications Icon"
            className="text-3xl text-red-500 ml-4"
          />
        </div>

        {/* Card 7 */}
        <div className="bg-white p-4 shadow-lg rounded-lg flex items-center max-w-2xl mx-auto">
          <img
            src={feedback}
            alt="Database Systems Icon"
            className="text-3xl text-red-500 mr-4"
          />
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">
              Get input on the progress by utilizing feedback
            </h2>
            <p className="mt-2 text-sm">
              When utilizing PoC software development services, participants may
              offer continuous input on the progress of the project by seeing
              the modifications as they happen in the environment and providing
              comments as the code is written.
            </p>
          </div>
        </div>

        {/* Card 8 */}
        <div className="bg-white p-4 shadow-lg rounded-lg flex items-center max-w-2xl mx-auto">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">
              Adaptable and reasonably priced project
            </h2>
            <p className="mt-2 text-sm">
              PoC services are widely used to create adaptable, in-depth
              documents. Hence, it may become necessary to adjust the project's
              objectives, goals, and budget as new information becomes available
              and input is included.
            </p>
          </div>
          <img
            src={project}
            alt="Code Icon"
            className="text-3xl text-red-500 ml-4"
          />
        </div>

        {/* Card 9 */}
        <div className="bg-white p-4 shadow-lg rounded-lg flex items-center max-w-2xl mx-auto">
          <img
            src={risk}
            alt="Risk Management Icon"
            className="text-3xl text-red-500 mr-4"
          />
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">
              Risks to be detected early
            </h2>
            <p className="mt-2 text-sm">
              The client side may find that working with a reliable PoC software
              development company may be of great assistance in the early and
              comprehensive detection of potential obstacles. The stakeholders
              will see the issue and then come up with an appropriate action
              plan to prevent and handle it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poc;
