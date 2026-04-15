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
import program from "../assets/image/about.jpg"

export default function Program() {
  const programs = [
    {
      title: "UI/UX Design",
      duration: "3 Months Intensive",
      price: "₦300,000",
      icon: Palette,
      desc: "Learn user research, wireframing, prototyping and design systems.",
    },
    {
      title: "Frontend Development",
      duration: "3 Months Intensive",
      price: "₦350,000",
      icon: Globe,
      desc: "Master HTML, CSS, JavaScript and modern frontend tools.",
    },
    {
      title: "Backend Development",
      duration: "3 Months Intensive",
      price: "₦350,000",
      icon: Database,
      desc: "Build powerful APIs using Node.js and Express.",
    },
    {
      title: "Fullstack Development",
      duration: "6 Months Intensive",
      price: "₦550,000",
      icon: Code,
      desc: "Become a complete engineer with frontend + backend mastery.",
    },
    {
      title: "Mobile App Development",
      duration: "4 Months Intensive",
      price: "₦500,000",
      icon: Smartphone,
      desc: "Build cross-platform apps using Flutter framework.",
    },
    {
      title: "Cyber Security",
      duration: "4 Months Intensive",
      price: "₦600,000",
      icon: Shield,
      desc: "Learn ethical hacking, security testing and risk management.",
    },
    {
      title: "Data Analysis",
      duration: "3 Months Intensive",
      price: "₦350,000",
      icon: BarChart3,
      desc: "Analyze data using modern tools and visualization techniques.",
    },
    {
      title: "Software Testing",
      duration: "3 Months Intensive",
      price: "₦350,000",
      icon: Bug,
      desc: "Master manual & automated testing techniques.",
    },
    {
      title: "Product Management",
      duration: "3 Months Intensive",
      price: "₦350,000",
      icon: ClipboardList,
      desc: "Learn product lifecycle, strategy and agile methodologies.",
    },
  ];

  return (
    <div className=" bg-[var(--bg-section)] min-h-screen">
      {/* Hero Section */}
    <section className="bg-center bg-cover h-96"
    style={{backgroundImage: `url(${program})`,}}
    >

    </section>

      <section className="text-center py-16 px-6"
      >

        <Code size={50} className="mx-auto text-[var(--accent)]" />
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mt-6">
          Our Programs
        </h1>
        <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
          Practical tech training programs designed to equip you with
          in-demand skills, real-world experience and certification.
        </p>
      </section>

      {/* Programs Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-20">
        {programs.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-[var(--shadow-soft)] hover:shadow-xl transition duration-300"
            >
              <Icon size={40} className="text-[var(--accent)]" />
              <h3 className="mt-5 text-xl font-semibold text-[var(--text-primary)]">
                {item.title}
              </h3>

              <p className="text-sm text-[var(--text-secondary)] mt-2">
                {item.desc}
              </p>

              <div className="mt-4 text-sm text-[var(--text-secondary)]">
                <p><span className="font-semibold">Duration:</span> {item.duration}</p>
                <p><span className="font-semibold">Fee:</span> {item.price}</p>
              </div>

              <button className="mt-6 w-full bg-[var(--accent)] text-white py-2 rounded-lg hover:opacity-90 transition">
                Enroll Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}