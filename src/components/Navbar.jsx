import React, { useState } from "react";
import Navelem from "./Navelem";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex fixed top-4 max-md:top-0 max-md:rounded-none  z-10 justify-center max-w-[1320px] w-full bg-gradient-to-r from-green-800 to-green-400 text-white rounded-xl shadow-lg">
      <div className="max-w-[1320px]  w-full flex items-center justify-between p-6 ">
        <div className="flex items-start flex-col">
          <h1 className="text-2xl font-bold">Karahi Point </h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-10">
            <Link to="/">
              <Navelem tag="Home" />
            </Link>
            <Link to="/project">
              <Navelem tag="Projects" />
            </Link>
            <Link to="/contact">
              <Navelem tag="Contact" />
            </Link>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="outline-none focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-green-800 to-green-400 rounded-xl shadow-lg">
            <ul className="flex flex-col items-center space-y-4 p-4">
              <Link to="/">
                <Navelem tag="Home" />
              </Link>
              <Link to="/project">
                <Navelem tag="Projects" />
              </Link>
              <Link to="/contact">
                <Navelem tag="Contact" />
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
