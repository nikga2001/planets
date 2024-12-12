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
        {/* Logo Section */}
        <button
          className="text-[#fff] text-2xl font-bold md:m-auto"
          onClick={() => handleButton("Starter")}
        >
          THE PLANETS
        </button>

        {/* Mobile Menu Icon */}
        <nav>
          <img
            onClick={handleNavigation}
            src="images/Group-2.svg"
            alt="Navigation Icon"
            className="w-8 h-8 md:hidden"
          />
        </nav>
      </header>

      {/* Divider for Mobile */}
      <hr className="border-t border-gray-600 md:hidden" />

      {/* Planet Links for Larger Screens */}
      <ul className="hidden md:flex justify-center text-center mt-[30px] text-white font-antonio xl:space-x-6">
        <li>
          <Link
            to="/Mercury"
            className="text-xl font-medium py-3 px-4 lg:px-6 hover:underline"
            onClick={() =>
              handleButton("Mercury")
            }
          >
            Mercury
          </Link>
        </li>
        <li>
          <Link
            to="/Venus"
            className="text-xl font-medium py-3 px-4 lg:px-6 hover:underline"
            onClick={() => handleButton("Venus")}
          >
            Venus
          </Link>
        </li>
        <li>
          <Link
            to="/Earth"
            className="text-xl font-medium py-3 px-4 lg:px-6 hover:underline"
            onClick={() => handleButton("Earth")}
          >
            Earth
          </Link>
        </li>
        <li>
          <Link
            to="/Mars"
            className="text-xl font-medium py-3 px-4 lg:px-6 hover:underline"
            onClick={() => handleButton("Mars")}
          >
            Mars
          </Link>
        </li>
        <li>
          <Link
            to="/Jupiter"
            className="text-xl font-medium py-3 px-4 lg:px-6 hover:underline"
            onClick={() =>
              handleButton("Jupiter")
            }
          >
            Jupiter
          </Link>
        </li>
        <li>
          <Link
            to="/Saturn"
            className="text-xl font-medium py-3 px-4 lg:px-6 hover:underline"
            onClick={() => handleButton("Saturn")}
          >
            Saturn
          </Link>
        </li>
        <li>
          <Link
            to="/Uranus"
            className="text-xl font-medium py-3 px-4 lg:px-6 hover:underline"
            onClick={() => handleButton("Uranus")}
          >
            Uranus
          </Link>
        </li>
        <li>
          <Link
            to="/Neptune"
            className="text-xl font-medium py-3 px-4 lg:px-6 hover:underline"
            onClick={() =>
              handleButton("Neptune")
            }
          >
            Neptune
          </Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      {isOpen ? (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <ul className="space-y-6 text-center">
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
    </>
  );
}
