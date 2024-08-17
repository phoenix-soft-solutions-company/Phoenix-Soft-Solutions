import React, { useState } from "react";

function XcropCounter() {
  // Initialize state for the number fields
  const [formData, setFormData] = useState({
    experiences: "",
    projects: "",
    experts: "",
    clients: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
    console.log("Form Submitted:", formData);
  };

  // Handle form clearing
  const handleClear = () => {
    setFormData({
      experiences: "",
      projects: "",
      experts: "",
      clients: "",
    });
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4 w-full mx-auto shadow-lg p-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-600">Update Counter</h1>
        <div>
          <label htmlFor="experiences" className="block text-sm font-medium text-gray-700">
            Experiences
          </label>
          <input
            type="number"
            id="experiences"
            name="experiences"
            value={formData.experiences}
            onChange={handleChange}
             className="p-2 mt-1 block w-full border border-gray-300 rounded-md text-sm focus:border-blue-500 outline-none"
          />
        </div>
        <div>
          <label htmlFor="projects" className="block text-sm font-medium text-gray-700">
            Projects
          </label>
          <input
            type="number"
            id="projects"
            name="projects"
            value={formData.projects}
            onChange={handleChange}
             className="p-2 mt-1 block w-full border border-gray-300 rounded-md text-sm focus:border-blue-500 outline-none"
          />
        </div>
        <div>
          <label htmlFor="experts" className="block text-sm font-medium text-gray-700">
            Experts
          </label>
          <input
            type="number"
            id="experts"
            name="experts"
            value={formData.experts}
            onChange={handleChange}
             className="p-2 mt-1 block w-full border border-gray-300 rounded-md text-sm focus:border-blue-500 outline-none"
          />
        </div>
        <div>
          <label htmlFor="clients" className="block text-sm font-medium text-gray-700">
            Clients
          </label>
          <input
            type="number"
            id="clients"
            name="clients"
            value={formData.clients}
            onChange={handleChange}
             className="p-2 mt-1 block w-full border border-gray-300 rounded-md text-sm focus:border-blue-500 outline-none"
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Submit
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default XcropCounter;
