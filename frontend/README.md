# DarlTech Academy - Frontend (LMS)

The frontend for **DarlTech Academy**, built with **React**, **Vite**, and **Tailwind CSS**. This is a premium, fully-responsive Learning Management System (LMS) dashboard and landing page integrated with a Node.js/Express/MongoDB backend.

---

## 🌟 Key Features

### 💻 Full Responsiveness (Senior Engineer Certified)
The landing page and student dashboards have been meticulously refined for all devices:
- **Hero Section**: Responsive typography and flex-stacking for mobile.
- **Learn & Engineer Sections**: Adaptive layouts that snap from grid to column seamlessly.
- **Contact Section**: Refactored grid system with background scaling fixes.
- **Dashboard Layout**: Side-collapsible navigation and mobile hamburger menu.

### 🔐 Full-Sync Authentication
- **AuthContext & Hooks**: Global state management using React Context API to track login status and persist user sessions via JWT.
- **Backend-Validated Forms**: Integrated with `express-validator` on the backend. The frontend now extracts and displays specific error messages (e.g., "Password too short") directly to the user.
- **Protected Routes**: Secure navigation logic that prevents unauthorized users from accessing the student dashboard.

### 📚 Learning Dashboard
- **Dynamic Content**: Fetches live courses and user enrollments from the backend API.
- **LMS Video Player**: In-sync learning progress tracking and lesson navigation.
- **LMS Profile**: Real-time initials calculation and profile display based on logged-in user data.

---

## 🚀 Recent Updates & Fixes

- **Navigation Optimization**: Simplified site navigation by adding a "Home" link and removing the legacy "Regular" page.
- **Quick Login**: Added explicit "Login" entry points in the Navbar for both desktop and mobile views.
- **Error Handling**: Implemented a robust error extraction pattern in `Auth.jsx` to parse structured JSON errors from the server.
- **Refined Styling**: Fixed various layout flaws in the "Contact" and "Engineer" sections that caused horizontal scrolling on mobile.

---

## 🛠️ How to Set Up

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure API Service
Ensure `src/services/api.js` is pointing to your backend URL (Default: `http://localhost:5001/api`).

### Step 3: Run in Development
```bash
npm run dev
```

### Step 4: Production Build
```bash
npm run build
```

---

## 📂 Project Highlights

```
/frontend
├── src/
│   ├── component/         # Reusable UI (Navbar, Footer, Section blocks)
│   ├── context/           # AuthContext (Global Session Management)
│   ├── hooks/             # useCourses, useEnrollments, etc.
│   ├── Pages/             # Landing Page, Bootcamp, Auth
│   ├── student-dashboard-page/ # Student LMS specific views
│   └── services/          # Axios API wrappers (authService, courseService)
```
