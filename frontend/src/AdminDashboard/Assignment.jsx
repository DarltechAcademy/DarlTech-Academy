import { store } from "../../data/store";

export default function AdminAssignments() {
  return (
    <div className="space-y-4">
      {store.assignments.map((a) => (
        <div key={a.id} className="bg-white p-4 rounded-xl">
          <h3 className="font-bold">{a.title}</h3>
          <p className="text-gray-500">
            {a.submissions} submissions
          </p>
        </div>
      ))}
    </div>
  );
}