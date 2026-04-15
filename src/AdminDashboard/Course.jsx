import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminCourses() {
  const [courses, setCourses] = useState([]);
  const [modules, setModules] = useState([]);
  const [lessons, setLessons] = useState([]);

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);

  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
  });

  const [editCourse, setEditCourse] = useState(null);

  const token = localStorage.getItem("token");

  const API = "http://localhost:5000/api";

  // ================= FETCH =================
  const fetchCourses = async () => {
    const res = await axios.get(`${API}/courses`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setCourses(res.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchModules = async (courseId) => {
    setSelectedCourse(courseId);
    setSelectedModule(null);

    const res = await axios.get(`${API}/modules?course=${courseId}`);
    setModules(res.data);
  };

  const fetchLessons = async (moduleId) => {
    setSelectedModule(moduleId);

    const res = await axios.get(`${API}/lessons?module=${moduleId}`);
    setLessons(res.data);
  };

  // ================= CREATE =================
  const createCourse = async (e) => {
    e.preventDefault();

    const res = await axios.post(`${API}/courses`, form, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setCourses([res.data, ...courses]);
    setForm({ title: "", description: "", category: "" });
  };

  // ================= DELETE =================
  const deleteCourse = async (id) => {
    await axios.delete(`${API}/courses/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setCourses(courses.filter((c) => c._id !== id));
  };

  // ================= EDIT =================
  const updateCourse = async () => {
    const res = await axios.put(
      `${API}/courses/${editCourse._id}`,
      editCourse,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    setCourses(
      courses.map((c) => (c._id === res.data._id ? res.data : c))
    );

    setEditCourse(null);
  };

  // ================= FILTER =================
  const filteredCourses = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-[var(--bg-section)] min-h-screen space-y-6">

      {/* 🔥 STATS */}
      <div className="grid md:grid-cols-3 gap-4">
        <StatCard title="Total Courses" value={courses.length} />
        <StatCard title="Modules" value={modules.length} />
        <StatCard title="Lessons" value={lessons.length} />
      </div>

      {/* 🔥 SEARCH */}
      <input
        placeholder="Search courses..."
        className="w-full p-3 rounded-xl border"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-3 gap-6">

        {/* ================= COURSES ================= */}
        <div className="card">

          <h2 className="title">Courses</h2>

          {/* CREATE */}
          <form onSubmit={createCourse} className="space-y-2 mb-4">
            <input
              placeholder="Title"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              className="input"
              required
            />

            <input
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="input"
              required
            />

            <button className="btn-primary w-full">
              Create
            </button>
          </form>

          {/* LIST */}
          {filteredCourses.map((c) => (
            <div
              key={c._id}
              onClick={() => fetchModules(c._id)}
              className={`item ${
                selectedCourse === c._id && "active"
              }`}
            >
              <div className="flex justify-between">
                <span>{c.title}</span>

                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditCourse(c);
                    }}
                  >
                    ✏️
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteCourse(c._id);
                    }}
                  >
                    ❌
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= MODULES ================= */}
        <div className="card">
          <h2 className="title">Modules</h2>

          {modules.map((m) => (
            <div
              key={m._id}
              onClick={() => fetchLessons(m._id)}
              className={`item ${
                selectedModule === m._id && "active"
              }`}
            >
              {m.title}
            </div>
          ))}
        </div>

        {/* ================= LESSONS ================= */}
        <div className="card">
          <h2 className="title">Lessons</h2>

          {lessons.map((l) => (
            <div key={l._id} className="item float">
              {l.title}
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 EDIT MODAL */}
      {editCourse && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-[300px] space-y-3">

            <h3 className="font-bold">Edit Course</h3>

            <input
              value={editCourse.title}
              onChange={(e) =>
                setEditCourse({
                  ...editCourse,
                  title: e.target.value,
                })
              }
              className="input"
            />

            <button
              onClick={updateCourse}
              className="btn-primary w-full"
            >
              Save
            </button>

            <button
              onClick={() => setEditCourse(null)}
              className="w-full"
            >
              Cancel
            </button>

          </div>
        </div>
      )}
    </div>
  );
}

// 🔥 REUSABLE COMPONENTS

function StatCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-xl font-bold">{value}</h2>
    </div>
  );
}