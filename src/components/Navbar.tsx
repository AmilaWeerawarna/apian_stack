"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. අලුතින් import කරන ලද කොටස
import { 
  Home, 
  Package, 
  Briefcase, 
  Code2, 
  User, 
  Mail, 
  Menu, 
  X, 
  ArrowRight 
} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // 2. දැනට සිටින page එක හඳුනාගැනීමට මෙය යොදා ගනී

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.overscrollBehavior = "none";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.overscrollBehavior = "auto";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.overscrollBehavior = "auto";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Products", href: "/#products", icon: Package },
    { name: "Services", href: "/#services", icon: Briefcase },
    { name: "Tech Stack", href: "/#tech-stack", icon: Code2 }, 
    { name: "Contact", href: "/#contact", icon: Mail },
    { name: "About", href: "/about", icon: User }
  ];

  return (
    <>
      <header className="w-full bg-[#050505]/90 backdrop-blur-md supports-[backdrop-filter]:bg-[#050505]/80 fixed top-0 left-0 z-50 border-b border-gray-800/80">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
            <span className="text-yellow-500 text-2xl font-black">❖</span>
            <span className="text-xl md:text-2xl font-bold tracking-wide text-white">
              apian<span className="font-light text-gray-400">stack</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              // 3. මෙහිදී path එකට අනුව අදාළ ලින්ක් එක active වේ
              const isActive = pathname === link.href || (pathname === "/" && link.name === "Home");
              
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`flex items-center gap-2 transition-colors duration-200 ${
                    isActive ? "text-yellow-500 font-semibold" : "text-gray-300 hover:text-yellow-400"
                  }`}
                >
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <button className="border border-yellow-500/50 bg-yellow-500/10 text-yellow-500 px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-black font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(234,179,8,0.15)]">
              Let's Talk
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none z-50 rounded-lg bg-gray-900/50 border border-gray-800"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-yellow-500" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-[#070707] z-40 flex flex-col justify-between px-4 pt-24 pb-8 lg:hidden transition-all duration-500 ease-in-out h-screen min-h-screen h-[100dvh] min-h-[100dvh] overflow-y-auto overscroll-contain
          ${isMobileMenuOpen ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-95"}
        `}
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-yellow-500/10 blur-[90px] rounded-full pointer-events-none" />

        <div className="flex flex-col gap-3 w-full z-10 mt-2 flex-grow">
          <p className="text-xs uppercase tracking-widest text-yellow-500/80 font-semibold mb-2">
            Navigation
          </p>

          {navLinks.map((link, index) => {
            const IconComponent = link.icon;
            
            // 4. Mobile menu එකටත් අදාළව මෙය යොදා ගනී
            const isActive = pathname === link.href || (pathname === "/" && link.name === "Home");
            
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`group relative overflow-hidden flex items-center justify-between text-lg font-medium bg-gray-900/40 border px-4 py-3 rounded-xl transition-all duration-300 active:scale-95 ${
                  isMobileMenuOpen ? "translate-y-0" : "translate-y-4"
                } ${isActive ? "border-yellow-500/50 text-yellow-400" : "border-gray-800/80 text-gray-200"}`}
                style={{ transitionDelay: `${index * 60 + 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/10 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gray-900 border transition-all duration-300 ${isActive ? "border-yellow-500/50 text-yellow-400" : "border-gray-800 text-yellow-500 group-hover:bg-yellow-500/10 group-hover:border-yellow-500/50"}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="group-hover:text-yellow-400 transition-colors duration-300">
                    {link.name}
                  </span>
                </div>
                
                <ArrowRight className="relative z-10 w-4 h-4 text-gray-500 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            );
          })}
        </div>

        <div className="w-full z-10 pt-4 mt-auto safe-area-bottom">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-base flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(234,179,8,0.2)] active:scale-95 transition-transform"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
}