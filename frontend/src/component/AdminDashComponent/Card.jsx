function Card({ title, value, icon }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition duration-300 border flex items-center justify-between">
      
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-2xl font-bold mt-1">{value}</h2>
      </div>

      <div className="bg-[var(--primary)]/10 p-3 rounded-full text-[var(--primary)]">
        {icon}
      </div>

    </div>
  );
}

export default Card;