import { useEffect, useState } from "react";
import AccordionItem from "./Reuseable/According";

export default function Howitwork() {
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE */}
        <div>
          <p className="text-sm tracking-widest text-gray-400 mb-2">
            THE TRAINING BOOTCAMP
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How It Works
          </h1>

          <p className="text-gray-600 leading-relaxed mb-10">
            We screen fast learners with dedication, resilience and curiosity.
          </p>

          <AccordionItem title="Recruitment">
            We screen fast learners with dedication and curiosity.
          </AccordionItem>

          <AccordionItem title="Training">
            Intensive hands-on training with real projects.
          </AccordionItem>

          <AccordionItem title="Placement">
            Graduates are connected with hiring partners.
          </AccordionItem>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center">
          <img
            key={index}
            src={images[index]}
            alt="student"
            className="w-full max-w-md rounded-xl shadow-lg animate-float transition-all duration-700"
          />

          <div className="absolute">
            <button className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg hover:scale-110 transition animate-pulse">
              ▶
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}