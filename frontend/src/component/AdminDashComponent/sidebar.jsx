// import React from "react";


// export default function Sidebar({ tab, setTab, admin }) {
//   const menu = admin ? adminMenu : studentMenu;
// const adminMenu = [
//   { name: "dashboard" },
//   { name: "users" },
//   { name: "courses" },
//   { name: "assignments" },
// ];
//   return (
//     <aside className="w-[280px] bg-indigo-950 text-white flex flex-col bg-amber-600">
//       <div className="p-6 font-bold">
//         {admin ? "Admin Panel" : "DarTech"}
//       </div>

//       <nav className="flex-1 p-3 space-y-2">
//         {menu.map((item) => (
//           <button
//             key={item.name}
//             onClick={() => setTab(item.name)}
//             className={`w-full text-left p-3 rounded-lg ${
//               tab === item.name ? "bg-red-500/20" : ""
//             }`}
//           >
//             {item.name}
//           </button>
//         ))}
//       </nav>
//     </aside>
//   );
// }


import React from 'react'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/image/logo.png"
import {
  LayoutDashboard,
  BookOpen,
  PlayCircle,
  ClipboardCheck,
  HelpCircle,
  MessageSquare,
  Users,
  BarChart2,
  Calendar,
  Settings,
  GraduationCap,
  Menu,
  X,
  MoreVertical,
} from "lucide-react";
import { useLocation } from "react-router-dom";

const menu = [
  {
    section: "Main",
    items: [
      { name: "Dashboard", path: "/Admindashboard", icon: LayoutDashboard },
      { name: "Courses", path: "/Admindashboard/courses", icon: BookOpen, badge: 4 },
      { name: "Learning", path: "/Admindashboard/learning", icon: PlayCircle },
      { name: "Assignments", path: "/Admindashboard/assignments", icon: ClipboardCheck, badge: 3 },
      { name: "Quizzes", path: "/Admindashboard/quizzes", icon: HelpCircle },
    ],
  },
  {
    section: "Communication",
    items: [
      { name: "Messages", path: "/Admindashboard/messages", icon: MessageSquare, badge: 3 },
      { name: "Community", path: "/Admindashboard/community", icon: Users },
    ],
  },
  {
    section: "System",
    items: [
      { name: "Analytics", path: "/Admindashboard/analytics", icon: BarChart2 },
      { name: "Calendar", path: "/Admindashboard/calendar", icon: Calendar },
      { name: "Settings", path: "Admindashboard/settings", icon: Settings },
    ],
  },
];
export default function sidebar({ open, setOpen}) {
  const location = useLocation();

  return (
    <>
       <div>
      <aside className={`fixed lg:static top-0 left-0 z-50 h-screen w-[280px] text-white flex flex-col
  bg-gradient-to-b from-indigo-950 via-indigo-900 to-indigo-950
  transition-transform duration-300
  ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
      {/* Logo */}
      <div>
    <img src={Logo} alt="Logo" />
      </div>
      {/* NavBar */}
      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-4 scrollbar-hide">
      {menu.map((group, i) =>(
        <div key={i}>
          <div className="px-3 mb-2 text-xs text-indigo-300 uppercase">
            {group.section}
          </div>
          {group.items.map((item) => {
            const Icon = item.icon;
            return (
                <NavLink 
                key={item.name}
                to={item.path}
                onClick={() => setOpen()}
                className={({isActive}) =>
                `relative flex items-center gap-3 transition-all group overflow-hidden ${
                  isActive
                  ? "bg-gradient-to-r from-red-500/20 to-transparent text-white"
                  : "text-indigo-200 hover:text-white hover:bg-white/5"
                }`
                }
                >
                  <span 
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-r transition-all duration-300 ${
                    location.pathname ===item.path
                     ? "h-8 bg-gradient-to-b from-red-500 to-orange-500"
                          : "h-0"
                  }`}
                  >

                  </span>
                    {/* ICON */}
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition
                      ${
                        location.pathname === item.path
                          ? "bg-white/10 text-red-400"
                          : "bg-white/5 group-hover:bg-white/10"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    
                    {/* TEXT */}
                    <span className="flex-1">{item.name}</span>

                    {/* BADGE */}
                    {item.badge && (
                      <span className="bg-red-500 text-xs px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                </NavLink>
            );
          })}
        </div>
      ))}
      </nav>

       {/* PROFILE */}
        <div className="p-4 border-t border-white/10 flex items-center gap-3 hover:bg-white/5 transition">
          <img
            src="https://i.pravatar.cc/40"
            className="w-10 h-10 rounded-full border-2 border-indigo-400"
          />
          <div className="flex-1">
            <p className="text-sm font-semibold">John Doe</p>
            <p className="text-xs text-indigo-300">
              Premium Student
            </p>
          </div>
          <MoreVertical />
        </div>
      </aside>
    </div>
    </>
 
  )
}
