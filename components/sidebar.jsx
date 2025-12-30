"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Compass,
  Bell,
  Bookmark,
  User,
  LayoutGrid,
  Settings,
  HelpCircle,
} from "lucide-react";

const menuItems = [
  { name: "Home", icon: Home, hoverIcon: Home, link: "/" },
  {
    name: "Explore",
    icon: Compass,
    hoverIcon: Compass,
    link: "/explore",
  },
  {
    name: "Notifications",
    icon: Bell,
    hoverIcon: Bell,
    link: "/notifications",
  },
  {
    name: "Bookmarks",
    icon: Bookmark,
    hoverIcon: Bookmark,
    link: "/bookmarks",
  },
  {
    name: "Profile",
    icon: User,
    hoverIcon: User,
    link: "/profile",
  },
  {
    name: "Pro Dashboard",
    icon: LayoutGrid,
    hoverIcon: LayoutGrid,
    link: "/pro-dashboard",
  },
  {
    name: "Settings",
    icon: Settings,
    hoverIcon: Settings,
    link: "/settings",
  },
  {
    name: "Help & Support",
    icon: HelpCircle,
    hoverIcon: HelpCircle,
    link: "/help",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:block w-72 mt-30px">
      <div className="sticky top-20">
        <div className=" sm:px-6 md:px-8 lg:px-12 py-4 max-w-7xl mx-auto border border-gray-100 rounded-2xl ">
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
                  <Icon
                    size={18}
                    strokeWidth={1.5}
                    className={`shrink-0 transition-colors
                      ${
                        isActive
                          ? "text-[#f4514f]"
                          : "text-gray-600 group-hover:text-[#f4514f]"
                      }`}
                  />

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
