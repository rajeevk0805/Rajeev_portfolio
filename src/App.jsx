import React from 'react';
import BackgroundGlow from './components/BackgroundGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen text-gray-300 bg-[#05020d] selection:bg-brand-600/30 selection:text-white">
      {/* Dynamic Background Glowing Spots */}
      <BackgroundGlow />

      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="relative z-10">
        <Hero />
        <AboutSkills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
