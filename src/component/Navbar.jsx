import React, { useEffect, useState } from "react";
import Logo from "../assets/image/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 240) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled 
        ? "bg-white shadow-md py-3" 
        : "bg-[var(--primary)] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* Logo */}
        <img src={Logo} alt="Logo" className="h-10 w-auto" />

        {/* Menu */}
        <ul
          className={`flex items-center gap-7 text-base font-normal transition-colors duration-300
          ${scrolled ? "text-[var(--text-primary)]" : "text-white"}`}
        >
          <li className="cursor-pointer hover:text-[var(--accent)] transition">
            Bootcamp
          </li>
          <li className="cursor-pointer hover:text-[var(--accent)] transition">
            Regular
          </li>
          <li className="cursor-pointer hover:text-[var(--accent)] transition">
            Program
          </li>
          <li className="cursor-pointer hover:text-[var(--accent)] transition">
            Testimonials
          </li>
          <li className="cursor-pointer hover:text-[var(--accent)] transition">
            FAQ
          </li>

          <li>
            <button className="rounded-full bg-[var(--btn-primary-bg)] px-5 py-2 text-sm text-white transition hover:bg-[var(--btn-primary-hover)]">
              Apply for Bootcamp
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}