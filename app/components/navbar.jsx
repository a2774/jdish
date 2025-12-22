"use client";
import Link from "next/link";

import { CiSearch, CiSettings, CiHome } from "react-icons/ci";
import { MdOutlineDashboard, MdDashboard } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiBookmarkSimple } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { MdVerified } from "react-icons/md";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { useState, useRef, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <div className="relative">
            <IoIosNotificationsOutline className="text-xl cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-red-400 text-white text-[10px] h-4 min-w-[16px] px-1 flex items-center justify-center rounded-full">
              3
            </span>
          </div>

          <div className="relative">
            <PiBookmarkSimple className="text-xl cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-red-400 text-white text-[10px] h-4 min-w-[16px] px-1 flex items-center justify-center rounded-full">
              2
            </span>
          </div>

          <div className="relative " ref={dropdownRef}>
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 cursor-pointer"
            >
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

            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl border border-gray-100 shadow-lg py-2 z-50">
                <Link
                  href="/profile"
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                >
                  <CgProfile className="text-ms" /> Profile
                </Link>

                <Link
                  href="/settings"
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                >
                  <CiSettings className="text-ms" /> Settings
                </Link>

                <Link
                  href="/help"
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                >
                  <HiOutlineQuestionMarkCircle className="text-ms" /> Help &
                  Support
                </Link>

                <Link
                  href="/pro-dashboard"
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                >
                  <MdOutlineDashboard className="text-ms" /> Pro Dashboard
                </Link>

                <div className="border-t my-1"></div>

                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                  <CiHome /> Logout
                </button>
              </div>
            )}
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
