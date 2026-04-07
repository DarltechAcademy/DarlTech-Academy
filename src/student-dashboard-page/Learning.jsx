import { useState } from "react";
import {
  Play,
  SkipForward,
  Settings,
  Maximize,
  Heart,
  Share2,
  Download,
  ThumbsUp,
  MessageCircle,
  Lock,
} from "lucide-react";

// Mock data
const modulesData = [
  { title: "Module 1: Introduction", lessons: 5, completed: 5 },
  { title: "Module 2: React Basics", lessons: 8, completed: 8 },
  { title: "Module 3: React Hooks", lessons: 6, completed: 2, current: true },
  { title: "Module 4: State Management", lessons: 7, completed: 0, locked: true },
  { title: "Module 5: Deployment", lessons: 4, completed: 0, locked: true },
];

const commentsData = [
  {
    author: "Maria Garcia",
    avatar: "https://i.pravatar.cc/150?img=9",
    time: "2 hours ago",
    content: "Great explanation! The useEffect cleanup finally makes sense to me.",
    likes: 12,
  },
  {
    author: "Alex Chen",
    avatar: "https://i.pravatar.cc/150?img=12",
    time: "5 hours ago",
    content: "Could you provide more examples of custom hooks? I'm still struggling with that concept.",
    likes: 8,
    replies: 3,
  },
];

// Lesson Component
const Lesson = ({ lessonNumber, completed, title }) => {
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
      <span className="ml-auto text-xs text-slate-400">15:30</span>
    </div>
  );
};

// Module Component
const Module = ({ module }) => {
  const lessons = Array.from({ length: module.lessons }, (_, i) => i + 1);
  const lessonTitles = ["Introduction to Hooks", "useState Deep Dive", "useEffect Explained", "Advanced Patterns", "Custom Hooks"];

  return (
    <div className="border-b border-slate-100 last:border-0">
      <div className={`p-4 ${module.current ? "bg-indigo-50" : ""}`}>
        <div className="flex items-center justify-between mb-2">
          <h4 className={`font-semibold text-sm ${module.current ? "text-indigo-900" : "text-slate-900"}`}>{module.title}</h4>
          {module.locked && <Lock className="w-4 h-4 text-slate-400" />}
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
          <span>{module.completed}/{module.lessons} lessons</span>
          <span>•</span>
          <span>{Math.round((module.completed / module.lessons) * 100)}%</span>
        </div>
        {!module.locked && (
          <div className="w-full bg-slate-200 rounded-full h-1.5">
            <div
              className={`bg-${module.current ? "indigo" : "green"}-500 h-1.5 rounded-full`}
              style={{ width: `${(module.completed / module.lessons) * 100}%` }}
            />
          </div>
        )}
      </div>

      {!module.locked && module.lessons && module.current && (
        <div>
          {lessons.map((lesson, idx) => (
            <Lesson
              key={lesson}
              lessonNumber={lesson}
              completed={module.completed}
              title={lessonTitles[idx] || `Lesson ${lesson}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Comments Component
const Comments = ({ comments }) => {
  return (
    <div className="space-y-6">
      {comments.map((comment, idx) => (
        <div key={idx} className="flex gap-4">
          <img src={comment.avatar} className="w-10 h-10 rounded-full object-cover flex-shrink-0" alt={comment.author} />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-slate-900">{comment.author}</span>
              <span className="text-xs text-slate-400">• {comment.time}</span>
            </div>
            <p className="text-slate-600 text-sm mb-3">{comment.content}</p>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-sm text-slate-500 hover:text-indigo-600 transition-colors">
                <ThumbsUp className="w-4 h-4" /> {comment.likes}
              </button>
              <button className="flex items-center gap-1 text-sm text-slate-500 hover:text-indigo-600 transition-colors">
                <MessageCircle className="w-4 h-4" /> Reply
              </button>
              {comment.replies && <span className="text-sm text-slate-400">• {comment.replies} replies</span>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Video Player Component
const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => setIsPlaying(!isPlaying);

  return (
    <div className="bg-black rounded-2xl overflow-hidden shadow-2xl relative group">
      <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80"
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
const CourseSidebar = () => {
  const totalLessons = modulesData.reduce((sum, m) => sum.lessons + sum.completed, 0);
  const completedLessons = modulesData.reduce((sum, m) => sum + m.completed, 0);
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);

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
        {modulesData.map((module, idx) => (
          <Module key={idx} module={module} />
        ))}
      </div>
    </div>
  );
};

// Main Learning Tab
const LearningTab = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <VideoPlayer />

        {/* Video Info / Resources */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Introduction to React Hooks</h1>
          <p className="text-slate-600">Lesson 12 • Full-Stack Web Development</p>
          {/* Instructor / Actions */}
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            Discussion <span className="text-sm font-normal text-slate-500">(24 comments)</span>
          </h3>
          {/* Comment Input */}
          <Comments comments={commentsData} />
        </div>
      </div>

      <CourseSidebar />
    </div>
  );
};

export default LearningTab;