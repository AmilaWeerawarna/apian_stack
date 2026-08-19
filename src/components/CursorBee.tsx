"use client";
import { useEffect, useRef, useState } from "react";

export default function CursorBee() {
  const beeRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    let animationFrameId: number;

    const render = () => {
      const ease = 0.15;
      
      pos.current.x += (mouse.current.x - pos.current.x) * ease;
      pos.current.y += (mouse.current.y - pos.current.y) * ease;

      const dx = mouse.current.x - pos.current.x;
      const dy = mouse.current.y - pos.current.y;
      
      let angle = 0;
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90; 
      }

      if (beeRef.current) {
        beeRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) rotate(${angle}deg)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <div
      ref={beeRef}
      /* වෙනස 1: -ml-5 -mt-5 ලෙස මවුස් පොයින්ටරය මැදට සිටින සේ Offset කර ඇත */
      className={`fixed top-0 left-0 pointer-events-none z-[9999] -ml-5 -mt-5 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* වෙනස 2: w-10 h-10 (40px) ලෙස ප්‍රමාණය විශාල කර ඇත */}
      <div className="relative w-10 h-10 animate-[bounce_2s_infinite]">
        
        {/* Glow එකද ප්‍රමාණයට අනුව සකස් කර ඇත */}
        <div className="absolute inset-0 bg-yellow-500/50 blur-lg rounded-full" />
        
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="relative z-10 drop-shadow-[0_0_12px_rgba(234,179,8,0.9)]"
        >
          {/* තටු */}
          <ellipse cx="6" cy="10" rx="4" ry="7" transform="rotate(-30 6 10)" fill="#22d3ee" fillOpacity="0.75" className="animate-pulse" />
          <ellipse cx="18" cy="10" rx="4" ry="7" transform="rotate(30 18 10)" fill="#22d3ee" fillOpacity="0.75" className="animate-pulse" />
          
          {/* ඇඟ */}
          <rect x="9" y="6" width="6" height="11" rx="3" fill="#eab308" />
          <path d="M9 10H15M9 13H15" stroke="#1c1917" strokeWidth="1.5" /> 
          
          {/* ඔලුව */}
          <circle cx="12" cy="4" r="2.5" fill="#eab308" />
          
          {/* ඇන්ටනා */}
          <path d="M10 1L11 2M14 1L13 2" stroke="#eab308" strokeWidth="1" strokeLinecap="round" />
        </svg>

      </div>
    </div>
  );
}