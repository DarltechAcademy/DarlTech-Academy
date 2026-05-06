import React, { useState, useEffect } from "react";
import { Loader2, HelpCircle, List, Clock, ArrowRight } from "lucide-react";
import api from "../services/api";

export default function Quizzes() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch quizzes from backend (when Sprint 4 API is ready)
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await api.get("/quizzes");
        setQuizzes(response.data?.data || []);
      } catch (err) {
        // Backend doesn't have quizzes endpoint yet (Sprint 4)
        console.log("Quizzes API not available yet — showing empty state");
        setQuizzes([]);
      } finally {
        setLoading(false);
      }
    };
    fetchQuizzes();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
        <span className="ml-3 text-slate-600">Loading quizzes...</span>
      </div>
    );
  }

  // Stats
  const totalQuizzes = quizzes.length;
  const completedQuizzes = quizzes.filter(q => q.status === "completed").length;
  const quizzesWithScores = quizzes.filter(q => q.bestScore !== null && q.bestScore !== undefined);
  const avgScore = quizzesWithScores.length > 0
    ? Math.round(quizzesWithScores.reduce((acc, q) => acc + q.bestScore, 0) / quizzesWithScores.length)
    : 0;
  const perfectScores = quizzes.filter(q => q.bestScore === 100).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Quizzes & Exams</h1>
          <p className="text-slate-600 mt-1">Test your knowledge and track progress</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Stat number={totalQuizzes} label="Total Quizzes" color="text-indigo-600" />
        <Stat number={completedQuizzes} label="Completed" color="text-emerald-600" />
        <Stat number={totalQuizzes > 0 ? `${avgScore}%` : "—"} label="Average Score" color="text-amber-600" />
        <Stat number={perfectScores} label="Perfect Scores" color="text-purple-600" />
      </div>

      {/* Empty State or Quiz Cards */}
      {quizzes.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-slate-200">
          <HelpCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-700 mb-2">No Quizzes Available</h3>
          <p className="text-slate-500">
            Quizzes will appear here once your tutors create them.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map(quiz => (
            <QuizCard key={quiz._id || quiz.id} quiz={quiz} />
          ))}
        </div>
      )}
    </div>
  );
}

function Stat({ number, label, color }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center">
      <div className={`text-4xl font-bold mb-1 ${color}`}>{number}</div>
      <div className="text-slate-500 text-sm">{label}</div>
    </div>
  );
}

function QuizCard({ quiz }) {
  const difficultyClasses =
    quiz.difficulty === "Easy"
      ? "bg-green-100 text-green-700"
      : quiz.difficulty === "Medium"
      ? "bg-amber-100 text-amber-700"
      : "bg-red-100 text-red-700";

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
          <HelpCircle className="w-6 h-6 text-purple-600" />
        </div>

        {quiz.status === "completed" ? (
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600">{quiz.bestScore}%</div>
            <div className="text-xs text-slate-500">Best Score</div>
          </div>
        ) : quiz.status === "locked" ? (
          <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-semibold">
            Locked
          </span>
        ) : (
          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">
            Available
          </span>
        )}
      </div>

      <h3 className="font-bold text-lg text-slate-900 mb-1">{quiz.title}</h3>
      <p className="text-sm text-slate-500 mb-4">{quiz.course}</p>

      <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
        <span className="flex items-center gap-1">
          <List className="w-4 h-4" />
          {quiz.questions} Qs
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {quiz.time} min
        </span>
        {quiz.difficulty && (
          <span className={`px-2 py-0.5 rounded text-xs font-medium ${difficultyClasses}`}>
            {quiz.difficulty}
          </span>
        )}
      </div>

      {quiz.status === "completed" ? (
        <div className="flex gap-2">
          <button className="flex-1 py-2.5 border border-slate-200 rounded-lg font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
            Review
          </button>
          <button className="flex-1 py-2.5 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
            Retake
          </button>
        </div>
      ) : quiz.status === "locked" ? (
        <button disabled className="w-full py-2.5 bg-slate-100 text-slate-400 rounded-lg font-semibold cursor-not-allowed">
          {quiz.unlockRequirement || "Locked"}
        </button>
      ) : (
        <button className="w-full py-2.5 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
          Start Quiz
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}