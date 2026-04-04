import { store } from "../store";

export default function AdminCourses() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {store.courses.map((c) => (
        <div key={c.id} className="bg-white p-4 rounded-xl">
          <h3 className="font-bold">{c.title}</h3>
          <p className="text-gray-500">
            {c.students} students
          </p>
        </div>
      ))}
    </div>
  );
}