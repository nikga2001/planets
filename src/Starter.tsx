import React from "react";
import { useNavigate } from "react-router-dom";

export default function Starter() {
  const navigate = useNavigate();
  const handleButton = (planet: string): void => {
    navigate(`/${planet}`);
  };

  return (
    <>
      {/* Header Section */}
      <header className="flex flex-row justify-between items-center p-6 md:p-8  ">
        <h1 className="text-[#fff] text-3xl md:text-[40px] font-bold">
          THE PLANETS
        </h1>
        <nav>
          <img
            src="images/Group.svg"
            alt="Navigation Icon"
            className="w-8 h-8 "
          />
        </nav>
      </header>
      <hr className="border-gray-600" />
      <main className="flex flex-col gap-6 mt-8 px-6">
        {/* Mercury Button */}
        <button
          onClick={() => handleButton("Mercury")}
          className="flex items-center justify-between p-4 rounded-lg transition duration-200"
        >
          <div className="flex items-center gap-4">
            <img
              src="images/Oval.svg"
              alt="Planet Mercury Icon"
              className="w-6 h-6"
            />
            <p className="text-[#fff] font-semibold text-lg md:text-[30px] md:ml-[20px]">
              MERCURY
            </p>
          </div>
          <img
            src="images/Path 3.svg"
            alt="Arrow Icon"
            className="w-4 h-4 md:w-8 md:h-8"
          />
        </button>
        <hr className="border-gray-600" />

        {/* Venus Button */}
        <button
          onClick={() => handleButton("Venus")}
          className="flex items-center justify-between p-4 rounded-lg transition duration-200"
        >
          <div className="flex items-center gap-4">
            <img
              src="images/Oval (1).svg"
              alt="Planet Venus Icon"
              className="w-6 h-6"
            />
            <p className="text-[#fff] font-semibold text-lg md:text-[30px] md:ml-[20px]">
              VENUS
            </p>
          </div>
          <img
            src="images/Path 3.svg"
            alt="Arrow Icon"
            className="w-4 h-4 md:w-8 md:h-8"
          />
        </button>
        <hr className="border-gray-600" />

        {/* Earth Button */}
        <button
          onClick={() => handleButton("Earth")}
          className="flex items-center justify-between p-4 rounded-lg transition duration-200"
        >
          <div className="flex items-center gap-4">
            <img
              src="images/Oval (2).svg"
              alt="Planet Earth Icon"
              className="w-6 h-6"
            />
            <p className="text-[#fff] font-semibold text-lg md:text-[30px] md:ml-[20px]">
              EARTH
            </p>
          </div>
          <img
            src="images/Path 3.svg"
            alt="Arrow Icon"
            className="w-4 h-4 md:w-8 md:h-8"
          />
        </button>
        <hr className="border-gray-600" />

        {/* Mars Button */}
        <button
          onClick={() => handleButton("Mars")}
          className="flex items-center justify-between p-4 rounded-lg transition duration-200"
        >
          <div className="flex items-center gap-4">
            <img
              src="images/Oval (3).svg"
              alt="Planet Mars Icon"
              className="w-6 h-6"
            />
            <p className="text-[#fff] font-semibold text-lg md:text-[30px] md:ml-[20px]">
              MARS
            </p>
          </div>
          <img
            src="images/Path 3.svg"
            alt="Arrow Icon"
            className="w-4 h-4 md:w-8 md:h-8"
          />
        </button>
        <hr className="border-gray-600" />

        {/* Jupiter Button */}
        <button
          onClick={() => handleButton("Jupiter")}
          className="flex items-center justify-between p-4 rounded-lg transition duration-200"
        >
          <div className="flex items-center gap-4">
            <img
              src="images/Oval (4).svg"
              alt="Planet Jupiter Icon"
              className="w-6 h-6"
            />
            <p className="text-[#fff] font-semibold text-lg md:text-[30px] md:ml-[20px]">
              JUPITER
            </p>
          </div>
          <img
            src="images/Path 3.svg"
            alt="Arrow Icon"
            className="w-4 h-4 md:w-8 md:h-8"
          />
        </button>
        <hr className="border-gray-600" />

        {/* Saturn Button */}
        <button
          onClick={() => handleButton("Saturn")}
          className="flex items-center justify-between p-4 rounded-lg transition duration-200"
        >
          <div className="flex items-center gap-4">
            <img
              src="images/Oval (5).svg"
              alt="Planet Saturn Icon"
              className="w-6 h-6"
            />
            <p className="text-[#fff] font-semibold text-lg md:text-[30px] md:ml-[20px]">
              SATURN
            </p>
          </div>
          <img
            src="images/Path 3.svg"
            alt="Arrow Icon"
            className="w-4 h-4 md:w-8 md:h-8"
          />
        </button>
        <hr className="border-gray-600" />

        {/* Uranus Button */}
        <button
          onClick={() => handleButton("Uranus")}
          className="flex items-center justify-between p-4 rounded-lg transition duration-200"
        >
          <div className="flex items-center gap-4">
            <img
              src="images/Oval (7).svg"
              alt="Planet Uranus Icon"
              className="w-6 h-6"
            />
            <p className="text-[#fff] font-semibold text-lg md:text-[30px] md:ml-[20px]">
              URANUS
            </p>
          </div>
          <img
            src="images/Path 3.svg"
            alt="Arrow Icon"
            className="w-4 h-4 md:w-8 md:h-8"
          />
        </button>
        <hr className="border-gray-600" />

        {/* Neptune Button */}
        <button
          onClick={() => handleButton("Neptune")}
          className="flex items-center justify-between p-4 rounded-lg transition duration-200"
        >
          <div className="flex items-center gap-4">
            <img
              src="images/Oval (8).svg"
              alt="Planet Neptune Icon"
              className="w-6 h-6"
            />
            <p className="text-[#fff] font-semibold text-lg md:text-[30px] md:ml-[20px]">
              NEPTUNE
            </p>
          </div>
          <img
            src="images/Path 3.svg"
            alt="Arrow Icon"
            className="w-4 h-4 md:w-8 md:h-8"
          />
        </button>
        <hr className="border-gray-600" />
      </main>
    </>
  );
}
