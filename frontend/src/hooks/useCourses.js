import { useState, useEffect, useCallback } from "react";
import courseService from "../services/courseService";

/**
 * Custom hook to fetch and manage courses from the backend API
 */
export function useCourses(filters = {}) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCourses = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await courseService.getCourses(filters);
      setCourses(response.data || []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch courses");
      console.error("Error fetching courses:", err);
    } finally {
      setLoading(false);
    }
  }, [JSON.stringify(filters)]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return { courses, loading, error, refetch: fetchCourses };
}

/**
 * Custom hook to fetch a single course by ID
 */
export function useCourse(courseId) {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!courseId) return;

    const fetchCourse = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await courseService.getCourse(courseId);
        setCourse(response.data || null);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch course");
        console.error("Error fetching course:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  return { course, loading, error };
}

export default useCourses;
