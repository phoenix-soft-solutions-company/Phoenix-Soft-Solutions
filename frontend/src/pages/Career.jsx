import React from "react";

const LeftSection = () => {
  const steps = [
    {
      title: "Discovery Workshop",
      description:
        "This brings alignment in terms of end-user persona and business needs.",
      icon: "💡",
    },
    {
      title: "Planning",
      description:
        "Emphasize on planning to get everything documented without assumption.",
      icon: "📝",
    },
    {
      title: "Design",
      description:
        "Next step is to design the UI based on the approved wireframes.",
      icon: "🎨",
    },
    {
      title: "Development",
      description:
        "Crafting an optimized clean code structure is our objective at this stage.",
      icon: "💻",
    },
    {
      title: "Testing",
      description:
        "Once bug fixing is done, the final sprint demo is sent for the client’s approval.",
      icon: "🔍",
    },
    {
      title: "Maintenance",
      description:
        "We also upgrade the system regularly based on user feedback.",
      icon: "🔧",
    },
  ];

  return (
    <div className="flex flex-col space-y-6">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex items-center space-x-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4"
        >
          <div className="text-4xl">{step.icon}</div>
          <div>
            <h3 className="font-bold text-xl">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const RightSection = () => {
  const roles = [
    "Project Managers",
    "Business Analyst",
    "UI Designers",
    "Frontend Developers",
    "Backend Developers",
    "DevOps",
    "Testing and QA Teams",
  ];

  return (
    <div className="flex flex-col space-y-4">
      {roles.map((role, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b border-gray-200 py-2"
        >
          <span>{role}</span>
          <span>+</span>
        </div>
      ))}
    </div>
  );
};

const Career = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 p-4 lg:p-8">
      <div className="lg:w-1/2">
        <LeftSection />
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <RightSection />
      </div>
    </div>
  );
};

export default Career;
