"use client";

import Link from "next/link";
import { CiHome, CiSettings } from "react-icons/ci";
import { MdOutlineExplore, MdExplore, MdOutlineDashboard, MdDashboard } from "react-icons/md";
import { IoIosNotificationsOutline, IoIosNotifications } from "react-icons/io";
import { PiBookmarkSimple, PiBookmarkSimpleFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineQuestionMarkCircle, HiQuestionMarkCircle } from "react-icons/hi";

const menuItems = [
  {
    name: "Home",
    icon: CiHome,
    hoverIcon: MdDashboard,
    link: "/",
  },
  {
    name: "Explore",
    icon: MdOutlineExplore,
    hoverIcon: MdExplore,
    link: "/explore",
  },
  {
    name: "Notifications",
    icon: IoIosNotificationsOutline,
    hoverIcon: IoIosNotifications,
    link: "/notifications",
  },
  {
    name: "Bookmarks",
    icon: PiBookmarkSimple,
    hoverIcon: PiBookmarkSimpleFill,
    link: "/bookmarks",
  },
  {
    name: "Profile",
    icon: CgProfile,
    hoverIcon: CgProfile,
    link: "/profile",
  },
  {
    name: "Pro Dashboard",
    icon: MdOutlineDashboard,
    hoverIcon: MdDashboard,
    link: "/pro-dashboard",
  },
  {
    name: "Settings",
    icon: CiSettings,
    hoverIcon: CiSettings,
    link: "/settings",
  },
  {
    name: "Help & Support",
    icon: HiOutlineQuestionMarkCircle,
    hoverIcon: HiQuestionMarkCircle,
    link: "/help",
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-44">
      <div className="sticky top-20">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3">
          <nav className="space-y-1">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="group flex items-center gap-3 p-2 rounded-lg
                text-sm text-gray-600 hover:bg-gray-100 transition"
              >
                {/* Normal Icon */}
                <item.icon className="text-lg group-hover:hidden" />

                {/* Hover Icon */}
                <item.hoverIcon className="text-lg hidden group-hover:block text-[#f4514f]" />

                <span className="text-xs group-hover:text-gray-400 transition">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
