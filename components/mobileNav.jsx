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
} from "lucide-react";

const mobileMenuItems = [
  { name: "Home", icon: Home, link: "/" },
  { name: "Explore", icon: Compass, link: "/explore" },
  { name: "Notifications", icon: Bell, link: "/notifications" },
  { name: "Bookmarks", icon: Bookmark, link: "/bookmarks" },
  { name: "Profile", icon: User, link: "/profile" },
];

export default function MobileNav() {
  const pathname = usePathname();


  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around items-center h-16">
        {mobileMenuItems.map((item) => {
          const isActive = pathname === item.link;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.link}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1
                ${isActive ? "text-[#f4514f]" : "text-gray-500 hover:text-gray-900"}
              `}
            >
              <Icon
                size={24}
                strokeWidth={isActive ? 2 : 1.5}
                className={`transition-colors duration-200`}
              />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
