import { useState, useEffect } from "react";
import { Loader2, Users, BookOpen, ClipboardCheck, DollarSign } from "lucide-react";
import api from "../services/api";
import { useCourses } from "../hooks/useCourses";

export default function AdminHome() {
  const { courses, loading: coursesLoading } = useCourses();
  const [stats, setStats] = useState({ users: 0, revenue: 0 });

  useEffect(() => {
    // Fetch admin stats if an endpoint is available
    const fetchStats = async () => {
      try {
        const response = await api.get("/auth/stats");
        setStats(response.data || { users: 0, revenue: 0 });
      } catch (err) {
        // Stats endpoint may not exist yet
        console.log("Admin stats endpoint not available yet");
      }
    };
    fetchStats();
  }, []);

  if (coursesLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
        <span className="ml-3 text-slate-600">Loading dashboard...</span>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-4 gap-6">
      <Card title="Users" value={stats.users || "—"} icon={Users} />
      <Card title="Courses" value={courses.length} icon={BookOpen} />
      <Card title="Assignments" value="—" icon={ClipboardCheck} />
      <Card title="Revenue" value={stats.revenue ? `₦${stats.revenue.toLocaleString()}` : "—"} icon={DollarSign} />
    </div>
  );
}

function Card({ title, value, icon: Icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      {Icon && <Icon className="w-6 h-6 text-indigo-600 mb-3" />}
      <h2 className="text-2xl font-bold">{value}</h2>
      <p className="text-gray-500">{title}</p>
    </div>
  );
}