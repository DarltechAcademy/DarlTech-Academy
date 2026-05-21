import React from "react";
import ConImg from "../assets/image/con2.png";
import ConBg from "../assets/image/conbg.png";

export default function Contact() {
  return (
    <section className="bg-white py-16 px-6">
      <div 
        className="max-w-7xl mx-auto rounded-3xl overflow-hidden grid md:grid-cols-2 shadow-lg"
        style={{
          backgroundImage: `url(${ConBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* LEFT IMAGE */}
        <div className="hidden md:flex items-end justify-center pt-10">
          <img
            src={ConImg}
            alt="Contact Illustration"
            className="w-4/5 max-w-sm object-contain drop-shadow-2xl"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Have any question or confusion? Contact us below!
          </h2>
          
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Fullname"
              className="w-full p-4 rounded-xl bg-white/95 text-[var(--text-primary)] outline-none focus:ring-2 focus:ring-[var(--accent)] transition"
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded-xl bg-white/95 text-[var(--text-primary)] outline-none focus:ring-2 focus:ring-[var(--accent)] transition"
              required
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full p-4 rounded-xl bg-white/95 text-[var(--text-primary)] outline-none focus:ring-2 focus:ring-[var(--accent)] transition resize-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[var(--accent)] text-white py-4 rounded-xl font-bold hover:bg-[var(--accent-hover)] transition mt-2 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}