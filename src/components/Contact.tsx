"use client";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="w-full bg-[#050505] py-20 px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 overflow-hidden font-poppins">
      
      {/* Top Divider Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        
        {/* --- COLUMN 1: Text Info & Direct Contact (Left) --- */}
        <div className="lg:col-span-4 flex flex-col items-start text-left">
          
          <p className="text-amber-500 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3">
            LET'S BUILD TOGETHER
          </p>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-[1.15]">
            Let's build your <br />
            next <span className="text-cyan-400">big</span> <span className="text-amber-500">idea.</span>
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
            Have a project in mind? Let's create something amazing together.
          </p>

          {/* Contact Details Info */}
          <div className="flex flex-col gap-4 text-gray-300 w-full">
            <a href="mailto:hello@apianstack.com" className="flex items-center gap-3.5 group hover:text-amber-400 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 group-hover:bg-amber-500/20 transition-all shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <span className="text-sm font-medium">hello@apianstack.com</span>
            </a>

            <a href="tel:+921234567890" className="flex items-center gap-3.5 group hover:text-amber-400 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 group-hover:bg-amber-500/20 transition-all shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <span className="text-sm font-medium">+92 123 456 7890</span>
            </a>
          </div>

        </div>

        {/* --- COLUMN 2: Form Card (Center) --- */}
        <div className="lg:col-span-5 w-full">
          {/* Form Container Border එක Send Message Button එකේ වර්ණයටම සමාන කර ඇත (border-amber-500/60) */}
          <div className="bg-[#0b0c10] border border-amber-500/60 rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(245,158,11,0.08)] backdrop-blur-xl relative">
            
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-[#121319] border border-gray-800/90 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-amber-500/60 transition-colors placeholder:text-gray-500"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-[#121319] border border-gray-800/90 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-amber-500/60 transition-colors placeholder:text-gray-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Company Name" 
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="bg-[#121319] border border-gray-800/90 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-amber-500/60 transition-colors placeholder:text-gray-500"
                />
                <input 
                  type="tel" 
                  placeholder="Your Phone" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-[#121319] border border-gray-800/90 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-amber-500/60 transition-colors placeholder:text-gray-500"
                />
              </div>

              <textarea 
                rows={4} 
                placeholder="Project Details" 
                required
                value={formData.details}
                onChange={(e) => setFormData({...formData, details: e.target.value})}
                className="bg-[#121319] border border-gray-800/90 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-amber-500/60 transition-colors resize-none placeholder:text-gray-500"
              />

              <button 
                type="submit" 
                className="mt-2 w-full py-3.5 rounded-xl bg-[#16140e] border border-amber-500/80 hover:border-amber-400 text-amber-400 font-semibold text-sm tracking-wide transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.15)] hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Send Message</span>
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </form>

          </div>
        </div>

        {/* --- COLUMN 3: Isometric Graphic (Right) --- */}
        <div className="lg:col-span-3 w-full flex items-center justify-center relative py-12 lg:py-0">
          
          {/* Glowing Backdrop */}
          <div className="absolute w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-tr from-amber-500/10 via-amber-500/5 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Isometric 3-Layer Stack Vector */}
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] aspect-[5/6] flex items-center justify-center">
            <svg viewBox="0 0 300 360" className="w-full h-full drop-shadow-[0_0_25px_rgba(245,158,11,0.15)]">
              
              <defs>
                {/* SVG Glow Filters for Nodes */}
                <filter id="glow-orange" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Connecting Dashed Vertical Lines */}
              <g stroke="#ffffff" strokeWidth="1" strokeDasharray="2 3" strokeOpacity="0.2">
                <line x1="150" y1="20" x2="150" y2="190" />
                <line x1="30" y1="90" x2="30" y2="260" />
                <line x1="270" y1="90" x2="270" y2="260" />
                <line x1="150" y1="90" x2="150" y2="260" />
                <line x1="150" y1="160" x2="150" y2="330" />
              </g>

              {/* LAYER 3 (Bottom - Cyan/Blue) */}
              <g stroke="#06b6d4" strokeWidth="1.5">
                <polygon points="150,190 270,260 150,330 30,260" fill="#06b6d4" fillOpacity="0.1" />
                <line x1="90" y1="225" x2="210" y2="295" strokeOpacity="0.5" />
                <line x1="210" y1="225" x2="90" y2="295" strokeOpacity="0.5" />
                <circle cx="150" cy="190" r="3" fill="#22d3ee" stroke="none" />
                <circle cx="30" cy="260" r="4.5" fill="#22d3ee" stroke="none" filter="url(#glow-cyan)" />
                <circle cx="270" cy="260" r="4.5" fill="#22d3ee" stroke="none" filter="url(#glow-cyan)" />
                <circle cx="150" cy="330" r="4.5" fill="#22d3ee" stroke="none" filter="url(#glow-cyan)" />
                <circle cx="150" cy="260" r="5" fill="#67e8f9" stroke="none" filter="url(#glow-cyan)" />
              </g>

              {/* LAYER 2 (Middle - Send Message Button Outline Color: #f59e0b) */}
              <g stroke="#f59e0b" strokeWidth="1.5">
                <polygon points="150,105 270,175 150,245 30,175" fill="#f59e0b" fillOpacity="0.08" />
                <line x1="90" y1="140" x2="210" y2="210" strokeOpacity="0.5" />
                <line x1="210" y1="140" x2="90" y2="210" strokeOpacity="0.5" />
                <circle cx="150" cy="105" r="3" fill="#f59e0b" stroke="none" />
                <circle cx="30" cy="175" r="4" fill="#f59e0b" stroke="none" filter="url(#glow-orange)" />
                <circle cx="270" cy="175" r="4" fill="#f59e0b" stroke="none" filter="url(#glow-orange)" />
                <circle cx="150" cy="245" r="4" fill="#f59e0b" stroke="none" filter="url(#glow-orange)" />
                <circle cx="150" cy="175" r="5" fill="#fcd34d" stroke="none" filter="url(#glow-orange)" />
              </g>

              {/* LAYER 1 (Top - Send Message Button Outline Color: #f59e0b) */}
              <g stroke="#f59e0b" strokeWidth="1.5">
                <polygon points="150,20 270,90 150,160 30,90" fill="#f59e0b" fillOpacity="0.06" />
                <line x1="90" y1="55" x2="210" y2="125" strokeOpacity="0.5" />
                <line x1="210" y1="55" x2="90" y2="125" strokeOpacity="0.5" />
                <circle cx="150" cy="20" r="3" fill="#f59e0b" stroke="none" />
                <circle cx="30" cy="90" r="3.5" fill="#f59e0b" stroke="none" filter="url(#glow-orange)" />
                <circle cx="270" cy="90" r="3.5" fill="#f59e0b" stroke="none" filter="url(#glow-orange)" />
                <circle cx="150" cy="160" r="3.5" fill="#f59e0b" stroke="none" filter="url(#glow-orange)" />
                <circle cx="150" cy="90" r="4" fill="#fcd34d" stroke="none" filter="url(#glow-orange)" />
              </g>

            </svg>
          </div>

        </div>

      </div>
    </section>
  );
}