// src/components/Courses.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserCourses = async () => {
      try {
        const token = localStorage.getItem("token"); // JWT stored after login
        if (!token) throw new Error("User not logged in");

        // Use full backend URL to avoid HTML error
        const response = await fetch("http://localhost:5000/api/courses/my-courses", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const text = await response.text(); // debug if backend sends HTML
          console.error("Backend response:", text);
          throw new Error("Failed to fetch courses");
        }

        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserCourses();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading courses...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (courses.length === 0)
    return <p className="text-center mt-10 text-gray-500">No registered courses yet.</p>;

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div key={course.id} className="bg-white rounded-2xl shadow">
          <img
            src={course.image || "/default-course.jpg"}
            alt={course.title}
            className="h-48 w-full object-cover rounded-t-2xl"
          />

          <div className="p-5">
            <h3 className="font-bold">{course.title}</h3>

            <div className="mt-2 text-sm text-gray-500">
              {course.progress ?? 0}%
            </div>

            <div className="w-full bg-gray-200 h-2 mt-2 rounded">
              <div
                className={`h-2 rounded ${
                  course.progress >= 75
                    ? "bg-green-500"
                    : course.progress >= 40
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
                style={{ width: `${course.progress ?? 0}%` }}
              />
            </div>

            <button
              onClick={() => navigate(`/courses/${course.id}`)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition"
            >
              Continue
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}