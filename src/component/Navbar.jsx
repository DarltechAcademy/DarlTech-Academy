import React from 'react'
import Logo from "../assets/image/logo.png"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-blue-950 mx-10 font-poppins font-normal text-base leading-none tracking-[0.02em] rounded-4xl py-1 px-3">
      <img src={Logo} alt="Logo" className="h-10 w-auto" />

      <div>
        <ul className="flex gap-7 text-white">
          <li>Bootcamp</li>
          <li>Regular</li>
          <li>Program</li>
          <li>Testimonials</li>
          <li>FAQ</li>
          <li>Apply for Bootcamp</li>
        </ul>
      </div>
    </nav>
  )
}
