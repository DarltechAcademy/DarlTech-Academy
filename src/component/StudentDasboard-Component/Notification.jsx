import { store } from "../../store";

export default function NotificationDropdown() {
  return (
    <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-lg p-4">
      <h3 className="font-bold mb-2">Notifications</h3>

      {store.notifications.map((n) => (
        <div key={n.id} className="text-sm mb-2">
          <p className="font-semibold">{n.title}</p>
          <p className="text-gray-500">{n.msg}</p>
        </div>
      ))}
    </div>
  );
}