import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function XcropProject() {
  // Initialize state for the number fields
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: "",
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
      image: "",
      title: "",
      description: "",
    });
  };

  return (
    <div className="p-4">
      <div className="shadow-lg p-4">
        <h1 className="text-center font-bold text-2xl">Current Projects</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
          <div className="flex flex-row gap-5 shadow-lg p-4">
            <div>Project-title</div>
            <div>
              <button className="text-red-600 hover:text-red-800 transition duration-300" aria-label="Delete">
                <FontAwesomeIcon icon={faTrashAlt} className="text-red-600" />
              </button>
            </div>
          </div>

          <div className="flex flex-row gap-5 shadow-lg p-4">
            <div>Project-title</div>
            <div>
              <button className="text-red-600 hover:text-red-800 transition duration-300" aria-label="Delete">
                <FontAwesomeIcon icon={faTrashAlt} className="text-red-600" />
              </button>
            </div>
          </div>

          <div className="flex flex-row gap-5 shadow-lg p-4">
            <div>Project-title</div>
            <div>
              <button className="text-red-600 hover:text-red-800 transition duration-300" aria-label="Delete">
                <FontAwesomeIcon icon={faTrashAlt} className="text-red-600" />
              </button>
            </div>
          </div>

          <div className="flex flex-row gap-5 shadow-lg p-4">
            <div>Project-title</div>
            <div>
              <button className="text-red-600 hover:text-red-800 transition duration-300" aria-label="Delete">
                <FontAwesomeIcon icon={faTrashAlt} className="text-red-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 w-[320px] mx-auto shadow-lg p-4 mt-5">
        <h1 className="text-2xl font-bold mb-4">Add Project</h1>
        <div>
          <label htmlFor="experiences" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="p-2 mt-1 block w-full border-2 border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="projects" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="p-2 mt-1 block w-full border-2 border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="experts" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="min-h-40 p-2 mt-1 block w-full border-2 border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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

export default XcropProject;
