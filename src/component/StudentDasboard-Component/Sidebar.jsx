// import { NavLink } from "react-router-dom";
// import {
//   LayoutDashboard,
//   BookOpen,
//   FileText,
//   MessageSquare,
//   Settings,
// } from "lucide-react";

// export default function Sidebar() {
//   const linkClass =
//     "flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition";

//   return (
//     <aside className="w-64 bg-[#142B4D] text-white flex flex-col">
//       <div className="p-6 text-2xl font-bold border-b border-white/10">
//         DarlTech
//       </div>

//       <nav className="flex-1 mt-6 px-4 space-y-2">
//         <NavLink
//           to="/dashboard"
//           end
//           className={({ isActive }) =>
//             `${linkClass} ${
//               isActive
//                 ? "bg-red-500 text-white"
//                 : "text-gray-300 hover:bg-white/10"
//             }`
//           }
//         >
//           <LayoutDashboard size={18} />
//           Dashboard
//         </NavLink>

//         <NavLink
//           to="/dashboard/course"
//           className={({ isActive }) =>
//             `${linkClass} ${
//               isActive
//                 ? "bg-red-500"
//                 : "text-gray-300 hover:bg-white/10"
//             }`
//           }
//         >
//           <BookOpen size={18} />
//           Courses
//         </NavLink>

//         <NavLink
//           to="/dashboard/assignment"
//           className={({ isActive }) =>
//             `${linkClass} ${
//               isActive
//                 ? "bg-red-500"
//                 : "text-gray-300 hover:bg-white/10"
//             }`
//           }
//         >
//           <FileText size={18} />
//           Assignments
//         </NavLink>

//         <NavLink
//           to="/dashboard/message"
//           className={({ isActive }) =>
//             `${linkClass} ${
//               isActive
//                 ? "bg-red-500"
//                 : "text-gray-300 hover:bg-white/10"
//             }`
//           }
//         >
//           <MessageSquare size={18} />
//           Messages
//         </NavLink>

//         <NavLink
//           to="/dashboard/setting"
//           className={({ isActive }) =>
//             `${linkClass} ${
//               isActive
//                 ? "bg-red-500"
//                 : "text-gray-300 hover:bg-white/10"
//             }`
//           }
//         >
//           <Settings size={18} />
//           Settings
//         </NavLink>
//       </nav>
//     </aside>
//   );
// }


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
      { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
      { name: "Courses", path: "/dashboard/courses", icon: BookOpen, badge: 4 },
      { name: "Learning", path: "/dashboard/learning", icon: PlayCircle },
      { name: "Assignments", path: "/dashboard/assignments", icon: ClipboardCheck, badge: 3 },
      { name: "Quizzes", path: "/dashboard/quizzes", icon: HelpCircle },
    ],
  },
  {
    section: "Communication",
    items: [
      { name: "Messages", path: "/dashboard/messages", icon: MessageSquare, badge: 3 },
      { name: "Community", path: "/dashboard/community", icon: Users },
    ],
  },
  {
    section: "System",
    items: [
      { name: "Analytics", path: "/dashboard/analytics", icon: BarChart2 },
      { name: "Calendar", path: "/dashboard/calendar", icon: Calendar },
      { name: "Settings", path: "/dashboard/settings", icon: Settings },
    ],
  },
];


export default function  Sidebar({ open, setOpen }) {
 
const location = useLocation();
  return (
    <>
      {/* MOBILE BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-[var(--primary)] p-2 rounded-lg text-white"
      >
        <Menu />
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
  <aside
  className={`fixed lg:static top-0 left-0 z-50 h-screen w-[280px] text-white flex flex-col
  bg-gradient-to-b from-indigo-950 via-indigo-900 to-indigo-950
  transition-transform duration-300
  ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
>
        {/* LOGO */}
        <div className="h-20 flex items-center gap-4 px-6 border-b border-white/10">
          {/* <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>

          <div>
            <h1 className="font-bold text-xl">DarTech</h1>
            <p className="text-xs text-indigo-200 uppercase">
              Academy
            </p>
          </div> */}

          <img src={Logo} alt="Lgo" />

          <button onClick={() => setOpen(false)} className="ml-auto lg:hidden">
            <X />
          </button>
        </div>

        {/* NAV */}
        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-4 scrollbar-hide">

          {menu.map((group, i) => (
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
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `relative flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-medium transition-all group overflow-hidden
                      ${
                        isActive
                          ? "bg-gradient-to-r from-red-500/20 to-transparent text-white"
                          : "text-indigo-200 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    {/* ACTIVE LEFT LINE */}
                    <span
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-r transition-all duration-300
                      ${
                        location.pathname === item.path
                          ? "h-8 bg-gradient-to-b from-red-500 to-orange-500"
                          : "h-0"
                      }`}
                    />

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
    </>
  );
}