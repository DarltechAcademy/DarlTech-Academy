import { useCourses } from "../hooks/useCourses";
import { Loader2, BookOpen } from "lucide-react";

export default function AdminCourses() {
  const { courses, loading, error } = useCourses();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
        <span className="ml-3 text-slate-600">Loading courses...</span>
      </div>
    );
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  if (courses.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-slate-200">
        <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-slate-700 mb-2">No Courses Yet</h3>
        <p className="text-slate-500">Create your first course to get started.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Manage Courses</h1>
        <span className="text-slate-500">{courses.length} course{courses.length !== 1 ? "s" : ""}</span>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((c) => (
          <div key={c._id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
              {c.category}
            </span>
            <h3 className="font-bold mt-2">{c.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{c.level} • {c.status}</p>
            <p className="text-gray-500 text-sm mt-1">
              Tutor: {c.tutor?.name || "Unassigned"}
            </p>
            {c.price > 0 && (
              <p className="text-indigo-600 font-bold mt-2">₦{c.price.toLocaleString()}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}