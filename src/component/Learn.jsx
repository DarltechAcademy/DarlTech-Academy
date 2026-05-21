import React from "react";
import Button from "./Reuseable/Button";

export default function Learn() {
  return (
    <section className="w-full px-6 md:px-16 py-20 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">

        {/* Left Side */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--text-primary)]">
            Learn A Tech Skill Today, <br />
            <span className="text-[var(--accent)]">
              Become Job ready for the future!
            </span>
          </h1>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)]">
            DARLTECH ACADEMY SCHOLARSHIP PROGRAM; <br />
            <span className="text-[var(--accent)]">
              DETERMINATION REQUIRED
            </span>
          </h2>

          <p className="text-[var(--text-muted)] leading-relaxed text-base">
            DarlTech Academy is here to build next generation techies through hands-on real world projects, be part of it.
          </p>

          <Button variant="primary">
            Start Your Tech Journey
          </Button>
        </div>

      </div>
    </section>
  );
}
