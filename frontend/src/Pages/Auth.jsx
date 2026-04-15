import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import courseService from "../services/courseService";
import enrollmentService from "../services/enrollmentService";

export default function AuthPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { login, register, isAuthenticated } = useAuth();
  const preselectedCourse = location.state?.course;

  const [courses, setCourses] = useState([]);
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Student",
    course: preselectedCourse?._id || "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  // Fetch all courses for dropdown
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await courseService.getCourses();
        setCourses(response.data || []);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };
    fetchCourses();
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!isLogin && formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    setLoading(true);

    try {
      if (isLogin) {
        // --- LOGIN ---
        await login({
          email: formData.email,
          password: formData.password,
        });
        navigate("/dashboard");
      } else {
        // --- REGISTER ---
        const data = await register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        });

        // Enroll in selected course if one was chosen
        if (formData.course) {
          try {
            await enrollmentService.enrollCourse(formData.course);
          } catch (enrollErr) {
            console.error("Enrollment error:", enrollErr);
            // Don't block registration if enrollment fails
          }
        }

        // Navigate to payment after registration
        navigate("/payment");
      }
    } catch (err) {
      let errorMessage = "Something went wrong";
      if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.response?.data?.errors && err.response.data.errors.length > 0) {
        const firstError = err.response.data.errors[0];
        errorMessage = Object.values(firstError)[0];
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">

      {/* 🌟 FLOATING BACKGROUND OBJECTS */}
      <div className="absolute w-72 h-72 bg-[var(--accent)] opacity-20 rounded-full top-10 right-10 float"></div>
      <div className="absolute w-56 h-56 bg-[var(--primary-light)] opacity-20 rounded-full bottom-10 left-10 float-delay"></div>
      <div className="absolute w-40 h-40 bg-white opacity-10 rounded-full top-1/2 left-1/3 float"></div>

      {/* 💎 GLASS CARD */}
      <div className="w-full max-w-5xl grid md:grid-cols-2 backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl overflow-hidden">

        {/* LEFT SIDE */}
        <div className="bg-[var(--primary)]/90 text-white p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isLogin ? "Welcome Back 👋" : "Join DarlTech 🚀"}
          </h2>

          <p className="opacity-80 mb-8 text-sm md:text-base">
            To stay connected with us please login with your personal info
          </p>

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="border px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-white hover:text-[var(--primary)] transition w-fit"
          >
            {isLogin ? "Create Account" : "Login Instead"}
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 md:p-12 flex flex-col justify-center ">

          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            {isLogin ? "Login" : "Create Account"}
          </h3>

          {error && <p className="text-red-300 mb-3">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">

            {!isLogin && (
              <>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full p-3 rounded-lg  focus:outline-none border"
                  required
                />

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white/20  focus:outline-none border"
                >
                  <option value="Student">Student</option>
                  <option value="Tutor">Tutor</option>
                  <option value="Admin">Admin</option>
                </select>
              </>
            )}

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 rounded-lg  focus:outline-none border"
              required
            />

            {/* PASSWORD */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full p-3 rounded-lg focus:outline-none border"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-sm opacity-80"
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>

            {!isLogin && (
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full p-3 rounded-lg  focus:outline-none border"
                required
              />
            )}

            {/* ✅ Course Dropdown */}
            {!isLogin && !preselectedCourse && (
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border mt-2"
              >
                <option value="">Select a course (optional)</option>
                {courses.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.title} {c.price ? `- ₦${c.price}` : ""}
                  </option>
                ))}
              </select>
            )}

            <button
              disabled={loading}
              className="w-full py-3 rounded-lg font-semibold bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition"
            >
              {loading ? "Processing..." : isLogin ? "Login" : "Register"}
            </button>

          </form>

          <p className="text-sm mt-6 text-center opacity-80">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="ml-1 text-[var(--accent-light)] cursor-pointer"
            >
              {isLogin ? "Register" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}