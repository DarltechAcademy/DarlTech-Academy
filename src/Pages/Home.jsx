import React from "react";
import Card from "../component/Reuseable/card";
import Navbar from "../component/Navbar";
import Img from "../assets/image/img2.png"
import { Code, Rocket, Briefcase, Star } from "lucide-react";
import Engineer from "../component/engineer";
import Learn from "../component/Learn";

export default function Home() {
  return (
    <div className="bg-(--bg-main)] text-(--text-primary)">
    

      {/* HERO SECTION */}
      <section className="bg-(--bg-dark)">
          <Navbar/>
        <div className=" w-full mx-auto px-6 py-19 flex justify-between  items-center">

          {/* Left */}
          <div className="">
            <h1 className="text-[90px] font-semibold leading-tight text-(--text-light) ">
              Education That <br /> Builds Futures
            </h1>

            <p className="mt-4  text-(--text-muted) text-2xl">
              Building tomorrow’s tech leaders through excellence,<br />
              empowerment, and collaboration.
            </p>

           
          </div>

          {/* Right */}


<div className="relative flex justify-center items-center">

  {/* Background Circles */}
  <div className="absolute w-80 h-80 bg-[var(--accent-light)] opacity-40 blur-3xl rounded-full z-0 top-0 left-0" />
  <div className="absolute w-80 h-80 bg-[var(--accent-light)] opacity-40 blur-3xl rounded-full z-0 bottom-10 right-0" />

  {/* Floating Icons */}
  <div className="absolute top-10 left-10 bg-white p-3 rounded-full shadow-md animate-float">
    <Code className="text-[var(--primary)] w-6 h-6" />
  </div>

  <div className="absolute top-20 right-16 bg-white p-3 rounded-full shadow-md animate-float">
    <Rocket className="text-[var(--accent)] w-6 h-6" />
  </div>

  <div className="absolute bottom-16 left-16 bg-white p-3 rounded-full shadow-md animate-float">
    <Briefcase className="text-[var(--primary)] w-6 h-6" />
  </div>

  <div className="absolute bottom-10 right-10 bg-white p-3 rounded-full shadow-md animate-float">
    <Star className="text-yellow-400 w-6 h-6" />
  </div>

  {/* Image */}
  <img
    src={Img}
    alt="Student"
    className="relative z-10 w-fit object-contain"
  />

 <div className="mt-6   gap-3 bg-gradient-to-r
    from-white/5
    to-transparent
    backdrop-blur-[60px]
    shadow-[-5px_-5px_250px_0px_#FFFFFF05_inset] rounded-lg px-22 py-4 absolute bottom-0 z-10  text-center">
              <span className="font-semibold text-3xl text-(--text-secondary)]">
                Top Rated Course From
              </span><br />
              <span className="font-semibold  text-2xl text-(--accent)">
                5,000+
              </span>
              <span className="  text-3xl text-(--text-secondary)">
                Students
              </span>
            </div>
</div>

        </div>
         <section className=" py-9">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">

          <Card
            title="Learn at your own pace"
            desc="Access wide range of tech courses."
          />

          <Card
            title="Flexible Learning"
            desc="Study anytime, anywhere at your convenience."
          />

          <Card
            title="Build Your Future"
            desc="Gain skills that employers want."
          />

        </div>
      </section>
      </section>

     
     
  <Engineer/>
    </div>
  
  );
}