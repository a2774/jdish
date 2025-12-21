"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { CiHome, CiSettings } from "react-icons/ci";
import {
  MdOutlineExplore,
  MdExplore,
  MdOutlineDashboard,
  MdDashboard,
} from "react-icons/md";
import { IoIosNotificationsOutline, IoIosNotifications } from "react-icons/io";
import { PiBookmarkSimple, PiBookmarkSimpleFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import {
  HiOutlineQuestionMarkCircle,
  HiQuestionMarkCircle,
} from "react-icons/hi";

const menuItems = [
  { name: "Home", icon: CiHome, hoverIcon: MdDashboard, link: "/" },
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
  { name: "Profile", icon: CgProfile, hoverIcon: CgProfile, link: "/profile" },
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
  const pathname = usePathname();

  return (
    <aside className="hidden md:block">
      <div className="sticky top-20">
        <div
          className="bg-white border border-gray-100 shadow-sm rounded-xl
          w-16 lg:w-52 p-2 lg:p-3 transition-all"
        >
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.link;
              const Icon = isActive ? item.hoverIcon : item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.link}
                  className={`group flex items-center gap-3 p-2 rounded-lg transition
                    ${
                      isActive
                        ? "bg-[#f4514f]/10 text-[#f4514f]"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  <Icon className="text-lg shrink-0" />

                  {/* TEXT (hide on tablet) */}
                  <span className="hidden lg:inline text-xs font-medium">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}
