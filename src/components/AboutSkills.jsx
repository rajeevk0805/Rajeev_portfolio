import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, Database, LayoutGrid, Terminal, Calendar, GraduationCap, ChevronRight } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function AboutSkills() {
  const { summary } = resumeData.personalInfo;
  const { languages, frameworks, databases, domain } = resumeData.skills;
  const { education } = resumeData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-brand-400 uppercase tracking-widest mb-2 font-heading">
            About & Skills
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Background & Expertise
          </h3>
          <div className="w-12 h-1 bg-brand-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Summary & Education */}
          <div className="lg:col-span-6 space-y-12">
            
            {/* Biography */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-3xl"
            >
              <h4 className="text-xl font-bold font-heading text-white mb-4 flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-brand-400" />
                <span>My Journey</span>
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {summary}
              </p>
            </motion.div>

            {/* Education Timeline */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 rounded-3xl"
            >
              <h4 className="text-xl font-bold font-heading text-white mb-6 flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-brand-400" />
                <span>Education History</span>
              </h4>
              
              <div className="relative border-l border-brand-500/20 pl-6 ml-3 space-y-8">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle Node */}
                    <span className="absolute -left-[31px] top-1.5 bg-brand-950 border border-brand-500/50 w-4 h-4 rounded-full flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-brand-400 rounded-full"></span>
                    </span>
                    
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-xs text-brand-300 font-semibold">
                        <Calendar className="w-3 h-3" />
                        <span>{edu.period}</span>
                      </div>
                      <h5 className="text-base font-bold text-white font-heading">{edu.degree}</h5>
                      <p className="text-sm text-gray-400">{edu.school}</p>
                      <div className="inline-block mt-2 px-2.5 py-0.5 text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skills */}
          <div className="lg:col-span-6">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              
              {/* Languages */}
              <motion.div variants={itemVariants} className="glass-card p-6 rounded-3xl">
                <h4 className="text-base font-bold text-white font-heading mb-4 flex items-center space-x-2 border-b border-white/5 pb-3">
                  <Terminal className="w-4 h-4 text-brand-400" />
                  <span>Languages</span>
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {languages.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-gray-300">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-brand-950 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-brand-500 to-violet-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Frameworks & Technologies */}
              <motion.div variants={itemVariants} className="glass-card p-6 rounded-3xl">
                <h4 className="text-base font-bold text-white font-heading mb-4 flex items-center space-x-2 border-b border-white/5 pb-3">
                  <Code2 className="w-4 h-4 text-brand-400" />
                  <span>Frameworks & Technologies</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {frameworks.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-gray-300">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-brand-950 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-brand-500 to-violet-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Databases */}
              <motion.div variants={itemVariants} className="glass-card p-6 rounded-3xl">
                <h4 className="text-base font-bold text-white font-heading mb-4 flex items-center space-x-2 border-b border-white/5 pb-3">
                  <Database className="w-4 h-4 text-brand-400" />
                  <span>Databases</span>
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {databases.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-gray-300">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-brand-950 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-brand-500 to-violet-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Domain Competencies */}
              <motion.div variants={itemVariants} className="glass-card p-6 rounded-3xl">
                <h4 className="text-base font-bold text-white font-heading mb-4 flex items-center space-x-2 border-b border-white/5 pb-3">
                  <LayoutGrid className="w-4 h-4 text-brand-400" />
                  <span>Domain Expertise</span>
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {domain.map((dom, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center space-x-1.5 px-3.5 py-2 text-xs sm:text-sm text-gray-300 bg-white/5 border border-white/5 rounded-xl hover:border-brand-500/30 hover:bg-white/10 transition-all duration-300"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
                      <span>{dom}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
