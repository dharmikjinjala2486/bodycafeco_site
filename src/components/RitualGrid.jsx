import React, { useState } from "react";
import { ArrowRight, Check, Heart } from "lucide-react";

// Import actual product images
import beetrootImg from "../assets/Product Images/Beetroot (TruBeet®).png";
import berberineImg from "../assets/Product Images/Berberine + Cinnamon.png";
import saffronImg from "../assets/Product Images/Affron® Saffron Extract.png";
import creatineImg from "../assets/Product Images/Creatine Monohydrate (Micronized).png";
import ironImg from "../assets/Product Images/Iron Bisglycinate.png";
import myoImg from "../assets/Product Images/Myo-Inositol + D-Chiro.png";
import theanineImg from "../assets/Product Images/L-Theanine.png";
import vitdImg from "../assets/Product Images/D3 + K2.png";
import omegaImg from "../assets/Product Images/Fish Oil.png";

export default function RitualGrid({ onAddRitual }) {
  const [likedRituals, setLikedRituals] = useState({});
  const [toast, setToast] = useState(null);

  const toggleLike = (id, name) => {
    setLikedRituals((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleShopRitual = (productName, primaryColor, softBg) => {
    if (onAddRitual) {
      onAddRitual();
    }
    // Show toast
    setToast({ name: productName, primaryColor, softBg });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const rituals = [
    {
      id: "beetroot",
      name: "Beetroot",
      category: "Oxygenation & Endurance",
      purpose: "Supports cellular oxygenation, stamina, and muscle recovery.",
      format: "60 Capsules",
      image: beetrootImg,
      primaryColor: "var(--color-beetroot-primary)",
      softBg: "var(--color-beetroot-soft)",
      accentColor: "var(--color-beetroot-accent)",
      colorClass: "beetroot",
    },
    {
      id: "berberine",
      name: "Berberine + Cinnamon",
      category: "Metabolic Harmony",
      purpose: "Optimizes blood glucose stability and gut microbiome balance.",
      format: "60 Capsules",
      image: berberineImg,
      primaryColor: "var(--color-berberine-primary)",
      softBg: "var(--color-berberine-soft)",
      accentColor: "var(--color-berberine-accent)",
      colorClass: "berberine",
    },
    {
      id: "saffron",
      name: "Affron Saffron",
      category: "Emotional Radiance",
      purpose: "Uplifts mood, calms the nervous system, and restores sleep.",
      format: "60 Capsules",
      image: saffronImg,
      primaryColor: "var(--color-saffron-primary)",
      softBg: "var(--color-saffron-soft)",
      accentColor: "var(--color-saffron-accent)",
      colorClass: "saffron",
    },
    {
      id: "creatine",
      name: "Creatine",
      category: "Cellular Energy & Power",
      purpose: "Fuels muscle energy synthesis and supports cognitive speed.",
      format: "300g Powder",
      image: creatineImg,
      primaryColor: "var(--color-creatine-primary)",
      softBg: "var(--color-creatine-soft)",
      accentColor: "var(--color-creatine-accent)",
      colorClass: "creatine",
    },
    {
      id: "iron",
      name: "Iron",
      category: "Cellular Vitality & Renewal",
      purpose: "Supports red blood cell generation and combats fatigue.",
      format: "60 Capsules",
      image: ironImg,
      primaryColor: "var(--color-iron-primary)",
      softBg: "var(--color-iron-soft)",
      accentColor: "var(--color-iron-accent)",
      colorClass: "iron",
    },
    {
      id: "myo-inositol",
      name: "Myo-Inositol",
      category: "Hormonal Rhythm & Balance",
      purpose: "Supports metabolic signaling, ovarian health, and emotional calm.",
      format: "120g Powder",
      image: myoImg,
      primaryColor: "var(--color-myo-primary)",
      softBg: "var(--color-myo-soft)",
      accentColor: "var(--color-myo-accent)",
      colorClass: "myo",
    },
    {
      id: "l-theanine",
      name: "L-Theanine",
      category: "Cognitive Calm & Alpha Waves",
      purpose: "Promotes focused cognitive calm and takes the edge off caffeine.",
      format: "60 Capsules",
      image: theanineImg,
      primaryColor: "var(--color-ltheanine-primary)",
      softBg: "var(--color-ltheanine-soft)",
      accentColor: "var(--color-ltheanine-accent)",
      colorClass: "ltheanine",
    },
    {
      id: "vit-d3-k2",
      name: "Vitamin D3 + K2",
      category: "Structural Synergy",
      purpose: "Ensures calcium is deposited correctly in bones and structures.",
      format: "30ml Liquid Drops",
      image: vitdImg,
      primaryColor: "var(--color-vitd-primary)",
      softBg: "var(--color-vitd-soft)",
      accentColor: "var(--color-vitd-accent)",
      colorClass: "vitd",
    },
    {
      id: "omega-3",
      name: "Omega-3",
      category: "Cognitive Purity & Lipids",
      purpose: "Concentrated lipids for neurological health and low inflammation.",
      format: "90 Softgels",
      image: omegaImg,
      primaryColor: "var(--color-omega-primary)",
      softBg: "var(--color-omega-soft)",
      accentColor: "var(--color-omega-accent)",
      colorClass: "omega",
    }
  ];

  return (
    <section id="shop" className="py-20 bg-foundation-bg relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-[20%] left-0 w-96 h-96 rounded-full bg-saffron-soft/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-0 w-96 h-96 rounded-full bg-beetroot-soft/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foundation-surface text-foundation-text-secondary text-[10px] font-medium font-aileron uppercase tracking-[0.25em] mb-3">
            Curated Wellness Collection
          </div>
          <h2 className="font-lemon text-4xl md:text-5xl font-normal tracking-[0.02em] text-foundation-text mb-4">
            DISCOVER YOUR RITUAL
          </h2>
          <div className="w-12 h-[1px] bg-beetroot-primary/30 mx-auto mb-4"></div>
          <p className="font-aileron font-light text-foundation-text-secondary text-sm md:text-base leading-relaxed max-w-md mx-auto">
            Nine targeted formulations, each designed for a specific wellness goal.
          </p>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rituals.map((ritual) => {
            const isLiked = likedRituals[ritual.id];
            return (
              <div
                key={ritual.id}
                className={`card-${ritual.colorClass} rounded-[2.2rem] p-6 md:p-7 flex flex-col justify-between relative group border border-foundation-border/20 shadow-[0_8px_30px_rgba(0,0,0,0.012)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.035)] duration-500`}
              >
                {/* Top Actions: Category & Subtle Heart */}
                <div className="flex justify-between items-center mb-4">
                  <span className="font-aileron font-medium text-[10px] uppercase tracking-[0.18em] text-foundation-text-secondary/90">
                    {ritual.category}
                  </span>
                  <button
                    onClick={() => toggleLike(ritual.id, ritual.name)}
                    className="text-foundation-text/30 hover:text-beetroot-primary transition-colors focus:outline-none cursor-pointer"
                    aria-label={`Save ${ritual.name}`}
                  >
                    <Heart
                      className={`w-3.5 h-3.5 transition-all duration-300 ${
                        isLiked ? "fill-beetroot-primary text-beetroot-primary scale-110" : "hover:scale-110"
                      }`}
                    />
                  </button>
                </div>

                {/* Product Image Visual Area */}
                <div 
                  className="w-full h-28 md:h-32 rounded-2xl bg-white/40 backdrop-blur-[2px] flex items-center justify-center mb-4 transition-colors duration-500 group-hover:bg-white/70 overflow-hidden"
                >
                  <img
                    src={ritual.image}
                    alt={ritual.name}
                    className="h-[85%] w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-grow flex flex-col justify-between">
                  <div className="mb-4">
                    <h3 className="font-aileron font-semibold text-lg md:text-xl uppercase tracking-wide text-foundation-text mb-1.5">
                      {ritual.name}
                    </h3>
                    <p className="font-aileron font-normal text-xs md:text-sm text-foundation-text-secondary leading-relaxed mb-2.5 max-w-[260px]">
                      {ritual.purpose}
                    </p>
                    <span className="font-aileron font-medium text-[10px] text-foundation-text-secondary/70 uppercase tracking-wider block">
                      {ritual.format}
                    </span>
                  </div>

                  {/* Shop Ritual CTA */}
                  <div>
                    <button
                      onClick={() => handleShopRitual(ritual.name, ritual.primaryColor, ritual.softBg)}
                      className="inline-flex items-center gap-1.5 font-aileron font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300 relative group/btn cursor-pointer py-1 focus:outline-none"
                      style={{ color: ritual.primaryColor }}
                    >
                      Shop Ritual
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      {/* Premium animated bottom bar */}
                      <span 
                        className="absolute bottom-0 left-0 w-0 h-[1.2px] transition-all duration-500 ease-out group-hover/btn:w-full"
                        style={{ backgroundColor: ritual.primaryColor }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Luxury Toast Notification */}
      {toast && (
        <div className="fixed bottom-8 right-8 z-50 animate-fade-in-up">
          <div className="bg-foundation-text text-white px-6 py-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex items-center gap-3 backdrop-blur-md bg-opacity-95 border border-white/10">
            <div 
              style={{ backgroundColor: toast.softBg, color: toast.primaryColor }}
              className="w-8.5 h-8.5 rounded-full flex items-center justify-center shrink-0"
            >
              <Check className="w-4 h-4" strokeWidth={3} />
            </div>
            <div className="text-sm font-aileron tracking-wide">
              <span className="font-bold text-white">{toast.name}</span> added to your daily ritual.
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

