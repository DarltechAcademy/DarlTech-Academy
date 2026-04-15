import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Layouts */
import MainLayout from "./Pages/MainLayout";
import DashboardLayout from "./student-dashboard-page/DashboardLayout";

/* Website Pages */
import Home from "./Pages/Home";
import Bootcamp from "./Pages/Bootsmap";
import Regular from "./Pages/Regular";
import Testimonials from "./Pages/Testimonia";
import FAQ from "./Pages/Faq";
import ApplyPage from "./Pages/Apply";

/* Dashboard Pages */
import DashboardHome from "./student-dashboard-page/DashboardHome";
import Courses from "./student-dashboard-page/Course";
import Assignments from "./student-dashboard-page/Assignment";
import Quizzes from "./student-dashboard-page/Quizzes";
import Messages from "./student-dashboard-page/Message";
import Community from "./student-dashboard-page/Community";
import Analytics from "./student-dashboard-page/Analysis";
import CalendarPage from "./student-dashboard-page/Calendar";
import Settings from "./student-dashboard-page/Setting";
import LearningTab from './student-dashboard-page/Learning';

/* Auth + Admin */
import AuthPage from './Pages/Auth';
import AdminDashboardlayout from './AdminDashboard/AdminDashboardlayout';
import AdminHome from './AdminDashboard/AdminHome';
import AdminCourses from './AdminDashboard/Course';

/* Payment */
import PaymentPage from './component/Payment';
import VerifyPayment from './component/PaymentConfirm';

/* Route Protection */
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <Router>
      <Routes>

        {/* 🌐 WEBSITE */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/regular" element={<Regular />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/apply" element={<ApplyPage />} />
        </Route>

        <Route path="/auth" element={<AuthPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment-success" element={<VerifyPayment />} />

        {/* 📊 DASHBOARD (Protected) */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }>
          <Route index element={<DashboardHome />} />
          <Route path="courses" element={<Courses />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="quizzes" element={<Quizzes />} />
          <Route path="learning" element={<LearningTab />} />
          <Route path="messages" element={<Messages />} />
          <Route path="community" element={<Community />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* 🛠 ADMIN (Protected) */}
        <Route path="/Admindashboard" element={
          <ProtectedRoute>
            <AdminDashboardlayout />
          </ProtectedRoute>
        }>
          <Route index element={<AdminHome />} />
          <Route path="courses" element={<AdminCourses />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="quizzes" element={<Quizzes />} />
          <Route path="learning" element={<LearningTab />} />
          <Route path="messages" element={<Messages />} />
          <Route path="community" element={<Community />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="settings" element={<Settings />} />
        </Route>

      </Routes>
    </Router>
  );
}