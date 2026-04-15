import api from './api';

/**
 * Auth Service - Handles authentication-related API calls
 */
class AuthService {
  /**
   * Register a new user
   * @param {Object} userData - User registration data
   * @param {string} userData.name - User's full name
   * @param {string} userData.email - User's email
   * @param {string} userData.password - User's password
   * @param {string} userData.role - User's role (optional)
   * @returns {Promise} - API response
   */
  async register(userData) {
    try {
      const response = await api.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  }

  /**
   * Login user
   * @param {Object} credentials - User login credentials
   * @param {string} credentials.email - User's email
   * @param {string} credentials.password - User's password
   * @returns {Promise} - API response with token
   */
  async login(credentials) {
    try {
      const response = await api.post('/auth/login', credentials);

      // Store token in localStorage if login successful
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }

      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  }

  /**
   * Get current user profile
   * @returns {Promise} - API response with user data
   */
  async getProfile() {
    try {
      const response = await api.get('/auth/profile');
      return response.data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  }

  /**
   * Logout user by removing token
   */
  logout() {
    localStorage.removeItem('token');
    window.location.href = '/auth';
  }

  /**
   * Check if user is authenticated
   * @returns {boolean} - Whether user has valid token
   */
  isAuthenticated() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  /**
   * Get stored token
   * @returns {string|null} - JWT token or null
   */
  getToken() {
    return localStorage.getItem('token');
  }
}

// Export singleton instance
export default new AuthService();