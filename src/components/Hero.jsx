import React from 'react';
import { Mail, FileText, ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

export default function Hero() {
  const { name, title, subTitle, github, linkedin, email, summary } = resumeData.personalInfo;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-6">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Info Column */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col space-y-6 text-left"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass border border-brand-500/30 text-brand-300 w-fit text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-brand-400" />
            <span>Open to Work • Bangalore</span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h2 className="text-xl md:text-2xl font-medium text-brand-400 font-heading">
              Hi, I am
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading tracking-tight text-white leading-tight">
              <span className="text-gradient font-extrabold">{name}</span>
            </h1>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-200 mt-2">
              Full Stack Web Developer
            </h3>
          </motion.div>

          {/* Intro Description */}
          <motion.p variants={itemVariants} className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
            {summary}
          </motion.p>

          {/* Actions */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center pt-4">
            <a
              href="#projects"
              className="group px-6 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-2xl flex items-center space-x-2 shadow-lg shadow-brand-600/20 hover:shadow-brand-600/40 transition-all duration-300 hover:-translate-y-0.5 border border-brand-400/20"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#contact"
              className="px-6 py-3.5 glass hover:bg-white/10 text-white font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-0.5 border border-white/10 hover:border-white/20"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Socials & Download CV */}
          <motion.div variants={itemVariants} className="flex items-center space-x-6 pt-6 border-t border-white/5 max-w-xl">
            <div className="flex space-x-4">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white transition-colors border border-white/5"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white transition-colors border border-white/5"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${email}`}
                className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white transition-colors border border-white/5"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <div className="h-8 w-px bg-white/10"></div>
            
            <a
              href="#contact"
              className="flex items-center space-x-2 text-sm font-semibold text-brand-300 hover:text-brand-200 transition-colors group"
            >
              <FileText className="w-4 h-4 text-brand-400 group-hover:scale-110 transition-transform" />
              <span>Get Resume</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Graphic Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center w-full"
        >
          {/* Mock IDE Window */}
          <div className="w-full max-w-md glass border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-brand-950/40 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/5 to-transparent pointer-events-none"></div>
            
            {/* Header bar */}
            <div className="bg-brand-950/40 px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-500 font-mono">
                <Terminal className="w-3.5 h-3.5" />
                <span>rajeev_profile.js</span>
              </div>
              <div className="w-10"></div>
            </div>
            
            {/* Code Body */}
            <div className="p-6 text-left font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-gray-300">
              <div>
                <span className="text-pink-400">const</span> <span className="text-blue-300">developer</span> = &#123;
              </div>
              <div className="pl-4">
                <span className="text-gray-400">name:</span> <span className="text-emerald-300">"{name}"</span>,
              </div>
              <div className="pl-4">
                <span className="text-gray-400">role:</span> <span className="text-emerald-300">"Full Stack Web Developer"</span>,
              </div>
              <div className="pl-4">
                <span className="text-gray-400">skills:</span> &#91;
              </div>
              <div className="pl-8 text-brand-300">
                "React.js", "Next.js", "Node.js",
              </div>
              <div className="pl-8 text-brand-300">
                "Spring Boot", "MongoDB", "SQL"
              </div>
              <div className="pl-4">&#93;,</div>
              <div className="pl-4">
                <span className="text-gray-400">location:</span> <span className="text-emerald-300">"Bangalore, IN"</span>,
              </div>
              <div className="pl-4">
                <span className="text-gray-400">availability:</span> <span className="text-emerald-300">"Immediate"</span>,
              </div>
              <div className="pl-4">
                <span className="text-gray-400">passionateAbout:</span> <span className="text-yellow-200">()</span> <span className="text-pink-400">=&gt;</span> &#123;
              </div>
              <div className="pl-8 text-blue-400">
                <span className="text-pink-400">return</span> <span className="text-emerald-300">"Building clean, scalable apps"</span>;
              </div>
              <div className="pl-4">&#125;</div>
              <div>&#125;;</div>
              
              <div className="mt-4 border-t border-white/5 pt-4">
                <div className="text-gray-500">// Output: console.log(developer.passionateAbout())</div>
                <div className="text-emerald-400 mt-1 flex items-center space-x-1">
                  <span>&gt;</span> 
                  <span className="text-white">"Building clean, scalable apps"</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
