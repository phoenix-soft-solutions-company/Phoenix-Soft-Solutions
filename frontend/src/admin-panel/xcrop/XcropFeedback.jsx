import React, { useState,useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Alert from "../components/Alert"; 
import { identifyError } from "../../utils/identify.error";
import { messages } from "../../constants/messages";

function XcropFeedback() {
  const [formData, setFormData] = useState({
    name: "",
    feedback: "",
    image: null,
  });
  const [feedbacks, setFeedbacks] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    getFeedbacks();
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
    uploadData.append("name", formData.name);
    uploadData.append("feedback", formData.feedback);
    if (formData.image) {
      uploadData.append("image", formData.image);
    }

    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/feedback`, uploadData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setAlertMessage(messages.feedbackCreated);
      setShowAlert(true);

      setFormData({
        name: "",
        feedback: "",
        image: null,
      });

      getFeedbacks();
    } catch (error) {
      setAlertMessage(identifyError(error.response?.data?.code));
      setShowAlert(true);
    }
  };

  const getFeedbacks = async () => {
    try {
      const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/feedback`);
      setFeedbacks(result.data.data);
    } catch (error) {
      setAlertMessage(identifyError(error.response?.data?.code));
      setShowAlert(true);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/feedback/${id}`);

      setAlertMessage(messages.feedbackDeleted);
      setShowAlert(true);

      getFeedbacks();
    } catch (error) {
      setAlertMessage(identifyError(error.response?.data?.code));
      setShowAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="p-4">
      {showAlert && <Alert message={alertMessage} onClose={handleCloseAlert} />}

      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <h1 className="font-semibold text-xl mb-4 text-gray-600">Current Feedback</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
          {feedbacks.map((feedback) => (
            <div key={feedback._id} className="flex flex-col gap-5 border border-gray-300 rounded-lg p-4">
              <div>
                <img
                  src={`https://drive.google.com/thumbnail?id=${feedback.image}&sz=w1000`}
                  alt={feedback.name}
                  className="w-32 h-auto"
                />
              </div>
              <div>
                <h2 className="font-semibold">{feedback.name}</h2>
                <p>{feedback.feedback}</p>
                <button
                  onClick={() => handleDelete(feedback._id)}
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
        className="space-y-4 w-full mx-auto bg-white border border-gray-300 rounded-lg p-4 mt-5">
        <h1 className="font-semibold text-xl mb-4 text-gray-600">Add Feedback</h1>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-500">
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
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-500">
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
          <label htmlFor="image" className="block text-sm font-medium text-gray-500">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
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
            onClick={() =>
              setFormData({
                name: "",
                feedback: "",
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

export default XcropFeedback;
