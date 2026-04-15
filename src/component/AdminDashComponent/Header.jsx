import React from "react";
import { Menu, Bell, Search } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Header({ setOpen }) {
  const location = useLocation();

  // Get page title from route
  const getTitle = () => {
    const path = location.pathname.split("/").pop();
    if (!path) return "Dashboard";
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <header className="w-full h-[70px] bg-white shadow-sm flex items-center justify-between px-4 lg:px-6">
      
      {/* LEFT */}
      <div className="flex items-center gap-4">
        {/* MENU BUTTON (Mobile) */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <Menu />
        </button>

        {/* PAGE TITLE */}
        <h1 className="text-xl font-semibold text-gray-800">
          {getTitle()}
        </h1>
      </div>

      {/* CENTER (Search) */}
      <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg w-[300px]">
        <Search className="w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none ml-2 text-sm w-full"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        
        {/* NOTIFICATION */}
        <div className="relative cursor-pointer">
          <Bell className="text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1 rounded-full">
            3
          </span>
        </div>

        {/* PROFILE */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-9 h-9 rounded-full"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}