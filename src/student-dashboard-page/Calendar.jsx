
import { useState, useEffect } from "react";

const store = {
  schedule: [
    { title: "Math Lecture", time: "10:00 AM", duration: "2h", type: "live", date: 26 },
    { title: "Submit Assignment", time: "2:00 PM", duration: "1h", type: "task", date: 15 },
    { title: "Science Lab", time: "4:00 PM", duration: "1.5h", type: "live", date: 5 },
  ],
};

export default function CalendarPage() {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const generatedDays = Array.from({ length: 35 }, (_, i) => {
      const day = i - 2; // Offset for month start
      return {
        day: day > 0 && day <= 31 ? day : "",
        current: day === 26,
        hasEvent: store.schedule.some((item) => item.date === day),
      };
    });
    setDays(generatedDays);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Study Calendar</h1>
          <p className="text-slate-600 mt-1">Schedule and manage your learning</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            &lt;
          </button>
          <span className="font-semibold text-lg">October 2024</span>
          <button className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            &gt;
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Calendar Grid */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="grid grid-cols-7 gap-2 mb-4">
            {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((day) => (
              <div key={day} className="text-center text-sm font-semibold text-slate-500 py-2">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {days.map((d, idx) => (
              <div
                key={idx}
                className={`calendar-day relative ${d.current ? 'active bg-blue-100' : ''} ${
                  !d.day ? 'text-slate-300' : 'text-slate-700 hover:bg-slate-100'
                } p-2 rounded`}
              >
                {d.day}
                {d.hasEvent && d.day && (
                  <span className="absolute bottom-1 w-1 h-1 bg-red-500 rounded-full"></span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Events List */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 h-fit">
          <h3 className="font-bold text-slate-900 mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            {store.schedule.map((item, idx) => (
              <div
                key={idx}
                className={`flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border-l-4 ${
                  item.type === "live" ? "border-red-500" :
                  item.type === "task" ? "border-blue-500" :
                  "border-purple-500"
                }`}
              >
                <div className="flex-shrink-0 w-16 text-center">
                  <div className="text-lg font-bold text-slate-900">{item.date}</div>
                  <div className="text-xs text-slate-500">Oct</div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.time} • {item.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}