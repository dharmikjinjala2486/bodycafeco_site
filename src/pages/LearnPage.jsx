import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FlaskConical, Leaf, BookOpen, ArrowRight, Brain, Zap, Shield,
  Heart, Moon, Dumbbell, ChevronRight, Star, Clock, Users
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const ARTICLES = [
  {
    id: 1,
    category: "Science",
    categoryColor: "#2E5F73",
    categoryBg: "#EEF3F5",
    title: "The ATP Advantage: Why Creatine Isn't Just for Athletes",
    excerpt: "Creatine phosphate isn't a bodybuilder's secret — it's the universal cellular energy currency that fuels your brain, mitochondria, and muscle fibers simultaneously.",
    readTime: "7 min read",
    date: "June 14, 2026",
    icon: FlaskConical,
    featured: true,
    link: "/product/creatine",
  },
  {
    id: 2,
    category: "Nutrition",
    categoryColor: "#9B2D3A",
    categoryBg: "#FAF2F3",
    title: "Omega-3: The Membrane Molecule Your Brain Is Starving For",
    excerpt: "DHA makes up 40% of the polyunsaturated fats in your brain. Modern diets chronically under-supply it. Here's what that means for cognition, inflammation, and mood.",
    readTime: "5 min read",
    date: "June 8, 2026",
    icon: Brain,
    featured: false,
    link: "/product/omega-3",
  },
  {
    id: 3,
    category: "Wellness",
    categoryColor: "#7A7F58",
    categoryBg: "#F5F6F2",
    title: "L-Theanine & Coffee: The Stack That Changes Everything",
    excerpt: "Alpha waves and caffeine don't have to compete. This amino acid tells your nervous system to focus without the jitteriness — and it makes coffee feel clean again.",
    readTime: "4 min read",
    date: "May 29, 2026",
    icon: Zap,
    featured: false,
    link: "/product/l-theanine",
  },
  {
    id: 4,
    category: "Science",
    categoryColor: "#E3B341",
    categoryBg: "#FCF8EC",
    title: "Saffron and the Serotonin System: A 3,000-Year-Old Antidepressant",
    excerpt: "The Affron® extract from Crocus sativus L. works on your serotonin and dopamine reuptake pathways at doses 200× smaller than a pinch of culinary spice.",
    readTime: "8 min read",
    date: "May 22, 2026",
    icon: Moon,
    featured: false,
    link: "/product/saffron",
  },
  {
    id: 5,
    category: "Health",
    categoryColor: "#3A377A",
    categoryBg: "#F1F0F6",
    title: "D3 + K2: Why Your Bones Need Both, and Why One Alone Can Harm",
    excerpt: "Vitamin D3 is the most deficient micronutrient in modern populations. But taking it without K2 is like unlocking a door and not deciding where the calcium should go.",
    readTime: "6 min read",
    date: "May 15, 2026",
    icon: Shield,
    featured: false,
    link: "/product/vit-d3-k2",
  },
  {
    id: 6,
    category: "Wellness",
    categoryColor: "#A78BB5",
    categoryBg: "#F7F5F9",
    title: "Myo-Inositol and the Hidden Language of Hormonal Health",
    excerpt: "The 40:1 ratio isn't arbitrary — it matches human blood plasma exactly. Understanding why this matters is the first step to understanding your endocrine system.",
    readTime: "9 min read",
    date: "May 8, 2026",
    icon: Heart,
    featured: false,
    link: "/product/myo-inositol",
  },
];

const INGREDIENT_TABS = [
  {
    id: "creatine",
    name: "Creatine Monohydrate",
    color: "#2E5F73",
    bg: "#EEF3F5",
    shortName: "Creatine",
    origin: "Synthetic (from sarcosine + cyanamide)",
    form: "Creapure® Micronized",
    dose: "5,000 mg",
    mechanism: "Phosphocreatine donation to rapidly regenerate ATP in muscle and brain cells under high-demand states.",
    highlight: "Backed by 500+ clinical trials. The most researched ergogenic compound in sports science.",
    emoji: "⚡",
  },
  {
    id: "saffron",
    name: "Affron® Saffron",
    color: "#E3B341",
    bg: "#FCF8EC",
    shortName: "Saffron",
    origin: "Crocus sativus L. (Spain)",
    form: "Standardized Extract >3.5% Lepticrosalides®",
    dose: "28 mg",
    mechanism: "Modulates monoamine neurotransmitters — specifically inhibiting serotonin and dopamine reuptake to sustain mood.",
    highlight: "Affron® is the most studied saffron extract globally with 8+ RCTs in peer-reviewed journals.",
    emoji: "🌸",
  },
  {
    id: "omega",
    name: "Marine Omega-3 EPA/DHA",
    color: "#9AA4AD",
    bg: "#F5F6F7",
    shortName: "Omega-3",
    origin: "Wild Peruvian Anchovies",
    form: "Triglyceride form (re-esterified)",
    dose: "2,000 mg",
    mechanism: "Incorporates into phospholipid cell membranes to improve fluidity, signal transduction, and inflammatory response regulation.",
    highlight: "Triglyceride form absorbs 70% better than ethyl ester forms found in cheaper products.",
    emoji: "🐟",
  },
  {
    id: "d3k2",
    name: "D3 + Menaquinone-7",
    color: "#3A377A",
    bg: "#F1F0F6",
    shortName: "D3 + K2",
    origin: "Wild Lichen (D3) · Natto-fermented (K2)",
    form: "Cholecalciferol + MK-7 in MCT oil",
    dose: "5,000 IU + 100 mcg",
    mechanism: "D3 activates VDR receptors for calcium absorption; K2 activates osteocalcin and MGP proteins to direct calcium to bone.",
    highlight: "Without K2, excess D3-driven calcium risks arterial calcification. The synergy is the entire point.",
    emoji: "☀️",
  },
  {
    id: "theanine",
    name: "Suntheanine® L-Theanine",
    color: "#7A7F58",
    bg: "#F5F6F2",
    shortName: "L-Theanine",
    origin: "Camellia sinensis (fermented, not tea-sourced)",
    form: "100% L-isomer (Suntheanine®)",
    dose: "200 mg",
    mechanism: "Crosses blood-brain barrier to increase GABA activity and stimulate alpha-wave EEG activity — alert calm without sedation.",
    highlight: "Only pure L-isomers work. Generic L-theanine often contains inactive D-isomers that have zero neurological effect.",
    emoji: "🌿",
  },
];

const HEALTH_GUIDES = [
  {
    title: "The Morning Ritual Guide",
    desc: "A sequenced protocol for building a 20-minute supplement and nutrition morning stack that sets metabolic tone for the entire day.",
    color: "#2E5F73",
    bg: "#EEF3F5",
    Icon: Clock,
    tags: ["Beginner", "Protocols", "Daily Routine"],
  },
  {
    title: "The Sleep Stack Deep Dive",
    desc: "How to layer Magnesium Glycinate, L-Theanine, and Affron Saffron for compounding effects on sleep architecture — without synthetic sedatives.",
    color: "#3A377A",
    bg: "#F1F0F6",
    Icon: Moon,
    tags: ["Advanced", "Recovery", "Sleep"],
  },
  {
    title: "Gym Performance Nutrition",
    desc: "A field guide to pre, intra, and post-training supplementation — built around the clinical evidence for Creatine, Beetroot, and Omega-3.",
    color: "#9B2D3A",
    bg: "#FAF2F3",
    Icon: Dumbbell,
    tags: ["Performance", "Training", "Recovery"],
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

function ArticleCard({ article, featured = false }) {
  const Icon = article.icon;
  if (featured) {
    return (
      <div
        className="md:col-span-2 rounded-[2rem] overflow-hidden border border-foundation-border/40 bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group flex flex-col md:flex-row"
        style={{ minHeight: 340 }}
      >
        {/* Visual panel */}
        <div
          className="md:w-2/5 flex items-center justify-center p-16 relative overflow-hidden shrink-0"
          style={{ background: article.categoryBg }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(circle at 60% 40%, ${article.categoryColor}, transparent 70%)`,
            }}
          />
          <Icon
            className="w-24 h-24 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
            style={{ color: article.categoryColor }}
            strokeWidth={1}
          />
        </div>
        {/* Content */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{ background: article.categoryBg, color: article.categoryColor }}
              >
                ● {article.category}
              </span>
              <span className="text-xs text-foundation-disabled">{article.readTime}</span>
              <span
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-saffron-primary/10 text-saffron-primary"
              >
                <Star className="w-2.5 h-2.5 fill-saffron-primary" /> Featured
              </span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foundation-text leading-tight mb-4">
              {article.title}
            </h3>
            <p className="text-sm text-foundation-text-secondary leading-relaxed">
              {article.excerpt}
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-xs text-foundation-disabled">{article.date}</span>
            <Link
              to={article.link}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 group/btn"
              style={{ color: article.categoryColor }}
            >
              Read Article
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] overflow-hidden border border-foundation-border/40 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group flex flex-col">
      {/* Image panel */}
      <div
        className="flex items-center justify-center py-10 relative overflow-hidden"
        style={{ background: article.categoryBg }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background: `radial-gradient(circle, ${article.categoryColor}, transparent)`,
          }}
        />
        <Icon
          className="w-14 h-14 transition-transform duration-500 group-hover:scale-110"
          style={{ color: article.categoryColor }}
          strokeWidth={1.2}
        />
      </div>
      {/* Content */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.18em]"
              style={{ background: article.categoryBg, color: article.categoryColor }}
            >
              ● {article.category}
            </span>
            <span className="text-[10px] text-foundation-disabled">{article.readTime}</span>
          </div>
          <h3 className="font-display font-bold text-base leading-snug text-foundation-text mb-3">
            {article.title}
          </h3>
          <p className="text-xs text-foundation-text-secondary leading-relaxed">
            {article.excerpt}
          </p>
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-foundation-border/40 pt-4">
          <span className="text-[10px] text-foundation-disabled">{article.date}</span>
          <Link
            to={article.link}
            className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider transition-all duration-200 group/btn"
            style={{ color: article.categoryColor }}
          >
            Read
            <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LearnPage() {
  const [activeTab, setActiveTab] = useState("creatine");
  const activeIngredient = INGREDIENT_TABS.find((t) => t.id === activeTab);

  return (
    <div className="min-h-screen bg-foundation-bg">
      {/* Hero Banner */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#1E1E1E]" />
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-saffron-primary/8 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-ltheanine-primary/8 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-saffron-primary/30 text-saffron-primary">
              <BookOpen className="w-3 h-3" />
              The Ingredient Journal
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Learn the science <br />
              <span className="text-saffron-primary">behind the ritual.</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              We don't believe in proprietary blends or mystery ingredients. Every compound we use is backed by peer-reviewed research — and we'll show you exactly why.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {[
                { label: "Articles Published", value: "48+" },
                { label: "Studies Referenced", value: "200+" },
                { label: "Ingredients Decoded", value: "30+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-1 px-6 py-4 rounded-2xl border border-white/8"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-beetroot-primary text-xs font-bold uppercase tracking-widest block mb-2">Latest Articles</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foundation-text">
              From the Ingredient Journal
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foundation-text-secondary hover:text-beetroot-primary transition-colors group"
          >
            Shop Products
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              featured={article.featured}
            />
          ))}
        </div>
      </section>

      {/* Ingredient Education — Tabbed */}
      <section className="py-24 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="text-saffron-primary text-xs font-bold uppercase tracking-widest block mb-3">
              Ingredient Education
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
              What's in the bottle, decoded
            </h2>
            <p className="text-white/50 text-sm mt-3 max-w-lg mx-auto leading-relaxed">
              Every active in Body Café Co. products is explained to the molecular level. No marketing, just mechanism.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {INGREDIENT_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${activeTab === tab.id
                  ? "border-transparent scale-105"
                  : "border-white/10 text-white/50 hover:border-white/20 hover:text-white/70"
                  }`}
                style={
                  activeTab === tab.id
                    ? { background: tab.bg, color: tab.color, borderColor: "transparent" }
                    : {}
                }
              >
                {tab.emoji} {tab.shortName}
              </button>
            ))}
          </div>

          {/* Active ingredient card */}
          {activeIngredient && (
            <div
              className="rounded-[2.5rem] p-8 md:p-12 border border-white/8 transition-all duration-500"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left: Identity */}
                <div className="space-y-6">
                  <div>
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4"
                      style={{ background: activeIngredient.bg + "20", color: activeIngredient.color }}
                    >
                      <FlaskConical className="w-3 h-3" />
                      Active Compound
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight">
                      {activeIngredient.name}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Origin", value: activeIngredient.origin },
                      { label: "Form / Grade", value: activeIngredient.form },
                      { label: "Clinical Dose", value: activeIngredient.dose },
                    ].map((row) => (
                      <div key={row.label} className="flex gap-4 items-start">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 w-28 shrink-0 pt-0.5">
                          {row.label}
                        </div>
                        <div className="text-sm text-white/80 leading-relaxed">{row.value}</div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="p-5 rounded-2xl border border-white/8"
                    style={{ background: activeIngredient.color + "12" }}
                  >
                    <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: activeIngredient.color }}>
                      Clinical Highlight
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed italic">
                      "{activeIngredient.highlight}"
                    </p>
                  </div>
                </div>

                {/* Right: Mechanism */}
                <div className="space-y-6">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3">
                      Mechanism of Action
                    </div>
                    <p className="text-base text-white/80 leading-relaxed">
                      {activeIngredient.mechanism}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/8">
                    <Link
                      to={`/product/${activeIngredient.id === "omega" ? "omega-3" : activeIngredient.id === "d3k2" ? "vit-d3-k2" : activeIngredient.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 group"
                      style={{ background: activeIngredient.color, color: "#fff" }}
                    >
                      See This Ingredient In Action
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Health Guides */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <span className="text-ltheanine-primary text-xs font-bold uppercase tracking-widest block mb-3">Protocols</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foundation-text">
            Wellness guides worth reading
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HEALTH_GUIDES.map((guide) => {
            const Icon = guide.Icon;
            return (
              <div
                key={guide.title}
                className="rounded-[2rem] p-8 border border-foundation-border/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col gap-5"
                style={{ background: guide.bg }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: guide.color + "20" }}
                >
                  <Icon className="w-6 h-6" style={{ color: guide.color }} />
                </div>
                <h3 className="font-display font-bold text-lg text-foundation-text leading-snug">
                  {guide.title}
                </h3>
                <p className="text-sm text-foundation-text-secondary leading-relaxed flex-1">
                  {guide.desc}
                </p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-black/5">
                  {guide.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider"
                      style={{ background: guide.color + "15", color: guide.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-foundation-bg border-t border-foundation-border/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="font-serif text-3xl font-bold text-foundation-text mb-3">
              Ready to put the science to work?
            </h2>
            <p className="text-foundation-text-secondary text-sm leading-relaxed">
              Every product in our catalog has a dedicated ingredient science section, clinical references, and transparent dosing.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foundation-text text-white text-sm font-bold uppercase tracking-wider hover:bg-beetroot-primary transition-all hover:scale-105 group whitespace-nowrap"
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
