// import { store } from "../store";
// import {
//   PlayCircle,
//   ClipboardList,
//   Trophy,
//   Clock,
// } from "lucide-react";
// import {
//   Line
// } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement
// } from "chart.js";

// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// export default function DashboardHome() {
//   const chartData = {
//     labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
//     datasets: [
//       {
//         data: [2, 4, 3, 5, 6],
//         borderColor: "#6366f1",
//         tension: 0.4,
//       },
//     ],
//   };

//   return (
//     <div>

//       {/* TITLE */}
//       <div className="mb-8">
//         <h1 className="text-4xl font-bold">
//           Welcome back, {store.user.name} 👋
//         </h1>
//         <p className="text-slate-500">
//           You've completed 12 lessons this week.
//         </p>
//       </div>

//       {/* STATS */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

//         <Stat icon={PlayCircle} value="5" label="Active Courses" />
//         <Stat icon={ClipboardList} value="3" label="Assignments" />
//         <Stat icon={Trophy} value="450" label="Points" />
//         <Stat icon={Clock} value="12.5h" label="Hours" />

//       </div>

//       {/* CONTINUE LEARNING */}
//       <div className="mb-8">
//         <h2 className="text-xl font-bold mb-4">
//           Continue Learning
//         </h2>

//         <div className="grid md:grid-cols-2 gap-6">
//           {store.courses.map((course) => (
//             <div
//               key={course.id}
//               className="bg-white rounded-2xl shadow overflow-hidden"
//             >
//               <img
//                 src={course.image}
//                 className="h-40 w-full object-cover"
//               />

//               <div className="p-4">
//                 <h3 className="font-bold">{course.title}</h3>

//                 <div className="text-sm text-gray-500">
//                   {course.completed}/{course.lessons}
//                 </div>

//                 <div className="w-full bg-gray-200 h-2 mt-2 rounded">
//                   <div
//                     className="bg-red-500 h-2 rounded"
//                     style={{ width: `${course.progress}%` }}
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CHART */}
//       <div className="bg-white p-6 rounded-2xl">
//         <h2 className="font-bold mb-4">Learning Activity</h2>
//         <Line data={chartData} />
//       </div>
//     </div>
//   );
// }

// function Stat({ icon: Icon, value, label }) {
//   return (
//     <div className="bg-white p-6 rounded-2xl">
//       <Icon className="mb-3" />
//       <h2 className="text-2xl font-bold">{value}</h2>
//       <p className="text-gray-500">{label}</p>
//     </div>
//   );
// }

// DashboardHome.jsx
import React from "react";
import { store } from "../store";
import { PlayCircle, ClipboardList, Trophy, Clock } from "lucide-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function DashboardHome() {
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        data: [2, 4, 3, 5, 6],
        borderColor: "#6366f1",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="space-y-8">

      {/* TITLE */}
      <div>
        <h1 className="text-4xl font-bold">
          Welcome back, {store.user?.name || "Student"} 👋
        </h1>
        <p className="text-slate-500">
          You've completed 12 lessons this week.
        </p>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Stat icon={PlayCircle} value="5" label="Active Courses" />
        <Stat icon={ClipboardList} value="3" label="Assignments" />
        <Stat icon={Trophy} value="450" label="Points" />
        <Stat icon={Clock} value="12.5h" label="Hours" />
      </div>

      {/* CONTINUE LEARNING */}
      <div>
        <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {(store.courses || []).map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">{course.title}</h3>
                <div className="text-sm text-gray-500">
                  {course.completedLessons}/{course.totalLessons} Lessons
                </div>
                <div className="w-full bg-gray-200 h-2 mt-2 rounded">
                  <div
                    className={`h-2 rounded`}
                    style={{ width: `${course.progress}%`, backgroundColor: course.color ? course.color : "#6366f1" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LEARNING ACTIVITY CHART */}
      <div className="bg-white p-6 rounded-2xl">
        <h2 className="font-bold mb-4">Learning Activity</h2>
        <Line data={chartData} />
      </div>

      {/* UPCOMING SCHEDULE */}
      <div>
        <h2 className="text-xl font-bold mb-4">Today's Schedule</h2>
        <div className="space-y-4">
          {(store.schedule || []).map((item, idx) => (
            <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-50">
              <div className="w-16 text-center">
                <div className="font-bold text-slate-900">{item.time}</div>
                <div className="text-xs text-slate-500">{item.duration}</div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.course}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                item.type === "live"
                  ? "bg-red-100 text-red-700"
                  : item.type === "task"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-purple-100 text-purple-700"
              }`}>
                {item.type === "live" ? "● Live" : item.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ASSIGNMENTS */}
      <div>
        <h2 className="text-xl font-bold mb-4">Upcoming Deadlines</h2>
        <div className="space-y-3">
          {(store.assignments || [])
            .filter((a) => a.status === "pending")
            .slice(0, 3)
            .map((a) => (
              <div key={a.id} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${a.dueColor}-100`}>
                  <i className="text-lg">{a.type === "coding" ? "💻" : "📄"}</i>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">{a.title}</h4>
                  <p className="text-sm text-slate-500">{a.course}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold bg-${a.dueColor}-100 text-${a.dueColor}-700`}>
                  {a.dueText}
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* ACHIEVEMENTS */}
      <div>
        <h2 className="text-xl font-bold mb-4">Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(store.achievements || []).map((ach) => (
            <div key={ach.name} className={`p-4 text-center rounded-xl ${
              ach.unlocked ? "bg-white shadow border border-slate-100" : "bg-slate-100 opacity-50"
            }`}>
              <div className="text-3xl mb-2">{ach.icon}</div>
              <h4 className="font-semibold">{ach.name}</h4>
              <p className="text-xs text-slate-500">{ach.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Stat Card Component
function Stat({ icon: Icon, value, label }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <Icon className="mb-3" />
      <h2 className="text-2xl font-bold">{value}</h2>
      <p className="text-gray-500">{label}</p>
    </div>
  );
}