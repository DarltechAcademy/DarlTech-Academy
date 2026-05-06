import React from "react";
import { Line, Doughnut, Radar } from "react-chartjs-2";

export default function AdminAnalytics() {
  // Mock data
  const analytics = {
    totalUsers: 120,
    totalQuizzes: 35,
    totalAssignmentsSubmitted: 80,
    totalAssignmentsPending: 20,
    totalCourses: 10,
  };

  // Line chart (Users vs Quizzes vs Courses over months)
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Users",
        data: [100, 110, 115, 120, 118, analytics.totalUsers],
        borderColor: "var(--primary)",
        backgroundColor: "var(--primary-light)",
        tension: 0.3,
      },
      {
        label: "Quizzes",
        data: [10, 20, 25, 30, 32, analytics.totalQuizzes],
        borderColor: "var(--accent)",
        backgroundColor: "var(--accent-light)",
        tension: 0.3,
      },
      {
        label: "Courses",
        data: [5, 6, 7, 8, 9, analytics.totalCourses],
        borderColor: "var(--primary-dark)",
        backgroundColor: "var(--primary-light)",
        tension: 0.3,
      },
    ],
  };

  // Doughnut chart (Assignments Submitted vs Pending)
  const doughnutData = {
    labels: ["Submitted", "Pending"],
    datasets: [
      {
        data: [analytics.totalAssignmentsSubmitted, analytics.totalAssignmentsPending],
        backgroundColor: ["var(--accent)", "var(--primary)"],
        hoverOffset: 10,
      },
    ],
  };

  // Radar chart (Comparison)
  const radarData = {
    labels: ["Users", "Quizzes", "Assignments Submitted", "Assignments Pending", "Courses"],
    datasets: [
      {
        label: "Analytics Overview",
        data: [
          analytics.totalUsers,
          analytics.totalQuizzes,
          analytics.totalAssignmentsSubmitted,
          analytics.totalAssignmentsPending,
          analytics.totalCourses,
        ],
        backgroundColor: "rgba(255, 59, 63, 0.2)",
        borderColor: "var(--accent)",
        pointBackgroundColor: "var(--accent)",
        pointBorderColor: "#fff",
      },
    ],
  };

  return (
    <div className="p-6 bg-[var(--bg-section)] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-[var(--text-primary)]">Admin Analytics</h1>

      {/* Cards */}
      <div className="grid md:grid-cols-5 gap-6 mb-12">
        <StatCard title="Total Users" value={analytics.totalUsers} color="var(--primary)" />
        <StatCard title="Total Quizzes" value={analytics.totalQuizzes} color="var(--accent)" />
        <StatCard title="Assignments Submitted" value={analytics.totalAssignmentsSubmitted} color="var(--primary-dark)" />
        <StatCard title="Assignments Pending" value={analytics.totalAssignmentsPending} color="var(--accent-light)" />
        <StatCard title="Total Courses" value={analytics.totalCourses} color="var(--primary-light)" />
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-[var(--bg-card)] rounded-xl shadow-md p-5">
          <h2 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Users vs Quizzes vs Courses</h2>
          <Line data={lineData} />
        </div>

        <div className="bg-[var(--bg-card)] rounded-xl shadow-md p-5 ">
          <h2 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Assignments Status</h2>
          <Doughnut data={doughnutData} />
        </div>

        <div className="bg-[var(--bg-card)] rounded-xl shadow-md p-5 ">
          <h2 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Analytics Radar</h2>
          <Radar data={radarData} />
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, color }) {
  return (
    <div
      className="rounded-xl shadow-md p-6 text-center text-white font-semibold hover:shadow-lg "
      style={{ backgroundColor: color }}
    >
      <h3 className="text-md">{title}</h3>
      <p className="text-3xl mt-2">{value}</p>
    </div>
  );
}