// src/student-dashboard-page/Course.jsx - Connected to Backend API
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useEnrollments } from "../hooks/useEnrollments";
import { Loader2 } from "lucide-react";

export default function Courses() {
  const { enrollments, loading, error } = useEnrollments();
  const navigate = useNavigate();

  // Map enrollments to course display data
  const courses = enrollments
    .filter((e) => e.course)
    .map((enrollment) => ({
      id: enrollment.course._id,
      title: enrollment.course.title,
      description: enrollment.course.description,
      image: enrollment.course.thumbnail || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80",
      category: enrollment.course.category,
      tutor: enrollment.course.tutor?.name || "Instructor",
      progress: enrollment.progress || 0,
      enrolledAt: enrollment.createdAt,
    }));

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
        <span className="ml-3 text-slate-600">Loading courses...</span>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center mt-10 text-red-500">{error}</p>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="text-center mt-10">
        <p className="text-gray-500 mb-4">No enrolled courses yet.</p>
        <button
          onClick={() => navigate("/auth")}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
        >
          Enroll in a Course
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900">My Courses</h1>
        <p className="text-slate-600 mt-1">You are enrolled in {courses.length} course{courses.length !== 1 ? "s" : ""}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-2xl shadow">
            <img
              src={course.image}
              alt={course.title}
              className="h-48 w-full object-cover rounded-t-2xl"
            />

            <div className="p-5">
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                {course.category}
              </span>
              <h3 className="font-bold mt-2">{course.title}</h3>
              <p className="text-sm text-slate-500 mt-1">{course.tutor}</p>

              <div className="mt-3 text-sm text-gray-500">
                {course.progress ?? 0}% complete
              </div>

              <div className="w-full bg-gray-200 h-2 mt-2 rounded">
                <div
                  className={`h-2 rounded ${
                    course.progress >= 75
                      ? "bg-green-500"
                      : course.progress >= 40
                      ? "bg-yellow-500"
                      : "bg-indigo-500"
                  }`}
                  style={{ width: `${course.progress ?? 0}%` }}
                />
              </div>

              <button
                onClick={() => navigate(`/dashboard/learning`)}
                className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition"
              >
                Continue
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}