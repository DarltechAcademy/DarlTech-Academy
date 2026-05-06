import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/AdminDashComponent/sidebar";
import Header from "../component/AdminDashComponent/Header";

export default function AdminDashboardlayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* SIDEBAR */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">
        
        {/* HEADER */}
        <Header setOpen={setOpen} />

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
