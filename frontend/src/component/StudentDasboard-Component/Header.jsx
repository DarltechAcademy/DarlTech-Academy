import { useState, useEffect, useRef } from "react";
import {
  Menu,
  ChevronRight,
  Search,
  Moon,
  Bell,
  Mail,
  ChevronDown,
  Trophy,
  Star,
  User,
  Settings,
  CreditCard,
  LogOut,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Header ({ toggleSidebar }) {
  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifRef = useRef();
  const profileRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  // Breadcrumb from URL
  const currentPage =
    location.pathname.split("/")[2] || "dashboard";

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (!notifRef.current?.contains(e.target)) {
        setShowNotif(false);
      }
      if (!profileRef.current?.contains(e.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Ctrl + K focus
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        document.getElementById("global-search")?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // Get initials for avatar fallback
  const getInitials = (name) => {
    if (!name) return "U";
    return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
  };

  return (
    <header className="h-20 glass border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-40">

      {/* LEFT */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-slate-100 rounded-lg"
        >
          <Menu className="w-6 h-6 text-slate-600" />
        </button>

        <nav className="hidden md:flex items-center gap-2 text-sm text-slate-500">
          <span className="hover:text-slate-700 cursor-pointer">
            Home
          </span>
          <ChevronRight className="w-4 h-4" />
          <span className="font-semibold text-slate-800 capitalize">
            {currentPage}
          </span>
        </nav>
      </div>

      {/* SEARCH */}
      <div className="flex-1 max-w-2xl mx-8 hidden md:block">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 w-5 h-5" />
          <input
            id="global-search"
            placeholder="Search courses, lessons..."
            className="w-full pl-12 pr-4 py-3 bg-slate-100 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:bg-white outline-none"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 bg-slate-200 px-2 py-1 rounded-md">
            ⌘ K
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">

        {/* THEME */}
        <button className="p-2.5 hover:bg-slate-100 rounded-xl">
          <Moon className="w-5 h-5 text-slate-600" />
        </button>

        {/* NOTIFICATION */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setShowNotif(!showNotif)}
            className="p-2.5 hover:bg-slate-100 rounded-xl relative"
          >
            <Bell className="w-5 h-5 text-slate-600" />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></span>
          </button>

          {showNotif && (
            <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-xl border p-4 animate-scale-in">
              <h3 className="font-bold mb-2">Notifications</h3>
              <p className="text-sm text-gray-500">
                No new notifications
              </p>
            </div>
          )}
        </div>

        {/* MESSAGES */}
        <button
          onClick={() => navigate("/dashboard/messages")}
          className="p-2.5 hover:bg-slate-100 rounded-xl relative"
        >
          <Mail className="w-5 h-5 text-slate-600" />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-indigo-500 rounded-full"></span>
        </button>

        {/* PROFILE */}
        <div className="relative ml-2" ref={profileRef}>
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-3 px-2 py-1 rounded-full hover:bg-slate-100"
          >
            {/* Avatar with initials fallback */}
            <div className="w-9 h-9 rounded-full border-2 border-indigo-500 bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm overflow-hidden">
              {user?.avatar ? (
                <img src={user.avatar} className="w-full h-full object-cover" alt={user.name} />
              ) : (
                getInitials(user?.name)
              )}
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400 hidden sm:block" />
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-xl border overflow-hidden animate-scale-in">

              {/* TOP */}
              <div className="p-4 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                    {getInitials(user?.name)}
                  </div>
                  <div>
                    <p className="font-bold">{user?.name || "User"}</p>
                    <p className="text-sm text-indigo-200">
                      {user?.email || ""}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    {user?.role || "Student"}
                  </div>
                </div>
              </div>

              {/* MENU */}
              <div className="p-2">
                <button className="flex items-center gap-3 px-4 py-3 w-full hover:bg-slate-50 rounded-xl">
                  <User className="w-5 h-5 text-slate-400" />
                  My Profile
                </button>

                <button
                  onClick={() => navigate("/dashboard/settings")}
                  className="flex items-center gap-3 px-4 py-3 w-full hover:bg-slate-50 rounded-xl"
                >
                  <Settings className="w-5 h-5 text-slate-400" />
                  Settings
                </button>

                <button className="flex items-center gap-3 px-4 py-3 w-full hover:bg-slate-50 rounded-xl">
                  <CreditCard className="w-5 h-5 text-slate-400" />
                  Billing
                </button>

                <div className="border-t mt-2 pt-2">
                  <button
                    onClick={logout}
                    className="flex items-center gap-3 px-4 py-3 w-full text-red-600 hover:bg-red-50 rounded-xl"
                  >
                    <LogOut className="w-5 h-5" />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}