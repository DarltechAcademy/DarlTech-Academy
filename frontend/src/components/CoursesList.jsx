import React, { useState, useEffect } from 'react';
import courseService from '../services/courseService';
import enrollmentService from '../services/enrollmentService';
import authService from '../services/authService';

/**
 * CoursesList Component - Displays a list of courses with loading and error states
 */
const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enrolling, setEnrolling] = useState(null); // Track which course is being enrolled
  const [enrolledCourses, setEnrolledCourses] = useState(new Set()); // Track enrolled course IDs
  const [filters, setFilters] = useState({
    category: '',
    level: '',
    status: 'Published' // Default to published courses
  });

  // Fetch courses and user's enrollments on component mount and when filters change
  useEffect(() => {
    fetchCourses();
    if (authService.isAuthenticated()) {
      fetchEnrolledCourses();
    }
  }, [filters]);

  /**
   * Fetch courses from API
   */
  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await courseService.getCourses(filters);
      setCourses(data);
    } catch (err) {
      console.error('Failed to fetch courses:', err);
      setError(
        err.response?.data?.message ||
        err.message ||
        'Failed to load courses. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  /**
   * Fetch user's enrolled courses
   */
  const fetchEnrolledCourses = async () => {
    try {
      const enrollments = await enrollmentService.getMyEnrollments();
      const enrolledIds = new Set(enrollments.map(e => e.course._id));
      setEnrolledCourses(enrolledIds);
    } catch (err) {
      console.error('Failed to fetch enrollments:', err);
      // Don't show error for enrollments - it's not critical
    }
  };

  /**
   * Handle filter changes
   */
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  /**
   * Retry loading courses
   */
  const handleRetry = () => {
    fetchCourses();
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">Loading courses...</span>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Error Loading Courses</h3>
            <p className="text-sm text-red-700 mt-1">{error}</p>
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={handleRetry}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Courses</h1>

      {/* Filters */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-lg font-semibold mb-4">Filter Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Graphic Design">Graphic Design</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Level
            </label>
            <select
              value={filters.level}
              onChange={(e) => handleFilterChange('level', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
              <option value="">All Status</option>
            </select>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      {courses.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course._id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {course.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {course.level}
                  </span>
                  <span className="text-sm text-gray-500">{course.category}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    ${course.price || 'Free'}
                  </span>
                  {enrolledCourses.has(course._id) ? (
                    <span className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                      Enrolled
                    </span>
                  ) : (
                    <button
                      onClick={() => handleEnroll(course._id)}
                      disabled={enrolling === course._id}
                      className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {enrolling === course._id ? 'Enrolling...' : 'Enroll Now'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoursesList;