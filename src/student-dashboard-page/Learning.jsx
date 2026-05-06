import { useEffect, useState } from "react";
import axios from "axios";
import {
  Play,
  ThumbsUp,
  MessageCircle,
  Lock,
} from "lucide-react";

const API = "http://localhost:5000/api";

export default function LearningTab({ courseId }) {
  const [modules, setModules] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  // 🔹 Fetch Modules
  const fetchModules = async () => {
    try {
      const res = await axios.get(`${API}/modules?course=${courseId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setModules(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // 🔹 Fetch Lessons
  const fetchLessons = async (moduleId) => {
    try {
      setLoading(true);

      const res = await axios.get(`${API}/lessons?module=${moduleId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setLessons(res.data);
      setCurrentLesson(res.data[0]);

      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchModules();
  }, []);

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      
      {/* ================= LEFT SIDE ================= */}
      <div className="lg:col-span-2 space-y-6">
        
        {/* 🎬 VIDEO PLAYER */}
        <div className="bg-black rounded-2xl overflow-hidden">
          {currentLesson ? (
            <video
              controls
              src={currentLesson.videoUrl}
              className="w-full"
            />
          ) : (
            <div className="h-[300px] flex items-center justify-center text-white">
              Select a lesson
            </div>
          )}
        </div>

        {/* 📘 LESSON INFO */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-bold">
            {currentLesson?.title || "No lesson selected"}
          </h2>
          <p className="text-gray-500 mt-2">
            {currentLesson?.content}
          </p>
        </div>

        {/* 💬 COMMENTS (API READY) */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-bold mb-4">Discussion</h3>

          {/* Input */}
          <textarea
            placeholder="Write a comment..."
            className="w-full border p-3 rounded-lg mb-4"
          />

          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
            Post Comment
          </button>

          {/* Empty state */}
          <p className="text-gray-400 mt-4">
            No comments yet
          </p>
        </div>
      </div>

      {/* ================= RIGHT SIDEBAR ================= */}
      <div className="bg-white rounded-2xl shadow border overflow-hidden">
        
        <div className="p-4 border-b">
          <h3 className="font-bold">Course Content</h3>
        </div>

        <div className="max-h-[80vh] overflow-y-auto">
          {modules.map((module) => (
            <div key={module._id} className="border-b">
              
              {/* MODULE HEADER */}
              <div
                className="p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => fetchLessons(module._id)}
              >
                <div className="flex justify-between">
                  <h4 className="font-semibold">
                    {module.title}
                  </h4>
                  {module.locked && (
                    <Lock className="w-4 h-4 text-gray-400" />
                  )}
                </div>
              </div>

              {/* LESSON LIST */}
              {lessons.length > 0 &&
                lessons.map((lesson, i) => (
                  <div
                    key={lesson._id}
                    onClick={() => setCurrentLesson(lesson)}
                    className={`flex items-center gap-3 px-4 py-2 cursor-pointer ${
                      currentLesson?._id === lesson._id
                        ? "bg-indigo-100"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="w-6 h-6 bg-indigo-600 text-white flex items-center justify-center text-xs rounded-full">
                      {i + 1}
                    </div>

                    <span className="text-sm">
                      {lesson.title}
                    </span>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}