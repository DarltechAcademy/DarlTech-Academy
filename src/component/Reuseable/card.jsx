import React from 'react'

export default function Card({ title, desc }) {
  return (
  
      
    <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
      <div className="w-10 h-10 rounded-full bg-blue-100" />
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{desc}</p>
      </div>
    </div>
  
  )
}
