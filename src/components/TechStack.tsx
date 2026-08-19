"use client";
import React, { useState } from "react";

export default function TechStack() {
  // රූපයේ හැඩයට ගැලපෙන පරිදි තාක්ෂණයන් 17ක්
  const technologies = [
    { name: "React", color: "text-[#61DAFB]", svg: <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" /> },
    { name: "Next.js", color: "text-white", svg: <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16 8L8 16M8 8V16M16 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> },
    { name: "TypeScript", color: "text-[#3178C6]", svg: <><rect x="5" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" /><text x="8" y="15" fill="currentColor" fontSize="7" fontWeight="bold">TS</text></> },
    { name: "JavaScript", color: "text-[#F7DF1E]", svg: <><rect x="5" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" /><text x="8.5" y="15" fill="currentColor" fontSize="7" fontWeight="bold">JS</text></> },
    { name: "Node.js", color: "text-[#339933]", svg: <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" stroke="currentColor" strokeWidth="1.5" fill="none" /> },
    { name: "Python", color: "text-[#FFD43B]", svg: <path d="M12 2C8 2 8 5 8 5V7H16V9H8C6 9 4 10 4 14C4 18 6 19 8 19H9V17C9 15 10.5 13.5 12.5 13.5H16C18 13.5 19 12.5 19 9.5C19 6.5 18 2 12 2Z" fill="currentColor" /> },
    { name: "HTML/CSS", color: "text-[#E34F26]", svg: <path d="M4 3L5.5 19L12 21L18.5 19L20 3H4Z" stroke="currentColor" strokeWidth="1.5" fill="none" /> },
    { name: "MongoDB", color: "text-[#47A248]", svg: <path d="M12 2C12 2 7 6.5 7 12C7 16 9.5 20.5 12 22C14.5 20.5 17 16 17 12C17 6.5 12 2 12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" /> },
    { name: "PostgreSQL", color: "text-[#4169E1]", svg: <><ellipse cx="12" cy="7" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" fill="none" /><path d="M4 7V17C4 18.6569 7.58172 20 12 20C16.4183 20 20 18.6569 20 17V7" stroke="currentColor" strokeWidth="1.5" fill="none" /></> },
    { name: "Docker", color: "text-[#2496ED]", svg: <><rect x="8" y="10" width="4" height="4" stroke="currentColor" strokeWidth="1.5" fill="none" /><rect x="12" y="10" width="4" height="4" stroke="currentColor" strokeWidth="1.5" fill="none" /><path d="M4 14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z" stroke="currentColor" strokeWidth="1.5" fill="none" /></> },
    { name: "AWS", color: "text-[#FF9900]", svg: <><path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" fill="none" /><text x="7" y="14" fill="currentColor" fontSize="6" fontWeight="bold">AWS</text></> },
    { name: "Firebase", color: "text-[#FFCA28]", svg: <path d="M11 2L7 10L4 12L12 22L20 10L15 4L11 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" /> },
    { name: "Tailwind", color: "text-[#38B2AC]", svg: <path d="M12 7.5C12 7.5 10 3.5 6 3.5C2 3.5 2 8 2 8C2 8 4 4.5 6 4.5C8 4.5 9 7.5 12 7.5ZM22 14.5C22 14.5 20 10.5 16 10.5C12 10.5 12 15 12 15C12 15 14 11.5 16 11.5C18 11.5 19 14.5 22 14.5Z" fill="currentColor" /> },
    { name: "Figma", color: "text-[#F24E1E]", svg: <><circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" /><circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" /><circle cx="12" cy="19" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" /></> },
    { name: "Git", color: "text-[#F05032]", svg: <><circle cx="15" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" /><circle cx="9" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" /><path d="M15 9L9 15" stroke="currentColor" strokeWidth="1.5" /></> },
    { name: "Vercel", color: "text-white", svg: <polygon points="12,4 21,19 3,19" fill="currentColor" /> },
    { name: "Spline", color: "text-[#FF8AE2]", svg: <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" /> },
  ];

  const EmptyHex = () => (
    <div className="w-[85px] sm:w-[110px] md:w-[120px] shrink-0 pointer-events-none" />
  );

  const HexagonCard = ({ tech }: { tech: any }) => {
    const [isActive, setIsActive] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const isOpen = isActive || isHovered;

    return (
      <div 
        className={`relative w-[85px] h-[98px] sm:w-[110px] sm:h-[127px] md:w-[120px] md:h-[138px] cursor-pointer transition-all duration-300 ease-out z-0 shrink-0 ${
          isOpen ? '-translate-y-2 scale-105 z-50' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsActive(!isActive)}
      >
        <div 
          className={`absolute inset-0 transition-colors duration-300 ${isOpen ? 'bg-cyan-500' : 'bg-yellow-500'}`}
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        />
        <div 
          className="absolute inset-[2px] bg-[#050505] transition-colors duration-300 flex flex-col items-center justify-center overflow-hidden"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        >
          <div className={`relative z-10 flex flex-col items-center justify-center gap-1 sm:gap-2 transition-all duration-300 ${tech.color}`}>
            <svg viewBox="0 0 24 24" className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transition-transform duration-300 ${isOpen ? 'rotate-12' : ''}`} fill="none">
              {tech.svg}
            </svg>
            <span className="text-[9px] sm:text-[10px] md:text-xs font-bold tracking-wide uppercase text-center leading-none px-1">
              {tech.name}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="tech-stack" className="w-full bg-[#050505] py-24 px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

      {/* Main Container - 2 Columns on Desktop (xl) */}
      <div className="max-w-[1500px] mx-auto flex flex-col xl:flex-row items-center justify-between gap-16 xl:gap-8 relative z-10">
        
        {/* --- LEFT SIDE: Honeycomb Grid --- */}
        <div className="flex-1 w-full flex justify-center xl:justify-start">
          <div className="flex flex-col items-start w-fit relative scale-90 sm:scale-100 origin-center xl:origin-left">
            
            <div className="flex gap-1 sm:gap-2 relative z-50">
              <EmptyHex />
              <HexagonCard tech={technologies[0]} />
            </div>

            <div className="flex gap-1 sm:gap-2 relative z-40 ml-[44.5px] sm:ml-[59px] md:ml-[64px] -mt-[24px] sm:-mt-[32px] md:-mt-[34.5px]">
              {technologies.slice(1, 4).map((tech, i) => <HexagonCard key={`r2-${i}`} tech={tech} />)}
            </div>

            <div className="flex gap-1 sm:gap-2 relative z-30 -mt-[24px] sm:-mt-[32px] md:-mt-[34.5px]">
              {technologies.slice(4, 9).map((tech, i) => <HexagonCard key={`r3-${i}`} tech={tech} />)}
            </div>

            <div className="flex gap-1 sm:gap-2 relative z-20 ml-[44.5px] sm:ml-[59px] md:ml-[64px] -mt-[24px] sm:-mt-[32px] md:-mt-[34.5px]">
              {technologies.slice(9, 13).map((tech, i) => <HexagonCard key={`r4-${i}`} tech={tech} />)}
            </div>

            <div className="flex gap-1 sm:gap-2 relative z-10 -mt-[24px] sm:-mt-[32px] md:-mt-[34.5px]">
              <EmptyHex />
              {technologies.slice(13, 16).map((tech, i) => <HexagonCard key={`r5-${i}`} tech={tech} />)}
            </div>

            <div className="flex gap-1 sm:gap-2 relative z-0 ml-[44.5px] sm:ml-[59px] md:ml-[64px] -mt-[24px] sm:-mt-[32px] md:-mt-[34.5px]">
              <EmptyHex />
              <EmptyHex />
              <HexagonCard tech={technologies[16]} />
            </div>

          </div>
        </div>

        {/* --- RIGHT SIDE: Description & Info --- */}
        <div className="flex-1 w-full max-w-2xl xl:max-w-xl flex flex-col items-center xl:items-start text-center xl:text-left">
          
          <p className="text-yellow-500 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3">
            Technology Stack
          </p>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6 leading-[1.2]">
            Building Scalable & <br className="hidden xl:block" />
            <span className="text-cyan-400">High-Performance</span> Solutions
          </h2>
          
          {/* Custom Divider */}
          <div className="flex items-center justify-center xl:justify-start gap-2 mb-8">
            <div className="w-12 h-[1px] bg-gray-800" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
            <div className="w-12 xl:w-24 h-[1px] bg-gray-800" />
          </div>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
            We leverage a modern, robust, and future-proof technology ecosystem to transform complex ideas into seamless digital experiences. From dynamic front-end interfaces to secure back-end architectures, every tool is carefully selected to ensure top-notch performance.
          </p>

          {/* Feature List */}
          <ul className="flex flex-col gap-4 text-gray-300 text-sm sm:text-base mb-10 w-full">
            <li className="flex items-center justify-center xl:justify-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              </span>
              Optimized for Speed & Efficiency
            </li>
            <li className="flex items-center justify-center xl:justify-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              </span>
              Highly Secure & Reliable Architecture
            </li>
            <li className="flex items-center justify-center xl:justify-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              </span>
              Seamless Cross-Platform Compatibility
            </li>
          </ul>
          
          {/* Action Button */}
          <button className="px-8 py-3 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            Explore Our Work
          </button>

        </div>

      </div>
    </section>
  );
}