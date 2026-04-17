import { store } from "../store";

export default function AdminHome() {
  return (
    <div className="grid md:grid-cols-4 gap-6">

      <Card title="Users" value={store.user.length} />
      <Card title="Courses" value={store.courses.length} />
      <Card title="Assignments" value={store.assignments.length} />
      <Card title="Revenue" value="$2,400" />

    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl">
      <h2 className="text-2xl font-bold">{value}</h2>
      <p className="text-gray-500">{title}</p>
    </div>
  );
}