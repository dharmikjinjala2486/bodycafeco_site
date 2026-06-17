import React, { useState, useEffect } from "react";
import heroBg from "../assets/hero_bg.png";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [parallaxPos, setParallaxPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let reqId;

    const handleMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 15;
      targetY = (e.clientY / window.innerHeight - 0.5) * 15;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setParallaxPos({ x: currentX, y: currentY });
      reqId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    reqId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(reqId);
    };
  }, [isMobile]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen md:h-screen flex flex-col md:flex-row bg-[#F7F6F2] overflow-hidden"
    >
      {/* Ambient Radial Glow decoration for subtle warmth */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle_at_0%_0%,rgba(140,29,64,0.02)_0%,transparent_60%)]" />

      {/* LEFT SIDE: Brand presentation (45% on desktop, full-width on mobile) */}
      <div className="w-full md:w-[45%] h-auto md:h-full flex flex-col justify-center px-6 sm:px-12 md:px-10 lg:px-14 xl:px-16 pt-36 sm:pt-40 md:pt-44 lg:pt-52 pb-16 md:pb-24 z-10 relative bg-[#F7F6F2]/50">

        {/* Premium Pre-Headline Tag */}
        <div className="inline-flex items-center gap-2 mb-6 md:mb-8 animate-fade-in-up">
          <span className="font-sans text-xs md:text-sm font-bold tracking-[0.3em] text-beetroot-primary uppercase">
            BODY CAFÉ CO.
          </span>
        </div>

        {/* Editorial Headline */}
        <h1 className="font-lemon text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-normal tracking-[0.04em] leading-[1.1] text-foundation-text uppercase mb-8 md:mb-10 lg:mb-12 animate-fade-in-up">
          Wellness<br />
          Made<br />
          Beautiful
        </h1>

        {/* Supporting Copy */}
        <div
          className="font-aileron text-base md:text-lg text-foundation-text-secondary leading-relaxed font-light tracking-wide max-w-md mb-8 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <p>
            Premium supplements built on research, crafted for modern life.
          </p>
        </div>

        {/* Trust Statement */}
        <div 
          className="flex items-center gap-4 mb-10 md:mb-14 lg:mb-16 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <div className="w-8 h-[1px] bg-beetroot-primary/30"></div>
          <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-beetroot-primary/80 uppercase">
            Science-Backed Formulations
          </span>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-row items-center gap-6 md:gap-8 animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <a
            id="btn-hero-shop"
            href="#shop"
            className="inline-flex items-center justify-center px-8 py-4 bg-foundation-text hover:bg-beetroot-primary text-white font-sans font-bold text-xs tracking-[0.15em] uppercase rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Shop Collection
          </a>
          <a
            id="btn-hero-learn"
            href="#learn"
            className="inline-flex items-center justify-center py-2 text-foundation-text hover:text-beetroot-primary font-sans font-bold text-xs tracking-[0.15em] uppercase border-b border-foundation-text/20 hover:border-beetroot-primary transition-colors duration-300"
          >
            Learn More
          </a>
        </div>

      </div>

      {/* RIGHT SIDE: Campaign visual (55% on desktop, full-width top portion on mobile) */}
      <div className="w-full md:w-[55%] h-[40vh] md:h-full order-first md:order-last relative overflow-hidden bg-[#F3F1EC]">

        {/* Floating Capsule SVG element (Parallax Depth 1) */}
        {!isMobile && (
          <div
            className="absolute top-[20%] left-[15%] pointer-events-none z-20 transition-transform duration-700 ease-out animate-float-slow-rotate"
            style={{
              transform: `translate3d(${parallaxPos.x * -1.5}px, ${parallaxPos.y * -1.5}px, 0)`
            }}
          >
            <svg className="w-14 h-14 opacity-40 text-beetroot-primary/30" viewBox="0 0 100 100">
              <rect x="35" y="15" width="30" height="70" rx="15" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <line x1="35" y1="50" x2="65" y2="50" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="50" cy="32" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="50" cy="68" r="3" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
        )}

        {/* Floating Botanical Leaf SVG element (Parallax Depth 2) */}
        {!isMobile && (
          <div
            className="absolute bottom-[25%] right-[15%] pointer-events-none z-20 transition-transform duration-700 ease-out animate-float-slower"
            style={{
              transform: `translate3d(${parallaxPos.x * 1.2}px, ${parallaxPos.y * 1.2}px, 0)`
            }}
          >
            <svg className="w-18 h-18 opacity-30 text-saffron-accent/40" viewBox="0 0 100 100">
              <path d="M 50 90 C 50 90, 25 60, 25 40 C 25 20, 50 10, 50 10 C 50 10, 75 20, 75 40 C 75 60, 50 90, 50 90 Z" fill="none" stroke="currentColor" strokeWidth="2" />
              <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
              <path d="M 50 30 Q 35 25, 30 20" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M 50 50 Q 35 45, 30 40" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M 50 40 Q 65 35, 70 30" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M 50 60 Q 65 55, 70 50" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        )}

        {/* Parallax Container for Main Image */}
        <div
          className="w-full h-full transition-transform duration-700 ease-out"
          style={{
            transform: isMobile
              ? "none"
              : `translate3d(${parallaxPos.x}px, ${parallaxPos.y}px, 0) scale(1.05)`,
          }}
        >
          {/* Zooming Image */}
          <img
            src={heroBg}
            alt="Body Cafe Co. Campaign Visual"
            className="w-full h-full object-cover animate-luxury-zoom pointer-events-none"
          />
        </div>

        {/* Soft overlay gradient for editorial depth */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
