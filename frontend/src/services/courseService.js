import api from './api';

/**
 * Course Service - Handles all course-related API calls
 */
class CourseService {
  /**
   * Get all courses with optional filters
   * @param {Object} filters - Optional filters (category, level, status)
   * @returns {Promise} - API response
   */
  async getCourses(filters = {}) {
    try {
      const params = new URLSearchParams();

      if (filters.category) params.append('category', filters.category);
      if (filters.level) params.append('level', filters.level);
      if (filters.status) params.append('status', filters.status);

      const response = await api.get(`/courses?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching courses:', error);
      throw error;
    }
  }

  /**
   * Get a single course by ID with modules and lessons
   * @param {string} courseId - Course ID
   * @returns {Promise} - API response
   */
  async getCourse(courseId) {
    try {
      const response = await api.get(`/courses/${courseId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching course:', error);
      throw error;
    }
  }

  /**
   * Create a new course (Admin/Tutor only)
   * @param {Object} courseData - Course data
   * @returns {Promise} - API response
   */
  async createCourse(courseData) {
    try {
      const response = await api.post('/courses', courseData);
      return response.data;
    } catch (error) {
      console.error('Error creating course:', error);
      throw error;
    }
  }

  /**
   * Update a course (Admin/Tutor only)
   * @param {string} courseId - Course ID
   * @param {Object} courseData - Updated course data
   * @returns {Promise} - API response
   */
  async updateCourse(courseId, courseData) {
    try {
      const response = await api.put(`/courses/${courseId}`, courseData);
      return response.data;
    } catch (error) {
      console.error('Error updating course:', error);
      throw error;
    }
  }

  /**
   * Delete a course (Admin/Tutor only)
   * @param {string} courseId - Course ID
   * @returns {Promise} - API response
   */
  async deleteCourse(courseId) {
    try {
      const response = await api.delete(`/courses/${courseId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting course:', error);
      throw error;
    }
  }
}

// Export singleton instance
export default new CourseService();