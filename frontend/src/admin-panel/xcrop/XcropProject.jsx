import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { identifyError } from "../../utils/identify.error";
import { messages } from "../../constants/messages";
import Alert from "../components/Alert";
import { useDarkMode } from "../../DarkModeContext";

function XcropProject() {
  const [formData, setFormData] = useState({
    date: "",
    title: "",
    description: "",
    image: null,
  });
  const [projects, setProjects] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    getProjects();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uploadData = new FormData();
    uploadData.append("date", formData.date);
    uploadData.append("title", formData.title);
    uploadData.append("description", formData.description);
    if (formData.image) {
      uploadData.append("image", formData.image);
    }

    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/project`, uploadData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setAlertMessage(messages.projectCreated);
      setShowAlert(true);

      setFormData({
        date: "",
        title: "",
        description: "",
        image: null,
      });

      getProjects();
    } catch (error) {
      setAlertMessage(identifyError(error.response?.data?.code));
      setShowAlert(true);
    }
  };

  // Fetch projects from the server
  const getProjects = async () => {
    try {
      const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/project`);
      setProjects(result.data.data);
    } catch (error) {
      setAlertMessage(identifyError(error.response?.data?.code));
      setShowAlert(true);
    }
  };

  // Handle project deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/project/${id}`);

      setAlertMessage(messages.projectDeleted);
      setShowAlert(true);

      getProjects();
    } catch (error) {
      setAlertMessage(identifyError(error.response?.data?.code));
      setShowAlert(true);
    }
  };

  // Handle alert close
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="p-4">
      {showAlert && <Alert message={alertMessage} onClose={handleCloseAlert} />}

      <div
        className={`border border-gray-500 rounded-lg p-4 ${
          isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-600"
        }`}>
        <h1 className="font-semibold text-xl mb-4">Current Projects</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
          {projects.map((project) => (
            <div key={project._id} className="flex flex-col gap-5 border border-gray-500 rounded-lg p-4">
              <div>
                <img
                  src={`https://drive.google.com/thumbnail?id=${project.image}&sz=w1000`}
                  alt={project.title}
                  className="w-32 h-auto"
                />
              </div>
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="text-red-600 hover:text-red-800 transition duration-300 mt-2"
                  aria-label="Delete">
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className={`space-y-4 w-full mx-auto border border-gray-500 rounded-lg p-4 mt-5 ${
          isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-600"
        }`}>
        <h1 className="font-semibold text-xl mb-4">Add Project</h1>
        <div>
          <label htmlFor="date" className="block text-sm font-medium">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            className={`p-2 mt-1 block w-full border border-gray-500 rounded-md text-sm focus:border-blue-500 outline-none ${
              isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-600"
            } `}
          />
        </div>
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className={`p-2 mt-1 block w-full border border-gray-500 rounded-md text-sm focus:border-blue-500 outline-none ${
              isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-600"
            } `}
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            maxLength={300}
            value={formData.description}
            onChange={handleChange}
            className={`min-h-40 p-2 mt-1 block w-full border border-gray-500 rounded-md text-sm focus:border-blue-500 outline-none ${
              isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-600"
            } `}
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            required
            onChange={handleChange}
            className={`p-2 mt-1 block w-full border border-gray-500 rounded-md text-sm focus:border-blue-500 outline-none ${
              isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-600"
            } `}
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
            onClick={() =>
              setFormData({
                date: "",
                title: "",
                description: "",
                image: null,
              })
            }
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default XcropProject;
