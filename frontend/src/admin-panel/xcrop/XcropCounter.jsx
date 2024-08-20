import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "../components/Alert";

function XcropCounter() {
  const [formData, setFormData] = useState({
    experiences: "",
    projects: "",
    experts: "",
    clients: "",
  });
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  // Fetch current counter data by ID when the component mounts
  useEffect(() => {
    const fetchCounterData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/counter/66c21af52a7dd94e2cd73e8c`
        );
        setFormData(response.data);
      } catch (error) {
        setAlertMessage("Error fetching counter data");
        setShowAlert(true);
      }
    };

    fetchCounterData();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `${process.env.REACT_APP_BASE_URL}/counter/66c21af52a7dd94e2cd73e8c`,
        formData
      );
      setAlertMessage("Counter successfully updated!");
      setShowAlert(true);
    } catch (error) {
      setAlertMessage("Error updating counter");
      setShowAlert(true);
    }
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

  // Handle alert close
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="p-4">
      {showAlert && <Alert message={alertMessage} onClose={handleCloseAlert} />}

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
