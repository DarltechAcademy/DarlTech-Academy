import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

import AdminHome from "./AdminHome";
import Users from "./Users";
import AdminCourses from "./AdminCourses";
import AdminAssignments from "./AdminAssignments";

export default function AdminDashboard() {
  const [tab, setTab] = useState("dashboard");

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar tab={tab} setTab={setTab} admin />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-8 overflow-y-auto">
          {tab === "dashboard" && <AdminHome />}
          {tab === "users" && <Users />}
          {tab === "courses" && <AdminCourses />}
          {tab === "assignments" && <AdminAssignments />}
        </main>
      </div>
    </div>
  );
}