import React from "react";

export default function CourseStacks() {
  const courses = [
    "Backend Development",
    "AI Automation",
    "Cloud Computing",
    "UI/UX Design",
    "Cyber Security",
    "Data Analytics",
    "Graphics Design",
    "Frontend Development",
  ];

  return (
    <section className="bg-[var(--bg-section)] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
          Explore Our Course Stacks
        </h2>

        <p className="text-[var(--text-muted)] max-w-2xl mx-auto mb-14">
          Discover industry-relevant programs designed to equip you with the
          skills needed to thrive in today’s tech-driven world.
        </p>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-[var(--bg-card)] rounded-2xl shadow-[var(--shadow-soft)] p-8 flex items-center justify-center hover:-translate-y-2 hover:shadow-[var(--shadow-medium)] transition duration-300"
            >
              <h3 className="text-lg font-semibold text-[var(--text-primary)] text-center">
                {course}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}