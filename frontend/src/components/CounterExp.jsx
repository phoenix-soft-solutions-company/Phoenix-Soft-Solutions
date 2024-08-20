import React, { useState, useEffect } from "react";
import axios from "axios";
import Counter from "./Counter";
import icon1 from "../constants/images/icons/calendar.png";
import icon2 from "../constants/images/icons/project.png";
import icon3 from "../constants/images/icons/skill.png";
import icon4 from "../constants/images/icons/client.png";

function CounterExp() {
  const [counters, setCounters] = useState({
    experiences: 0,
    projects: 0,
    experts: 0,
    clients: 0,
  });

  useEffect(() => {
    const fetchCounters = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/counter/66c21af52a7dd94e2cd73e8c`
        );
        setCounters(response.data);
      } catch (error) {
        console.error("Error fetching counter data:", error);
      }
    };

    fetchCounters();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 justify-center w-full p-8 rounded shadow-lg">
      <div className="flex flex-row gap-4">
        <div className="flex items-center">
          <img src={icon1} alt="Icon 1" className="w-20 h-20" />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            <Counter
              threshold={counters.experiences}
              increment={1}
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            />
          </h1>
          <h2 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Years Of Experience
          </h2>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex items-center">
          <img src={icon2} alt="Icon 2" className="w-20 h-20" />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            <Counter
              threshold={counters.projects}
              increment={1}
              className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
            />
          </h1>
          <h2 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Project Completed
          </h2>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex items-center">
          <img src={icon3} alt="Icon 3" className="w-20 h-20" />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
            <Counter
              threshold={counters.experts}
              increment={1}
              className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500"
            />
          </h1>
          <h2 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
            Skilled Experts
          </h2>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex items-center">
          <img src={icon4} alt="Icon 4" className="w-20 h-20" />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
            <Counter
              threshold={counters.clients}
              increment={1}
              className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500"
            />
          </h1>
          <h2 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
            Satisfied Clients
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CounterExp;
