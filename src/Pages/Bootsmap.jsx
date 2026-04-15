import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import img from "../assets/image/img3.png";
import Boot from "../assets/image/boot.jpg"

export default function Bootcamp() {
  const [active, setActive] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = "http://localhost:5000/api";

  // 🔥 Fetch courses from backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${API}/courses`);

        // Only show published courses
        const published = res.data.filter(
          (c) => c.status === "Published"
        );

        setCourses(published);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const admissionItems = [
    {
      title: "Admission Process",
      content:
        "Our admission process is simple. We look out for people with determination, resilience and self-discipline."
    },
    {
      title: "Requirements",
      content:
        "You must be disciplined, ready to learn fast, and committed to a full-time 6-month program."
    },
    {
      title: "Training Bootcamp",
      content:
        "We train you to become a full-stack engineer with real-world experience."
    },
    {
      title: "Real-Life Projects",
      content:
        "You will build real projects and develop a strong portfolio."
    },
    {
      title: "Internships",
      content:
        "After training, you will gain real-world internship experience."
    }
  ];

  const faqs = [
    {
      question: "Do I need prior coding experience?",
      answer: "No. Beginners are welcome."
    },
    {
      question: "Is the bootcamp full-time?",
      answer: "Yes, it requires full dedication."
    },
    {
      question: "Do you offer internship?",
      answer: "Yes, after training."
    },
    {
      question: "Is there certification?",
      answer: "Yes, after completion."
    }
  ];

  return (
    <div className="pt-20 bg-[var(--bg-main)] text-gray-900"
  
    >

      {/* HERO */}
      <section className=" text-white py-24 text-center px-6 bg-cover bg-center "
        style={{backgroundImage: `url(${Boot})`,}}
      >
        {/* Overlay */}
  <div className="absolute inset-0 bg-[var( --shadow-medium)] h-9/12 "></div>

        <h1 className="text-5xl font-bold">Immersive Coding Bootcamp</h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg">
          Career-focused intensive training to become job-ready.
        </p>

        <Link to="/apply">
          <button className="mt-8 px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105">
            Apply Now
          </button>
        </Link>
      </section>

      {/* PROGRAMS */}
      <section className="py-20 bg-[var(--bg-section)]">
        <h2 className="text-3xl font-bold text-center mb-10">
          Available Programs
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          
          {loading ? (
            <p className="text-center col-span-4">Loading courses...</p>
          ) : courses.length === 0 ? (
            <p className="text-center col-span-4">
              No courses available
            </p>
          ) : (
            courses.map((course) => (
              <div
                key={course._id}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition"
              >
                <h3 className="text-xl font-bold">
                  {course.title}
                </h3>

                <p className="mt-2 text-gray-500">
                  {course.level || "Beginner"}
                </p>

                <p className="text-2xl font-bold mt-4">
                  ₦{course.price || 0}
                </p>

                <Link to={`/course/${course._id}`}>
                  <button className="mt-6 px-6 py-2 bg-black text-white rounded-full">
                    Enroll Now
                  </button>
                </Link>
              </div>
            ))
          )}

        </div>
      </section>

      {/* ADMISSION */}
      <section className="py-20 bg-[var(--bg-section)]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Admission Process
        </h2>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          <div className="space-y-4">
            {admissionItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow cursor-pointer"
                onClick={() =>
                  setActive(active === index ? null : index)
                }
              >
                <div className="flex justify-between">
                  <h3 className="font-semibold">{item.title}</h3>
                  <ChevronDown
                    className={`${
                      active === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {active === index && (
                  <p className="mt-3 text-gray-500">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>

          <img src={img} className="rounded-2xl shadow" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[var(--bg-section)]">
        <h2 className="text-3xl font-bold text-center mb-10">
          FAQs
        </h2>

        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow cursor-pointer"
              onClick={() =>
                setActive(active === index + 10 ? null : index + 10)
              }
            >
              <div className="flex justify-between">
                <h3>{faq.question}</h3>
                <ChevronDown
                  className={`${
                    active === index + 10 ? "rotate-180" : ""
                  }`}
                />
              </div>

              {active === index + 10 && (
                <p className="mt-3 text-gray-500">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--primary)] text-white text-center">
        <h2 className="text-4xl font-bold">
          Ready to Transform Your Career?
        </h2>

        <Link to="/apply">
          <button className="mt-8 px-8 py-3 bg-white text-black rounded-full">
            Apply Now
          </button>
        </Link>
      </section>
    </div>
  );
}