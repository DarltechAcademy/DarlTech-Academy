import { useState, useEffect, useCallback } from "react";
import enrollmentService from "../services/enrollmentService";

/**
 * Custom hook to fetch the current user's enrollments from the backend
 */
export function useEnrollments() {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEnrollments = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await enrollmentService.getMyEnrollments();
      setEnrollments(response.data || []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch enrollments");
      console.error("Error fetching enrollments:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEnrollments();
  }, [fetchEnrollments]);

  const enroll = async (courseId) => {
    try {
      const response = await enrollmentService.enrollCourse(courseId);
      // Refetch enrollments after enrolling
      await fetchEnrollments();
      return response;
    } catch (err) {
      throw err;
    }
  };

  return { enrollments, loading, error, enroll, refetch: fetchEnrollments };
}

export default useEnrollments;
