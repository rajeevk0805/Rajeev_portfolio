import React from 'react';
import { Award, ShieldCheck, ExternalLink, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

export default function Certifications() {
  const certifications = resumeData.certifications;

  return (
    <section id="certifications" className="py-24 px-6 relative overflow-hidden bg-brand-950/10">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-brand-400 uppercase tracking-widest mb-2 font-heading">
            Achievements
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Certifications & Training
          </h3>
          <div className="w-12 h-1 bg-brand-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Corner ambient glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/5 rounded-full filter blur-xl group-hover:bg-brand-500/10 transition-colors pointer-events-none"></div>

              <div>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3.5 bg-brand-600/10 rounded-2xl border border-brand-500/20 text-brand-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex items-center space-x-1.5 text-xs text-gray-400 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full">
                    <Calendar className="w-3.5 h-3.5 text-brand-400" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h4 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-brand-300 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-sm font-semibold text-brand-300">
                    {cert.provider}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed mt-2">
                    {cert.details}
                  </p>
                </div>
              </div>

              {/* Verified Badge footer */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Verified Credentials</span>
                </div>
                <span className="text-xs text-gray-500 hover:text-white transition-colors cursor-default">
                  Reference: Completed
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
