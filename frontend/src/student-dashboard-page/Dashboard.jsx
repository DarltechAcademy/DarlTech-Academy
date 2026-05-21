// import { useState } from "react";
// import Sidebar from "../component/StudentDasboard-Component/Sidebar";
// import Header from "../component/StudentDasboard-Component/Header";
// import DashboardHome from "./DashboardHome";
// import Courses from "./Course";
// import Assignments from "./Assignment";

// export default function Dashboard() {
//   const [tab, setTab] = useState("dashboard");

//   return (
//     <div className="flex h-screen bg-slate-50">
//       <Sidebar tab={tab} setTab={setTab} />

//       <div className="flex-1 flex flex-col overflow-hidden">
//         <Header />

//         <main className="flex-1 overflow-y-auto p-8">
//           {tab === "dashboard" && <DashboardHome />}
//           {tab === "courses" && <Courses />}
//           {tab === "assignments" && <Assignments />}
//         </main>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
// import Sidebar from "../component/StudentDasboard-Component/Sidebar";
// import Header from "../component/StudentDasboard-Component/Header";

import DashboardHome from "./DashboardHome";
import Courses from "./Course";
import Assignments from "./Assignment";
import Quizzes from "./Quizzes";
import Messages from "./Message";
import Community from "./Community";
import Analytics from "./Analysis";
import CalendarPage from "./Calendar";
import SettingsPage from "./Setting";

export default function StudentDashboard() {
  const [tab, setTab] = useState("dashboard");

  return (
    <div className="flex h-screen bg-slate-50">
    

        <main className="flex-1 p-8 overflow-y-auto">
          {tab === "dashboard" && <DashboardHome />}
          {tab === "courses" && <Courses />}
          {tab === "assignments" && <Assignments />}
          {tab === "quizzes" && <Quizzes />}
          {tab === "messages" && <Messages />}
          {tab === "community" && <Community />}
          {tab === "analytics" && <Analytics />}
          {tab === "calendar" && <CalendarPage />}
          {tab === "settings" && <SettingsPage />}
        </main>
      </div>
    
  );
}