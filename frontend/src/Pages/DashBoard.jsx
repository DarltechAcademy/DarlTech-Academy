import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  // This page is not used in the current routing (App.jsx routes directly to DashboardHome)
  // But keeping it updated for potential future use
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Welcome, {user?.name || "User"}
      </h1>
      <p className="text-slate-500 mt-2">Role: {user?.role || "Student"}</p>
    </div>
  );
}