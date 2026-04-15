import { useEffect, useState } from "react";
import axios from "axios";
import { Users, BookOpen, Layers, DollarSign } from "lucide-react";
import Card from "../component/AdminDashComponent/Card";

export default function AdminHome() {
  const [stats, setStats] = useState({
    users: 0,
    courses: 0,
    enrollments: 0,
    revenue: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");

        const [coursesRes, enrollRes] = await Promise.all([
          axios.get("/api/courses"),
          axios.get("/api/enrollments/my-enrollments", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        setStats({
          users: 120, // replace later with real API
          courses: coursesRes.data.length,
          enrollments: enrollRes.data.length,
          revenue: 2400,
        });

      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-500">Overview of your platform</p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

        <Card 
          title="Users" 
          value={stats.users} 
          icon={<Users size={22} />} 
        />

        <Card 
          title="Courses" 
          value={stats.courses} 
          icon={<BookOpen size={22} />} 
        />

        <Card 
          title="Enrollments" 
          value={stats.enrollments} 
          icon={<Layers size={22} />} 
        />

        <Card 
          title="Revenue" 
          value={`$${stats.revenue}`} 
          icon={<DollarSign size={22} />} 
        />

      </div>

      {/* Extra Section (optional UI improvement) */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>

        <div className="flex flex-wrap gap-4">
          <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:opacity-90">
            Create Course
          </button>

          <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
            View Users
          </button>

          <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
            View Enrollments
          </button>
        </div>
      </div>

    </div>
  );
}