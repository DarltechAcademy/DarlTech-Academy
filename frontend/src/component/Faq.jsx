import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [active, setActive] = useState(null);

  const faqs = [
    // GENERAL
    {
    question: "Is this scholarship real? What’s the catch?",
    answer:
      "Yes, it’s 100% real. The “catch” is we only train serious people. The ₦30,000 commitment fee secures your slot and covers LMS access, live classes, mentorship, and capstone supervision. We cover your full tuition. No hidden fees after.",
  },
  {
    question: "Why should I pay ₦30,000 if it’s a scholarship?",
    answer:
      "Free things are abandoned. The fee ensures commitment. We’re investing instructors, resources, and internship slots in you. We need students who will start and finish. Think of it as “skin in the game,” not tuition.",
  },
  {
    question: "What courses can I pick?",
    answer:
      "Frontend Development (HTML, CSS, JavaScript, React), Backend Development (Node.js, Python, APIs), Data Analysis (Excel, SQL, Power BI, Python), UI/UX Design (Figma, User Research), Cybersecurity Fundamentals, Product Management, Mobile App Development (Flutter/React Native). Full curriculum will be provided.",
  },
  {
    question: "Is the ₦30,000 refundable?",
    answer:
      "No. It’s a non-refundable commitment fee. Once paid, your slot is reserved and resources are allocated to you. Please be sure before paying.",
  },
  {
    question: "How long is the program?",
    answer:
      "4 months total: 3 months intensive training + 1 month capstone project where you build a real-world solution. No theory without practice.",
  },
  {
    question: "What’s this internship for best graduating students?",
    answer:
      "Top performers based on attendance, assignments, and capstone quality will be recommended for internship placements with partner companies. It’s merit-based — show up, do the work, get rewarded.",
  },
  {
    question: "Is it online or physical?",
    answer:
      "Cohort 1 is 100% online with live classes via Zoom/Google Meet, recorded replays, and virtual capstone supervision. All you need is a laptop and internet.",
  },
  {
    question: "When are classes? I work/school.",
    answer:
      "Classes run evenings 7PM–9PM WAT and weekends. Designed for 9–5 workers and students. Timetable will be shared before resumption.",
  },
  {
    question: "When does Cohort 1 start?",
    answer:
      "Target start date: May 5, 2026. Registration closes once slots are filled.",
  },
  {
    question: "What are the requirements to join?",
    answer:
      "₦30,000 commitment fee, a laptop (minimum 4GB RAM, Core i3), internet access, and willingness to learn and complete assignments. No prior coding experience required for beginner tracks.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes. You’ll receive a Certificate of Completion after passing your capstone. However, your portfolio project is what employers truly value.",
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