import React from "react";
import Header from "./Header";
export default function Mercury() {
  return (
    <>
      <Header />

      {/* Main Content */}
      <main className="text-[#fff]">
        {/* Navigation Tabs */}
        <div className="flex justify-center space-x-6 mt-4 text-lg font-semibold">
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
        <hr className="border-t border-gray-600 mt-4" />

        {/* Planet Section */}
        <div className="bg-[url('/images/background-stars.svg')] bg-cover bg-center h-auto py-16 flex flex-col items-center">
          {/* Mercury Image */}
          <img
            src="images/planet-mercury.svg"
            className="w-[30%] mb-6"
            alt="Planet Mercury"
          />

          {/* Text Below Mercury Image */}
          <div className="text-center max-w-2xl px-4">
            <h2 className="text-4xl font-bold mb-4">
              MERCURY
            </h2>
            <p className="text-lg">
              Mercury is the smallest planet in
              the Solar System and the closest to
              the Sun. Its orbit around the Sun
              takes 87.97 Earth days, the shortest
              of all the Sun's planets. Mercury is
              one of four terrestrial planets in
              the Solar System, and is a rocky
              body like Earth.
            </p>
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
          <section className="mt-8 w-[95%] ">
            <div className="flex flex-row justify-between text-[#fff] border border-solid border-gray-500 p-4 mb-4 rounded-lg">
              <p>ROTATION TIME</p>
              <p>58.6 days</p>
            </div>
            <div className="flex flex-row justify-between text-[#fff] border border-solid border-gray-500 p-4 mb-4 rounded-lg">
              <p>REVOLUTION TIME</p>
              <p>87.97 days</p>
            </div>
            <div className="flex flex-row justify-between text-[#fff] border border-solid border-gray-500 p-4 mb-4 rounded-lg">
              <p>RADIUS</p>
              <p>2,439.7 km</p>
            </div>
            <div className="flex flex-row justify-between text-[#fff] border border-solid border-gray-500 p-4 rounded-lg">
              <p>AVERAGE TEMP.</p>
              <p>430°C</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
