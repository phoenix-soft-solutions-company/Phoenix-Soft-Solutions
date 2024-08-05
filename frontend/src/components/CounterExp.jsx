import React from 'react'
import Counter from "./Counter";
import icon4 from "../constants/images/icons/Icon4.png";

function CounterExp() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 justify-center w-full border border-black bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 rounded shadow-lg">
      <div className="flex flex-row gap-4">
        <div className="flex items-center">
          <img src={icon4} alt="Icon 4" className="w-20 h-20" />
        </div>
        <div className="flex flex-col justify-center h-full">
          <Counter threshold={5} increment={1} />
          <h2 className="text-xl">Years Of Experience</h2>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex items-center">
          <img src={icon4} alt="Icon 4" className="w-20 h-20" />
        </div>
        <div className="flex flex-col justify-center h-full">
          <Counter threshold={20} increment={1} />
          <h2 className="text-xl">Project Completed</h2>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex items-center">
          <img src={icon4} alt="Icon 4" className="w-20 h-20" />
        </div>
        <div className="flex flex-col justify-center h-full">
          <Counter threshold={10} increment={1} />
          <h2 className="text-xl">Skilled Experts</h2>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex items-center">
          <img src={icon4} alt="Icon 4" className="w-20 h-20" />
        </div>
        <div className="flex flex-col justify-center h-full">
          <Counter threshold={30} increment={1} />
          <h2 className="text-xl">Satisfied Clients</h2>
        </div>
      </div>
    </div>
  );
}

export default CounterExp