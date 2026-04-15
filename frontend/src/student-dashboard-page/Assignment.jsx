import { useState, useEffect } from "react";
import { Calendar, Award, Code, Shield, FileText, Loader2 } from "lucide-react";
import api from "../services/api";

export default function Assignments() {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Due Date");

  // Fetch assignments from backend (when Sprint 4 API is ready)
  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await api.get("/assignments");
        setAssignments(response.data?.data || []);
      } catch (err) {
        // Backend doesn't have assignments endpoint yet (Sprint 4)
        console.log("Assignments API not available yet — showing empty state");
        setAssignments([]);
      } finally {
        setLoading(false);
      }
    };
    fetchAssignments();
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case "coding":
        return <Code className="w-7 h-7" />;
      case "security":
        return <Shield className="w-7 h-7" />;
      default:
        return <FileText className="w-7 h-7" />;
    }
  };

  const getStatusBadge = (assignment) => {
    if (assignment.status === "submitted") return "bg-green-100 text-green-700";
    if (assignment.dueColor === "red") return "bg-red-100 text-red-700";
    return "bg-amber-100 text-amber-700";
  };

  // Filter assignments
  const filteredAssignments = assignments.filter((a) => {
    if (filter === "All") return true;
    if (filter === "Pending") return a.status !== "submitted";
    if (filter === "Submitted") return a.status === "submitted";
    if (filter === "Graded") return a.grade !== null && a.grade !== undefined;
    return true;
  });

  // Sort assignments
  const sortedAssignments = [...filteredAssignments].sort((a, b) => {
    if (sortBy === "Due Date") return (a.dueDate || "").localeCompare(b.dueDate || "");
    if (sortBy === "Course") return (a.course || "").localeCompare(b.course || "");
    if (sortBy === "Status") return (a.status || "").localeCompare(b.status || "");
    return 0;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
        <span className="ml-3 text-slate-600">Loading assignments...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Assignments</h1>
          <p className="text-slate-600 mt-1">Track and submit your coursework</p>
        </div>
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/30 flex items-center gap-2">
          New Submission
        </button>
      </div>

      {/* Filters & Sort */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex bg-white rounded-xl p-1 shadow-sm border border-slate-200">
          {["All", "Pending", "Submitted", "Graded"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                filter === f ? "bg-indigo-600 text-white" : "text-slate-600 hover:bg-slate-50"
              } transition-colors`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <span className="text-sm text-slate-500">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
          >
            <option>Due Date</option>
            <option>Course</option>
            <option>Status</option>
          </select>
        </div>
      </div>

      {/* Empty State */}
      {sortedAssignments.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-slate-200">
          <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-700 mb-2">No Assignments Yet</h3>
          <p className="text-slate-500">
            Assignments will appear here once your tutors create them.
          </p>
        </div>
      ) : (
        /* Assignments List */
        <div className="space-y-4">
          {sortedAssignments.map((a) => (
            <div
              key={a._id || a.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex justify-between items-start"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  {getIcon(a.type)}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">{a.title}</h3>
                  <p className="text-slate-500 text-sm mb-2">{a.course}</p>
                  <p className="text-slate-600 text-sm max-w-xl">{a.description}</p>
                  <div className="flex items-center gap-4 mt-3 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> Due {a.dueText || a.dueDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" /> {a.points} points
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-3">
                <span
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold ${getStatusBadge(a)}`}
                >
                  {a.status === "submitted" ? "Submitted" : "Pending"}
                </span>
                {a.grade ? (
                  <div className="text-2xl font-bold text-green-600">{a.grade}%</div>
                ) : (
                  <button className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
                    Submit Work
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}