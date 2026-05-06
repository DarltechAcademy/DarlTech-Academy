import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import auth from "../assets/image/MuchaTseBle.jpg";
import auth2 from "../assets/image/contact.jpg";

export default function AuthPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const preselectedCourse = location.state?.course;

  const [courses, setCourses] = useState([]); // for dropdown
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Student",
    course: preselectedCourse?.title || "", // selected course
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch all courses for dropdown
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/courses");
        setCourses(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCourses();
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

//  const handleSubmit = async (e) => {
//   e.preventDefault();
//   setError("");
//   setSuccess("");

//   if (!isLogin && formData.password !== formData.confirmPassword) {
//     return setError("Passwords do not match");
//   }

//   setLoading(true);

//   try {
//     const url = isLogin ? "/api/auth/login" : "/api/auth/register";

//     const res = await axios.post(url, formData);

//     // SAVE TOKEN
//     localStorage.setItem("token", res.data.token);

//     if (isLogin) {
//       window.location.href = "/dashboard";
//     } else {
//       // 👉 GO TO PAYMENT
//       window.location.href = "/payment";
//     }

//   } catch (err) {
//     setError(err.response?.data?.message || "Something went wrong");
//   } finally {
//     setLoading(false);
//   }
// };

const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!isLogin && formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    if (!formData.course) {
      return setError("Please select a course to enroll");
    }

    setLoading(true);

    try {
      const url = isLogin ? "/api/auth/login" : "/api/auth/register";
      const res = await axios.post(url, formData);

      localStorage.setItem("token", res.data.token);

      // Enroll in selected course
      await axios.post(
        "http://localhost:5000/api/enroll",
        {
          course: formData.course,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "",
        },
        { headers: { Authorization: `Bearer ${res.data.token}` } }
      );

      alert(`✅ Successfully enrolled in ${formData.course}`);

      navigate("/payment"); // redirect to payment page
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center bg-cover justify-center relative px-6 overflow-hidden"
    style={{backgroundImage: `url(${auth})`}}
    >

      {/* 🌟 FLOATING BACKGROUND OBJECTS */}
      <div className="absolute w-72 h-72 bg-[var(--accent)] opacity-20 rounded-full top-10 right-10 float"></div>
      <div className="absolute w-56 h-56 bg-[var(--accent)] opacity-20 rounded-full bottom-10 left-10 float-delay"></div>
      <div className="absolute w-60 h-40 bg-[var(--accent)] rounded-full top-1/2 left-1/3 float"></div>

      {/* 💎 GLASS CARD */}
      <div className="w-full max-w-5xl grid md:grid-cols-2 backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl overflow-hidden">

        {/* LEFT SIDE */}
        <div className=" text-white p-12 flex flex-col justify-center"
        style={{backgroundImage: `url(${auth2})`}}
        >
          <h2 className="text-4xl font-bold mb-4">
            {isLogin ? "Welcome Back 👋" : "Join DarlTech 🚀"}
          </h2>

          <p className="opacity-80 mb-8">
            To stay connected with us please login with your personal info
          </p>

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="border px-6 py-3 rounded-lg hover:bg-white hover:text-[var(--primary)] transition"
          >
            {isLogin ? "Create Account" : "Login Instead"}
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-12 flex flex-col justify-center ">

          <h3 className="text-3xl font-bold mb-6">
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
    required
  >
    <option value="">Select a course</option>
    {courses.map((c) => (
      <option key={c._id} value={c.title}>
        {c.title} - ₦{c.price}
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