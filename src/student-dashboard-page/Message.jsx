import { store } from "../store";

export default function MessagesList() {
  return (
    <div className="flex flex-col space-y-2 overflow-y-auto">
      {store.messages.map(msg => (
        <div key={msg.id} className={`flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 cursor-pointer ${msg.unread ? 'bg-indigo-50' : ''}`}>
          <img src={msg.avatar} alt={msg.sender} className="w-12 h-12 rounded-full object-cover"/>
          <div className="flex-1">
            <div className="flex justify-between">
              <span className="font-semibold">{msg.sender}</span>
              <span className="text-xs text-slate-400">{msg.time}</span>
            </div>
            <p className={`text-sm text-slate-600 truncate ${msg.unread ? 'font-medium' : ''}`}>{msg.preview}</p>
          </div>
        </div>
      ))}
    </div>
  );
}