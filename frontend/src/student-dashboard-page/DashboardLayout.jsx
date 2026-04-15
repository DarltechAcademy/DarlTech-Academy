import { useState } from "react";
import Sidebar from "../component/StudentDasboard-Component/Sidebar";
import Header from "../component/StudentDasboard-Component/Header";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">

      {/* SIDEBAR */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <Header toggleSidebar={() => setOpen(!open)} />

        {/* SCROLLABLE CONTENT */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
}