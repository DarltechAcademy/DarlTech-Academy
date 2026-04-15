import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [active, setActive] = useState(null);

  const faqs = [
    // GENERAL
    {
      question: "What is DarlTech Academy?",
      answer:
        "DarlTech Academy teaches practical tech skills like Web Development, Data Science, and Cybersecurity focused on job readiness within 3 months."
    },
    {
      question: "Who is DarlTech for?",
      answer:
        "Students, career switchers, and professionals who want to upskill and build a strong career in tech."
    },

    // ADMISSIONS
    {
      question: "How do I apply?",
      answer:
        "Fill out the application form on our website → Complete screening → Attend a short interview."
    },
    {
      question: "Do I need coding experience?",
      answer:
        "No prior coding experience is required. Our programs are beginner-friendly, but applicants may take an aptitude test."
    },

    {
      question: "How long is the course?",
      answer:
        "The program runs for 3 months (intensive training)."
    },
    {
      question: "What’s the time commitment?",
      answer:
        "Approximately 20 hours per week including lectures, projects, and assignments."
    },

    // SUPPORT
    {
      question: "How do I contact support?",
      answer:
        "You can reach us via email or WhatsApp for assistance and inquiries."
    },
  ];

  return (
    <section className="py-20 bg-[var(--bg-section)]">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-5xl mx-auto px-6 grid gap-6 md:grid-cols-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-5 cursor-pointer"
            onClick={() =>
              setActive(active === index ? null : index)
            }
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{faq.question}</h3>
              <ChevronDown
                className={`transition-transform ${
                  active === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {active === index && (
              <p className="mt-4 text-[var(--text-muted)]">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}