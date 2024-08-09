import React from 'react'
import Counter from "./Counter";
import icon1 from "../constants/images/icons/calendar.png";
import icon2 from "../constants/images/icons/project.png";
import icon3 from "../constants/images/icons/skill.png";
import icon4 from "../constants/images/icons/client.png";

function CounterExp() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 justify-center w-full via-purple-500 to-pink-500 p-8 rounded shadow-lg">
      <div className="flex flex-row gap-4">
        <div className="flex items-center">
          <img src={icon1} alt="Icon 1" className="w-20 h-20" />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            <Counter
              threshold={5}
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
              threshold={20}
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
              threshold={10}
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
              threshold={30}
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