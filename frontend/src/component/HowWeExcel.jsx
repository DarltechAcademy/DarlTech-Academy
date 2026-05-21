import {
  BookOpen,
  Lightbulb,
  Users,
  Briefcase,
  Award,
} from "lucide-react";

export default function HowWeExcel() {
  const features = [
    {
      id: "01",
      title: "What We Teach",
      icon: BookOpen,
      description:
        "We keep an eye on what's popular in the industry, making sure to teach the most in-demand technology and skills.",
    },
    {
      id: "02",
      title: "How We Teach",
      icon: Lightbulb,
      description:
        "We make sure you have many opportunities to learn and practice in an experiential learning environment. You learn by doing.",
    },
    {
      id: "03",
      title: "Who Teaches",
      icon: Users,
      description:
        "Our instructional staff are industry veterans. They are developers themselves and they care about your success.",
    },
    {
      id: "04",
      title: "How We Support You",
      icon: Briefcase,
      description:
        "Throughout the bootcamp, you'll have access to videos, assignments, instructors, and student support specialists.",
    },
    {
      id: "05",
      title: "Mastery Guaranteed",
      icon: Award,
      description:
        "We focus on teaching you how to problem solve because we know that arriving at an answer is more than knowing how to find it.",
    },
  ];

  return (
    <section className="bg-[var(--bg-section)] py-20 px-6 lg:px-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
          How We Claim to Excel?
        </h2>
        <p className="mt-4 text-[var(--text-secondary)] max-w-xl">
          Our goal is to help you become a self-sufficient developer.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-[var(--bg-card)] p-8 rounded-2xl 
                         border border-[var(--border-light)] 
                         shadow-[var(--shadow-soft)] 
                         hover:shadow-[var(--shadow-medium)] 
                         transition duration-300 group"
            >
              {/* Top Row */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold text-[var(--accent)]">
                  {item.id}
                </span>

                <div className="w-10 h-10 rounded-full 
                                bg-[var(--accent-light)]/20
                                flex items-center justify-center 
                                group-hover:scale-110 
                                transition float">
                  <Icon className="w-5 h-5 text-[var(--accent)]" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--text-muted)] leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}