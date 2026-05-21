import { useEffect, useState } from "react";
import AccordionItem from "./Reuseable/According";
import Img1 from "../assets/image/img1.png";
// import Img2 from "../assets/image/img2.png";
// import Img3 from "../assets/image/img3.png";

export default function Howitwork() {
  // const images = [Img1, Img2, Img3];
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prev) => (prev + 1) % images.length);
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="w-full py-20 bg-[var(--bg-section)] px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="text-sm tracking-widest text-[var(--text-muted)] mb-2">
            THE TRAINING BOOTCAMP
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">
            How It Works
          </h1>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
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
            src={Img1}
            alt="student"
            className="w-full max-w-md rounded-2xl shadow-[var(--shadow-medium)]"
          />

          {/* Center Play Button */}
          {/* <button className="absolute w-16 h-16 rounded-full bg-[var(--accent)] text-white flex items-center justify-center shadow-md hover:bg-[var(--accent-hover)] transition">
            ▶
          </button> */}

        </div>

      </div>
    </section>
  );
}