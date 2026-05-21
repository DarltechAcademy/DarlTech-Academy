import React, { useState } from "react";
import { store } from "../store";

export default function AdminUsers() {
  const [users, setUsers] = useState(store.users || []);
  const [courses] = useState(store.courses || []);
  
  // This list contains only candidates enrolled BY THE ADMIN
  const [adminEnrolledCandidates] = useState(store.adminEnrolledCandidates || []); 
  const [selectedCandidate, setSelectedCandidate] = useState("");

  // Delete user
  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
      // TODO: Call backend API
    }
  };

  // Block/Unblock user
  const toggleBlockUser = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, blocked: !user.blocked } : user
      )
    );
    // TODO: Call backend API
  };

  // Create user if enrolled BY ADMIN
  const createUser = () => {
    if (!selectedCandidate) return alert("Select a candidate you enrolled first!");

    const candidate = adminEnrolledCandidates.find(c => c.id === selectedCandidate);
    if (!candidate || !candidate.enrolledByAdmin) {
      return alert("Cannot create user: you did not enroll this user!");
    }

    const course = courses.find(c => c.id === candidate.courseId);
    const role = course?.type === "admin-type" ? "admin" : "user";
    const id = Date.now();

    setUsers([...users, { ...candidate, id, role, blocked: false }]);
    setSelectedCandidate("");
    // TODO: Call backend API to create user
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Users</h2>

      {/* Create User Form */}
      <div className="mb-6 bg-gray-50 p-4 rounded-xl flex gap-4 items-end">
        <select
          className="p-2 border rounded"
          value={selectedCandidate}
          onChange={(e) => setSelectedCandidate(e.target.value)}
        >
          <option value="">Select Candidate You Enrolled</option>
          {adminEnrolledCandidates
            .filter(c => c.enrolledByAdmin) // only show users enrolled by admin
            .map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} ({c.email}) - {courses.find(course => course.id === c.courseId)?.name || "N/A"}
              </option>
            ))}
        </select>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={createUser}
        >
          Create User
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl overflow-hidden shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Course</th>
              <th>Enrollment</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-4">{user.name}</td>
                <td>{user.email}</td>
                <td className="capitalize">{user.role}</td>
                <td>{courses.find(c => c.id === user.courseId)?.name || "N/A"}</td>
                <td>{user.enrolledByAdmin ? "Enrolled" : "Pending"}</td>
                <td>{user.blocked ? "Blocked" : "Active"}</td>
                <td className="flex gap-2 p-2">
                  <button
                    onClick={() => toggleBlockUser(user.id)}
                    className={`px-2 py-1 rounded ${
                      user.blocked ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                    }`}
                  >
                    {user.blocked ? "Unblock" : "Block"}
                  </button>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center p-4">
                  No users available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}