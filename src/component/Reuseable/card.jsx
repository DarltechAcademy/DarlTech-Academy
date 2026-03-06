

import React from "react";

export default function Card({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 group">
      
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--accent-light)] group-hover:scale-110 transition">
        {Icon && <Icon className="w-6 h-6 text-[var(--primary)]" />}
      </div>

      {/* Content */}
      <div>
        <h3 className="font-semibold text-[var(--text-primary)] text-lg">
          {title}
        </h3>
        <p className="text-sm text-[var(--text-muted)] mt-1">
          {desc}
        </p>
      </div>
    </div>
  );
}

// import React from 'react'

// export default function Card({ title, desc }) {
//   return (
  
      
//     <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
//       <div className="w-10 h-10 rounded-full bg-blue-100" />
//       <div>
//         <h3 className="font-semibold text-gray-800">{title}</h3>
//         <p className="text-sm text-gray-500 mt-1">{desc}</p>
//       </div>
//     </div>
  
//   )
// }

