# Frontend API Integration Guide

This guide explains how to integrate the DarlTech Academy backend APIs with the React frontend.

## 📁 File Structure

```
src/
├── services/
│   ├── api.js              # Axios instance configuration
│   ├── authService.js      # Authentication API calls
│   ├── courseService.js    # Course management API calls
│   └── enrollmentService.js # Enrollment API calls
└── components/
    └── CoursesList.jsx     # Example component using the APIs
```

## 🔧 Axios Configuration (`api.js`)

The Axios instance is pre-configured with:
- Base URL: `http://localhost:5000/api`
- JWT token interceptor (automatically adds `Authorization: Bearer <token>` header)
- Response interceptor (handles 401 errors by redirecting to login)
- 10-second timeout

## 🔐 Authentication (`authService.js`)

### Available Methods:
```javascript
// Register new user
await authService.register({
  name: "John Doe",
  email: "john@example.com",
  password: "password123",
  role: "Student" // optional
});

// Login user
const response = await authService.login({
  email: "john@example.com",
  password: "password123"
});
// Token is automatically stored in localStorage

// Get user profile
const profile = await authService.getProfile();

// Check if authenticated
const isLoggedIn = authService.isAuthenticated();

// Logout
authService.logout();
```

## 📚 Courses (`courseService.js`)

### Available Methods:
```javascript
// Get all courses with filters
const courses = await courseService.getCourses({
  category: "Frontend Development",
  level: "Beginner",
  status: "Published"
});

// Get single course with modules/lessons
const course = await courseService.getCourse(courseId);

// Create course (Admin/Tutor only)
const newCourse = await courseService.createCourse({
  title: "React Fundamentals",
  description: "Learn React basics",
  category: "Frontend Development",
  level: "Beginner",
  price: 99.99
});

// Update course (Admin/Tutor only)
await courseService.updateCourse(courseId, {
  title: "Updated Title",
  price: 149.99
});

// Delete course (Admin/Tutor only)
await courseService.deleteCourse(courseId);
```

## 🎓 Enrollments (`enrollmentService.js`)

### Available Methods:
```javascript
// Enroll in a course
await enrollmentService.enrollCourse(courseId);

// Get user's enrolled courses
const enrollments = await enrollmentService.getMyEnrollments();

// Check if enrolled in specific course
const isEnrolled = await enrollmentService.checkEnrollment(courseId);

// Get course students (Admin/Tutor only)
const students = await enrollmentService.getCourseStudents(courseId);
```

## ⚛️ React Component Example (`CoursesList.jsx`)

The `CoursesList` component demonstrates:
- ✅ Loading states with spinner
- ✅ Error handling with retry functionality
- ✅ JWT token authentication
- ✅ Course filtering
- ✅ Enrollment functionality
- ✅ Responsive design

### Key Features:
- Fetches courses on mount and filter changes
- Shows loading spinner during API calls
- Displays error messages with retry button
- Tracks enrollment status
- Handles authentication redirects

## 🚀 Usage in Your Components

```javascript
import React, { useState, useEffect } from 'react';
import courseService from '../services/courseService';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await courseService.getCourses();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data.map(item => (
        <div key={item._id}>{item.title}</div>
      ))}
    </div>
  );
};
```

## 🔑 Authentication Flow

1. User logs in → Token stored in localStorage
2. API requests automatically include `Authorization: Bearer <token>` header
3. If token expires (401 response), user is redirected to login
4. Token is removed from localStorage on logout

## 📋 API Endpoints Summary

| Service | Method | Endpoint | Auth Required |
|---------|--------|----------|---------------|
| Auth | POST | `/auth/register` | No |
| Auth | POST | `/auth/login` | No |
| Auth | GET | `/auth/profile` | Yes |
| Courses | GET | `/courses` | No |
| Courses | GET | `/courses/:id` | No |
| Courses | POST | `/courses` | Yes (Admin/Tutor) |
| Courses | PUT | `/courses/:id` | Yes (Admin/Tutor) |
| Courses | DELETE | `/courses/:id` | Yes (Admin/Tutor) |
| Enrollments | POST | `/enrollments` | Yes |
| Enrollments | GET | `/enrollments/my-enrollments` | Yes |
| Enrollments | GET | `/enrollments/check/:courseId` | Yes |
| Enrollments | GET | `/enrollments/course/:courseId` | Yes (Admin/Tutor) |

## 🛠️ Error Handling

All service methods include try/catch blocks and throw errors for the component to handle. Common error patterns:

```javascript
try {
  const data = await someService.someMethod();
} catch (error) {
  if (error.response?.status === 401) {
    // Handle unauthorized
  } else if (error.response?.status === 403) {
    // Handle forbidden
  } else {
    // Handle other errors
    console.error(error.response?.data?.message || error.message);
  }
}
```

## 🎯 Next Steps

1. Start the backend server: `npm run dev` (in backend directory)
2. Start the frontend: `npm run dev` (in frontend directory)
3. Test the `CoursesList` component
4. Implement authentication pages
5. Add more components for dashboard, course details, etc.

The foundation is now set for a complete LMS frontend integration! 🚀