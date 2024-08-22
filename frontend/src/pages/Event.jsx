import React, { useEffect, useState } from "react";
import axios from "axios";
import heading from "../constants/images/eventhead.jpg";

const EventPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/event`);
      setEvents(response.data.data);
    };

    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen relative pt-16">
      <header className="relative w-full h-[50vh]">
        <img src={heading} alt="header" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-2xl lg:text-5xl font-serif font-bold tracking-widest">EVENTS</h1>
        </div>
      </header>

      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {events?.map((event) => (
            <div
              key={event._id}
              className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg">
              <img
                src={`https://drive.google.com/thumbnail?id=${event.image}&sz=w1200`}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold">{event.title}</h2>
                <p className="text-gray-600 mt-3">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
