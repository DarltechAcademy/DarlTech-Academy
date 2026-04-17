import React from "react";
import { Line, Doughnut, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  RadarController,
  RadialLinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  RadarController,
  RadialLinearScale,
  Tooltip,
  Legend
);

export default function Analytics() {
  // Line chart data (main activity)
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Study Hours",
        data: [2.5, 3.2, 1.8, 4.0, 3.5, 5.2, 4.1],
        borderColor: "#6366f1",
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        borderWidth: 3,
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#6366f1",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
      },
      {
        label: "Quiz Scores",
        data: [75, 82, 78, 88, 85, 92, 90],
        borderColor: "#10b981",
        backgroundColor: "transparent",
        borderWidth: 3,
        tension: 0.4,
        borderDash: [5, 5],
        pointBackgroundColor: "#10b981",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        yAxisID: "y1",
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
    plugins: { legend: { position: "top", align: "end" } },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "rgba(0,0,0,0.05)" },
        ticks: { callback: (v) => v + "h" },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: { drawOnChartArea: false },
        ticks: { callback: (v) => v + "%" },
      },
      x: { grid: { display: false } },
    },
  };

  // Doughnut chart (Study Time Distribution)
  const doughnutData = {
    labels: ["Web Dev", "Data Science", "Cybersecurity", "AI"],
    datasets: [
      {
        data: [45, 30, 15, 10],
        backgroundColor: ["#6366f1", "#10b981", "#f59e0b", "#ec4899"],
        borderWidth: 0,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: { legend: { position: "bottom" } },
  };

  // Radar chart (Performance by Subject)
  const radarData = {
    labels: ["Coding", "Theory", "Projects", "Quizzes", "Participation"],
    datasets: [
      {
        label: "Your Score",
        data: [90, 85, 88, 92, 78],
        borderColor: "#6366f1",
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        borderWidth: 2,
      },
      {
        label: "Class Average",
        data: [75, 80, 72, 78, 82],
        borderColor: "#94a3b8",
        backgroundColor: "rgba(148, 163, 184, 0.1)",
        borderWidth: 2,
      },
    ],
  };

  const radarOptions = { responsive: true, maintainAspectRatio: false, scales: { r: { beginAtZero: true, max: 100 } } };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Learning Analytics</h1>
          <p className="text-slate-600 mt-1">Detailed insights into your progress</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Year</option>
          </select>
          <button className="p-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
            <i data-lucide="download" className="w-5 h-5 text-slate-600"></i>
          </button>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 h-[300px]">
          <h3 className="font-bold text-slate-900 mb-4">Study Time Distribution</h3>
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 h-[300px]">
          <h3 className="font-bold text-slate-900 mb-4">Performance by Subject</h3>
          <Radar data={radarData} options={radarOptions} />
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 h-[300px]">
        <h3 className="font-bold text-slate-900 mb-4">Weekly Study & Quiz Trends</h3>
        <Line data={lineData} options={lineOptions} />
      </div>
    </div>
  );
}