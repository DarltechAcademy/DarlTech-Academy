import React from "react";
import { store } from "../store"; // make sure your store is exported

export default function Quizzes() {
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
        <Stat number={store.quizzes.length} label="Total Quizzes" color="indigo-600" />
        <Stat
          number={store.quizzes.filter(q => q.status === "completed").length}
          label="Completed"
          color="emerald-600"
        />
        <Stat
          number={`${Math.round(
            store.quizzes
              .filter(q => q.bestScore !== null)
              .reduce((acc, q) => acc + q.bestScore, 0) /
              store.quizzes.filter(q => q.bestScore !== null).length
          )}%`}
          label="Average Score"
          color="amber-600"
        />
        <Stat
          number={store.quizzes.filter(q => q.bestScore === 100).length}
          label="Perfect Scores"
          color="purple-600"
        />
      </div>

      {/* Quiz Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {store.quizzes.map(quiz => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
}

function Stat({ number, label, color }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center">
      <div className={`text-4xl font-bold mb-1 text-${color}`}>{number}</div>
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
          <i data-lucide="help-circle" className="w-6 h-6 text-purple-600"></i>
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
          <i data-lucide="list" className="w-4 h-4"></i>
          {quiz.questions} Qs
        </span>
        <span className="flex items-center gap-1">
          <i data-lucide="clock" className="w-4 h-4"></i>
          {quiz.time} min
        </span>
        <span className={`px-2 py-0.5 rounded text-xs font-medium ${difficultyClasses}`}>
          {quiz.difficulty}
        </span>
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
          {quiz.unlockRequirement}
        </button>
      ) : (
        <button
          onClick={() => alert(`Starting quiz ${quiz.id}`)}
          className="w-full py-2.5 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
        >
          Start Quiz
          <i data-lucide="arrow-right" className="w-4 h-4"></i>
        </button>
      )}
    </div>
  );
} 