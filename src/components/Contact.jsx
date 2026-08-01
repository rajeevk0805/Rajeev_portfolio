import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Contact() {
  const { email, phone, location, linkedin, github } = resumeData.personalInfo;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: string }

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email format is invalid.";
    }
    
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required.";
    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      showToast('error', 'Please correct the errors in the form.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      showToast('success', 'Message sent successfully! Rajeev will get back to you shortly.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1800);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear field-specific error as they type
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-brand-400 uppercase tracking-widest mb-2 font-heading">
            Connect
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Get In Touch
          </h3>
          <div className="w-12 h-1 bg-brand-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Info Card Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="glass-card p-8 rounded-3xl h-full flex flex-col justify-between">
              
              <div>
                <h4 className="text-xl font-bold font-heading text-white mb-2">
                  Let's discuss something new
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-8">
                  Always open to full-time engineering roles, freelance opportunities, or technical collaborations. Drop me a line!
                </p>
                
                {/* Contact list */}
                <div className="space-y-6">
                  {/* Email */}
                  <a 
                    href={`mailto:${email}`} 
                    className="flex items-center space-x-4 p-3 bg-white/5 border border-white/5 rounded-2xl hover:border-brand-500/30 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-brand-600/10 rounded-xl border border-brand-500/20 text-brand-400 group-hover:bg-brand-600/20 group-hover:text-brand-300 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Email Me</div>
                      <div className="text-sm text-white font-medium break-all mt-0.5">{email}</div>
                    </div>
                  </a>

                  {/* Phone */}
                  <a 
                    href={`tel:${phone}`}
                    className="flex items-center space-x-4 p-3 bg-white/5 border border-white/5 rounded-2xl hover:border-brand-500/30 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-brand-600/10 rounded-xl border border-brand-500/20 text-brand-400 group-hover:bg-brand-600/20 group-hover:text-brand-300 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Call Me</div>
                      <div className="text-sm text-white font-medium mt-0.5">{phone}</div>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center space-x-4 p-3 bg-white/5 border border-white/5 rounded-2xl">
                    <div className="p-3 bg-brand-600/10 rounded-xl border border-brand-500/20 text-brand-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Location</div>
                      <div className="text-sm text-white font-medium mt-0.5">{location}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social icons bottom footer */}
              <div className="pt-8 border-t border-white/5 mt-8 flex items-center space-x-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mr-2">Profiles:</span>
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs font-semibold text-brand-300 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <span className="text-gray-600">•</span>
                <a 
                  href={linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs font-semibold text-brand-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>

            </div>
          </div>

          {/* Form Card Column */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-2xl text-white text-sm font-medium focus:outline-none transition-colors ${
                      errors.name 
                        ? 'border-red-500/50 focus:border-red-500' 
                        : 'border-white/10 focus:border-brand-500 focus:bg-white/10'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-xs text-red-400 font-medium mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-2xl text-white text-sm font-medium focus:outline-none transition-colors ${
                      errors.email 
                        ? 'border-red-500/50 focus:border-red-500' 
                        : 'border-white/10 focus:border-brand-500 focus:bg-white/10'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-400 font-medium mt-1">{errors.email}</p>}
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label htmlFor="subject" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-2xl text-white text-sm font-medium focus:outline-none transition-colors ${
                      errors.subject 
                        ? 'border-red-500/50 focus:border-red-500' 
                        : 'border-white/10 focus:border-brand-500 focus:bg-white/10'
                    }`}
                    placeholder="Collaboration Opportunity"
                  />
                  {errors.subject && <p className="text-xs text-red-400 font-medium mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-2xl text-white text-sm font-medium focus:outline-none transition-colors resize-none ${
                      errors.message 
                        ? 'border-red-500/50 focus:border-red-500' 
                        : 'border-white/10 focus:border-brand-500 focus:bg-white/10'
                    }`}
                    placeholder="Your message details..."
                  ></textarea>
                  {errors.message && <p className="text-xs text-red-400 font-medium mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-brand-600 hover:bg-brand-500 disabled:bg-brand-700/50 text-white font-semibold rounded-2xl flex items-center justify-center space-x-2 transition-all duration-300 disabled:cursor-not-allowed border border-brand-400/20 mt-4 shadow-lg shadow-brand-600/10"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bottom-6 right-6 z-50 flex items-center space-x-3 px-5 py-4 rounded-2xl shadow-xl glass max-w-sm ${
              toast.type === 'success' ? 'border-emerald-500/30' : 'border-red-500/30'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
            )}
            <p className="text-sm font-medium text-white">{toast.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
