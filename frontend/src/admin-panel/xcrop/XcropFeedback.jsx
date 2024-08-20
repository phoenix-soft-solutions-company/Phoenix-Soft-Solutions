import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function XcropFeedback() {
  // Initialize state for the number fields
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    feedback: "",
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
      name: "",
      feedback: "",
    });
  };

  return (
    <div className="p-4">
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <h1 className="font-semibold text-xl mb-4 text-gray-600">Current Feedback</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
          <div className="flex flex-row gap-5 border border-gray-300 rounded-lg p-4">
            <div>Dejon De Zoyza</div>
            <div>
              <button className="text-red-600 hover:text-red-800 transition duration-300" aria-label="Delete">
                <FontAwesomeIcon icon={faTrashAlt} className="text-red-600" />
              </button>
            </div>
          </div>

          <div className="flex flex-row gap-5 border border-gray-300 rounded-lg p-4">
            <div>Dejon De Zoyza</div>
            <div>
              <button className="text-red-600 hover:text-red-800 transition duration-300" aria-label="Delete">
                <FontAwesomeIcon icon={faTrashAlt} className="text-red-600" />
              </button>
            </div>
          </div>

          <div className="flex flex-row gap-5 border border-gray-300 rounded-lg p-4">
            <div>Dejon De Zoyza</div>
            <div>
              <button className="text-red-600 hover:text-red-800 transition duration-300" aria-label="Delete">
                <FontAwesomeIcon icon={faTrashAlt} className="text-red-600" />
              </button>
            </div>
          </div>

          <div className="flex flex-row gap-5 border border-gray-300 rounded-lg p-4">
            <div>Dejon De Zoyza</div>
            <div>
              <button className="text-red-600 hover:text-red-800 transition duration-300" aria-label="Delete">
                <FontAwesomeIcon icon={faTrashAlt} className="text-red-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-full mx-auto bg-white border border-gray-300 rounded-lg p-4 mt-5">
        <h1 className="font-semibold text-xl mb-4 text-gray-600">Add Feedback</h1>
        <div>
          <label htmlFor="projects" className="block text-sm font-medium text-gray-500">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 mt-1 block w-full border border-gray-300 rounded-md text-sm focus:border-blue-500 outline-none"
          />
        </div>
        <div>
          <label htmlFor="experts" className="block text-sm font-medium text-gray-500">
            Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            className="min-h-40 p-2 mt-1 block w-full border border-gray-300 rounded-md text-sm focus:border-blue-500 outline-none"
          />
        </div>
        <div>
          <label htmlFor="experiences" className="block text-sm font-medium text-gray-500">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="p-2 mt-1 block w-full border border-gray-300 rounded-md text-sm focus:border-blue-500 outline-none"
          />
        </div>

        <div className="flex justify-end space-x-4">
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

export default XcropFeedback;
