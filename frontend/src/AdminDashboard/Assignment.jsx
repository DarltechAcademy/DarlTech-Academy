// AdminAssignments.jsx
import React, { useState } from "react";

export default function AdminAssignments() {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "Math Homework",
      tutorName: "Alice",
      dueDate: "2026-04-10",
      submissions: [
        { id: 1, studentName: "John", score: 80, status: "Completed" },
        { id: 2, studentName: "Mary", score: 90, status: "Completed" },
      ],
    },
    {
      id: 2,
      title: "Science Project",
      tutorName: "Bob",
      dueDate: "2026-04-12",
      submissions: [
        { id: 3, studentName: "Jane", score: 70, status: "Completed" },
      ],
    },
  ]);

  const [selectedAssignment, setSelectedAssignment] = useState(null);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        📚 Admin Assignment Dashboard
      </h1>

      {/* Assignments Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-600">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Assignment
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Tutor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Due Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {assignments.map((assignment) => (
              <tr
                key={assignment.id}
                className="hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <td className="px-6 py-4 whitespace-nowrap text-gray-800 font-medium">
                  {assignment.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                  {assignment.tutorName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                  {assignment.dueDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
                    onClick={() => setSelectedAssignment(assignment)}
                  >
                    View Submissions
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {assignments.length === 0 && (
          <p className="p-6 text-gray-500">No assignments available yet.</p>
        )}
      </div>

      {/* Student Submissions */}
      {selectedAssignment && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            📄 Student Performance for "{selectedAssignment.title}"
          </h2>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-green-600">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {selectedAssignment.submissions.map((submission) => (
                  <tr
                    key={submission.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-gray-800 font-medium">
                      {submission.studentName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {submission.score}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          submission.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {submission.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="mt-4 mb-4 ml-6 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded shadow"
              onClick={() => setSelectedAssignment(null)}
            >
              Back to Assignments
            </button>
          </div>
        </div>
      )}
    </div>
  );
}