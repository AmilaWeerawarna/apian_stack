import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Mail, 
  Star, 
  Cpu, 
  Box 
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white font-poppins selection:bg-cyan-500 selection:text-white flex flex-col">
      <Navbar />

      <div className="flex-grow w-full pt-32 pb-24 px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 overflow-hidden">
        <div className="max-w-[1200px] mx-auto space-y-24">
          
          {/* --- SECTION 1: OUR MISSION --- */}
          <section className="text-center flex flex-col items-center">
            <p className="text-amber-500 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Our Mission
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
              Innovate. Build. <span className="text-cyan-400">Elevate.</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              We are on a mission to empower businesses with robust digital solutions 
              that are not only reliable and efficient but also future-ready.
            </p>
          </section>

          {/* --- SECTION 2: OUR TEAM --- */}
          <section className="flex flex-col items-center">
            <p className="text-amber-500 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Our Team
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-12 text-center">
              Meet the Minds Behind <span className="text-cyan-400">OpionStack</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              
              {/* Member 1: Lahiru */}
              <div className="bg-gradient-to-b from-[#11141a] to-[#0b0c10] border border-gray-800/60 shadow-[0_4px_20px_rgba(0,0,0,0.4)] rounded-2xl p-6 flex flex-col items-center text-center hover:border-amber-500/40 transition-all duration-300 group">
                <HexagonAvatar image="https://i.pravatar.cc/300?img=11" color="amber" />
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">Lahiru Kodisinghe</h3>
                <p className="text-amber-500 text-xs font-semibold mb-4 tracking-wide">Founder & CEO</p>
                <p className="text-gray-400 text-xs leading-relaxed mb-8 flex-grow">
                  Visionary leader with a passion for technology and innovation. 
                  Lahiru drives the company's strategy and growth.
                </p>
                <div className="flex gap-3 text-gray-400 mt-auto">
                  <SocialBox><LinkedinIcon /></SocialBox>
                  <SocialBox><TwitterIcon /></SocialBox>
                  <SocialBox><GithubIcon /></SocialBox>
                  <SocialBox><Mail size={16} /></SocialBox>
                </div>
              </div>

              {/* Member 2: Tharindu */}
              <div className="bg-gradient-to-b from-[#11141a] to-[#0b0c10] border border-gray-800/60 shadow-[0_4px_20px_rgba(0,0,0,0.4)] rounded-2xl p-6 flex flex-col items-center text-center hover:border-cyan-500/40 transition-all duration-300 group">
                <HexagonAvatar image="https://i.pravatar.cc/300?img=13" color="cyan" />
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Tharindu Jayasena</h3>
                <p className="text-cyan-400 text-xs font-semibold mb-4 tracking-wide">CTO</p>
                <p className="text-gray-400 text-xs leading-relaxed mb-8 flex-grow">
                  Tech enthusiast and problem solver. Tharindu leads our 
                  engineering team and builds the core technology.
                </p>
                <div className="flex gap-3 text-gray-400 mt-auto">
                  <SocialBox><LinkedinIcon /></SocialBox>
                  <SocialBox><TwitterIcon /></SocialBox>
                  <SocialBox><GithubIcon /></SocialBox>
                  <SocialBox><Mail size={16} /></SocialBox>
                </div>
              </div>

              {/* Member 3: Dilini */}
              <div className="bg-gradient-to-b from-[#11141a] to-[#0b0c10] border border-gray-800/60 shadow-[0_4px_20px_rgba(0,0,0,0.4)] rounded-2xl p-6 flex flex-col items-center text-center hover:border-amber-500/40 transition-all duration-300 group">
                <HexagonAvatar image="https://i.pravatar.cc/300?img=5" color="amber" />
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">Dilini Perera</h3>
                <p className="text-amber-500 text-xs font-semibold mb-4 tracking-wide">Head of Design</p>
                <p className="text-gray-400 text-xs leading-relaxed mb-8 flex-grow">
                  Creative mind with an eye for detail. Dilini shapes intuitive 
                  experiences through thoughtful design and branding.
                </p>
                <div className="flex gap-3 text-gray-400 mt-auto">
                  <SocialBox><DribbbleIcon /></SocialBox>
                  <SocialBox><BehanceIcon /></SocialBox>
                  <SocialBox><LinkedinIcon /></SocialBox>
                  <SocialBox><Mail size={16} /></SocialBox>
                </div>
              </div>

              {/* Member 4: Nimesh */}
              <div className="bg-gradient-to-b from-[#11141a] to-[#0b0c10] border border-gray-800/60 shadow-[0_4px_20px_rgba(0,0,0,0.4)] rounded-2xl p-6 flex flex-col items-center text-center hover:border-cyan-500/40 transition-all duration-300 group">
                <HexagonAvatar image="https://i.pravatar.cc/300?img=15" color="cyan" />
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Nimesh Fernando</h3>
                <p className="text-cyan-400 text-xs font-semibold mb-4 tracking-wide">Lead Developer</p>
                <p className="text-gray-400 text-xs leading-relaxed mb-8 flex-grow">
                  Full-stack developer who loves clean code and scalable 
                  architectures. Nimesh turns ideas into real-world solutions.
                </p>
                <div className="flex gap-3 text-gray-400 mt-auto">
                  <SocialBox><LinkedinIcon /></SocialBox>
                  <SocialBox><GithubIcon /></SocialBox>
                  <SocialBox><TwitterIcon /></SocialBox>
                  <SocialBox><Mail size={16} /></SocialBox>
                </div>
              </div>

            </div>
          </section>

          {/* --- SECTION 3: WHY WE EXIST --- */}
          <section className="bg-[#08090b] border border-gray-800/50 rounded-[2rem] p-8 lg:p-14 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center shadow-2xl">
            
            {/* Left Graphic - 3D Isometric Cubes */}
            <div className="w-full max-w-[350px] lg:w-1/2 flex justify-center relative">
               <IsometricCubes />
            </div>

            {/* Right Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <p className="text-amber-500 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">
                Why We Exist
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Technology is complex. <br/>
                We make it <span className="text-cyan-400">simple.</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10">
                We believe in long-term partnerships, transparent communication, 
                and delivering value at every step.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                {/* Feature 1 */}
                <div>
                  <div className="w-12 h-12 mb-4 relative flex items-center justify-center">
                    <HexagonIcon color="cyan" />
                    <Star className="text-cyan-400 w-5 h-5 absolute z-10" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-2">Customer First</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    We listen, collaborate, and deliver solutions that truly matter.
                  </p>
                </div>
                {/* Feature 2 */}
                <div>
                  <div className="w-12 h-12 mb-4 relative flex items-center justify-center">
                    <HexagonIcon color="amber" />
                    <Cpu className="text-amber-500 w-5 h-5 absolute z-10" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-2">Innovation Driven</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    We embrace new technologies to solve real-world challenges.
                  </p>
                </div>
                {/* Feature 3 */}
                <div>
                  <div className="w-12 h-12 mb-4 relative flex items-center justify-center">
                    <HexagonIcon color="amber" />
                    <Box className="text-amber-500 w-5 h-5 absolute z-10" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-2">Built to Scale</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Our solutions are designed to grow with your business.
                  </p>
                </div>
              </div>
            </div>

          </section>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}

// --- Helper Components ---

function SocialBox({ children }: { children: React.ReactNode }) {
  return (
    <a href="#" className="p-2 rounded-lg border border-gray-700/60 bg-[#08090c] hover:border-gray-400 hover:text-white transition-all duration-300">
      {children}
    </a>
  );
}

function HexagonAvatar({ image, color }: { image: string, color: 'amber' | 'cyan' }) {
  const strokeColor = color === 'amber' ? '#f59e0b' : '#06b6d4';
  const glowColor = color === 'amber' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(6, 182, 212, 0.2)';
  
  return (
    <div className="relative w-28 h-28 mb-6 flex items-center justify-center drop-shadow-2xl">
      {/* Background Tech Grid Lines */}
      <svg className="absolute inset-0 w-full h-full scale-[1.3] opacity-20 pointer-events-none" viewBox="0 0 100 100">
          <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="none" stroke={strokeColor} strokeWidth="0.5" />
          <line x1="50" y1="0" x2="50" y2="100" stroke={strokeColor} strokeWidth="0.5" />
          <line x1="0" y1="25" x2="100" y2="75" stroke={strokeColor} strokeWidth="0.5" />
          <line x1="0" y1="75" x2="100" y2="25" stroke={strokeColor} strokeWidth="0.5" />
      </svg>

      {/* Outer Hexagon with Nodes */}
      <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 100 100" style={{ filter: `drop-shadow(0 0 8px ${glowColor})` }}>
        <polygon 
          points="50,2 93,25 93,75 50,98 7,75 7,25" 
          fill="none" 
          stroke={strokeColor} 
          strokeWidth="1.5" 
          opacity="0.9"
        />
        {/* Vertex Dots */}
        <circle cx="50" cy="2" r="2.5" fill={strokeColor} />
        <circle cx="93" cy="25" r="2.5" fill={strokeColor} />
        <circle cx="93" cy="75" r="2.5" fill={strokeColor} />
        <circle cx="50" cy="98" r="2.5" fill={strokeColor} />
        <circle cx="7" cy="75" r="2.5" fill={strokeColor} />
        <circle cx="7" cy="25" r="2.5" fill={strokeColor} />
      </svg>

      {/* Profile Image Wrapper */}
      <div 
        className="w-[82%] h-[82%] bg-[#050505] overflow-hidden relative flex items-center justify-center z-20"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
      >
        <img 
          src={image} 
          alt="Team Member" 
          className="w-full h-full object-cover scale-110 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
}

function HexagonIcon({ color }: { color: 'amber' | 'cyan' }) {
  const strokeColor = color === 'amber' ? '#f59e0b' : '#06b6d4';
  return (
    <svg className="w-full h-full absolute" viewBox="0 0 100 100">
      <polygon 
        points="50,5 90,28 90,72 50,95 10,72 10,28" 
        fill="transparent" 
        stroke={strokeColor} 
        strokeWidth="4" 
        opacity="0.8"
      />
    </svg>
  );
}

function IsometricCubes() {
  const CyanCube = ({ x, y, scale = 1 }: { x: number, y: number, scale?: number }) => (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      {/* Faces */}
      <polygon points="0,-30 26,-15 0,0 -26,-15" fill="#06b6d4" fillOpacity="0.1" stroke="none" />
      <polygon points="-26,-15 0,0 0,30 -26,15" fill="#06b6d4" fillOpacity="0.15" stroke="none" />
      <polygon points="0,0 26,-15 26,15 0,30" fill="#06b6d4" fillOpacity="0.25" stroke="none" />
      
      {/* Outer Edges */}
      <polygon points="0,-30 26,-15 26,15 0,30 -26,15 -26,-15" fill="none" stroke="#0891b2" strokeWidth="1" opacity="0.8"/>
      {/* Inner Edges */}
      <line x1="0" y1="0" x2="0" y2="30" stroke="#0891b2" strokeWidth="1.2" opacity="0.8"/>
      <line x1="0" y1="0" x2="-26" y2="-15" stroke="#0891b2" strokeWidth="1.2" opacity="0.8"/>
      <line x1="0" y1="0" x2="26" y2="-15" stroke="#0891b2" strokeWidth="1.2" opacity="0.8"/>
      
      {/* Vertex Dots */}
      <circle cx="0" cy="-30" r="1.5" fill="#67e8f9" />
      <circle cx="26" cy="-15" r="1.5" fill="#67e8f9" />
      <circle cx="-26" cy="-15" r="1.5" fill="#67e8f9" />
      <circle cx="0" cy="0" r="2" fill="#fff" opacity="0.8" />
      <circle cx="26" cy="15" r="1.5" fill="#67e8f9" />
      <circle cx="-26" cy="15" r="1.5" fill="#67e8f9" />
      <circle cx="0" cy="30" r="1.5" fill="#67e8f9" />
    </g>
  );

  const AmberCube = ({ x, y, scale = 1 }: { x: number, y: number, scale?: number }) => (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      <circle cx="0" cy="0" r="50" fill="#f59e0b" opacity="0.15" filter="blur(15px)" />
      
      {/* Faces */}
      <polygon points="0,-30 26,-15 0,0 -26,-15" fill="#f59e0b" fillOpacity="0.5" stroke="none" />
      <polygon points="-26,-15 0,0 0,30 -26,15" fill="#f59e0b" fillOpacity="0.75" stroke="none" />
      <polygon points="0,0 26,-15 26,15 0,30" fill="#d97706" fillOpacity="0.9" stroke="none" />
      
      {/* Outer Edges */}
      <polygon points="0,-30 26,-15 26,15 0,30 -26,15 -26,-15" fill="none" stroke="#fcd34d" strokeWidth="1.5" opacity="0.9"/>
      {/* Inner Edges */}
      <line x1="0" y1="0" x2="0" y2="30" stroke="#fef3c7" strokeWidth="1.5"/>
      <line x1="0" y1="0" x2="-26" y2="-15" stroke="#fef3c7" strokeWidth="1.5"/>
      <line x1="0" y1="0" x2="26" y2="-15" stroke="#fef3c7" strokeWidth="1.5"/>

      {/* Vertex Dots */}
      <circle cx="0" cy="-30" r="2" fill="#fde68a" />
      <circle cx="26" cy="-15" r="2" fill="#fde68a" />
      <circle cx="-26" cy="-15" r="2" fill="#fde68a" />
      <circle cx="0" cy="0" r="3" fill="#fff" />
      <circle cx="26" cy="15" r="2" fill="#fde68a" />
      <circle cx="-26" cy="15" r="2" fill="#fde68a" />
      <circle cx="0" cy="30" r="2" fill="#fde68a" />
    </g>
  );

  return (
    <svg viewBox="0 0 400 400" className="w-full h-full max-w-[400px]">
      <defs>
        <radialGradient id="cyan-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background Soft Glow */}
      <circle cx="200" cy="200" r="160" fill="url(#cyan-glow)" />

      {/* 3D Isometric Orbital Rings */}
      <g transform="translate(200, 210)">
        <ellipse cx="0" cy="0" rx="160" ry="75" stroke="#06b6d4" strokeWidth="0.5" fill="none" strokeDasharray="3 5" opacity="0.4" />
        <ellipse cx="0" cy="0" rx="120" ry="55" stroke="#06b6d4" strokeWidth="0.5" fill="none" opacity="0.2" />
        
        {/* Orbital Particles */}
        <circle cx="-160" cy="0" r="2" fill="#06b6d4" opacity="0.8" />
        <circle cx="160" cy="0" r="2" fill="#06b6d4" opacity="0.8" />
        <circle cx="0" cy="75" r="2" fill="#06b6d4" opacity="0.6" />
        <circle cx="0" cy="-75" r="1.5" fill="#06b6d4" opacity="0.6" />
        <circle cx="-80" cy="45" r="2" fill="#f59e0b" opacity="0.9" />
        <circle cx="110" cy="-25" r="1.5" fill="#f59e0b" opacity="0.9" />
      </g>

      {/* Floating Background Stars/Particles */}
      <circle cx="100" cy="100" r="1.5" fill="#f59e0b" opacity="0.6" />
      <circle cx="310" cy="90" r="2" fill="#06b6d4" opacity="0.6" />
      <circle cx="110" cy="320" r="2" fill="#06b6d4" opacity="0.5" />
      <circle cx="320" cy="300" r="1.5" fill="#f59e0b" opacity="0.6" />

      {/* Cubes rendered back-to-front for Z-indexing */}
      <CyanCube x={200} y={115} scale={1.4} /> {/* Top */}
      <CyanCube x={125} y={190} scale={1.4} /> {/* Left */}
      <CyanCube x={275} y={190} scale={1.4} /> {/* Right */}
      <CyanCube x={200} y={305} scale={1.4} /> {/* Bottom */}
      <AmberCube x={200} y={210} scale={1.4} /> {/* Center (Front) */}
      
    </svg>
  );
}

// --- Custom Social Media Icons ---
export const LinkedinIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
export const TwitterIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
export const GithubIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);
export const DribbbleIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>
);
export const BehanceIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M8.22 17c2.23 0 3.89-1.25 3.89-3.7 0-1.92-1.2-2.92-2.52-3.23v-.06c1.07-.33 1.95-1.29 1.95-2.83 0-2.11-1.63-3.18-3.46-3.18H2v13h6.22zm-3.66-8h3.2c1.23 0 1.9.61 1.9 1.57 0 1.09-.76 1.63-2.02 1.63H4.56V9zm0 5.6v-3.48h3.5c1.47 0 2.22.68 2.22 1.76 0 1.14-.8 1.72-2.22 1.72H4.56zm15.42-4.14c-.2-.04-.5-.06-.8-.06-2.4 0-4.16 1.44-4.16 4.3 0 2.76 1.62 4.3 4 4.3 1.35 0 2.6-.52 3.25-1.57l-1.9-1.24c-.38.56-.9.88-1.5.88-1.07 0-1.74-.7-1.85-1.93h5.5c.03-.23.05-.56.05-.88 0-2.65-1.46-3.8-3.5-3.8zm-1.65 2.1c.14-.94.9-1.56 1.75-1.56.9 0 1.48.56 1.57 1.56h-3.32zm-.15-5.56h3.6V8h-3.6V5z"/></svg>
);