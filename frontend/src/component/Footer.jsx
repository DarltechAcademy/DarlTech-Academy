import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Logo from "../assets/image/logo.png"; // replace with your actual logo path

export default function Footer() {
  return (
    <footer className="bg-[#0b1c3d] text-white pt-16 pb-8 px-0">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Logo & Title */}
        <div className="">
          <img src={Logo} alt="DarTech Logo" className="w-30 h-14 object-contain" />
          {/* <h2 className="text-2xl font-bold">DarTech Institute</h2> */}
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed max-w-xl text-sm">
          We believe in doing extraordinary things — turning bold ideas into
          meaningful impact through innovation, integrity, and relentless curiosity.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4">
          <a href="#" className="bg-blue-600 p-2 rounded-md hover:scale-110 transition">
            <Facebook size={18} />
          </a>
          <a href="#" className="bg-pink-500 p-2 rounded-md hover:scale-110 transition">
            <Instagram size={18} />
          </a>
          <a href="#" className="bg-blue-500 p-2 rounded-md hover:scale-110 transition">
            <Linkedin size={18} />
          </a>
          <a href="#" className="bg-red-500 p-2 rounded-md hover:scale-110 transition">
            <Youtube size={18} />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 w-full my-8"></div>

        {/* Links and Bottom on the same line */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
     

          {/* Copyright */}
          <div>
            © {new Date().getFullYear()} DarTech. All rights reserved.
          </div>

               {/* Links */}
          <div className="flex gap-4  md:mb-0">
            <a href="#" className="hover:text-teal-400 transition">Terms & Conditions</a>
            <a href="#" className="hover:text-teal-400 transition">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}