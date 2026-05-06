import React from "react";
import Button from "./Reuseable/Button";

export default function Learn() {
  return (
    <div className="bg-[var(--bg-section)] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-between">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--text-primary)]">
            Learn To Code, <br className="hidden md:block" />Change Your Life
          </h1>
        </div>
        <div className="flex-1">
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-[var(--accent)]">
              CODING EXPERIENCE OPTIONAL;<br />DETERMINATION REQUIRED
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm md:text-base">
              Thanks to over 7 years of building software across mobile, web and desktop apps, we have what it takes to transform you into a Tech Warrior. We know that if you are committed to this journey, you will be able to succeed. That’s why our admissions process assesses only your determination – not your coding ability.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}