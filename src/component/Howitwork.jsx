import { useEffect, useState } from "react";

export default function Howitwork() {
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
  ];

  const [index, setIndex] = useState(0);

  // Auto image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT SIDE */}
        <div className="animate-fadeIn">
          <p className="text-sm tracking-widest text-gray-400 mb-2">
            THE TRAINING BOOTCAMP
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How It Works
          </h1>

          <p className="text-gray-600 leading-relaxed">
            We screen fast learners with dedication, resilience and curiosity.
            Applicants are interviewed to ensure they have the right mindset
            to graduate successfully.
          </p>
        </div>

        {/* IMAGE SIDE */}
        <div className="relative flex items-center justify-center">

          <img
            key={index}
            src={images[index]}
            alt="student"
            className="w-full max-w-md rounded-xl shadow-lg animate-float transition-all duration-700"
          />

          {/* PLAY BUTTON */}
          <div className="absolute">
            <button className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg hover:scale-110 transition animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-8 h-8 ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
