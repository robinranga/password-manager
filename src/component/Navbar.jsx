import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-[80vw] h-16 bg-[#3f2259] mx-auto z-10 relative top-8 rounded-2xl flex justify-between px-6 items-center">
        <div className="logo text-xl cursor-pointer font-bold text-white" onClick={() => window.location.reload()}>
          <span className="text-green-700 ">&lt;</span>Pass
          <span className="text-green-700">OP/</span>
          <span className="text-green-700 ">&gt;</span>
        </div>
        <ul className="flex gap-4 text-[#c0c0c0]">
          <li>
            <NavLink
              to="/"
              className={(e) => {
                return `hover:bg-purple-700 transition-all duration-300 ease-in-out px-2 py-2 rounded-2xl ${e.isActive ? 'bg-purple-700 underline underline-offset-18' : ""}`
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-passwords"
              className={(e) => {
                return `hover:bg-purple-700 transition-all duration-300 ease-in-out px-2 py-2 rounded-2xl ${e.isActive ? 'bg-purple-700 underline underline-offset-18' : ""}`
              }}
            >
              Add
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/display"
              className={(e) => {
                return `hover:bg-purple-700 transition-all duration-300 ease-in-out px-2 py-2 rounded-2xl ${e.isActive ? 'bg-purple-700 underline underline-offset-18' : ""}`
              }}
            >
              Display
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
