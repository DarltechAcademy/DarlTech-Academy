import {
  Code,
  Database,
  Globe,
  Smartphone,
  Shield,
  BarChart3,
  ClipboardList,
  Bug,
  Palette,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Program() {
  const navigate = useNavigate();

  const programs = [
    { title: "UI/UX Design", duration: "3 Months", price: 300000, icon: Palette },
    { title: "Frontend Development", duration: "3 Months", price: 350000, icon: Globe },
    { title: "Backend Development", duration: "3 Months", price: 350000, icon: Database },
    { title: "Fullstack Development", duration: "6 Months", price: 550000, icon: Code },
    { title: "Mobile App Development", duration: "4 Months", price: 500000, icon: Smartphone },
    { title: "Cybersecurity", duration: "4 Months", price: 600000, icon: Shield },
    { title: "Data Analysis", duration: "3 Months", price: 350000, icon: BarChart3 },
    { title: "Software Testing", duration: "3 Months", price: 350000, icon: Bug },
    { title: "Product Management", duration: "3 Months", price: 350000, icon: ClipboardList },
  ];

  const handleEnroll = async (program) => {
    try {
      console.log("Clicked:", program.title);

      const res = await axios.get("http://localhost:5000/api/courses");

      console.log("API Response:", res.data);

      const selectedCourse = res.data.find(
        (c) => c.title === program.title
      );

      if (!selectedCourse) {
        alert("Course not found in backend");
        return;
      }

      navigate("/auth", {
        state: {
          course: selectedCourse,
        },
      });
    } catch (error) {
      console.error("ERROR:", error);
      alert("Backend not reachable");
    }
  };

  return (
    <div className="pt-28 bg-[var(--bg-section)] min-h-screen">
      {/* HERO */}
      <section className="text-center py-16 px-6">
        <Code size={50} className="mx-auto text-[var(--accent)] float" />

        <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mt-6">
          Our Programs
        </h1>

        <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
          Practical tech training programs designed to equip you with
          in-demand skills.
        </p>
      </section>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-20">
        {programs.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-[var(--bg-card)] p-8 rounded-2xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition"
            >
              <Icon size={40} className="text-[var(--accent)]" />

              <h3 className="mt-5 text-xl font-semibold text-[var(--text-primary)]">
                {item.title}
              </h3>

              <p className="text-sm text-[var(--text-secondary)] mt-2">
                Duration: {item.duration}
              </p>

              <p className="text-sm text-[var(--text-secondary)]">
                Fee: ₦{item.price.toLocaleString()}
              </p>

              <button
                onClick={() => handleEnroll(item)}
                className="mt-6 w-full py-2 rounded-lg text-white transition"
                style={{
                  background: "var(--btn-primary-bg)",
                }}
                onMouseOver={(e) =>
                  (e.target.style.background = "var(--btn-primary-hover)")
                }
                onMouseOut={(e) =>
                  (e.target.style.background = "var(--btn-primary-bg)")
                }
              >
                Enroll Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}