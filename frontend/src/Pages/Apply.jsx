// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { ArrowRight, X, Facebook, Instagram, Linkedin } from "lucide-react";

export default function ApplyPage() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! We will contact you soon.");
    setFormData({ fullName: "", email: "", phone: "", program: "" });
    setShowForm(false); // close modal after submit
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">DarlTech Academy</h1>
          <nav className="flex gap-6">
            <button className="text-gray-700 hover:text-blue-600" onClick={() => navigate("/")}>Home</button>
            <button className="text-gray-700 hover:text-blue-600" onClick={() => navigate("/bootcamp")}>Bootcamp</button>
            <button className="text-gray-700 hover:text-blue-600 font-semibold" onClick={() => navigate("/apply")}>Apply</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-50 py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Launch Your Tech Career Today!</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Join DarlTech Academy intensive bootcamp programs in Web Development, Mobile Apps, Data Analysis, Cyber Security, and more. Become job-ready in months!
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Apply Now <ArrowRight size={18} />
          </button>
          <button
            onClick={() => navigate("/bootcamp")}
            className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Learn More <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center">Apply for a Bootcamp</h3>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Program of Interest</label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select a program</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="data-analysis">Data Analysis</option>
                  <option value="cyber-security">Cyber Security</option>
                  <option value="python-development">Python Development</option>
                  <option value="ai-automation">Ai Automation</option>
                  <option value="cloud-computing">Cloud Computing</option>
                  <option value="data-science">Data Science</option>
                  <option value="ui/ux-design">UI/UX Design</option>
                  <option value="product-management">Product Management</option>
                  <option value="graphics-design">Graphics Design</option>
                  <option value="software-engineering">Software Engineering</option>
                  <option value="robotics-engineering">Robotics Engineering</option>
                  <option value="frontend-developer">Frontend Developer</option>
                  <option value="backend-developer">Backend Developer</option>
                </select>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mt-2"
              >
                Submit <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} DarlTech Academy. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400"><Facebook size={20} /></a>
            <a href="#" className="hover:text-pink-500"><Instagram size={20} /></a>
            <a href="#" className="hover:text-blue-600"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-blue-600"><Tiktok size={20} /></a>
            <a href="#" className="hover:text-blue-600"><X size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Main App with Router ---
// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/apply" element={<ApplyPage />} />
//         <Route path="/bootcamp" element={<div className="p-16 text-center text-2xl">Bootcamp Page Placeholder</div>} />
//         <Route path="/" element={<div className="p-16 text-center text-2xl">Home Page Placeholder</div>} />
//       </Routes>
//     </Router>
//   );
// }
