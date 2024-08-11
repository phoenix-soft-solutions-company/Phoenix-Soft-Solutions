import React from "react";

const DevPlan = () => {
  return (
    <div className="flex flex-col justify-center py-4 sm:py-10">
      <div className="text-center py-4">
        <h1 className="header-underline-animation font-bold text-2xl lg:text-3xl pb-1 sm:pb-2 lg:pb-3 font-serif">
          DEVELOPMENT PLAN
        </h1>
      </div>
      <div className="flex justify-center py-4">
        <div className="flex flex-col w-full sm:w-[640px]">
          <div className="flex flex-row gap-5 relative p-2 sm:p-8">
            <div className="hidden sm:block absolute top-0 left-0 h-full w-[15px] bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 rounded-full"></div>
            <div className="hidden sm:block absolute top-0 left-0 w-[100%] h-[15px] bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full"></div>
            <div className="hidden sm:block absolute bottom-0 left-0 w-[70%] h-[15px] bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full"></div>
            <span className="hidden sm:block absolute bottom-[-16px] right-[25%]">
              <svg className="progress rotate-90" width="48" height="48">
                <polygon points="24,4 44,44 4,44" fill="#3681f7" />
              </svg>
            </span>

            <div className="flex items-center">
              <div className="flex items-center justify-center w-[80px] h-[80px] bg-white rounded-full drop-shadow-2xl">
                <img
                  alt="icon"
                  className="w-[60px] h-[60px] p-2"
                  src="https://cdn-icbnj.nitrocdn.com/DxLMbDkMAsFVFzgPzCObWFuipKtAgITG/assets/images/optimized/rev-09281f7/www.unifiedinfotech.net/wp-content/themes/unifiedinfotech/assets/images/how-we-approach-icon-01.svg"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center w-[400px]">
              <h2 className="text-gray-600 font-bold text-lg relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[100%] after:h-[2px] after:bg-red-400">
                Discovery Workshop
              </h2>
              <p className="text-base text-gray-600">
                This brings alignment in terms of end-user persona and business needs
              </p>
            </div>
          </div>

          <div className="flex flex-row sm:flex-row-reverse gap-5 relative p-2 sm:p-8">
            <div className="hidden sm:block absolute top-[-15px] right-0 h-[110%] w-[15px] bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 rounded-full"></div>
            <div className="hidden sm:block absolute top-[-15px] right-0 w-[23%] h-[15px] bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full"></div>
            <div className="hidden sm:block absolute top-[-20px] right-[20%] w-6 h-6 bg-red-500 rounded-full"></div>
            <div className="hidden sm:block absolute bottom-0 right-0 w-[70%] h-[15px] bg-gradient-to-l from-red-500 via-purple-500 to-blue-500 rounded-full"></div>
            <span className="hidden sm:block absolute bottom-[-16px] left-[25%]">
              <svg className="progress " width="48" height="48">
                <polygon points="44,4 44,44 4,24" fill="#3681f7" />
              </svg>
            </span>

            <div className="flex items-center">
              <div className="flex items-center justify-center w-[80px] h-[80px] bg-white rounded-full drop-shadow-2xl">
                <img
                  alt="icon"
                  className="w-[60px] h-[60px] p-2"
                  src="https://cdn-icbnj.nitrocdn.com/DxLMbDkMAsFVFzgPzCObWFuipKtAgITG/assets/images/optimized/rev-09281f7/www.unifiedinfotech.net/wp-content/themes/unifiedinfotech/assets/images/how-we-approach-icon-01.svg"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center w-[400px]">
              <h2 className="text-gray-600 sm:text-right font-bold text-lg relative inline-block pb-2 after:content-[''] after:absolute after:left-0 sm:after:right-0 after:bottom-0 after:w-[100%] after:h-[2px] after:bg-red-400">
                Planning
              </h2>
              <p className="text-base text-gray-600 sm:text-right">
                Emphasize on planning to get everything documented without assumption
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-5 relative p-2 sm:p-8">
            <div className="hidden sm:block absolute top-[-15px] left-0 h-[110%] w-[15px] bg-gradient-to-t from-blue-500 via-purple-500 to-red-500 rounded-full"></div>
            <div className="hidden sm:block absolute top-[-15px] left-0 w-[23%] h-[15px] bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full"></div>
            <div className="hidden sm:block absolute top-[-20px] left-[20%] w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="hidden sm:block absolute bottom-0 left-0 w-[70%] h-[15px] bg-gradient-to-l from-red-500 via-purple-500 to-blue-500 rounded-full"></div>
            <span className="hidden sm:block absolute bottom-[-16px] right-[25%]">
              <svg className="progress rotate-180" width="48" height="48">
                <polygon points="44,4 44,44 4,24" fill="#ed4752" />
              </svg>
            </span>

            <div className="flex items-center">
              <div className="flex items-center justify-center w-[80px] h-[80px] bg-white rounded-full drop-shadow-2xl">
                <img
                  alt="icon"
                  className="w-[60px] h-[60px] p-2"
                  src="https://cdn-icbnj.nitrocdn.com/DxLMbDkMAsFVFzgPzCObWFuipKtAgITG/assets/images/optimized/rev-09281f7/www.unifiedinfotech.net/wp-content/themes/unifiedinfotech/assets/images/how-we-approach-icon-03.svg"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center w-[400px]">
              <h2 className="text-gray-600 font-bold text-lg relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[100%] after:h-[2px] after:bg-red-400">
                Design
              </h2>
              <p className="text-base text-gray-600">
                Next step is to design the UI based on the approved wireframes
              </p>
            </div>
          </div>

          <div className="flex flex-row sm:flex-row-reverse gap-5 relative p-2 sm:p-8">
            <div className="hidden sm:block absolute top-[-15px] right-0 h-[110%] w-[15px] bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 rounded-full"></div>
            <div className="hidden sm:block absolute top-[-15px] right-0 w-[23%] h-[15px] bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full"></div>
            <div className="hidden sm:block absolute top-[-20px] right-[20%] w-6 h-6 bg-red-500 rounded-full"></div>
            <div className="hidden sm:block absolute bottom-0 right-0 w-[70%] h-[15px] bg-gradient-to-l from-red-500 via-purple-500 to-blue-500 rounded-full"></div>
            <span className="hidden sm:block absolute bottom-[-16px] left-[25%]">
              <svg className="progress " width="48" height="48">
                <polygon points="44,4 44,44 4,24" fill="#3681f7" />
              </svg>
            </span>

            <div className="flex items-center">
              <div className="flex items-center justify-center w-[80px] h-[80px] bg-white rounded-full drop-shadow-2xl">
                <img
                  alt="icon"
                  className="w-[60px] h-[60px] p-2"
                  src="https://cdn-icbnj.nitrocdn.com/DxLMbDkMAsFVFzgPzCObWFuipKtAgITG/assets/images/optimized/rev-09281f7/www.unifiedinfotech.net/wp-content/themes/unifiedinfotech/assets/images/how-we-approach-icon-01.svg"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center w-[400px]">
              <h2 className="text-gray-600 font-bold sm:text-right text-lg relative inline-block pb-2 after:content-[''] after:absolute after:left-0 sm:after:right-0 after:bottom-0 after:w-[100%] after:h-[2px] after:bg-red-400">
                Development
              </h2>
              <p className="text-base text-gray-600 sm:text-right">
                Crafting an optimized clean code structure is our objective at this stage
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-5 relative p-2 sm:p-8">
            <div className="hidden sm:block absolute top-[-15px] left-0 h-[110%] w-[15px] bg-gradient-to-t from-blue-500 via-purple-500 to-red-500 rounded-full"></div>
            <div className="hidden sm:block absolute top-[-15px] left-0 w-[23%] h-[15px] bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full"></div>
            <div className="hidden sm:block absolute top-[-20px] left-[20%] w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="hidden sm:block absolute bottom-0 left-0 w-[70%] h-[15px] bg-gradient-to-l from-red-500 via-purple-500 to-blue-500 rounded-full"></div>
            <span className="hidden sm:block absolute bottom-[-16px] right-[25%]">
              <svg className="progress rotate-180" width="48" height="48">
                <polygon points="44,4 44,44 4,24" fill="#ed4752" />
              </svg>
            </span>

            <div className="flex items-center">
              <div className="flex items-center justify-center w-[80px] h-[80px]  bg-white rounded-full drop-shadow-2xl">
                <img
                  alt="icon"
                  className="w-[60px] h-[60px] p-2"
                  src="https://cdn-icbnj.nitrocdn.com/DxLMbDkMAsFVFzgPzCObWFuipKtAgITG/assets/images/optimized/rev-09281f7/www.unifiedinfotech.net/wp-content/themes/unifiedinfotech/assets/images/how-we-approach-icon-01.svg"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center w-[400px]">
              <h2 className="text-gray-600 font-bold text-lg relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[100%] after:h-[2px] after:bg-red-400">
                Testing
              </h2>
              <p className="text-base text-gray-600">
                Once bug fixing is done, the final sprint demo is sent for the client’s approval
              </p>
            </div>
          </div>

          <div className="flex flex-row sm:flex-row-reverse gap-5 relative p-2 sm:p-8">
            <div className="hidden sm:block absolute top-[-15px] right-0 h-[110%] w-[15px] bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 rounded-full"></div>
            <div className="hidden sm:block absolute top-[-15px] right-0 w-[23%] h-[15px] bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full"></div>
            <div className="hidden sm:block absolute top-[-20px] right-[20%] w-6 h-6 bg-red-500 rounded-full"></div>
            <div className="hidden sm:block absolute bottom-0 right-0 w-[100%] h-[15px] bg-gradient-to-l from-red-500 via-purple-500 to-blue-500 rounded-full"></div>

            <div className="flex items-center">
              <div className="flex items-center justify-center w-[80px] h-[80px] bg-white rounded-full drop-shadow-2xl">
                <img
                  alt="icon"
                  className="w-[60px] h-[60px] p-2"
                  src="https://cdn-icbnj.nitrocdn.com/DxLMbDkMAsFVFzgPzCObWFuipKtAgITG/assets/images/optimized/rev-09281f7/www.unifiedinfotech.net/wp-content/themes/unifiedinfotech/assets/images/how-we-approach-icon-01.svg"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center w-[400px]">
              <h2 className="text-gray-600 sm:text-right font-bold text-lg relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:sm:right-0 after:bottom-0 after:w-[100%] after:h-[2px] after:bg-red-400">
                Maintenance
              </h2>
              <p className="text-base text-gray-600 sm:text-right">
                We also upgrade the system regularly based on new software/version release
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevPlan;
