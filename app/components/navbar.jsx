"use client";

import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import { MdVerified } from "react-icons/md";

function Navbar() {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center relative">
        {/* LEFT */}
        <div className="w-1/4">
          <h2 className="text-lg font-bold text-[#f4514f] ">jdish</h2>
        </div>

     
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full
    w-[420px]
    border border-transparent
    focus-within:border-[#f4514f]
    focus-within:ring-2 focus-within:ring-[#f4514f]/30
    transition"
          >
            <CiSearch className="text-gray-500 text-base" />
            <input
              type="text"
              placeholder="Search recipes, chefs, or products"
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-1/4 ml-auto flex justify-end items-center gap-4">
          <IoIosNotifications />
          <FiMessageCircle />

          <div className="flex items-center gap-2 cursor-pointer">
            <div className="text-right leading-tight">
              <p className="text-xs font-medium text-gray-800">
                Chef Marco Rossi
              </p>
              <div className="flex items-center justify-end gap-1 text-xs text-gray-500">
                <span>Premium</span>
                <MdVerified className="text-blue-500 text-xs" />
              </div>
            </div>

            <img
              src="/anilkumar.jpeg"
              alt="Profile"
              className="w-7 h-7 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
