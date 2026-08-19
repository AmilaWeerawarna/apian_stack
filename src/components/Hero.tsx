"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";

const TOTAL_FRAMES = 240; 

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const targetFrame = useRef(0);
  const currentFrame = useRef(0);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameIndex = i.toString().padStart(3, "0");
      img.src = `/frames/ezgif-frame-${frameIndex}.jpg`; 
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[index]) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShiftX = (canvas.width - img.width * ratio) / 2;
    const centerShiftY = (canvas.height - img.height * ratio) / 2;

    ctx.drawImage(
      img,
      0, 0, img.width, img.height,
      centerShiftX, centerShiftY, img.width * ratio, img.height * ratio
    );
  };

  useEffect(() => {
    if (!imagesLoaded) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollableDistance = height - windowHeight;

      let rawProgress = -top / scrollableDistance;
      let animationProgress = rawProgress / 0.8;
      
      animationProgress = Math.max(0, Math.min(1, animationProgress));

      targetFrame.current = Math.floor(animationProgress * (TOTAL_FRAMES - 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    let animId: number;
    const loop = () => {
      currentFrame.current += (targetFrame.current - currentFrame.current) * 0.08;
      renderFrame(Math.round(currentFrame.current));
      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animId);
    };
  }, [imagesLoaded, images]);

  useEffect(() => {
    const updateCanvasSize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = canvasRef.current.offsetWidth;
        canvasRef.current.height = canvasRef.current.offsetHeight;
        renderFrame(Math.round(currentFrame.current));
      }
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, [imagesLoaded]);

  return (
    <section id="home" ref={containerRef} className="relative w-full h-[500vh] bg-[#050505] z-0">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center items-center border-b border-gray-800/50">
        
        {/* වෙනස 1: Frame Layer එකේ translate-y අගයන් (50% සහ 40%) ඉවත් කර වීඩියෝව උඩට ගෙන ඇත */}
        <div className="absolute top-0 right-0 w-full md:w-[90%] lg:w-[75%] h-full z-0 pointer-events-none translate-x-[5%] lg:translate-x-[15%] translate-y-[20%] md:translate-y-[15%] lg:translate-y-[10%] transition-transform duration-500">
          <canvas ref={canvasRef} className="w-full h-full opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/6 to-transparent" />
        </div>

        {/* වෙනස 2: Text Layer එකේ pt-24 ඉවත් කර -mt (negative margin) භාවිතයෙන් ටෙක්ස්ට් එක උඩට ගෙන ඇත */}
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 z-10 -mt-24 md:-mt-16 lg:mt-0 pt-0">
          <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold tracking-widest text-yellow-500 uppercase">
                  WELCOME TO APIANSTACK
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
                Building entire <br className="hidden sm:inline" />
                stacks,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
                  layer
                </span>{" "}
                by layer.
              </h1>

              <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed mb-8 font-normal drop-shadow-md">
                We design, develop, and deploy powerful digital solutions with modern technologies and a passion for innovation.
              </p>

              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <button className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-yellow-500/10 border border-yellow-500/50 text-yellow-400 hover:bg-yellow-500 hover:text-black font-semibold text-sm sm:text-base flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                  <span>Explore Our Ecosystem</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gray-900/60 border border-gray-800 text-gray-300 hover:text-white font-medium text-sm sm:text-base flex items-center justify-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                    <Play className="w-3 h-3 text-white fill-white translate-x-[1px]" />
                  </div>
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 hidden lg:block" />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold drop-shadow-md">Scroll to Play</p>
          <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center p-1 bg-black/40 backdrop-blur-md">
            <div className="w-1 h-2 bg-yellow-500 rounded-full animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
}