import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left"
      >
        <span className="text-lg font-medium text-[var(--text-primary)]">
          {title}
        </span>

        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-[var(--text-muted)]">{children}</div>
      </div>
    </div>
  );
}