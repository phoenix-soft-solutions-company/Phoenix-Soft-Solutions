import React from "react";
import icon1 from "../../constants/images/icons/data.png"; // Replace with the correct path
import icon2 from "../../constants/images/icons/plan.png"; // Replace with the correct path
import icon3 from "../../constants/images/icons/sketch.png"; // Replace with the correct path
import icon4 from "../../constants/images/icons/migration.png"; // Replace with the correct path
import service1 from "../../constants/images/services/webabout.jpg";

const Cloud = () => {
  return (
    <div className="min-h-screen relative">
      <div className="relative w-full h-[50vh]">
        <img
          src={service1}
          className="object-cover w-full h-full"
          alt="Cloud Migration Service"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest text-white uppercase">
            CLOUD MIGRATION SERVICE
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center px-4 py-8">
        <h1 className="text-3xl lg:text-4xl font-serif font-bold text-center mb-4">
          Cloud Migration Services
        </h1>
        <p className="text-lg text-center mb-8 max-w-2xl">
          An excellent data storage solution with<br></br> Saigon Technology -
          high-profile cloud migration services vendor in Vietnam
        </p>
        <img
          src={service1}
          className="object-cover w-full max-w-md h-auto mb-8"
          alt="Cloud Migration"
        />
        <h3 className="text-lg lg:text-xl font-serif font-bold text-center mb-4">
          More Success & Less Impact, that's what we give you with Cloud
          Migration Services
        </h3>
        <p className="text-lg text-justify mb-4 max-w-2xl">
          - Don't just wait for someone to come up and pat you on the shoulder
          "Let's use Technology to progress further on the business path." As
          you could see, technology is constantly being renewed with new
          breakthroughs being added every day. Therefore, if you do not take the
          initiative right from today, your business will suffer much worse than
          other units.
        </p>
        <p className="text-lg text-justify mb-4 max-w-2xl">
          - Amongst products, technology ideas that support businesses, Cloud
          Migration services - from key providers like Amazon Web Service (AWS),
          Microsoft Azure - is perhaps the biggest accelerating factor.
        </p>
        <p className="text-lg text-justify mb-4 max-w-2xl">
          - Are you tired of processing and moving documents stored on different
          local sources, or is the hard drive failure causing data loss really
          bothering? Then for sure, Cloud Migration is the best plan for your
          business today.
        </p>

        {/* New Section */}
        <div className="flex flex-col items-center justify-center w-full px-4 py-8 bg-gray-100">
          <h1 className="text-3xl lg:text-4xl font-serif font-bold text-center mb-8">
            Why Choose Our Cloud Migration Services?
          </h1>

          {/* Card Layout */}
          <div className="flex flex-wrap max-w-4xl mx-auto">
            {/* Left Side - Paragraphs */}
            <div className="flex-1 px-4 py-4">
              <p className="text-lg text-justify mb-4">
                - Cloud Migration is considered as the adoption of cloud
                computing. Literally understood as a 'relocation' of all the
                documents, data, and processes from some data centers to a cloud
                infrastructure, transferring the burden of server maintenance
                and application management to an external location and usually
                to a specialized supplier.
              </p>
              <p className="text-lg text-justify mb-4">
                - To successfully implement Cloud Migration, businesses can
                consider using one or more 'clouds' to ensure efficiency and
                storage capacity not only at present but also in the upcoming
                business development phase.
              </p>
              <p className="text-lg text-justify mb-4">
                - In fact, you don't need to worry much about the methods and
                implementation, as well as the certain impacts, because when you
                choose the right well-established partner with years of
                experience and reputation, Cloud Migration will be faster and
                more efficient than you think.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 px-4 py-4">
              <img
                src={service1}
                className="object-cover w-full h-auto rounded-lg shadow-lg"
                alt="Cloud Migration"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Centered h1 and p */}
      <div className="flex flex-col items-center justify-center px-4 py-8">
        <h1 className="text-3xl lg:text-4xl font-serif font-bold text-center mb-4">
          How we implement it
        </h1>
        <p className="text-lg text-center max-w-2xl">
          After receiving comments and requests from customers and conducting
          appropriate cloud migration<br></br> consulting, Saigon Technology
          will perform the following steps:
        </p>
      </div>

      {/* 2-Row, 2-Column Card Layout */}
      <div className="flex flex-wrap max-w-4xl mx-auto">
        {/* Card 1 */}
        <div className="w-full md:w-1/2 p-4">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg h-full">
            <img src={icon1} className="w-16 h-16 mb-4" alt="Evaluate Icon" />
            <h2 className="text-xl font-bold mb-2">Evaluate</h2>
            <p className="text-center">
              After receiving the ideas and business requests from the client,
              Saigon Technology's Developers team will conduct analysis to
              capture and understand the current state of corporate architecture
              data. Analyze the current architecture, understand the business
              needs and prioritize applications to switch. Another important
              task is the cost assessment, we will consider based on the system
              of subjective as well as objective factors to come up with the
              right price.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/2 p-4">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg h-full">
            <img src={icon2} className="w-16 h-16 mb-4" alt="Plan Icon" />
            <h2 className="text-xl font-bold mb-2">Plan</h2>
            <p className="text-center">
              Once the key factors are in place, we will proceed to define
              security objectives, some compliance principles and choose the
              right 'cloud' platform from which to develop the most appropriate
              plan.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-1/2 p-4">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg h-full">
            <img src={icon3} className="w-16 h-16 mb-4" alt="Build Icon" />
            <h2 className="text-xl font-bold mb-2">Build</h2>
            <p className="text-center">
              Our team of cloud migration solutions will design and build an
              environment that suits clients' requirements. Then we develop and
              build a minimal viable cloud to operate. The next step is to
              implement security controls to ensure maximum safety for
              confidential data stored in the 'cloud'.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full md:w-1/2 p-4">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg h-full">
            <img src={icon4} className="w-16 h-16 mb-4" alt="Migrate Icon" />
            <h2 className="text-xl font-bold mb-2">Migrate</h2>
            <p className="text-center">
              By prioritizing the data information, the Azure and Amazon Web
              Service (AWS) cloud migration process becomes easier and faster.
              After successful transfer, Saigon Technology team will train
              customers on how to use and handle situations when using the
              service. From there, we will carry out product handover and
              maintain regular repairs and maintenance to ensure everything is
              under control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
