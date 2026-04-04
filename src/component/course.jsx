import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CourseStacks() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/courses");
        setCourses(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="bg-[var(--bg-section)] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Explore Our Course Stacks
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-14">
          Learn high-income tech skills from industry experts.
        </p>

        {loading ? (
          <p>Loading courses...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course) => (
              <div
                key={course._id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                {/* Image */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-40 w-full object-cover"
                />

                {/* Content */}
                <div className="p-5 text-left">
                  <h3 className="font-semibold text-lg mb-2">
                    {course.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-3">
                    {course.level}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="font-bold text-blue-600">
                      {course.price === 0 ? "Free" : `₦${course.price}`}
                    </span>

                    <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}