"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Frontend Layer",
      subtitle: "Beautiful. Responsive. Intuitive.",
      titleColor: "text-amber-400",
      checkColor: "text-amber-400",
      borderColor: "border-amber-500/20 hover:border-amber-500/50",
      glowColor: "hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
      items: ["UI/UX Design", "Responsive Web Apps", "Mobile App Development"],
      graphic: (
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center shrink-0">
          {/* Gold Ambient Glow */}
          <div className="absolute inset-0 bg-amber-500/10 blur-2xl rounded-full" />
          
          <svg viewBox="0 0 160 160" className="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">
            <defs>
              <linearGradient id="gold-top" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="gold-side" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#78350f" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            
            {/* Top Plate */}
            <g transform="translate(0, 0)">
              <polygon points="80,25 125,47.5 80,70 35,47.5" fill="url(#gold-top)" stroke="#fbbf24" strokeWidth="1.5" />
              <polygon points="35,47.5 80,70 80,76 35,53.5" fill="url(#gold-side)" />
              <polygon points="125,47.5 80,70 80,76 125,53.5" fill="url(#gold-side)" />
            </g>

            {/* Middle Plate */}
            <g transform="translate(0, 30)">
              <polygon points="80,25 125,47.5 80,70 35,47.5" fill="url(#gold-top)" stroke="#fbbf24" strokeWidth="1.5" />
              <polygon points="35,47.5 80,70 80,76 35,53.5" fill="url(#gold-side)" />
              <polygon points="125,47.5 80,70 80,76 125,53.5" fill="url(#gold-side)" />
            </g>

            {/* Bottom Plate */}
            <g transform="translate(0, 60)">
              <polygon points="80,25 125,47.5 80,70 35,47.5" fill="url(#gold-top)" stroke="#fbbf24" strokeWidth="1.5" />
              <polygon points="35,47.5 80,70 80,78 35,55.5" fill="url(#gold-side)" />
              <polygon points="125,47.5 80,70 80,78 125,55.5" fill="url(#gold-side)" />
            </g>
          </svg>
        </div>
      ),
    },
    {
      title: "Backend Layer",
      subtitle: "Powerful. Scalable. Secure.",
      titleColor: "text-gray-100",
      checkColor: "text-gray-300",
      borderColor: "border-gray-800 hover:border-gray-600",
      glowColor: "hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]",
      items: ["API Development", "Server-side Logic", "Custom Software"],
      graphic: (
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center shrink-0">
          {/* Silver Ambient Glow */}
          <div className="absolute inset-0 bg-gray-400/10 blur-2xl rounded-full" />
          
          <svg viewBox="0 0 160 160" className="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <defs>
              <linearGradient id="silver-top" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#64748b" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="silver-inner" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.5" />
              </linearGradient>
            </defs>

            {/* Glass Outer Cube */}
            <polygon points="80,20 125,42.5 80,65 35,42.5" fill="url(#silver-top)" stroke="#94a3b8" strokeWidth="1.2" />
            <polygon points="35,42.5 80,65 80,115 35,92.5" fill="url(#silver-top)" stroke="#64748b" strokeWidth="1" />
            <polygon points="125,42.5 80,65 80,115 125,92.5" fill="url(#silver-top)" stroke="#64748b" strokeWidth="1" />

            {/* Inner Glowing Cube */}
            <g transform="translate(0, 10)">
              <polygon points="80,50 100,60 80,70 60,60" fill="url(#silver-inner)" stroke="#ffffff" strokeWidth="1" />
              <polygon points="60,60 80,70 80,90 60,80" fill="url(#silver-inner)" />
              <polygon points="100,60 80,70 80,90 100,80" fill="url(#silver-inner)" />
            </g>
          </svg>
        </div>
      ),
    },
    {
      title: "Data & AI Layer",
      subtitle: "Smart. Secure. Scalable.",
      titleColor: "text-cyan-400",
      checkColor: "text-cyan-400",
      borderColor: "border-cyan-500/20 hover:border-cyan-500/50",
      glowColor: "hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
      items: ["Database Solutions", "Cloud Architecture", "AI & Search (NLP, SBERT)"],
      graphic: (
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center shrink-0">
          {/* Cyan Ambient Glow */}
          <div className="absolute inset-0 bg-cyan-500/10 blur-2xl rounded-full" />
          
          <svg viewBox="0 0 160 160" className="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <defs>
              <linearGradient id="cyan-top" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0891b2" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="cyan-side" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#164e63" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Bottom Base Stack */}
            <polygon points="80,75 130,100 80,125 30,100" fill="url(#cyan-top)" stroke="#22d3ee" strokeWidth="1" />
            <polygon points="30,100 80,125 80,135 30,110" fill="url(#cyan-side)" />
            <polygon points="130,100 80,125 80,135 130,110" fill="url(#cyan-side)" />

            {/* Middle Grid Wireframe Stack */}
            <polygon points="80,50 120,70 80,90 40,70" fill="url(#cyan-top)" stroke="#38bdf8" strokeWidth="1.2" />
            <polygon points="40,70 80,90 80,98 40,78" fill="url(#cyan-side)" />
            <polygon points="120,70 80,90 80,98 120,78" fill="url(#cyan-side)" />

            {/* Top Cube */}
            <polygon points="80,25 110,40 80,55 50,40" fill="url(#cyan-top)" stroke="#67e8f9" strokeWidth="1.5" />
            <polygon points="50,40 80,55 80,68 50,53" fill="url(#cyan-side)" />
            <polygon points="110,40 80,55 80,68 110,53" fill="url(#cyan-side)" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section id="services" className="w-full bg-[#050505] py-24 px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
      <div className="max-w-[1700px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-yellow-500 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">
            OUR CORE SERVICES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
            We Build Every Layer of Your Digital Stack
          </h2>
          
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-[1px] bg-gray-800" />
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            <div className="w-12 h-[1px] bg-gray-800" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group flex flex-col sm:flex-row items-center p-6 sm:p-8 rounded-2xl bg-[#080808] border ${service.borderColor} ${service.glowColor} transition-all duration-300 gap-6`}
            >
              {/* Graphic Left */}
              {service.graphic}

              {/* Content Right */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1">
                <h3 className={`text-2xl font-bold ${service.titleColor} mb-1`}>
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-medium mb-6">
                  {service.subtitle}
                </p>

                {/* List Items */}
                <div className="flex flex-col gap-3 w-full">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 justify-center sm:justify-start">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${service.checkColor}`} />
                      <span className="text-xs sm:text-sm text-gray-300 font-normal">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}