import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";

export default function ApplyPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
    

      {/* Hero */}
      <section className="bg-blue-50 py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Launch Your Tech Career Today!
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Join DarlTech Academy intensive bootcamp programs in Web
          Development, Mobile Apps, Data Analysis, Cyber Security, and
          more. Become job-ready in weeks!
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/auth")}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Apply Now <ArrowRight size={18} />
          </button>

          <button
            onClick={() => navigate("/bootcamp")}
            className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Learn More <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>
            © {new Date().getFullYear()} DarlTech Academy. All rights
            reserved.
          </p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <Facebook size={20} />
            <Instagram size={20} />
            <Linkedin size={20} />
          </div>
        </div>
      </footer>
    </div>
  );
}