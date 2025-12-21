"use client";

import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import { MdVerified } from "react-icons/md";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-4">
        <div className="flex-shrink-0">
          <h2 className="text-lg font-bold text-[#f4514f]">jdish</h2>
        </div>

        <div className="hidden sm:flex flex-1 justify-center">
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full w-full max-w-md border border-transparent focus-within:border-[#f4514f] focus-within:ring-2 focus-within:ring-[#f4514f]/30 transition">
            <CiSearch className="text-gray-500 text-base" />
            <input
              type="text"
              placeholder="Search recipes, chefs, or products"
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <IoIosNotifications className="text-xl cursor-pointer" />
          <FiMessageCircle className="text-xl cursor-pointer" />

          <div className="flex items-center gap-2 cursor-pointer">
            <div className="hidden md:block text-right leading-tight">
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

      <div className="sm:hidden px-4 pb-2">
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full border border-transparent focus-within:border-[#f4514f] focus-within:ring-2 focus-within:ring-[#f4514f]/30">
          <CiSearch className="text-gray-500 text-base" />
          <input
            type="text"
            placeholder="Search recipes..."
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
