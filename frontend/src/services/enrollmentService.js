import api from './api';

/**
 * Enrollment Service - Handles course enrollment-related API calls
 */
class EnrollmentService {
  /**
   * Enroll in a course
   * @param {string} courseId - Course ID to enroll in
   * @returns {Promise} - API response
   */
  async enrollCourse(courseId) {
    try {
      const response = await api.post('/enrollments', { course: courseId });
      return response.data;
    } catch (error) {
      console.error('Error enrolling in course:', error);
      throw error;
    }
  }

  /**
   * Get user's enrolled courses
   * @returns {Promise} - API response with user's enrollments
   */
  async getMyEnrollments() {
    try {
      const response = await api.get('/enrollments/my-enrollments');
      return response.data;
    } catch (error) {
      console.error('Error fetching enrollments:', error);
      throw error;
    }
  }

  /**
   * Check if user is enrolled in a specific course
   * @param {string} courseId - Course ID to check
   * @returns {Promise} - API response with enrollment status
   */
  async checkEnrollment(courseId) {
    try {
      const response = await api.get(`/enrollments/check/${courseId}`);
      return response.data;
    } catch (error) {
      console.error('Error checking enrollment:', error);
      throw error;
    }
  }

  /**
   * Get all students enrolled in a course (Admin/Tutor only)
   * @param {string} courseId - Course ID
   * @returns {Promise} - API response with enrolled students
   */
  async getCourseStudents(courseId) {
    try {
      const response = await api.get(`/enrollments/course/${courseId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching course students:', error);
      throw error;
    }
  }
}

// Export singleton instance
export default new EnrollmentService();