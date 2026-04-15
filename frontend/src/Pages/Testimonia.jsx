import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <div className="pt-28 min-h-screen bg-[var(--bg-main)]">

      <section className="text-center py-20">
        <h1 className="text-4xl font-bold text-[var(--text-primary)]">
          Student Testimonials
        </h1>
      </section>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6 pb-20">

        <div className="bg-white p-8 rounded-xl shadow-[var(--shadow-soft)]">
          <Star className="text-[var(--accent)]" />
          <p className="mt-4 text-[var(--text-muted)]">
            “This academy changed my life. I got my first developer job!”
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-[var(--shadow-soft)]">
          <Star className="text-[var(--accent)]" />
          <p className="mt-4 text-[var(--text-muted)]">
            “The mentorship and projects were amazing.”
          </p>
        </div>

      </div>
    </div>
  );
}