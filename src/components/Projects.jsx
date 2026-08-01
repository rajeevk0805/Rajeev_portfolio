import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, Calendar, ShoppingCart, CheckSquare, Settings } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { resumeData } from '../data/resumeData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const projects = resumeData.projects;

  const filters = ['All', 'React', 'Next.js', 'Full Stack'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter));

  // Helper to match an icon to the project
  const getProjectIcon = (title) => {
    switch (title) {
      case 'Task Manager':
        return <CheckSquare className="w-6 h-6 text-brand-400" />;
      case 'NexEvent':
        return <Calendar className="w-6 h-6 text-brand-400" />;
      case 'MassWindoor':
        return <Settings className="w-6 h-6 text-brand-400" />;
      case 'Kirana Bazaar':
        return <ShoppingCart className="w-6 h-6 text-brand-400" />;
      default:
        return <Layers className="w-6 h-6 text-brand-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-base font-semibold text-brand-400 uppercase tracking-widest mb-2 font-heading">
            Projects
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Recent Work Showcase
          </h3>
          <div className="w-12 h-1 bg-brand-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 max-w-xl mx-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-brand-600 border-brand-500 text-white shadow-lg shadow-brand-600/20'
                  : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="glass-card rounded-3xl overflow-hidden flex flex-col h-full group relative"
              >
                {/* Visual Accent Header */}
                <div className="h-2 bg-gradient-to-r from-brand-600 via-violet-500 to-indigo-700"></div>

                {/* Project Screenshot */}
                {project.image && (
                  <div className="relative aspect-video w-full overflow-hidden bg-brand-950 border-b border-white/5">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 to-transparent pointer-events-none"></div>
                  </div>
                )}

                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  
                  {/* Card Title & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-brand-600/10 rounded-2xl border border-brand-500/20">
                        {getProjectIcon(project.title)}
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-brand-300 transition-colors">
                        {project.title}
                      </h4>
                    </div>
                    
                    {/* Action Links */}
                    <div className="flex space-x-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white border border-white/5 transition-all duration-300"
                        title="View Source Code"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white border border-white/5 transition-all duration-300"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-3.5 text-sm text-gray-300 mt-4 flex-grow">
                    {project.highlights.map((bullet, index) => (
                      <li key={index} className="flex items-start space-x-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 shrink-0"></span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies tags */}
                  <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Tech Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.filter(tag => tag !== 'Full Stack').map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs text-brand-300 bg-brand-500/10 border border-brand-500/20 rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {/* Extract elements from project.technologies and map them to tags if they aren't duplicate */}
                      {project.technologies.split(', ').map(tech => {
                        // avoid showing duplicate tags
                        if (project.tags.includes(tech)) return null;
                        return (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-lg font-medium"
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
