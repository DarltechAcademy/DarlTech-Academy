import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Faq from "../assets/image/contact.jpg";

const faqs = [
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

    question: "How long is the course?",
    answer: "The program runs for 4-8 months (intensive training).",
  },
  {
    question: "What’s the time commitment?",
    answer:
      "Approximately 30 hours per week including lectures, projects, and assignments.",

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
  {
    question: "How many slots are available?",
    answer:
      "Only 500 slots total across all tracks. Once filled, registration closes until the next cohort. No waiting list.",

  },
  {
    question: "Can I get a mentor?",
    answer: "Yes. Graduates receive 1 months of post-graduation mentorship.",

  },
  {
    question: "How do I register after paying?",
    answer:
      "Step 1: Pay ₦30,000 to the provided account.\nStep 2: Send proof of payment + Full Name + Course Track + Phone + Email to the admin.\nStep 3: Get onboarded within 24 hours.",
  },
  {
    question: "What if I miss a class?",
    answer:
      "All classes are recorded and available for replay. However, 80% attendance is required to qualify for internship consideration.",
  },
  {
    question: "Is DARLTECH ACADEMY registered?",
    answer:
      "Yes. We are a registered tech education outfit. CAC details and office address are available upon request for serious applicants.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* HERO */}
      <div
        className="relative bg-center bg-cover h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${Faq})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="relative text-4xl md:text-5xl font-bold text-white text-center">
          DarlTech Academy Cohort 1 FAQ
        </h1>
      </div>

      {/* FAQ */}
      <div className="max-w-6xl mx-auto px-4 py-20 bg-[var(--bg-section)]">
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden border-[var(--border-light)] shadow-soft transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 bg-[var(--bg-main)] hover:bg-[var(--bg-section)] transition-colors duration-300"
              >
                <span className="text-lg font-medium text-[var(--text-primary)] text-left">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 transition-all duration-300 ${
                    openIndex === index
                      ? "rotate-180 text-[var(--primary)]"
                      : "text-[var(--accent)]"
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-60 p-4" : "max-h-0 px-4"
                } bg-[var(--bg-main)] border-t border-[var(--border-light)] text-[var(--text-secondary)] whitespace-pre-line`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
