import { createContext, useContext, useState, useEffect } from "react";
import authService from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On mount, check if user is logged in and fetch profile
  useEffect(() => {
    const loadUser = async () => {
      if (authService.isAuthenticated()) {
        try {
          const data = await authService.getProfile();
          setUser(data.user);
        } catch (error) {
          console.error("Failed to load user profile:", error);
          // Token is invalid/expired — clear it
          localStorage.removeItem("token");
          setUser(null);
        }
      }
      setLoading(false);
    };

    loadUser();
  }, []);

  const login = async (credentials) => {
    const data = await authService.login(credentials);
    setUser(data.user);
    return data;
  };

  const register = async (userData) => {
    const data = await authService.register(userData);
    setUser(data.user);
    return data;
  };

  const logout = () => {
    setUser(null);
    authService.logout();
  };

  const value = {
    user,
    setUser,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export default AuthContext;
