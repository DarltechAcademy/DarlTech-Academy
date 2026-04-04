import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/image/logo.png";
import Logo1 from "../assets/image/logo12.png"; // 👈 second logo

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 240);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  const linkClass = ({ isActive }) =>
    `transition duration-300 hover:text-[var(--accent)] ${
      isActive ? "text-[var(--accent)] font-semibold" : ""
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-[var(--primary)] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        
        {/* Logo (changes on scroll) */}
        <NavLink to="/">
          <img
            src={scrolled ? Logo1 : Logo}
            alt="DarlTech Logo"
            className="h-10 w-auto transition duration-300"
          />
        </NavLink>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex gap-7 items-center transition-colors duration-300 ${
            scrolled ? "text-[var(--text-primary)]" : "text-white"
          }`}
        >
          <NavLink to="/bootcamp" className={linkClass}>Bootcamp</NavLink>
          <NavLink to="/regular" className={linkClass}>Regular Program</NavLink>
          {/* <NavLink to="/program" className={linkClass}>Program</NavLink> */}
          <NavLink to="/testimonials" className={linkClass}>Testimonials</NavLink>
          <NavLink to="/faq" className={linkClass}>FAQ</NavLink>

          <NavLink to="/apply">
            <button className="rounded-full bg-[var(--btn-primary-bg)] px-5 py-2 text-sm text-white hover:bg-[var(--btn-primary-hover)] transition">
              Apply
            </button>
          </NavLink>
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {open ? (
            <X
              size={28}
              onClick={() => setOpen(false)}
              className={`cursor-pointer ${
                scrolled ? "text-[var(--text-primary)]" : "text-white"
              }`}
            />
          ) : (
            <Menu
              size={28}
              onClick={() => setOpen(true)}
              className={`cursor-pointer ${
                scrolled ? "text-[var(--text-primary)]" : "text-white"
              }`}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md py-6 px-6 space-y-4 text-[var(--text-primary)]">
          <NavLink to="/bootcamp">Bootcamp</NavLink>
          <NavLink to="/regular">Regular</NavLink>
          <NavLink to="/program">Program</NavLink>
          <NavLink to="/testimonials">Testimonials</NavLink>
          <NavLink to="/faq">FAQ</NavLink>

          <NavLink to="/apply">
            <button className="w-full rounded-full bg-[var(--btn-primary-bg)] px-5 py-2 text-sm text-white hover:bg-[var(--btn-primary-hover)] transition">
              Apply
            </button>
          </NavLink>
        </div>
      )}
    </nav>
  );
}