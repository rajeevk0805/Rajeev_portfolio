import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

export default function Experience() {
  const experiences = resumeData.experience;

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden bg-brand-950/20">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-brand-400 uppercase tracking-widest mb-2 font-heading">
            Experience
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Work History
          </h3>
          <div className="w-12 h-1 bg-brand-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden group"
            >
              {/* Top border glowing highlight */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-brand-600 via-violet-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-6 border-b border-white/5">
                <div className="flex items-start space-x-4">
                  {/* Job Icon */}
                  <div className="p-3.5 bg-brand-600/10 rounded-2xl border border-brand-500/20 text-brand-400 mt-1">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold font-heading text-white">
                      {exp.role}
                    </h4>
                    <p className="text-base text-brand-300 font-medium mt-1">
                      {exp.company}
                    </p>
                  </div>
                </div>
                
                {/* Meta details */}
                <div className="flex flex-col space-y-2 text-sm text-gray-400 font-medium md:text-right">
                  <span className="flex items-center md:justify-end space-x-2">
                    <Calendar className="w-4 h-4 text-brand-400" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="flex items-center md:justify-end space-x-2">
                    <MapPin className="w-4 h-4 text-brand-400" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Achievements details */}
              <div className="mt-8 space-y-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-brand-400 flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>Key Accomplishments</span>
                </h5>
                <ul className="grid grid-cols-1 gap-4">
                  {exp.description.map((bullet, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx, duration: 0.4 }}
                      className="flex items-start space-x-3.5 text-sm sm:text-base text-gray-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tag Showcase */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mr-2 self-center">Stack Utilized:</span>
                {["Next.js", "React.js", "Node.js", "MongoDB", "Git", "REST APIs"].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs text-brand-300 bg-brand-500/10 border border-brand-500/20 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
