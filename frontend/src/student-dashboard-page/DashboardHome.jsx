// DashboardHome.jsx - Connected to Backend API
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useEnrollments } from "../hooks/useEnrollments";
import { PlayCircle, ClipboardList, Trophy, Clock, Loader2 } from "lucide-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function DashboardHome() {
  const { user } = useAuth();
  const { enrollments, loading, error } = useEnrollments();

  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        data: [2, 4, 3, 5, 6],
        borderColor: "#6366f1",
        tension: 0.4,
      },
    ],
  };

  // Map enrollments to courses for display
  const enrolledCourses = enrollments
    .filter((e) => e.course) // filter out any null courses
    .map((enrollment) => ({
      id: enrollment.course._id,
      title: enrollment.course.title,
      description: enrollment.course.description,
      image: enrollment.course.thumbnail || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80",
      category: enrollment.course.category,
      tutor: enrollment.course.tutor?.name || "Instructor",
      progress: enrollment.progress || 0,
      completedLessons: enrollment.completedLessons || 0,
      totalLessons: enrollment.totalLessons || 0,
      enrolledAt: enrollment.createdAt,
    }));

  // Calculate stats from real data
  const activeCourses = enrolledCourses.length;
  const totalProgress = enrolledCourses.reduce((sum, c) => sum + (c.progress || 0), 0);
  const avgProgress = activeCourses > 0 ? Math.round(totalProgress / activeCourses) : 0;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
        <span className="ml-3 text-slate-600">Loading dashboard...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 mb-2">Failed to load dashboard data</p>
        <p className="text-slate-500 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* TITLE */}
      <div>
        <h1 className="text-4xl font-bold">
          Welcome back, {user?.name || "Student"} 👋
        </h1>
        <p className="text-slate-500">
          You have {activeCourses} active course{activeCourses !== 1 ? "s" : ""}.
        </p>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Stat icon={PlayCircle} value={activeCourses} label="Active Courses" />
        <Stat icon={ClipboardList} value="—" label="Assignments" />
        <Stat icon={Trophy} value={`${avgProgress}%`} label="Avg Progress" />
        <Stat icon={Clock} value="—" label="Hours Studied" />
      </div>

      {/* CONTINUE LEARNING */}
      <div>
        <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
        {enrolledCourses.length === 0 ? (
          <div className="bg-white rounded-2xl shadow p-8 text-center">
            <p className="text-slate-500 mb-4">You haven't enrolled in any courses yet.</p>
            <a
              href="/auth"
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors inline-block"
            >
              Browse Courses
            </a>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {enrolledCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow overflow-hidden"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold">{course.title}</h3>
                  <p className="text-sm text-slate-500 mb-1">{course.tutor}</p>
                  <div className="text-sm text-gray-500">
                    {course.completedLessons}/{course.totalLessons} Lessons
                  </div>
                  <div className="w-full bg-gray-200 h-2 mt-2 rounded">
                    <div
                      className="h-2 rounded bg-indigo-500"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* LEARNING ACTIVITY CHART */}
      <div className="bg-white p-6 rounded-2xl">
        <h2 className="font-bold mb-4">Learning Activity</h2>
        <Line data={chartData} />
      </div>
    </div>
  );
}

// Stat Card Component
function Stat({ icon: Icon, value, label }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <Icon className="mb-3" />
      <h2 className="text-2xl font-bold">{value}</h2>
      <p className="text-gray-500">{label}</p>
    </div>
  );
}