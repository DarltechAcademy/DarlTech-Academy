import { useState, useEffect } from "react";
import {
  Play,
  Lock,
  ThumbsUp,
  MessageCircle,
  Loader2,
} from "lucide-react";
import { useCourse } from "../hooks/useCourses";
import { useEnrollments } from "../hooks/useEnrollments";

// Lesson Component
const Lesson = ({ lessonNumber, completed, title, duration }) => {
  const isCompleted = lessonNumber <= completed;
  const isCurrent = lessonNumber === completed + 1;

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 hover:bg-slate-50 cursor-pointer ${
        isCompleted ? "text-slate-600" : isCurrent ? "text-indigo-600 bg-indigo-50/50" : "text-slate-400"
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
          isCompleted ? "bg-green-500 text-white" : isCurrent ? "bg-indigo-600 text-white" : "border-2 border-slate-300"
        }`}
      >
        {isCompleted ? "✓" : lessonNumber}
      </div>
      <span className="text-sm font-medium">{title}</span>
      <span className="ml-auto text-xs text-slate-400">{duration || "15:30"}</span>
    </div>
  );
};

// Module Component
const Module = ({ module, moduleIndex, isCurrentModule }) => {
  const lessons = module.lessons || [];
  const completedCount = lessons.filter(l => l.completed).length;
  const totalCount = lessons.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const isLocked = moduleIndex > 0 && completedCount === 0 && !isCurrentModule;

  return (
    <div className="border-b border-slate-100 last:border-0">
      <div className={`p-4 ${isCurrentModule ? "bg-indigo-50" : ""}`}>
        <div className="flex items-center justify-between mb-2">
          <h4 className={`font-semibold text-sm ${isCurrentModule ? "text-indigo-900" : "text-slate-900"}`}>
            {module.title}
          </h4>
          {isLocked && <Lock className="w-4 h-4 text-slate-400" />}
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
          <span>{completedCount}/{totalCount} lessons</span>
          <span>•</span>
          <span>{progressPercent}%</span>
        </div>
        {!isLocked && (
          <div className="w-full bg-slate-200 rounded-full h-1.5">
            <div
              className={`${isCurrentModule ? "bg-indigo-500" : "bg-green-500"} h-1.5 rounded-full`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}
      </div>

      {!isLocked && isCurrentModule && lessons.length > 0 && (
        <div>
          {lessons.map((lesson, idx) => (
            <Lesson
              key={lesson._id || idx}
              lessonNumber={idx + 1}
              completed={completedCount}
              title={lesson.title || `Lesson ${idx + 1}`}
              duration={lesson.duration}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Video Player Component
const VideoPlayer = ({ lesson }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const toggleVideo = () => setIsPlaying(!isPlaying);

  const thumbnail = lesson?.videoUrl ||
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80";

  return (
    <div className="bg-black rounded-2xl overflow-hidden shadow-2xl relative group">
      <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
        <img
          src={thumbnail}
          className="w-full h-full object-cover opacity-50"
          alt="Course"
        />
        <button onClick={toggleVideo} className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </button>
      </div>
    </div>
  );
};

// Course Sidebar
const CourseSidebar = ({ modules }) => {
  const totalLessons = modules.reduce((sum, m) => sum + (m.lessons?.length || 0), 0);
  const completedLessons = modules.reduce((sum, m) =>
    sum + (m.lessons?.filter(l => l.completed)?.length || 0), 0
  );
  const progressPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  // Determine which module is "current" (first with incomplete lessons)
  let currentModuleIdx = 0;
  for (let i = 0; i < modules.length; i++) {
    const lessons = modules[i].lessons || [];
    const completed = lessons.filter(l => l.completed).length;
    if (completed < lessons.length) {
      currentModuleIdx = i;
      break;
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 border-b border-slate-200 bg-slate-50/50">
        <h3 className="font-bold text-slate-900">Course Content</h3>
        <p className="text-sm text-slate-500 mt-1">{completedLessons} / {totalLessons} lessons completed</p>
        <div className="mt-3 w-full bg-slate-200 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>
      <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
        {modules.length > 0 ? (
          modules.map((module, idx) => (
            <Module
              key={module._id || idx}
              module={module}
              moduleIndex={idx}
              isCurrentModule={idx === currentModuleIdx}
            />
          ))
        ) : (
          <div className="p-6 text-center text-slate-500">
            <p>No modules available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Learning Tab
const LearningTab = () => {
  const { enrollments, loading: enrollLoading } = useEnrollments();

  // Get the first enrolled course to display
  const firstEnrollment = enrollments.find(e => e.course);
  const courseId = firstEnrollment?.course?._id;

  const { course, loading: courseLoading } = useCourse(courseId);

  const loading = enrollLoading || courseLoading;
  const modules = course?.modules || [];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
        <span className="ml-3 text-slate-600">Loading learning content...</span>
      </div>
    );
  }

  if (!courseId) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500 mb-2">No courses enrolled yet.</p>
        <p className="text-sm text-slate-400">Enroll in a course to start learning.</p>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <VideoPlayer />

        {/* Video Info */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            {course?.title || "Course Content"}
          </h1>
          <p className="text-slate-600">
            {course?.description || ""}
          </p>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            Discussion <span className="text-sm font-normal text-slate-500">(Coming soon)</span>
          </h3>
          <p className="text-slate-500 text-sm">Discussion feature will be available in a future update.</p>
        </div>
      </div>

      <CourseSidebar modules={modules} />
    </div>
  );
};

export default LearningTab;