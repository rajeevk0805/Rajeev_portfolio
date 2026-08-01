import React from 'react';

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Left Indigo Glow */}
      <div 
        className="glow-spot w-[40vw] h-[40vw] bg-brand-600/10 top-[-10%] left-[-10%] animate-pulse-slow"
      />
      {/* Center Right Violet/Pink Glow */}
      <div 
        className="glow-spot w-[50vw] h-[50vw] bg-brand-500/10 top-[25%] right-[-15%] animate-pulse-slow"
        style={{ animationDelay: '2s' }}
      />
      {/* Bottom Left Emerald Glow */}
      <div 
        className="glow-spot w-[45vw] h-[45vw] bg-emerald-500/5 bottom-[-10%] left-[-5%] animate-pulse-slow"
        style={{ animationDelay: '4s' }}
      />
      {/* Small Cyberpunk Accent Spot */}
      <div 
        className="glow-spot w-[30vw] h-[30vw] bg-pink-500/5 top-[60%] left-[20%] animate-pulse-slow"
        style={{ animationDelay: '1s' }}
      />
    </div>
  );
}
