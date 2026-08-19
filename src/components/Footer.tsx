"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-gray-400 py-12 px-4 sm:px-8 lg:px-12 xl:px-16 border-t border-gray-900/60 relative font-poppins">
      <div className="max-w-[1500px] mx-auto flex flex-col gap-10">
        
        {/* --- Top Footer Content --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start justify-between">
          
          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              {/* Stack Logo Graphic */}
              <div className="w-7 h-7 relative flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon points="50,10 90,30 50,50 10,30" fill="none" stroke="#f59e0b" strokeWidth="6" />
                  <polygon points="50,35 90,55 50,75 10,55" fill="none" stroke="#f59e0b" strokeWidth="6" />
                  <polygon points="50,60 90,80 50,100 10,80" fill="none" stroke="#06b6d4" strokeWidth="6" />
                </svg>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                apian<span className="font-extrabold">stack</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed">
              Building entire stacks, <br />
              <span className="text-cyan-400 font-medium">layer</span> by{" "}
              <span className="text-amber-400 font-medium">layer.</span>
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-sm tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-sm tracking-wide">Company</h3>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-sm tracking-wide">Legal</h3>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm">
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Column 5: Follow Us */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-sm tracking-wide">Follow Us</h3>
            <div className="flex items-center gap-3">
              
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#111318] border border-gray-800/80 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#111318] border border-gray-800/80 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#111318] border border-gray-800/80 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#111318] border border-gray-800/80 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

            </div>
          </div>

        </div>

        {/* --- Center Glowing Divider Line --- */}
        <div className="relative w-full h-[1px] bg-gray-800/70 my-2">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
        </div>

        {/* --- Bottom Copyright --- */}
        <div className="text-center text-xs text-gray-500 font-normal">
          © 2024 ApianStack. All rights reserved.
        </div>

      </div>
    </footer>
  );
}