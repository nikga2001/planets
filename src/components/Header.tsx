import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Header() {
  const navigate = useNavigate();
  const handleButton = (planet: string): void => {
    navigate(`/${planet}`);
  };
  const [isOpen, setIsOpen] =
    useState<boolean>(false);
  const handleNavigation = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="flex flex-row justify-between items-center p-4">
        <button
          className="text-[#fff] text-2xl font-bold"
          onClick={() => handleButton("Starter")}
        >
          THE PLANETS
        </button>
        <nav>
          <img
            onClick={handleNavigation}
            src="images/Group-2.svg"
            alt="Navigation Icon"
            className="w-8 h-8"
          />
        </nav>
      </header>
      <hr className="border-t border-gray-600" />
      {isOpen ? (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <ul className="space-y-6 text-center">
            {/* Mercury */}
            <li>
              <Link
                to="/Mercury"
                className="text-white text-xl font-medium py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-200"
                onClick={() =>
                  handleButton("Mercury")
                }
              >
                Mercury
              </Link>
            </li>
            {/* Venus */}
            <li>
              <Link
                to="/Venus"
                className="text-white text-xl font-medium py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-200"
                onClick={() =>
                  handleButton("Venus")
                }
              >
                Venus
              </Link>
            </li>
            {/* Earth */}
            <li>
              <Link
                to="/Earth"
                className="text-white text-xl font-medium py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-200"
                onClick={() =>
                  handleButton("Earth")
                }
              >
                Earth
              </Link>
            </li>
            {/* Mars */}
            <li>
              <Link
                to="/Mars"
                className="text-white text-xl font-medium py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-200"
                onClick={() =>
                  handleButton("Mars")
                }
              >
                Mars
              </Link>
            </li>
            {/* Jupiter */}
            <li>
              <Link
                to="/Jupiter"
                className="text-white text-xl font-medium py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-200"
                onClick={() =>
                  handleButton("Jupiter")
                }
              >
                Jupiter
              </Link>
            </li>
            {/* Saturn */}
            <li>
              <Link
                to="/Saturn"
                className="text-white text-xl font-medium py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-200"
                onClick={() =>
                  handleButton("Saturn")
                }
              >
                Saturn
              </Link>
            </li>
            {/* Uranus */}
            <li>
              <Link
                to="/Uranus"
                className="text-white text-xl font-medium py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-200"
                onClick={() =>
                  handleButton("Uranus")
                }
              >
                Uranus
              </Link>
            </li>
            {/* Neptune */}
            <li>
              <Link
                to="/Neptune"
                className="text-white text-xl font-medium py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-200"
                onClick={() =>
                  handleButton("Neptune")
                }
              >
                Neptune
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
      ;
    </>
  );
}
