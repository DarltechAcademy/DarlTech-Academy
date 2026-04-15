import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Faq from "../assets/image/contact.jpg"

const faqs = [
  {
    question: "What is DarlTech Academy?",
    answer:
      "DarlTech Academy teaches practical tech skills like Web Development, Data Science, and Cybersecurity focused on job readiness within 3 months.",
  },
  {
    question: "Who is DarlTech for?",
    answer:
      "Students, career switchers, and professionals who want to upskill and build a strong career in tech.",
  },
  {
    question: "What courses do you offer?",
    answer:
      "We offer Web Development, Data Science, Cybersecurity, and other in-demand tech programs. Visit our Courses page for full details.",
  },
  {
    question: "Are courses online or offline?",
    answer:
      "We operate a hybrid model: online lectures combined with in-person practical project sessions in Lagos, Nigeria.",
  },
  {
    question: "How do I apply?",
    answer:
      "Fill out the application form on our website → Complete screening → Attend a short interview.",
  },
  {
    question: "Do I need coding experience?",
    answer:
      "No prior coding experience is required. Our programs are beginner-friendly, but applicants may take an aptitude test.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Tuition fees vary by program. Contact us directly for current pricing and flexible payment plans.",
  },
  {
    question: "Do you offer scholarships?",
    answer:
      "Yes. Scholarships are available for top-performing applicants and underrepresented groups.",
  },
  {
    question: "How long is the course?",
    answer: "The program runs for 3 months (intensive training).",
  },
  {
    question: "What’s the time commitment?",
    answer:
      "Approximately 20 hours per week including lectures, projects, and assignments.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach us via email or WhatsApp for assistance and inquiries.",
  },
  {
    question: "Do you guarantee jobs?",
    answer:
      "While we do not guarantee jobs, we provide strong job placement support. Over 80% of our graduates secure roles or start successful projects.",
  },
  {
    question: "Can I get a mentor?",
    answer: "Yes. Graduates receive 3 months of post-graduation mentorship.",
  },
  {
    question: "Is there certification?",
    answer: "Yes. Students receive a certificate upon successful completion of the program.",
  },
  {
    question: "Is mentorship included?",
    answer: "Yes. Live mentorship is included during the program.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
     <div  className="bg-center bg-cover h-96"
            style={{backgroundImage: `url(${Faq})`,}}>
            
      </div>
    <div className=" mx-auto px-4 py-22 bg-[var(--bg-section)]">
     

      <h1 className="text-4xl font-bold text-center mb-12 text-[var(--primary)]">
        Frequently Asked Questions
      </h1>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden border-[var(--border-light)] shadow-soft"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 bg-[var(--bg-main)] hover:bg-[var(--bg-section)] transition-colors duration-300"
            >
              <span className="text-lg font-medium text-[var(--text-primary)]">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[var(--accent)] transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="p-4 bg-[var(--bg-main)] border-t border-[var(--border-light)] text-[var(--text-secondary)]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}