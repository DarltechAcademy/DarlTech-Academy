
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import img from "../assets/image/img3.png"
import Footer from "../component/Footer"

export default function Bootcamp() {
  const [active, setActive] = useState(null);

  const admissionItems = [
    {
      title: "Admission Process",
      content: `Our admission process is simple. We look out for people with determination, resilience and self-discipline. Teaching you how to code is not difficult when you have the above qualities.`
    },
    {
      title: "Requirements",
      content: `Ensure you have met the following requirement before applying for the 6-months Bootcamp:

• You have exceptional personal, academic or professional performance. You have to show you have excelled at something.
• You learn fast and can handle pressure
• You are disciplined and determined to work hard and succeed as a skilled Tech Personnel.
• You are above 18 years of age.
• You are ready to 25-40hours per week to study.
• You want to be financially free and earn above 300k as a Software Engineer.

If you meet all the requirements listed above and ready to Future-Proof your Career, complete the application form and we will call you regarding the next steps`
    },
    {
      title: "Training Bootcamp",
      content: `We don't just teach people how to code — we teach how to think like an engineer. 

We teach the fundamental skills and knowledge required to become an autonomous Tech pro, competitive in today's ever evolving tech world.

Within a period of 4-8 months, we train you to become a Tech ethusiast  on the tech skill you choose to learn.`
    },
    {
      title: "Real-Life Projects",
      content: `During the program, students are exposed to real-life applications and projects.
    },
    {
      title: "Internships",
      content: `There will be an internship for the best students After the program, building and interacting with clients, learning the required skills to work in a professional environment.`
    }
  ];

  const faqs = [
    {
      question: "Do I need prior coding experience?",
      answer:
        "No. The program is designed for beginners and career switchers. What matters most is your commitment and willingness to learn."
    },
    {
      question: "Is the bootcamp full-time?",
      answer:
        "Yes. It is an intensive full-time program and requires your complete focus during the training period."
    },
    {
      question: "Do you offer internship opportunities?",
      answer:
        "Yes. After completing the training phase, students are attached to partner organizations for real-world internship experience."
    },
    {
      question: "Is there certification after completion?",
      answer:
        "Yes. Graduates receive a certificate upon successful completion of the program."
    },
    {
      question: "Can I pay in installments?",
      answer:
        "No. its a one-time payment."
    }
  ];

  return (
    <div className="pt-20 bg-[var(--bg-main)] text-gray-900">

      {/* HERO */}
      <section className="bg-[var(--primary)] text-white py-24 text-center px-6">
        <h1 className="text-5xl font-bold">Full-Immersion Tech sprint</h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg">
          Career-focused intensive training designed to transform beginners
          into job-ready tech professionals.
        </p>

        <Link to="/apply">
          <button className="mt-8 px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition">
            Apply Now
          </button>
        </Link>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold">Program Overview</h2>

        <p className="mt-6 text-[var(--text-muted)]">
          This immersive program combines structured learning, hands-on
          projects, mentorship, and real-world experience to prepare you for a
          successful tech career.
        </p>
      </section>

      {/* PROGRAMS */}
      <section className="py-20 bg-[var(--bg-section)]">
        <h2 className="text-3xl font-bold text-center mb-10">
          Available Programs
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {[
            "Frontend Development",
            "Backend Development",
            "Cyber Security",
            "Data Analytics",
            "Data Science",
            "Graphics Design",
            "UI/UX Design",
            "Project Management",
            "Ai Automation",
            "Web Development",
            "Mobile App Development",
            "Robotics Engineering",
            "Software Engineering",
            "Cloud Computing",
            "Python Development",
      
          ].map((program, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-bold">{program}</h3>

              <p className="mt-2 text-[var(--text-muted)]">
                Duration: 4–8 Months
              </p>

              <p className="text-2xl font-bold mt-4">₦150,000</p>

              <Link to="/apply">
                <button className="mt-6 px-6 py-2 bg-black text-white rounded-full">
                  Enroll Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Tech Stack</h2>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Python",
            "SQL",
            "APIs"
          ].map((tech, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* STUDENT PROJECTS */}
      <section className="py-20 bg-[var(--bg-section)]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Student Project Showcase
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[
            {
              title: "E-Commerce Website",
              desc: "Full-stack online store with cart and payment system."
            },
            {
              title: "Task Manager App",
              desc: "Productivity app for managing tasks and deadlines."
            },
            {
              title: "School Portal",
              desc: "Portal for course registration and results."
            }
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition"
            >
              <div className="h-48 bg-gray-200"></div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>

                <p className="mt-3 text-[var(--text-muted)] text-sm">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

   {/* ADMISSION PROCESS ACCORDION */}
<section className="py-20 bg-[var(--bg-section)]">
  <h2 className="text-3xl font-bold text-center mb-12">
    Admission Process
  </h2>

  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
    
    {/* LEFT SIDE - ACCORDION */}
    <div className="space-y-4">
      {admissionItems.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow p-5 cursor-pointer"
          onClick={() => setActive(active === index ? null : index)}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">
              {item.title}
            </h3>

            <ChevronDown
              className={`transition-transform ${
                active === index ? "rotate-180" : ""
              }`}
            />
          </div>

          {active === index && (
            <p className="mt-4 text-[var(--text-muted)] whitespace-pre-line">
              {item.content}
            </p>
          )}
        </div>
      ))}
    </div>

    {/* RIGHT SIDE - IMAGE */}
    <div className="flex justify-center">
      <img
        src={img}
        alt="Admission process illustration"
        className="w-full max-w-md rounded-2xl shadow-lg"
      />
    </div>

  </div>
</section>

{/* FAQ */}
<section className="py-20 bg-[var(--bg-section)]">
  <h2 className="text-3xl font-bold text-center mb-10">
    Frequently Asked Questions
  </h2>

  <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow p-5 cursor-pointer"
        onClick={() =>
          setActive(active === index + 10 ? null : index + 10)
        }
      >
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">{faq.question}</h3>

          <ChevronDown
            className={`transition-transform ${
              active === index + 10 ? "rotate-180" : ""
            }`}
          />
        </div>

        {active === index + 10 && (
          <p className="mt-4 text-[var(--text-muted)]">
            {faq.answer}
          </p>
        )}
      </div>
    ))}
  </div>
</section>

      {/* FINAL CTA */}
      <section className="py-20 bg-[var(--primary)] text-white text-center">
        <h2 className="text-4xl font-bold">
          Ready to Transform Your Career?
        </h2>

        <Link to="/apply">
          <button className="mt-8 px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition">
            Apply Now
          </button>
        </Link>
      </section>
  <Footer/>
    </div>
    
  );

}
