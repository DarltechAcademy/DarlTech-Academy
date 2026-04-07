import { useState } from "react";
import { store } from "../store";

import StudentDashboard from "./StudentDashboard";
import AdminDashboard from "./admin/AdminDashboard";

export default function Dashboard() {
  return store.user.role === "admin"
    ? <AdminDashboard />
    : <StudentDashboard />;
}