import React from "react";
import Button from "./Reuseable/Button";

export default function Learn() {
  return (
    <section className="w-full px-6 md:px-16 py-20 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">

        {/* Left Side */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--text-primary)]">
            Learn To Code, <br />
            <span className="text-[var(--accent)]">
              Change Your Life
            </span>
          </h1>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)]">
            CODING EXPERIENCE OPTIONAL; <br />
            <span className="text-[var(--accent)]">
              DETERMINATION REQUIRED
            </span>
          </h2>

          <p className="text-[var(--text-muted)] leading-relaxed text-base">
            Thanks to over 7 years of building software across mobile, web and 
            desktop apps, we transform you into a Tech Warrior. Our admissions 
            process assesses your determination — not your coding ability.
          </p>

          {/* Reusable Button */}
          <Button variant="primary">
            Start Your Journey
          </Button>
        </div>

    <div>
      <div>
        <h1>Learn To Code, <br />Change Your Life</h1>
      </div>
      <div>
        <h1>CODING EXPERIENCE OPTIONAL;<br />DETERMINATION REQUIRED</h1>
        <p>We have what it takes to transform you into a Tech Warrior. We know that if you are committed to this journey, you will be able to succeed. That’s why our admissions process assesses only your determination – not your coding ability.</p>
      </div>
    </section>
  );
}