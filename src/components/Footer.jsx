import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Footer() {
  const { name } = resumeData.personalInfo;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5 relative z-10 bg-brand-950/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side */}
        <div className="flex items-center space-x-2 text-gray-500 text-sm">
          <Code2 className="w-4 h-4 text-brand-400" />
          <span>&copy; {currentYear} {name}. All rights reserved.</span>
        </div>

        {/* Center Text */}
        <p className="text-xs text-gray-500 font-medium">
          Designed with ❤️ and built using React, Tailwind CSS, &amp; Framer Motion.
        </p>

        {/* Scroll back to top */}
        <a
          href="#home"
          className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white border border-white/5 transition-all duration-300 group"
          title="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </a>

      </div>
    </footer>
  );
}
