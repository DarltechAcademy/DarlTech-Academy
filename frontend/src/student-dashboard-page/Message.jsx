import { useState, useEffect } from "react";
import { MessageCircle, Loader2 } from "lucide-react";
import api from "../services/api";

export default function MessagesList() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await api.get("/messages");
        setMessages(response.data?.data || []);
      } catch (err) {
        // Messages API not available yet
        console.log("Messages API not available yet — showing empty state");
        setMessages([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
        <span className="ml-3 text-slate-600">Loading messages...</span>
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-slate-200">
        <MessageCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-slate-700 mb-2">No Messages Yet</h3>
        <p className="text-slate-500">
          Messages from tutors and peers will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-2 overflow-y-auto">
      {messages.map(msg => (
        <div key={msg._id || msg.id} className={`flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 cursor-pointer ${msg.unread ? 'bg-indigo-50' : ''}`}>
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
            {(msg.sender || "U")[0].toUpperCase()}
          </div>
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