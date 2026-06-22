import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import product images
import fishOilImg from "../assets/Product Images/Fish Oil.png";
import creatineImg from "../assets/Product Images/Creatine Monohydrate (Micronized).png";
import vitD3Img from "../assets/Product Images/D3 + K2.png";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
  {
    id: "01",
    routeId: "omega-3",
    theme: "Omega-3 Fish Oil",
    accentColor: "#7AA8D8",
    headlineLine2: "heart health",
    description: "Premium Omega 3 Fish Oil formulated with high-purity EPA and DHA to support cardiovascular health, cognitive performance, and overall wellness.",
    benefits: ["Heart Support", "Brain Function", "Joint Mobility"],
    perfectFor: ["Working Professionals", "Active Lifestyles", "Healthy Aging"],
    ctaPrimary: "Shop Omega 3",
    ctaSecondary: "Learn More",
    image: fishOilImg,
    btnGradient: "linear-gradient(135deg, #7AA8D8 0%, #4B78A5 100%)",
    btnShadow: "0 10px 25px -5px rgba(122, 168, 216, 0.4)",
  },
  {
    id: "02",
    routeId: "creatine",
    theme: "Creatine Monohydrate",
    accentColor: "#6CB8D8",
    headlineLine2: "strength",
    description: "Micronized Creatine Monohydrate designed to enhance strength, power output, muscle recovery, and athletic performance.",
    benefits: ["Power Output", "Muscle Recovery", "Training Performance"],
    perfectFor: ["Gym Enthusiasts", "Athletes", "Strength Training"],
    ctaPrimary: "Shop Creatine",
    ctaSecondary: "Learn More",
    image: creatineImg,
    btnGradient: "linear-gradient(135deg, #6CB8D8 0%, #3B8AA8 100%)",
    btnShadow: "0 10px 25px -5px rgba(108, 184, 216, 0.4)",
  },
  {
    id: "03",
    routeId: "vit-d3-k2",
    theme: "Vitamin D3 + K2",
    accentColor: "#8A7BFF",
    headlineLine2: "vitality",
    description: "Vitamin D3 + K2 formulated to support bone health, immunity, calcium absorption, and long-term wellness.",
    benefits: ["Bone Health", "Immune Support", "Daily Wellness"],
    perfectFor: ["Indoor Workers", "Daily Nutrition", "Year-Round Support"],
    ctaPrimary: "Shop Vitamin D3 + K2",
    ctaSecondary: "Learn More",
    image: vitD3Img,
    btnGradient: "linear-gradient(135deg, #8A7BFF 0%, #5140E6 100%)",
    btnShadow: "0 10px 25px -5px rgba(138, 123, 255, 0.4)",
  }
];

export default function ProductStorytelling() {
  const containerRef = useRef(null);
  const bandsWrapperRef = useRef(null);

  // Background layers
  const bg1Ref = useRef(null);
  const bg2Ref = useRef(null);
  const bg3Ref = useRef(null);

  // Dynamic Word Refs
  const word1Ref = useRef(null);
  const word2Ref = useRef(null);
  const word3Ref = useRef(null);

  // Details Panel Refs
  const details1Ref = useRef(null);
  const details2Ref = useRef(null);
  const details3Ref = useRef(null);

  // Individual Bottle Refs
  const bottle1Ref = useRef(null);
  const bottle2Ref = useRef(null);
  const bottle3Ref = useRef(null);

  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial positions
      // Background panels positioned absolutely and stacked (bg1 is base, bg2/bg3 start off-screen at the bottom)
      gsap.set(bg1Ref.current, { yPercent: 0 });
      gsap.set(bg2Ref.current, { yPercent: 100 });
      gsap.set(bg3Ref.current, { yPercent: 100 });

      // Dynamic words stacked absolutely inside overflow-hidden container
      gsap.set(word1Ref.current, { opacity: 1, yPercent: 0 });
      gsap.set(word2Ref.current, { opacity: 0, yPercent: 100 });
      gsap.set(word3Ref.current, { opacity: 0, yPercent: 100 });

      // Reset indicators
      gsap.set(bandsWrapperRef.current, { y: 0 });

      // Initialize individual bottle layout positions (absolutely stacked)
      gsap.set(bottle1Ref.current, { yPercent: 0, scale: 1.45, rotate: 0, opacity: 1, transformOrigin: "center center" });
      gsap.set(bottle2Ref.current, { yPercent: 100, scale: 0.9, rotate: 12, opacity: 1, transformOrigin: "center center" });
      gsap.set(bottle3Ref.current, { yPercent: 100, scale: 0.9, rotate: 12, opacity: 1, transformOrigin: "center center" });

      // Details panels opacity/position
      gsap.set(details1Ref.current, { opacity: 1, y: 0, pointerEvents: "auto" });
      gsap.set(details2Ref.current, { opacity: 0, y: 35, pointerEvents: "none" });
      gsap.set(details3Ref.current, { opacity: 0, y: 35, pointerEvents: "none" });

      // Set initial CSS variables on the container (Product 01 colors)
      gsap.set(containerRef.current, {
        "--active-accent-color": "#7AA8D8",
        "--active-accent-glow": "rgba(122, 168, 216, 0.35)",
        "--active-accent-soft": "rgba(122, 168, 216, 0.15)",
        "--active-text-primary": "#FFFFFF",
        "--active-text-secondary": "#E2ECF5",
        "--active-text-muted": "rgba(255, 255, 255, 0.45)",
        "--active-border-color": "rgba(255, 255, 255, 0.15)",
        "--active-card-bg": "rgba(255, 255, 255, 0.06)",
      });

      // Master Scroll Scrub Timeline with pinning
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%", // scroll distance of 3 viewport heights
          pin: true,
          scrub: 1, // smooth scroll scrub response
          onUpdate: (self) => {
            const progress = self.progress;
            let index = 0;
            // Thresholds mapped to settle points:
            // Settle on 1: 0 to 0.167
            // Transition 1: 0.167 to 0.417 (Midpoint: 0.292)
            // Settle on 2: 0.417 to 0.583
            // Transition 2: 0.583 to 0.833 (Midpoint: 0.708)
            // Settle on 3: 0.833 to 1.0
            if (progress >= 0.3 && progress < 0.7) {
              index = 1;
            } else if (progress >= 0.7) {
              index = 2;
            }
            if (index !== activeIndexRef.current) {
              activeIndexRef.current = index;
              setActiveIndex(index);
              window.dispatchEvent(new CustomEvent("header-theme-change", { detail: { theme: "dark" } }));
            }
          }
        }
      });

      // TIMELINE LAYOUT STRUCTURE:
      // We define settle zones and transition zones for clear visual flow.

      tl.to({}, { duration: 1 }) // Settle on Product 1

        // ==========================================
        // TRANSITION 1: Product 1 -> Product 2
        // ==========================================
        .addLabel("trans1")
        // 1. Background Panel 2 wipes UP from bottom synchronously
        .to(bg2Ref.current, { yPercent: 0, ease: "none", duration: 1.5 }, "trans1")

        // Morph theme colors
        .to(containerRef.current, {
          "--active-accent-color": "#6CB8D8",
          "--active-accent-glow": "rgba(108, 184, 216, 0.35)",
          "--active-accent-soft": "rgba(108, 184, 216, 0.2)",
          "--active-text-secondary": "#E2F1F6",
          ease: "none",
          duration: 1.5
        }, "trans1")

        // 2. Dynamic Text slide UP & fade
        .to(word1Ref.current, { opacity: 0, yPercent: -100, ease: "power2.inOut", duration: 1.5 }, "trans1")
        .to(word2Ref.current, { opacity: 1, yPercent: 0, ease: "power2.inOut", duration: 1.5 }, "trans1")

        // 3. Indicator strip translates UP
        .to(bandsWrapperRef.current, { y: -60, ease: "none", duration: 1.5 }, "trans1")

        // 4. Stacked Bottles translate UP synchronously
        .to(bottle1Ref.current, { yPercent: -100, scale: 0.9, rotate: -12, opacity: 0, ease: "none", duration: 1.5, transformOrigin: "center center" }, "trans1")
        .to(bottle2Ref.current, { yPercent: 0, scale: 1.45, rotate: 0, opacity: 1, ease: "none", duration: 1.5, transformOrigin: "center center" }, "trans1")

        // 5. Details panels transition in place
        .to(details1Ref.current, { opacity: 0, y: -35, pointerEvents: "none", ease: "power2.inOut", duration: 1.5 }, "trans1")
        .to(details2Ref.current, { opacity: 1, y: 0, pointerEvents: "auto", ease: "power2.inOut", duration: 1.5 }, "trans1")

        .to({}, { duration: 1 }) // Settle on Product 2

        // ==========================================
        // TRANSITION 2: Product 2 -> Product 3
        // ==========================================
        .addLabel("trans2")
        // 1. Background Panel 3 wipes UP from bottom synchronously
        .to(bg3Ref.current, { yPercent: 0, ease: "none", duration: 1.5 }, "trans2")

        // Morph theme colors
        .to(containerRef.current, {
          "--active-accent-color": "#8A7BFF",
          "--active-accent-glow": "rgba(138, 123, 255, 0.35)",
          "--active-accent-soft": "rgba(138, 123, 255, 0.2)",
          "--active-text-secondary": "#EBF0FF",
          ease: "none",
          duration: 1.5
        }, "trans2")

        // 2. Dynamic Text slide UP & fade
        .to(word2Ref.current, { opacity: 0, yPercent: -100, ease: "power2.inOut", duration: 1.5 }, "trans2")
        .to(word3Ref.current, { opacity: 1, yPercent: 0, ease: "power2.inOut", duration: 1.5 }, "trans2")

        // 3. Indicator strip translates UP
        .to(bandsWrapperRef.current, { y: -120, ease: "none", duration: 1.5 }, "trans2")

        // 4. Stacked Bottles translate UP synchronously
        .to(bottle2Ref.current, { yPercent: -100, scale: 0.9, rotate: -12, opacity: 0, ease: "none", duration: 1.5, transformOrigin: "center center" }, "trans2")
        .to(bottle3Ref.current, { yPercent: 0, scale: 1.45, rotate: 0, opacity: 1, ease: "none", duration: 1.5, transformOrigin: "center center" }, "trans2")

        // 5. Details panels transition in place
        .to(details2Ref.current, { opacity: 0, y: -35, pointerEvents: "none", ease: "power2.inOut", duration: 1.5 }, "trans2")
        .to(details3Ref.current, { opacity: 1, y: 0, pointerEvents: "auto", ease: "power2.inOut", duration: 1.5 }, "trans2")

        .to({}, { duration: 1 }); // Settle on Product 3

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="flagship-storytelling"
      className="relative w-full h-screen overflow-hidden flex items-center select-none"
    >
      {/* ========================================================================= */}
      {/* BACKGROUND GRADIENTS & LAYERS (Sliding Panels)                           */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">

        {/* Product 1 Background (Premium Dark Charcoal Gradient) */}
        <div
          ref={bg1Ref}
          style={{
            background: "radial-gradient(circle at 30% 30%, #202428 0%, #111315 50%, #08090A 100%)",
            zIndex: 10
          }}
          className="absolute inset-0 premium-noise overflow-hidden"
        >
          {/* Soft ambient lighting */}
          <div className="absolute top-[10%] left-[20%] w-[45rem] h-[45rem] bg-white/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-[10%] right-[10%] w-[35rem] h-[35rem] bg-[#9AA4AD]/12 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(154,164,173,0.12),transparent_60%)] pointer-events-none" />
        </div>

        {/* Product 2 Background (Premium Dark Teal Gradient) */}
        <div
          ref={bg2Ref}
          style={{
            background: "radial-gradient(circle at 70% 30%, #162C35 0%, #0B161B 50%, #050A0C 100%)",
            zIndex: 20
          }}
          className="absolute inset-0 premium-noise overflow-hidden"
        >
          {/* Soft ambient lighting */}
          <div className="absolute top-[15%] right-[20%] w-[40rem] h-[40rem] bg-[#407D96]/10 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-[15%] left-[15%] w-[45rem] h-[45rem] bg-[#2E5F73]/10 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(64,125,147,0.12),transparent_60%)] pointer-events-none" />
        </div>

        {/* Product 3 Background (Premium Dark Indigo Gradient) */}
        <div
          ref={bg3Ref}
          style={{
            background: "radial-gradient(circle at 30% 70%, #1B1A3B 0%, #0D0C1D 50%, #06060E 100%)",
            zIndex: 30
          }}
          className="absolute inset-0 premium-noise overflow-hidden"
        >
          {/* Warm wellness glow spots */}
          <div className="absolute top-[-10%] right-[-10%] w-[55rem] h-[55rem] bg-[#534FA6]/10 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-[20%] left-[20%] w-[35rem] h-[35rem] bg-[#3A377A]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(83,79,166,0.12),transparent_60%)] pointer-events-none" />
        </div>

      </div>

      {/* Ambient premium blur glows */}
      <div className="absolute inset-0 pointer-events-none opacity-5 z-10">
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-white rounded-full blur-3xl" />
      </div>

      {/* ========================================================================= */}
      {/* CONTENT LAYOUT                                                            */}
      {/* ========================================================================= */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 h-full flex flex-col md:flex-row items-center relative z-20">

        {/* Left Column: Typography */}
        <div className="w-full md:w-[48%] lg:w-[48%] flex flex-col justify-center h-[35vh] md:h-full z-20 pointer-events-none select-none pl-4 md:pl-8 lg:pl-12">
          <div className="flex flex-col select-none">
            {/* The static editorial headline stacked vertically */}
            <h2
              style={{ color: "var(--active-text-muted)" }}
              className="font-montserrat font-black text-3xl sm:text-5xl md:text-6xl lg:text-[3.6vw] leading-[1.0] tracking-tighter uppercase transition-colors duration-300"
            >
              <span className="block">THE RIGHT</span>
              <span className="block mt-1">AMOUNT OF</span>
            </h2>
            {/* The dynamic words positioned directly below with proper vertical spacing */}
            <div className="relative overflow-hidden h-[2.2em] text-4xl sm:text-6xl md:text-7xl lg:text-[4.5vw] xl:text-[5vw] font-montserrat font-black leading-[1.0] uppercase tracking-tighter mt-6 md:mt-8 w-full">
              <div
                ref={word1Ref}
                style={{ color: PRODUCTS[0].accentColor }}
                className="absolute left-0 top-0 flex flex-col"
              >
                <span className="block">HEART</span>
                <span className="block mt-1">HEALTH</span>
              </div>
              <span
                ref={word2Ref}
                style={{ color: PRODUCTS[1].accentColor }}
                className="absolute left-0 top-0 block whitespace-nowrap opacity-0"
              >
                STRENGTH
              </span>
              <span
                ref={word3Ref}
                style={{ color: PRODUCTS[2].accentColor }}
                className="absolute left-0 top-0 block whitespace-nowrap opacity-0"
              >
                VITALITY
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Configurator Contents */}
        <div className="w-full md:w-[52%] lg:w-[52%] h-[70vh] md:h-full flex flex-col justify-center relative z-10 pt-[40px] md:pt-[100px] pb-6 md:pb-12">

          {/* 1. Indicator Strip */}
          <div
            style={{ borderColor: "var(--active-border-color)" }}
            className="relative w-full h-[60px] overflow-hidden border-b bg-transparent shrink-0 transition-colors duration-300"
          >
            <div
              ref={bandsWrapperRef}
              className="absolute left-0 top-0 flex flex-col w-full"
            >
              {PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className="w-full h-[60px] flex items-center justify-between px-6 bg-transparent"
                >
                  <span
                    style={{ color: "var(--active-text-primary)" }}
                    className="font-sans font-bold text-[10px] md:text-xs tracking-[0.25em] uppercase transition-colors duration-300"
                  >
                    {product.theme}
                  </span>
                  <span
                    style={{ color: product.accentColor }}
                    className="font-display font-extrabold text-xs md:text-sm tracking-widest"
                  >
                    {product.id} / 03
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Interactive Product Morphing Area */}
          <div className="flex-1 w-full flex flex-row items-center px-4 md:px-8 py-6 gap-4 md:gap-8 overflow-visible relative">

            {/* Sub-column A: Product Image (Absolutely stacked bottles on a stage) */}
            <div className="w-[42%] md:w-[46%] lg:w-[48%] h-full flex items-center justify-center relative z-10 shrink-0 md:-translate-x-20 lg:-translate-x-28 xl:-translate-x-32">

              {/* Stage Glassmorphism Backdrop Panel */}
              <div
                style={{
                  backgroundColor: "var(--active-card-bg)",
                  borderColor: "var(--active-border-color)"
                }}
                className="absolute inset-0 m-auto w-[115%] h-[80%] backdrop-blur-[28px] border border-white/[0.08] rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.55),0_30px_60px_-30px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.15)] pointer-events-none -z-20 overflow-hidden flex items-center justify-center transition-all duration-300"
              >
                {/* Internal glass shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] via-transparent to-white/[0.08] pointer-events-none" />

                {/* Accent glow inside the stage panel */}
                <div
                  style={{
                    backgroundColor: "var(--active-accent-glow)"
                  }}
                  className="absolute inset-0 rounded-[2.5rem] blur-3xl opacity-50 transition-colors duration-700 pointer-events-none"
                />
              </div>

              {/* Glow behind active bottle */}
              <div
                style={{
                  backgroundColor: "var(--active-accent-glow)"
                }}
                className="absolute w-[110%] h-[80%] rounded-full blur-3xl -z-10 transition-colors duration-700 pointer-events-none animate-slow-pulse"
              />

              {/* Stacked Product Bottle Images */}
              {/* Container is inset to match the glass card's 80% height, so bottles center within the card */}
              <div
                className="absolute left-1/2 -translate-x-1/2 w-full pointer-events-none"
                style={{ top: "10%", height: "80%" }}
              >
                {PRODUCTS.map((product, idx) => {
                  const floatClass =
                    idx === 0
                      ? "animate-float-slow-rotate"
                      : idx === 1
                        ? "animate-float-slower"
                        : "animate-float";

                  const shadowPulseClass =
                    idx === 0
                      ? "animate-shadow-slow-rotate"
                      : idx === 1
                        ? "animate-shadow-slower"
                        : "animate-shadow-fast";

                  return (
                    <div
                      key={product.id}
                      ref={idx === 0 ? bottle1Ref : idx === 1 ? bottle2Ref : bottle3Ref}
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        /* Optical centering: shift bottle 3% upward from mathematical center */
                        /* The human eye reads center as slightly above midpoint for floating objects */
                        paddingBottom: "6%",
                        transformOrigin: "center center"
                      }}
                    >
                      {/* The Product Bottle Image */}
                      <div className={`${floatClass} select-none pointer-events-none`} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img
                          src={product.image}
                          alt={product.theme}
                          style={{ height: "42vh", width: "auto", objectFit: "contain", imageRendering: "-webkit-optimize-contrast" }}
                          className="filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] select-none"
                          draggable="false"
                        />
                      </div>

                      {/* Contact shadow — anchored to lower portion of card */}
                      <div className={`absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[40%] h-[8px] bg-black/40 rounded-full blur-[6px] -z-10 ${shadowPulseClass}`} />
                      <div className={`absolute bottom-[5.5%] left-1/2 -translate-x-1/2 w-[55%] h-[14px] bg-black/20 rounded-full blur-[12px] -z-10 ${shadowPulseClass}`} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sub-column B: Product Details (In-place morphs) */}
            <div className="flex-1 h-full relative z-20">
              {PRODUCTS.map((product, index) => {
                let detailsRef;
                if (index === 0) detailsRef = details1Ref;
                else if (index === 1) detailsRef = details2Ref;
                else detailsRef = details3Ref;

                return (
                  <div
                    key={product.id}
                    ref={detailsRef}
                    className={`absolute inset-0 flex flex-col justify-center space-y-3 md:space-y-5 transition-opacity duration-300 ${index === 0 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                  >
                    {/* Category Label */}
                    <div className="flex items-center gap-3">
                      <span
                        style={{ color: product.accentColor }}
                        className="font-sans text-[9px] md:text-xs font-bold uppercase tracking-[0.2em]"
                      >
                        {product.theme}
                      </span>
                      <div
                        style={{ backgroundColor: `${product.accentColor}4D` }}
                        className="h-[1px] w-8 md:w-12"
                      />
                    </div>

                    {/* Description */}
                    <p
                      style={{ color: "var(--active-text-secondary)" }}
                      className="font-sans text-sm md:text-base leading-relaxed font-normal text-white/95 line-clamp-3 md:line-clamp-none transition-colors duration-300"
                    >
                      {product.description}
                    </p>

                    {/* Core Benefits */}
                    <div className="space-y-1.5 md:space-y-2">
                      <h4
                        style={{ color: "var(--active-text-primary)" }}
                        className="font-sans text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase transition-colors duration-300"
                      >
                        Core Benefits
                      </h4>
                      <div className="flex flex-col gap-1.5">
                        {product.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div
                              style={{
                                backgroundColor: `${product.accentColor}1A`,
                                color: product.accentColor
                              }}
                              className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300"
                            >
                              <Check className="w-2 md:w-2.5 h-2 md:h-2.5" />
                            </div>
                            <span
                              style={{ color: "var(--active-text-primary)" }}
                              className="font-sans text-[12px] md:text-sm font-medium opacity-100 transition-colors duration-300"
                            >
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ideal For */}
                    <div className="space-y-1.5 md:space-y-2 hidden sm:block">
                      <h4
                        style={{ color: "var(--active-text-primary)" }}
                        className="font-sans text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase transition-colors duration-300"
                      >
                        Ideal For
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {product.perfectFor.map((item, i) => (
                          <span
                            key={i}
                            style={{
                              backgroundColor: "var(--active-card-bg)",
                              borderColor: "var(--active-border-color)",
                              color: "var(--active-text-secondary)"
                            }}
                            className="px-2.5 py-0.5 rounded-full border font-sans text-[9px] md:text-[10px] font-bold uppercase tracking-wider transition-all duration-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Traceability & Trust Cues */}
                    <div
                      style={{ borderColor: "var(--active-border-color)" }}
                      className="pt-3 border-t transition-colors duration-300"
                    >
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="7" fill={`${product.accentColor}1A`} className="transition-colors duration-300" />
                            <path d="M5.5 8L7 9.5L10.5 6" stroke={product.accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300" />
                          </svg>
                          <span
                            style={{ color: "var(--active-text-primary)" }}
                            className="font-sans text-[10px] md:text-xs font-medium opacity-90 transition-colors duration-300"
                          >
                            Third-Party Tested
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="7" fill={`${product.accentColor}1A`} className="transition-colors duration-300" />
                            <path d="M5.5 8L7 9.5L10.5 6" stroke={product.accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300" />
                          </svg>
                          <span
                            style={{ color: "var(--active-text-primary)" }}
                            className="font-sans text-[10px] md:text-xs font-medium opacity-90 transition-colors duration-300"
                          >
                            Premium Sourcing
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="7" fill={`${product.accentColor}1A`} className="transition-colors duration-300" />
                            <path d="M5.5 8L7 9.5L10.5 6" stroke={product.accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300" />
                          </svg>
                          <span
                            style={{ color: "var(--active-text-primary)" }}
                            className="font-sans text-[10px] md:text-xs font-medium opacity-90 transition-colors duration-300"
                          >
                            Transparent Labels
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="7" fill={`${product.accentColor}1A`} className="transition-colors duration-300" />
                            <path d="M5.5 8L7 9.5L10.5 6" stroke={product.accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300" />
                          </svg>
                          <span
                            style={{ color: "var(--active-text-primary)" }}
                            className="font-sans text-[10px] md:text-xs font-medium opacity-90 transition-colors duration-300"
                          >
                            GMP Certified
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Call To Actions */}
                    <div className="flex flex-col gap-2 pt-1 md:pt-2 w-full max-w-[280px]">
                      <Link
                        to={`/product/${product.routeId}`}
                        style={{
                          background: product.btnGradient,
                          boxShadow: product.btnShadow,
                        }}
                        className="w-full text-center px-4 md:px-6 py-2.5 md:py-3.5 text-white font-sans font-bold text-[10px] md:text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] shadow-lg"
                      >
                        {product.ctaPrimary}
                      </Link>
                      <Link
                        to={`/product/${product.routeId}`}
                        style={{
                          borderColor: "var(--active-border-color)",
                          color: "var(--active-text-primary)"
                        }}
                        className="w-full text-center px-4 md:px-6 py-2 md:py-3 border font-sans font-bold text-[10px] md:text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:bg-[var(--active-accent-soft)] hover:scale-[1.02] active:scale-[0.98] hidden xs:block"
                      >
                        {product.ctaSecondary}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
