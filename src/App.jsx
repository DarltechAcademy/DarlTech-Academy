// import React from 'react'
import './App.css'
// // import Navbar from './component/Navbar'
// import Home from './Pages/Home'
// // import Howitwork from './component/Howitwork'
// export default function App() {
//   return (
//     <div>
//       {/* <Navbar/> */}
//       <Home/>
//       {/* <Howitwork/> */}
//     </div>
//   )
// }


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Regular from "./Pages/Regular";
import Program from "./Pages/Programme";
import Testimonials from "./Pages/Testimonia";
import FAQ from "./Pages/Faq";
import Home from "./Pages/Home";
import Bootcamp from './Pages/Bootsmap';
import ApplyPage from './Pages/Apply';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading on first app render
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[var(--bg-main)]">
        <div className="flex flex-col items-center">
          {/* Spinner */}
          <div className="w-16 h-16 border-4 border-[var(--accent-light)] border-t-[var(--accent)] rounded-full animate-spin float"></div>
          {/* Loading Text */}
          <p className="mt-4 text-[var(--text-primary)] font-semibold animate-pulse">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bootcamp" element={<Bootcamp />} />
        <Route path="/regular" element={<Regular />} />
        <Route path="/program" element={<Program />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}