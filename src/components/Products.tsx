"use client";
import Link from "next/link";
import { 
  Download, 
  ExternalLink, 
  Zap, 
  Lightbulb, 
  ShieldCheck, 
  Smartphone, 
  MonitorSmartphone, 
  LayoutDashboard, 
  Cuboid
} from "lucide-react";

export default function Products() {
  const comingSoonProducts = [
    {
      title: "RestoStack POS",
      desc: "Smart POS solution for restaurants with inventory & analytics.",
      icon: MonitorSmartphone,
      glow: "from-blue-500/20",
    },
    {
      title: "InventoryPro",
      desc: "Advanced inventory management with real-time tracking & reporting.",
      icon: LayoutDashboard,
      glow: "from-purple-500/20",
    },
    {
      title: "More Pipelines",
      desc: "We're building more powerful tools for your business growth.",
      icon: Cuboid,
      glow: "from-yellow-500/20",
    },
  ];

  return (
    <section id="products" className="w-full bg-[#050505] py-24 px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
      
      {/* අලංකාර පසුබිම් ආලෝක (Background Gradients) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1700px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-yellow-500 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">
            Our Products
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
            Powerful Solutions for Real-World Problems
          </h2>
          {/* කුඩා ඉර සහ තිත (Decorative line) */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-[1px] bg-gray-800" />
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            <div className="w-12 h-[1px] bg-gray-800" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* 1. Featured Product (DeliGo PWA) */}
          <div className="group relative flex flex-col justify-between bg-gradient-to-b from-[#0a1518] to-[#050505] border border-cyan-500/40 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:border-cyan-400/60 lg:col-span-1">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-[50px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <span className="inline-block px-2.5 py-1 rounded text-[10px] font-bold tracking-widest text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 mb-5">
                FEATURED
              </span>
              
              <h3 className="text-2xl font-semibold text-white mb-3">
                DeliGo <span className="text-cyan-400">PWA</span>
              </h3>
              
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                A powerful delivery app for restaurants, built for speed, reliability and great UX.
              </p>

              {/* Feature Icons */}
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-4 h-4 text-yellow-500" />
                <Lightbulb className="w-4 h-4 text-yellow-500" />
                <ShieldCheck className="w-4 h-4 text-cyan-500" />
                <div className="w-4 h-4 rounded-full border-2 border-yellow-500/50 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                </div>
              </div>

              {/* Placeholder Mobile UI (පින්තූරය වෙනුවට) */}
              <div className="relative w-full h-48 mx-auto mb-8 bg-black/40 border border-gray-800/80 rounded-t-3xl rounded-b-xl overflow-hidden flex flex-col items-center justify-start pt-4 shadow-inner">
                <div className="w-12 h-1 bg-gray-800 rounded-full mb-3" />
                <div className="w-10 h-10 bg-yellow-500/20 rounded-full mb-2 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-yellow-500" />
                </div>
                <div className="w-2/3 h-2 bg-gray-800 rounded-full mb-2" />
                <div className="w-1/2 h-2 bg-gray-800 rounded-full" />
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0a1518] to-transparent" />
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <button className="w-full py-3 mb-4 rounded-lg bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-black font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300">
                <span>Install App</span>
                <Download className="w-4 h-4" />
              </button>
              
              <Link href="#" className="flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-cyan-400 transition-colors">
                <span>deligo.apianstack.com</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* 2, 3, 4. Coming Soon Products */}
          {comingSoonProducts.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div key={index} className="group relative flex flex-col justify-between bg-[#0a0a0a] border border-gray-800/80 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-gray-700 hover:bg-[#0c0c0c]">
                
                <div className="relative z-10">
                  <span className="inline-block px-2.5 py-1 rounded text-[10px] font-bold tracking-widest text-yellow-500 border border-yellow-500/30 bg-yellow-500/5 mb-5">
                    COMING SOON
                  </span>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {product.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {product.desc}
                  </p>

                  {/* Placeholder Graphic for Coming Soon */}
                  <div className="relative w-full h-32 mt-auto mb-8 bg-black/40 border border-gray-800/50 rounded-xl overflow-hidden flex items-center justify-center">
                     <div className={`absolute inset-0 bg-gradient-to-b ${product.glow} to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                     <IconComponent className="w-10 h-10 text-gray-600 group-hover:text-gray-400 transition-colors duration-500 relative z-10" />
                  </div>
                </div>

                <div className="relative z-10 mt-auto">
                  <button disabled className="w-full py-3 rounded-lg bg-gray-900/50 border border-gray-800 text-gray-500 font-medium text-sm cursor-not-allowed">
                    Coming Soon
                  </button>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}