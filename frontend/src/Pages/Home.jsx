import React from "react";
import Card from "../component/Reuseable/card";
import Navbar from "../component/Navbar";
import Img from "../assets/image/img2.png"
import { Code, Rocket, Briefcase, Star } from "lucide-react";
import Engineer from "../component/engineer";
import Learn from "../component/Learn";
import HowWeExcel from "../component/HowWeExcel";
import Howitwork from "../component/Howitwork";
import FAQ from "../component/Faq";
import CourseStacks from "../component/course";
import Contact from "../component/Contact";


export default function Home() {
  return (
    <div className="bg-(--bg-main)] text-(--text-primary)">
    

      {/* HERO SECTION */}
      <section className="bg-(--bg-dark)">
          <Navbar/>
        <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-19 flex flex-col md:flex-row justify-between items-center gap-12">

          {/* Left */}
          <div className="text-center md:text-left pt-12 md:pt-0">
            <h1 className="text-5xl md:text-6xl lg:text-[90px] font-semibold leading-tight text-[var(--text-light)]">
              Education That <br className="hidden md:block" /> Builds Futures
            </h1>

            <p className="mt-6 text-[var(--text-muted)] text-lg md:text-2xl max-w-xl mx-auto md:mx-0">
              Building tomorrow’s tech leaders through excellence,
              empowerment, and collaboration.
            </p>
          </div>

          {/* Right */}
          <div className="relative flex justify-center items-center w-full md:w-1/2">
            {/* Background Circles */}
            <div className="absolute w-60 h-60 md:w-80 md:h-80 bg-[var(--accent-light)] opacity-40 blur-3xl rounded-full z-0 top-0 left-0" />
            <div className="absolute w-60 h-60 md:w-80 md:h-80 bg-[var(--accent-light)] opacity-40 blur-3xl rounded-full z-0 bottom-10 right-0" />

            {/* Floating Icons */}
            <div className="hidden sm:block absolute top-10 left-10 bg-white p-3 rounded-full shadow-md animate-float">
              <Code className="text-[var(--primary)] w-5 h-5 md:w-6 md:h-6" />
            </div>

            <div className="hidden sm:block absolute top-20 right-4 md:right-16 bg-white p-3 rounded-full shadow-md animate-float">
              <Rocket className="text-[var(--accent)] w-5 h-5 md:w-6 md:h-6" />
            </div>

            <div className="hidden sm:block absolute bottom-16 left-4 md:left-16 bg-white p-3 rounded-full shadow-md animate-float">
              <Briefcase className="text-[var(--primary)] w-5 h-5 md:w-6 md:h-6" />
            </div>

            <div className="hidden sm:block absolute bottom-10 right-10 bg-white p-3 rounded-full shadow-md animate-float">
              <Star className="text-yellow-400 w-5 h-5 md:w-6 md:h-6" />
            </div>

            {/* Image */}
            <img
              src={Img}
              alt="Student"
              className="relative z-10 w-full max-w-md object-contain"
            />

            <div className="mt-6 gap-3 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-[60px] shadow-[-5px_-5px_250px_0px_#FFFFFF05_inset] rounded-lg px-6 md:px-12 py-4 absolute -bottom-6 z-20 text-center w-[90%] md:w-auto">
              <span className="font-semibold text-lg md:text-3xl text-[var(--text-secondary)]">
                Top Rated Course From
              </span><br />
              <span className="font-semibold text-xl md:text-2xl text-[var(--accent)] mr-2">
                5,000+
              </span>
              <span className="text-lg md:text-3xl text-[var(--text-secondary)]">
                Students
              </span>
            </div>
          </div>
        </div>
         <section className="py-9">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">

    <Card
      icon={Code}
      title="Learn at your own pace"
      desc="Access wide range of tech courses."
    />

    <Card
      icon={Rocket}
      title="Flexible Learning"
      desc="Study anytime, anywhere at your convenience."
    />

    <Card
      icon={Briefcase}
      title="Build Your Future"
      desc="Gain skills that employers want."
    />



  </div>
</section>
      </section>

     
     <Learn/>
  <Howitwork/>
  <Engineer/>
  <HowWeExcel/>
  <FAQ/>
  <CourseStacks/>
  <Contact/>

    </div>
  
  );
}