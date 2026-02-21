import React from 'react'
import Card from '../component/Reuseable/card'

export default function Home() {
  return (
    <div>
      
    <div className="w-full bg-[#142B4D] to-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Education That <br /> Builds Futures
          </h1>
          <p className="mt-4 text-gray-500 max-w-md">
            Building tomorrow’s tech leaders through excellence,
            empowerment, and collaboration.
          </p>

          <div className="mt-6 inline-flex items-center gap-3 bg-white shadow-md rounded-lg px-5 py-3 border">
            <span className="text-sm text-gray-600">Top Rated Course From</span>
            <span className="font-semibold text-blue-600">5,000+</span>
            <span className="text-sm text-gray-600">Students</span>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center">
          <div className="absolute w-72 h-72 bg-yellow-100 rounded-full -z-10" />
          <img
            src="/student.png"
            alt="Student"
            className="w-72 object-contain"
          />
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 pb-20">
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
      </section>

     
    </div>
  



    </div>
  )
}
