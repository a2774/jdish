"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  Search,
  Settings,
  Bell,
  User,
  LayoutGrid,
  HelpCircle,
  MessageCircle,
  CheckCircle2,
  LogOut,
} from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 md:px-12 h-14 flex items-center justify-between">
        <div className="flex-shrink-0">
          <h2 className="text-lg font-bold text-[#f4514f]">jdish</h2>
        </div>

        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full w-full max-w-md border border-transparent focus-within:border-[#f4514f] focus-within:ring-2 focus-within:ring-[#f4514f]/30">
            <Search className="text-gray-500 h-5 w-5 shrink-0" />
            <input
              type="text"
              placeholder="Search recipes, chefs, or products"
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 bg-red-400 text-white text-[10px] px-1 rounded-full">
              3
            </span>
          </div>

          <div className="relative">
            <MessageCircle className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 bg-red-400 text-white text-[10px] px-1 rounded-full">
              2
            </span>
          </div>

          <div className="relative" ref={dropdownRef}>
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
                  <CheckCircle2
                    className="h-4 w-4"
                    fill="#1D9BF0"
                    stroke="white"
                    strokeWidth={2}
                  />
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
                  className="flex px-4 py-2 text-xs hover:bg-gray-100"
                >
                  <User className="h-4 w-4 mr-2" /> Profile
                </Link>
                <Link
                  href="/settings"
                  className="flex px-4 py-2 text-xs hover:bg-gray-100"
                >
                  <Settings className="h-4 w-4 mr-2" /> Settings
                </Link>
                <Link
                  href="/help"
                  className="flex px-4 py-2 text-xs hover:bg-gray-100"
                >
                  <HelpCircle className="h-4 w-4 mr-2" /> Help & Support
                </Link>
                <Link
                  href="/pro-dashboard"
                  className="flex px-4 py-2 text-xs hover:bg-gray-100"
                >
                  <LayoutGrid className="h-4 w-4 mr-2" /> Pro Dashboard
                </Link>
                <div className="border-t my-1" />
                <button className="w-full flex items-center px-4 py-2 text-xs text-red-600 hover:bg-red-50">
                  <LogOut className="h-4 w-4 mr-2" /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="md:hidden px-4 pb-2">
        <div className="hidden md:flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full">
          <Search className="text-gray-500" />
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
