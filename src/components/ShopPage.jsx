import React, { useState, useEffect, useRef } from "react";
import {
  Heart,
  Star,
  ShoppingBag,
  Eye,
  X,
  ChevronRight,
  Leaf,
  FlaskConical,
  RefreshCcw,
  Layers,
  Sparkles,
  ArrowRight,
  Check,
  Shield,
  Zap,
} from "lucide-react";

// ─── Product Images ───────────────────────────────────────────────────────────
import beetrootImg from "../assets/Product Images/Beetroot (TruBeet®).png";
import berberineImg from "../assets/Product Images/Berberine + Cinnamon.png";
import saffronImg from "../assets/Product Images/Affron® Saffron Extract.png";
import creatineImg from "../assets/Product Images/Creatine Monohydrate (Micronized).png";
import ironImg from "../assets/Product Images/Iron Bisglycinate.png";
import myoImg from "../assets/Product Images/Myo-Inositol + D-Chiro.png";
import theanineImg from "../assets/Product Images/L-Theanine.png";
import vitdImg from "../assets/Product Images/D3 + K2.png";
import omegaImg from "../assets/Product Images/Fish Oil.png";
import psylliumImg from "../assets/Product Images/Psyllium Husk (Isabgul).png";
import magnesiumImg from "../assets/Product Images/Magnesium.png";
import multivitaminImg from "../assets/Product Images/Multivitamin.png";

// ─── Data ─────────────────────────────────────────────────────────────────────
const ALL_PRODUCTS = [
  {
    id: "creatine",
    name: "Creatine Monohydrate",
    subtitle: "Micronized · Unflavored",
    category: "Performance",
    categoryColor: "#2E5F73",
    categoryBg: "#EEF3F5",
    badge: "Bestseller",
    badgeColor: "#2E5F73",
    badgeBg: "#EEF3F5",
    benefit: "Fuels muscle energy & sharpens cognitive speed.",
    rating: 4.9,
    reviews: 2847,
    price: 49.0,
    subPrice: 41.65,
    image: creatineImg,
    primaryColor: "#2E5F73",
    softBg: "#EEF3F5",
    colorClass: "creatine",
  },
  {
    id: "omega-3",
    name: "Omega-3 Fish Oil",
    subtitle: "90 Softgels · Orange Zest",
    category: "Brain & Heart",
    categoryColor: "#9AA4AD",
    categoryBg: "#F5F6F7",
    badge: "Most Loved",
    badgeColor: "#9B2D3A",
    badgeBg: "#FAF2F3",
    benefit: "Concentrated lipids for clarity & low inflammation.",
    rating: 4.8,
    reviews: 1923,
    price: 39.0,
    subPrice: 33.15,
    image: omegaImg,
    primaryColor: "#9AA4AD",
    softBg: "#F5F6F7",
    colorClass: "omega",
  },
  {
    id: "saffron",
    name: "Affron® Saffron Extract",
    subtitle: "60 Capsules · Standardized 3.5%",
    category: "Mood & Sleep",
    categoryColor: "#E3B341",
    categoryBg: "#FCF8EC",
    badge: "New",
    badgeColor: "#9C5A36",
    badgeBg: "#FAF4F1",
    benefit: "Uplifts mood & calms the nervous system naturally.",
    rating: 4.7,
    reviews: 841,
    price: 59.0,
    subPrice: 50.15,
    image: saffronImg,
    primaryColor: "#E3B341",
    softBg: "#FCF8EC",
    colorClass: "saffron",
  },
  {
    id: "vit-d3-k2",
    name: "Vitamin D3 + K2",
    subtitle: "30ml Liquid Drops",
    category: "Structural Support",
    categoryColor: "#3A377A",
    categoryBg: "#F1F0F6",
    badge: "Bestseller",
    badgeColor: "#3A377A",
    badgeBg: "#F1F0F6",
    benefit: "Directs calcium precisely to bones, not arteries.",
    rating: 4.9,
    reviews: 3412,
    price: 44.0,
    subPrice: 37.4,
    image: vitdImg,
    primaryColor: "#3A377A",
    softBg: "#F1F0F6",
    colorClass: "vitd",
  },
  {
    id: "beetroot",
    name: "Beetroot TruBeet®",
    subtitle: "60 Capsules · Standardized Extract",
    category: "Endurance",
    categoryColor: "#9B2D3A",
    categoryBg: "#FAF2F3",
    badge: "Most Loved",
    badgeColor: "#9B2D3A",
    badgeBg: "#FAF2F3",
    benefit: "Cellular oxygenation, stamina & muscle recovery.",
    rating: 4.8,
    reviews: 1567,
    price: 42.0,
    subPrice: 35.7,
    image: beetrootImg,
    primaryColor: "#9B2D3A",
    softBg: "#FAF2F3",
    colorClass: "beetroot",
  },
  {
    id: "berberine",
    name: "Berberine + Cinnamon",
    subtitle: "60 Capsules · Clinical Grade",
    category: "Metabolic",
    categoryColor: "#9C5A36",
    categoryBg: "#FAF4F1",
    badge: "Limited Edition",
    badgeColor: "#7A7F58",
    badgeBg: "#F5F6F2",
    benefit: "Blood glucose stability & gut microbiome harmony.",
    rating: 4.7,
    reviews: 1102,
    price: 54.0,
    subPrice: 45.9,
    image: berberineImg,
    primaryColor: "#9C5A36",
    softBg: "#FAF4F1",
    colorClass: "berberine",
  },
  {
    id: "myo-inositol",
    name: "Myo-Inositol + D-Chiro",
    subtitle: "120g Powder · Unflavored",
    category: "Hormonal Balance",
    categoryColor: "#A78BB5",
    categoryBg: "#F7F5F9",
    badge: "New",
    badgeColor: "#A78BB5",
    badgeBg: "#F7F5F9",
    benefit: "Supports hormonal rhythm & metabolic signaling.",
    rating: 4.8,
    reviews: 987,
    price: 48.0,
    subPrice: 40.8,
    image: myoImg,
    primaryColor: "#A78BB5",
    softBg: "#F7F5F9",
    colorClass: "myo",
  },
  {
    id: "l-theanine",
    name: "L-Theanine",
    subtitle: "60 Capsules · 200mg",
    category: "Focus & Calm",
    categoryColor: "#7A7F58",
    categoryBg: "#F5F6F2",
    badge: "Bestseller",
    badgeColor: "#7A7F58",
    badgeBg: "#F5F6F2",
    benefit: "Alpha-wave calm without the mid-afternoon slump.",
    rating: 4.9,
    reviews: 2104,
    price: 36.0,
    subPrice: 30.6,
    image: theanineImg,
    primaryColor: "#7A7F58",
    softBg: "#F5F6F2",
    colorClass: "ltheanine",
  },
  {
    id: "iron",
    name: "Iron Bisglycinate",
    subtitle: "60 Capsules · Gentle Chelated",
    category: "Vitality",
    categoryColor: "#A6482E",
    categoryBg: "#FAF0EE",
    badge: "Most Loved",
    badgeColor: "#A6482E",
    badgeBg: "#FAF0EE",
    benefit: "Gentle, non-constipating iron for lasting energy.",
    rating: 4.7,
    reviews: 762,
    price: 32.0,
    subPrice: 27.2,
    image: ironImg,
    primaryColor: "#A6482E",
    softBg: "#FAF0EE",
    colorClass: "iron",
  },
  {
    id: "psyllium",
    name: "Psyllium Husk",
    subtitle: "300g Powder · Isabgul",
    category: "Gut Health",
    categoryColor: "#8A7A5A",
    categoryBg: "#F7F3EA",
    badge: "New",
    badgeColor: "#8A7A5A",
    badgeBg: "#F7F3EA",
    benefit: "Prebiotic fiber for a calm, balanced digestive system.",
    rating: 4.6,
    reviews: 519,
    price: 28.0,
    subPrice: 23.8,
    image: psylliumImg,
    primaryColor: "#8A7A5A",
    softBg: "#F7F3EA",
    colorClass: "psyllium",
  },
  {
    id: "magnesium",
    name: "Magnesium Glycinate",
    subtitle: "60 Capsules · Elemental 200mg",
    category: "Recovery & Sleep",
    categoryColor: "#5F7181",
    categoryBg: "#EEF2F5",
    badge: "Bestseller",
    badgeColor: "#5F7181",
    badgeBg: "#EEF2F5",
    benefit: "Deep recovery, sleep quality & muscle relaxation.",
    rating: 4.9,
    reviews: 3187,
    price: 38.0,
    subPrice: 32.3,
    image: magnesiumImg,
    primaryColor: "#5F7181",
    softBg: "#EEF2F5",
    colorClass: "omega",
  },
  {
    id: "multivitamin",
    name: "Daily Multivitamin",
    subtitle: "60 Capsules · 23 Nutrients",
    category: "Daily Foundations",
    categoryColor: "#6B7C93",
    categoryBg: "#EEF1FB",
    badge: "Most Loved",
    badgeColor: "#2C3E91",
    badgeBg: "#EEF1FB",
    benefit: "Complete micronutrient coverage for peak vitality.",
    rating: 4.7,
    reviews: 2563,
    price: 45.0,
    subPrice: 38.25,
    image: multivitaminImg,
    primaryColor: "#6B7C93",
    softBg: "#EEF1FB",
    colorClass: "vitd",
  },
];

const CATEGORIES = [
  "All",
  "Performance",
  "Brain & Heart",
  "Mood & Sleep",
  "Structural Support",
  "Endurance",
  "Metabolic",
  "Hormonal Balance",
  "Focus & Calm",
  "Vitality",
  "Gut Health",
  "Recovery & Sleep",
  "Daily Foundations",
];

const BADGE_COLORS = {
  Bestseller: { bg: "#F0F6F9", text: "#2E5F73", dot: "#2E5F73" },
  New: { bg: "#FAF4F1", text: "#9C5A36", dot: "#9C5A36" },
  "Most Loved": { bg: "#FAF2F3", text: "#9B2D3A", dot: "#9B2D3A" },
  "Limited Edition": { bg: "#F5F6F2", text: "#7A7F58", dot: "#7A7F58" },
};

// ─── Star Rating Component ────────────────────────────────────────────────────
function StarRating({ rating, reviews, size = "sm" }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const iconSize = size === "sm" ? 10 : 12;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width={iconSize}
            height={iconSize}
            viewBox="0 0 12 12"
            fill={i < fullStars ? "#E3B341" : i === fullStars && hasHalf ? "url(#half)" : "none"}
            stroke={i < fullStars || (i === fullStars && hasHalf) ? "#E3B341" : "#D1D1CE"}
            strokeWidth="1"
          >
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="#E3B341" />
                <stop offset="50%" stopColor="none" />
              </linearGradient>
            </defs>
            <polygon points="6,1 7.5,4.5 11,4.8 8.5,7.2 9.2,11 6,9.2 2.8,11 3.5,7.2 1,4.8 4.5,4.5" />
          </svg>
        ))}
      </div>
      <span
        style={{ fontFamily: "var(--font-aileron)", fontSize: 11, color: "var(--color-foundation-text-secondary)" }}
      >
        {rating} ({reviews.toLocaleString()})
      </span>
    </div>
  );
}

// ─── Quick View Modal ─────────────────────────────────────────────────────────
function QuickViewModal({ product, onClose, onAddRitual, onNavigate }) {
  const [added, setAdded] = useState(false);
  const [isSub, setIsSub] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const handleAdd = () => {
    onAddRitual({
      id: product.id,
      name: product.name,
      variant: product.subtitle,
      flavor: "",
      oneTimePrice: product.price,
      price: isSub ? product.subPrice : product.price,
      quantity: 1,
      image: product.image,
      isSubscription: isSub,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#1E1E1E]/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div
        className="relative w-full sm:max-w-2xl rounded-t-[2rem] sm:rounded-[2rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.2)]"
        style={{ background: "#FDFCF9" }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
          style={{ background: "rgba(0,0,0,0.06)" }}
        >
          <X className="w-4 h-4" style={{ color: "#1E1E1E" }} />
        </button>

        <div className="flex flex-col sm:flex-row">
          {/* Image Panel */}
          <div
            className="sm:w-2/5 flex items-center justify-center p-10 sm:p-12 shrink-0"
            style={{ background: product.softBg }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-36 h-36 sm:w-48 sm:h-48 object-contain"
            />
          </div>

          {/* Info Panel */}
          <div className="flex-1 p-7 sm:p-10 flex flex-col justify-between gap-5">
            <div>
              {/* Badge */}
              {(() => {
                const bc = BADGE_COLORS[product.badge] || BADGE_COLORS["Bestseller"];
                return (
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3"
                    style={{ background: bc.bg }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: bc.dot }} />
                    <span
                      className="text-[10px] font-semibold uppercase tracking-[0.18em]"
                      style={{ fontFamily: "var(--font-aileron)", color: bc.text }}
                    >
                      {product.badge}
                    </span>
                  </div>
                );
              })()}

              <h2
                className="text-2xl font-bold mb-1 leading-tight"
                style={{ fontFamily: "var(--font-display)", color: "#1E1E1E" }}
              >
                {product.name}
              </h2>
              <p
                className="text-sm mb-3"
                style={{ fontFamily: "var(--font-aileron)", color: "var(--color-foundation-text-secondary)" }}
              >
                {product.subtitle}
              </p>
              <StarRating rating={product.rating} reviews={product.reviews} size="md" />

              <p
                className="text-sm mt-4 leading-relaxed"
                style={{ fontFamily: "var(--font-aileron)", color: "#5F6368" }}
              >
                {product.benefit}
              </p>
            </div>

            {/* Pricing Toggle */}
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
              <button
                onClick={() => setIsSub(false)}
                className="w-full flex items-center justify-between px-4 py-3 transition-colors cursor-pointer"
                style={{ background: !isSub ? product.softBg : "transparent" }}
              >
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-aileron)", color: "#1E1E1E" }}
                >
                  One-Time
                </span>
                <span
                  className="text-base font-bold"
                  style={{ fontFamily: "var(--font-display)", color: product.primaryColor }}
                >
                  ${product.price.toFixed(2)}
                </span>
              </button>
              <div style={{ height: 1, background: "rgba(0,0,0,0.05)" }} />
              <button
                onClick={() => setIsSub(true)}
                className="w-full flex items-center justify-between px-4 py-3 transition-colors cursor-pointer"
                style={{ background: isSub ? product.softBg : "transparent" }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-aileron)", color: "#1E1E1E" }}
                  >
                    Subscribe & Save
                  </span>
                  <span
                    className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                    style={{ background: "#E8F5E9", color: "#2E7D32" }}
                  >
                    15% OFF
                  </span>
                </div>
                <span
                  className="text-base font-bold"
                  style={{ fontFamily: "var(--font-display)", color: product.primaryColor }}
                >
                  ${product.subPrice.toFixed(2)}/mo
                </span>
              </button>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleAdd}
                className="flex-1 py-3.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                style={{
                  fontFamily: "var(--font-aileron)",
                  background: added ? "#2E7D32" : product.primaryColor,
                  color: "#fff",
                }}
              >
                {added ? (
                  <><Check className="w-4 h-4" /> Added to Ritual</>
                ) : (
                  <><ShoppingBag className="w-4 h-4" /> Add To Ritual</>
                )}
              </button>
              <button
                onClick={() => { onNavigate(product.id); onClose(); }}
                className="px-5 py-3.5 rounded-full text-sm font-bold tracking-wide border transition-all duration-200 hover:scale-105 cursor-pointer"
                style={{
                  fontFamily: "var(--font-aileron)",
                  borderColor: "rgba(0,0,0,0.1)",
                  color: "#1E1E1E",
                }}
              >
                Full Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({ product, onAddRitual, onQuickView, onNavigate }) {
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const bc = BADGE_COLORS[product.badge] || BADGE_COLORS["Bestseller"];

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddRitual({
      id: product.id,
      name: product.name,
      variant: product.subtitle,
      flavor: "",
      oneTimePrice: product.price,
      price: product.price,
      quantity: 1,
      image: product.image,
      isSubscription: false,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      className="group relative flex flex-col rounded-[1.75rem] overflow-hidden cursor-pointer"
      style={{
        background: "#FDFCFA",
        border: "1px solid rgba(0,0,0,0.055)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
        transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.04)";
      }}
      onClick={() => onNavigate(product.id)}
    >
      {/* Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background: bc.bg }}>
        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: bc.dot }} />
        <span
          className="text-[9px] font-bold uppercase tracking-[0.16em]"
          style={{ fontFamily: "var(--font-aileron)", color: bc.text }}
        >
          {product.badge}
        </span>
      </div>

      {/* Wishlist */}
      <button
        className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
        style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)" }}
        onClick={(e) => { e.stopPropagation(); setWished(!wished); }}
        aria-label="Save to wishlist"
      >
        <Heart
          className="w-3.5 h-3.5 transition-all duration-300"
          fill={wished ? "#9B2D3A" : "none"}
          stroke={wished ? "#9B2D3A" : "#A1A1AA"}
          strokeWidth={1.8}
        />
      </button>

      {/* Image Area */}
      <div
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{ background: product.softBg, height: 220 }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Quick View Overlay */}
        <div
          className="absolute inset-0 flex items-end justify-center pb-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
        >
          <button
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer transition-all duration-200 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(12px)",
              color: "#1E1E1E",
              fontFamily: "var(--font-aileron)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
            }}
          >
            <Eye className="w-3 h-3" /> Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category */}
        <span
          className="text-[9px] font-bold uppercase tracking-[0.2em] mb-2 block"
          style={{ fontFamily: "var(--font-aileron)", color: product.primaryColor }}
        >
          {product.category}
        </span>

        {/* Title */}
        <h3
          className="text-base font-bold leading-snug mb-1.5"
          style={{ fontFamily: "var(--font-display)", color: "#1E1E1E" }}
        >
          {product.name}
        </h3>

        {/* Benefit */}
        <p
          className="text-xs leading-relaxed mb-3"
          style={{ fontFamily: "var(--font-aileron)", color: "var(--color-foundation-text-secondary)" }}
        >
          {product.benefit}
        </p>

        {/* Rating */}
        <div className="mb-4">
          <StarRating rating={product.rating} reviews={product.reviews} />
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Price Row */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <div
              className="text-xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "#1E1E1E" }}
            >
              ${product.price.toFixed(2)}
            </div>
            <div
              className="text-[10px] mt-0.5"
              style={{ fontFamily: "var(--font-aileron)", color: "var(--color-foundation-text-secondary)" }}
            >
              or ${product.subPrice.toFixed(2)}/mo with Subscribe
            </div>
          </div>
        </div>

        {/* Add To Ritual CTA */}
        <button
          onClick={handleAdd}
          className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          style={{
            fontFamily: "var(--font-aileron)",
            background: added ? "#2E7D32" : product.primaryColor,
            color: "#fff",
            boxShadow: added ? "0 4px 16px rgba(46,125,50,0.25)" : `0 4px 16px ${product.primaryColor}30`,
            transition: "background 0.3s, box-shadow 0.3s, transform 0.3s",
          }}
        >
          {added ? (
            <><Check className="w-3.5 h-3.5" /> Added!</>
          ) : (
            <><ShoppingBag className="w-3.5 h-3.5" /> Add To Ritual</>
          )}
        </button>
      </div>
    </div>
  );
}

// ─── Special Cards ────────────────────────────────────────────────────────────
function BundleCard({ onNavigate }) {
  return (
    <div
      className="relative rounded-[1.75rem] overflow-hidden flex flex-col justify-between cursor-pointer group"
      style={{
        background: "linear-gradient(135deg, #1E1E1E 0%, #2C2C2C 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
        minHeight: 380,
        transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.15)";
      }}
      onClick={() => onNavigate("creatine")}
    >
      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#E3B341]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#9B2D3A]/10 blur-3xl pointer-events-none" />

      {/* Floating stacked images */}
      <div className="absolute top-8 right-0 w-full flex justify-end pr-4 opacity-70">
        <div className="relative w-28 h-28">
          <img src={creatineImg} alt="" className="absolute w-20 h-20 object-contain top-0 right-4 rotate-[-8deg]" />
          <img src={omegaImg} alt="" className="absolute w-16 h-16 object-contain bottom-0 right-0 rotate-[6deg]" />
          <img src={vitdImg} alt="" className="absolute w-14 h-14 object-contain top-2 right-16 rotate-[4deg]" />
        </div>
      </div>

      <div className="relative z-10 p-7 flex flex-col justify-end h-full" style={{ paddingTop: 140 }}>
        <div
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-3 self-start"
          style={{ background: "rgba(227,179,65,0.15)" }}
        >
          <Layers className="w-3 h-3" style={{ color: "#E3B341" }} />
          <span
            className="text-[9px] font-bold uppercase tracking-[0.18em]"
            style={{ fontFamily: "var(--font-aileron)", color: "#E3B341" }}
          >
            Bundle
          </span>
        </div>

        <h3
          className="text-xl font-bold leading-tight mb-2"
          style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
        >
          Complete Your Ritual
        </h3>
        <p
          className="text-xs leading-relaxed mb-5"
          style={{ fontFamily: "var(--font-aileron)", color: "rgba(255,255,255,0.55)" }}
        >
          Curated stacks for your specific wellness goal — sleep, focus, strength, or hormonal balance.
        </p>

        <button
          className="self-start flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 cursor-pointer"
          style={{
            fontFamily: "var(--font-aileron)",
            background: "#E3B341",
            color: "#1E1E1E",
          }}
        >
          Explore Bundles <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

function ScienceCard() {
  const points = [
    "Clinically-studied actives at effective doses",
    "Third-party lab verified for purity",
    "No proprietary blends — full label transparency",
  ];
  return (
    <div
      className="relative rounded-[1.75rem] overflow-hidden flex flex-col justify-between cursor-default group"
      style={{
        background: "linear-gradient(135deg, #EEF3F5 0%, #E3ECF1 100%)",
        border: "1px solid rgba(46,95,115,0.1)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
        minHeight: 380,
        transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 24px 60px rgba(46,95,115,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.04)";
      }}
    >
      <div className="p-7 flex flex-col h-full justify-between">
        <div>
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
            style={{ background: "#2E5F73" }}
          >
            <FlaskConical className="w-5 h-5 text-white" />
          </div>

          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-3"
            style={{ background: "rgba(46,95,115,0.12)" }}
          >
            <span
              className="text-[9px] font-bold uppercase tracking-[0.18em]"
              style={{ fontFamily: "var(--font-aileron)", color: "#2E5F73" }}
            >
              Science-Backed
            </span>
          </div>

          <h3
            className="text-xl font-bold leading-tight mb-3"
            style={{ fontFamily: "var(--font-display)", color: "#1E1E1E" }}
          >
            Every Formula. Evidence-Based.
          </h3>
          <p
            className="text-xs leading-relaxed mb-5"
            style={{ fontFamily: "var(--font-aileron)", color: "#5F6368" }}
          >
            We don't guess. Every ingredient is chosen based on peer-reviewed research, then produced in GMP-certified facilities.
          </p>
        </div>

        <ul className="space-y-2.5">
          {points.map((pt, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: "#2E5F73" }}
              >
                <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
              </span>
              <span
                className="text-xs leading-relaxed"
                style={{ fontFamily: "var(--font-aileron)", color: "#5F6368" }}
              >
                {pt}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SubscribeCard() {
  return (
    <div
      className="relative rounded-[1.75rem] overflow-hidden flex flex-col cursor-default group"
      style={{
        background: "linear-gradient(135deg, #FAF2F3 0%, #F5E8EB 100%)",
        border: "1px solid rgba(155,45,58,0.1)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
        minHeight: 380,
        transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 24px 60px rgba(155,45,58,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.04)";
      }}
    >
      <div className="p-7 flex flex-col h-full justify-between">
        <div>
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
            style={{ background: "#9B2D3A" }}
          >
            <RefreshCcw className="w-5 h-5 text-white" />
          </div>

          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-3"
            style={{ background: "rgba(155,45,58,0.1)" }}
          >
            <Sparkles className="w-2.5 h-2.5" style={{ color: "#9B2D3A" }} />
            <span
              className="text-[9px] font-bold uppercase tracking-[0.18em]"
              style={{ fontFamily: "var(--font-aileron)", color: "#9B2D3A" }}
            >
              Subscribe & Save
            </span>
          </div>

          <h3
            className="text-xl font-bold leading-tight mb-3"
            style={{ fontFamily: "var(--font-display)", color: "#1E1E1E" }}
          >
            Never Run Out. Save 15% Every Month.
          </h3>
          <p
            className="text-xs leading-relaxed mb-5"
            style={{ fontFamily: "var(--font-aileron)", color: "#5F6368" }}
          >
            Set your ritual once. Pause, skip, or cancel anytime — no lock-in, no hassle.
          </p>
        </div>

        <div className="space-y-2">
          {["15% off every order", "Free shipping on all subscriptions", "Priority access to new drops", "Cancel or pause anytime"].map((b, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "#9B2D3A" }}
              >
                <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
              </span>
              <span
                className="text-xs"
                style={{ fontFamily: "var(--font-aileron)", color: "#5F6368" }}
              >
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function IngredientCard() {
  const ingredients = [
    { name: "Affron®", origin: "Spain", color: "#E3B341" },
    { name: "TruBeet®", origin: "USA", color: "#9B2D3A" },
    { name: "Creatine HCl", origin: "Germany", color: "#2E5F73" },
    { name: "Ferrous Bis.", origin: "Switzerland", color: "#A6482E" },
  ];
  return (
    <div
      className="relative rounded-[1.75rem] overflow-hidden flex flex-col cursor-default group"
      style={{
        background: "linear-gradient(135deg, #F5F6F2 0%, #ECEEE6 100%)",
        border: "1px solid rgba(122,127,88,0.1)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
        minHeight: 380,
        transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 24px 60px rgba(122,127,88,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.04)";
      }}
    >
      <div className="p-7 flex flex-col h-full justify-between">
        <div>
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
            style={{ background: "#7A7F58" }}
          >
            <Leaf className="w-5 h-5 text-white" />
          </div>

          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-3"
            style={{ background: "rgba(122,127,88,0.1)" }}
          >
            <Shield className="w-2.5 h-2.5" style={{ color: "#7A7F58" }} />
            <span
              className="text-[9px] font-bold uppercase tracking-[0.18em]"
              style={{ fontFamily: "var(--font-aileron)", color: "#7A7F58" }}
            >
              Full Transparency
            </span>
          </div>

          <h3
            className="text-xl font-bold leading-tight mb-3"
            style={{ fontFamily: "var(--font-display)", color: "#1E1E1E" }}
          >
            Ingredient Transparency. No Exceptions.
          </h3>
          <p
            className="text-xs leading-relaxed mb-5"
            style={{ fontFamily: "var(--font-aileron)", color: "#5F6368" }}
          >
            Every active ingredient is named, sourced, and dosed on the label — no proprietary blends.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {ingredients.map((ing) => (
            <div
              key={ing.name}
              className="rounded-xl p-3"
              style={{ background: "rgba(255,255,255,0.6)" }}
            >
              <div
                className="w-2 h-2 rounded-full mb-1.5"
                style={{ background: ing.color }}
              />
              <div
                className="text-xs font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#1E1E1E" }}
              >
                {ing.name}
              </div>
              <div
                className="text-[10px]"
                style={{ fontFamily: "var(--font-aileron)", color: "#A1A1AA" }}
              >
                {ing.origin}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Shop Page ───────────────────────────────────────────────────────────
export default function ShopPage({ onAddRitual, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const filterRef = useRef(null);
  const [filterSticky, setFilterSticky] = useState(false);

  const filtered =
    activeCategory === "All"
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const sentinel = document.getElementById("shop-filter-sentinel");
    if (!sentinel) return;
    const obs = new IntersectionObserver(
      ([entry]) => setFilterSticky(!entry.isIntersecting),
      { rootMargin: "-80px 0px 0px 0px" }
    );
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, []);

  // ─ Assemble grid items with special cards injected ─────────────────────────
  const buildGrid = () => {
    const items = [];
    let specialIdx = 0;
    const specials = [
      { type: "bundle", after: 3 },
      { type: "science", after: 7 },
      { type: "subscribe", after: 11 },
      { type: "ingredient", after: 15 },
    ];

    let productIdx = 0;
    let insertAt = specials[specialIdx]?.after ?? Infinity;

    while (productIdx < filtered.length) {
      items.push({ kind: "product", data: filtered[productIdx] });
      productIdx++;

      if (productIdx === insertAt && specialIdx < specials.length) {
        items.push({ kind: "special", type: specials[specialIdx].type });
        specialIdx++;
        insertAt = specials[specialIdx]?.after ?? Infinity;
      }
    }

    // If any specials remain and all products shown, append them
    while (specialIdx < specials.length) {
      items.push({ kind: "special", type: specials[specialIdx].type });
      specialIdx++;
    }

    return items;
  };

  const gridItems = buildGrid();

  return (
    <div
      style={{
        background: "#F7F5F2",
        minHeight: "100vh",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* ── Hero Section ── */}
      <section
        style={{
          background: "linear-gradient(180deg, #F0EDE8 0%, #F7F5F2 100%)",
          paddingTop: 120,
          paddingBottom: 72,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative radial glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(227,179,65,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto", padding: "0 24px" }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: 999,
              padding: "6px 16px",
              marginBottom: 24,
            }}
          >
            <Zap style={{ width: 11, height: 11, color: "#E3B341" }} />
            <span
              style={{
                fontFamily: "var(--font-aileron)",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#5F6368",
              }}
            >
              Curated for Your Body
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-lemon, var(--font-display))",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              letterSpacing: "0.03em",
              color: "#1E1E1E",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            SHOP ALL RITUALS
          </h1>

          {/* Divider */}
          <div
            style={{
              width: 48,
              height: 1,
              background: "linear-gradient(90deg, transparent, #9B2D3A, transparent)",
              margin: "0 auto 20px",
            }}
          />

          {/* Subtext */}
          <p
            style={{
              fontFamily: "var(--font-aileron)",
              fontSize: 15,
              fontWeight: 300,
              color: "#5F6368",
              lineHeight: 1.7,
              maxWidth: 460,
              margin: "0 auto 28px",
            }}
          >
            Twelve targeted formulations. One philosophy — give your body exactly what it needs, at clinical doses.
          </p>

          {/* Product count pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#1E1E1E",
              borderRadius: 999,
              padding: "8px 20px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 16,
                fontWeight: 700,
                color: "#FFFFFF",
              }}
            >
              {ALL_PRODUCTS.length}
            </span>
            <span
              style={{
                fontFamily: "var(--font-aileron)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              Rituals Available
            </span>
          </div>
        </div>
      </section>

      {/* ── Filter Sentinel (for sticky detection) ── */}
      <div id="shop-filter-sentinel" style={{ height: 1 }} />

      {/* ── Sticky Category Filter Bar ── */}
      <div
        ref={filterRef}
        style={{
          position: "sticky",
          top: 72,
          zIndex: 50,
          background: filterSticky ? "rgba(247,245,242,0.94)" : "#F7F5F2",
          backdropFilter: filterSticky ? "blur(16px)" : "none",
          borderBottom: filterSticky ? "1px solid rgba(0,0,0,0.06)" : "none",
          boxShadow: filterSticky ? "0 4px 24px rgba(0,0,0,0.05)" : "none",
          transition: "background 0.3s, backdrop-filter 0.3s, box-shadow 0.3s, border-color 0.3s",
          padding: "14px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1340,
            margin: "0 auto",
            padding: "0 24px",
            overflowX: "auto",
            display: "flex",
            gap: 8,
            scrollbarWidth: "none",
          }}
          className="no-scrollbar"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            const matchProduct = ALL_PRODUCTS.find((p) => p.category === cat);
            const activeColor = matchProduct?.primaryColor || "#9B2D3A";

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  whiteSpace: "nowrap",
                  padding: "7px 18px",
                  borderRadius: 999,
                  border: isActive ? "none" : "1px solid rgba(0,0,0,0.08)",
                  background: isActive ? "#1E1E1E" : "rgba(255,255,255,0.7)",
                  color: isActive ? "#FFFFFF" : "#5F6368",
                  fontFamily: "var(--font-aileron)",
                  fontSize: 11,
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
                  flexShrink: 0,
                  boxShadow: isActive ? "0 4px 12px rgba(0,0,0,0.12)" : "none",
                }}
              >
                {cat === "All" ? `All (${ALL_PRODUCTS.length})` : cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Product Grid ── */}
      <main style={{ maxWidth: 1340, margin: "0 auto", padding: "56px 24px 96px" }}>
        {/* Filtered count */}
        <div
          style={{
            marginBottom: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-aileron)",
              fontSize: 12,
              color: "#A1A1AA",
              letterSpacing: "0.08em",
            }}
          >
            Showing <strong style={{ color: "#1E1E1E" }}>{filtered.length}</strong>{" "}
            {activeCategory !== "All" ? `in ${activeCategory}` : "rituals"}
          </p>

          {activeCategory !== "All" && (
            <button
              onClick={() => setActiveCategory("All")}
              style={{
                fontFamily: "var(--font-aileron)",
                fontSize: 11,
                fontWeight: 600,
                color: "#9B2D3A",
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4,
                padding: 0,
                letterSpacing: "0.08em",
              }}
            >
              <X className="w-3 h-3" /> Clear filter
            </button>
          )}
        </div>

        {/* 4-column responsive grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
          className="shop-grid"
        >
          {gridItems.map((item, idx) => {
            if (item.kind === "product") {
              return (
                <ProductCard
                  key={item.data.id}
                  product={item.data}
                  onAddRitual={onAddRitual}
                  onQuickView={setQuickViewProduct}
                  onNavigate={onNavigate}
                />
              );
            }
            if (item.kind === "special") {
              if (item.type === "bundle") return <BundleCard key={`bundle-${idx}`} onNavigate={onNavigate} />;
              if (item.type === "science") return <ScienceCard key={`science-${idx}`} />;
              if (item.type === "subscribe") return <SubscribeCard key={`subscribe-${idx}`} />;
              if (item.type === "ingredient") return <IngredientCard key={`ingredient-${idx}`} />;
            }
            return null;
          })}
        </div>

        {/* ── Bottom Trust Bar ── */}
        <div
          style={{
            marginTop: 80,
            borderTop: "1px solid rgba(0,0,0,0.06)",
            paddingTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 32,
          }}
          className="trust-grid"
        >
          {[
            { icon: <FlaskConical className="w-5 h-5" />, title: "Third-Party Tested", desc: "Every batch verified for purity and potency" },
            { icon: <Leaf className="w-5 h-5" />, title: "Clean Ingredients", desc: "No fillers, binders, or unnecessary excipients" },
            { icon: <RefreshCcw className="w-5 h-5" />, title: "30-Day Returns", desc: "If it's not working for you, return it hassle-free" },
            { icon: <Shield className="w-5 h-5" />, title: "GMP Certified", desc: "Manufactured in certified facilities worldwide" },
          ].map((trust, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 16,
                  background: "#1E1E1E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 14px",
                  color: "#FFFFFF",
                }}
              >
                {trust.icon}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#1E1E1E",
                  marginBottom: 6,
                }}
              >
                {trust.title}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-aileron)",
                  fontSize: 12,
                  color: "#A1A1AA",
                  lineHeight: 1.5,
                }}
              >
                {trust.desc}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ── Quick View Modal ── */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddRitual={onAddRitual}
          onNavigate={onNavigate}
        />
      )}

      {/* ── Responsive Grid Styles ── */}
      <style>{`
        @media (max-width: 1200px) {
          .shop-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 860px) {
          .shop-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 520px) {
          .shop-grid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
          .trust-grid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
