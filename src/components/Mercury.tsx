import React from "react";
import Header from "./Header";

export default function Mercury() {
  return (
    <>
      <Header />

      {/* Main Content */}
      <main className="text-[#fff]">
        {/* Navigation Tabs for Mobile */}
        <div className="flex justify-center space-x-6 mt-4 text-lg font-semibold md:hidden">
          <span className="cursor-pointer hover:underline">
            OVERVIEW
          </span>
          <span className="cursor-pointer hover:underline">
            STRUCTURE
          </span>
          <span className="cursor-pointer hover:underline">
            SURFACE
          </span>
        </div>
        <hr className="border-t border-gray-600 mt-4 md:hidden" />

        {/* Planet Section */}
        <div className="bg-[url('/images/background-stars.svg')] bg-cover bg-center h-auto py-16 flex flex-col items-center">
          {/* Mercury Image in the Center */}
          <img
            src="images/planet-mercury.svg"
            className="w-[30%] mb-6"
            alt="Planet Mercury"
          />

          {/* Mercury Text and Column in Row Layout */}
          <div className="flex flex-col md:my-[50px] md:flex-row items-center justify-center w-full md:space-x-[60px]">
            {/* Text Section */}
            <div className="text-center md:text-left md:w-[50%] px-4">
              <h2 className="text-[40px] font-bold mb-4 font-antonio">
                MERCURY
              </h2>
              <p className="text-lg leading-relaxed text-[22px] font-antonio">
                Mercury is the smallest planet in
                the Solar System and the closest
                to the Sun. Its orbit around the
                Sun takes 87.97 Earth days, the
                shortest of all the Sun's planets.
                Mercury is one of four terrestrial
                planets in the Solar System, and
                is a rocky body like Earth.
              </p>
            </div>

            {/* Column for Overview, Structure, and Surface */}
            <div className="hidden md:flex flex-col space-y-4 text-lg font-semibold w-[300px] font-antonio">
              <span className="cursor-pointer hover:underline border border-gray-500 rounded-md p-4 flex items-center">
                <span className="mr-4 font-bold">
                  01
                </span>{" "}
                OVERVIEW
              </span>
              <span className="cursor-pointer hover:underline border border-gray-500 rounded-md p-4 flex items-center">
                <span className="mr-4 font-bold">
                  02
                </span>{" "}
                STRUCTURE
              </span>
              <span className="cursor-pointer hover:underline border border-gray-500 rounded-md p-4 flex items-center">
                <span className="mr-4 font-bold">
                  03
                </span>{" "}
                SURFACE
              </span>
            </div>
          </div>

          {/* Source Section */}
          <div className="flex flex-row items-center mt-6 text-sm">
            <span>Source: Wikipedia</span>
            <img
              src="images/pointer.svg"
              alt="Pointer Icon"
              className="w-4 h-4 ml-2"
            />
          </div>

          {/* Info Section */}
          <section className="mt-8 w-full flex flex-col items-center md:flex-row md:items-center md:justify-center space-y-4 md:space-y-0 md:space-x-2 md:px-[12px] font-antonio">
            <div className="flex flex-col justify-between text-[#fff] border border-solid border-gray-500 p-4 rounded-lg w-[300px]">
              <p className="text-center">
                ROTATION TIME
              </p>
              <p className="text-center md:text-center">
                58.6 days
              </p>
            </div>
            <div className="flex flex-col justify-between text-[#fff] border border-solid border-gray-500 p-4 rounded-lg w-[300px] md:w-[300px]">
              <p className="text-center">
                REVOLUTION TIME
              </p>
              <p className="text-center md:text-center">
                87.97 days
              </p>
            </div>
            <div className="flex flex-col justify-between text-[#fff] border border-solid border-gray-500 p-4 rounded-lg w-[300px]">
              <p className="text-center">
                RADIUS
              </p>
              <p className="text-center md:text-center">
                2,439.7 km
              </p>
            </div>
            <div className="flex flex-col justify-between text-[#fff] border border-solid border-gray-500 p-4 rounded-lg w-[300px]">
              <p className="text-center">
                AVERAGE TEMP.
              </p>
              <p className="text-center md:text-center">
                430°C
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
