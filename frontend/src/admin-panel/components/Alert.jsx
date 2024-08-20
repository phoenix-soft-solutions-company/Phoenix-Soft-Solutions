import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

function Alert({ message, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm z-[50]">
      <div className="xxs:w-72 w-64 bg-white dark:bg-black p-4 rounded-lg shadow-2xl border-gray-300 dark:border-gray-600 border-b-[4px]">
        <div className="flex flex-col gap-3">
          <div className="flex justify-center">
            <ExclamationCircleIcon className="w-16 h-16 text-green-500" />
          </div>
          <p className="text-sm text-center text-black dark:text-white">{message}</p>
          <div className="flex p-2 justify-center">
            <button
              className={`cursor-pointer transition-all text-white text-sm px-4 py-1 rounded-lg border-b-[4px] hover:brightness-110 hover:translate-y-[1px] ative:border-b-[2px] active:brightness-90 active:translate-y-[2px] bg-blue-500 border-blue-600`}
              onClick={onClose}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alert;
