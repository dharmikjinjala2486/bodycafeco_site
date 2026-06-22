import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Leaf, FlaskConical, Shield, Award, Globe,
  CheckCircle, Star, Users, Heart, Zap, ChevronDown
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const TIMELINE = [
  {
    year: "2021",
    title: "The Kitchen Counter Begins",
    desc: "Two friends in Santa Monica, tired of chalky powders and clinical labels, started blending their own wellness stacks using only what they would personally take. Body Café Co. was born.",
    color: "#9B2D3A",
  },
  {
    year: "2022",
    title: "The First Thousand",
    desc: "Word spread through yoga studios and independent gyms on the Westside. Without a dollar spent on advertising, we shipped our first 1,000 orders to customers who found us through genuine word of mouth.",
    color: "#E3B341",
  },
  {
    year: "2023",
    title: "Third-Party Testing Standard",
    desc: "We established our voluntary third-party purity testing protocol — every batch shipped is verified for heavy metals, contaminants, and label accuracy before it leaves our micro-facility.",
    color: "#2E5F73",
  },
  {
    year: "2024",
    title: "Expanding the Ritual",
    desc: "We expanded from 3 original formulas to a full 12-product science-forward lineup. Each new product underwent 18 months of sourcing, dosing research, and stability testing before launch.",
    color: "#7A7F58",
  },
  {
    year: "2025",
    title: "100,000 Daily Rituals",
    desc: "Quietly — without paid influencers or celebrity endorsements — we crossed 100,000 happy customers. Every single review is genuine and uncompensated. We've never paid for one.",
    color: "#A78BB5",
  },
  {
    year: "2026",
    title: "The Standard, Redefined",
    desc: "Our mission hasn't changed. We're still two people at a counter, asking ourselves: 'Would we actually take this?' If the answer is yes, it goes in a bottle. That's the whole brand.",
    color: "#9C5A36",
  },
];

const VALUES = [
  {
    icon: FlaskConical,
    title: "Transparency over Marketing",
    desc: "We publish every ingredient, every dose, and every sourcing decision. If we can't explain why something is in the formula, we don't put it in. No proprietary blends, ever.",
    color: "#2E5F73",
    bg: "#EEF3F5",
  },
  {
    icon: Shield,
    title: "Purity as a Non-Negotiable",
    desc: "Third-party lab certificates for every single batch. We test for 250+ contaminants including heavy metals, microbial pathogens, and adulteration markers — before shipment.",
    color: "#9B2D3A",
    bg: "#FAF2F3",
  },
  {
    icon: Leaf,
    title: "Sourcing with Conscience",
    desc: "We prioritize botanicals that are organically cultivated, wild-harvested, or obtained from suppliers with verified sustainability practices. Our packaging is 95% post-consumer recycled.",
    color: "#7A7F58",
    bg: "#F5F6F2",
  },
];

const QUALITY_STEPS = [
  {
    step: "01",
    title: "Ingredient Sourcing",
    desc: "We audit every supplier annually. We only work with certified ingredient manufacturers — Creapure® for creatine, Affron® for saffron, Suntheanine® for L-theanine, Ferrochel® for iron.",
    color: "#2E5F73",
  },
  {
    step: "02",
    title: "Micro-Batch Manufacturing",
    desc: "Small batches mean tight quality control. We deliberately limit production runs so every unit can be visually and chemically inspected by our team before it enters a bottle.",
    color: "#9B2D3A",
  },
  {
    step: "03",
    title: "Third-Party Lab Verification",
    desc: "Every batch is sent to an independent, ISO/IEC 17025-accredited laboratory for purity verification before it is approved for sale. No exceptions.",
    color: "#E3B341",
  },
  {
    step: "04",
    title: "Certificate Availability",
    desc: "COAs (Certificates of Analysis) are available upon request for any product and any batch. We believe our customers have the right to see exactly what they are putting in their bodies.",
    color: "#7A7F58",
  },
];

const CERTIFICATIONS = [
  { label: "GMP Certified Facility", desc: "FDA-registered, cGMP manufacturing" },
  { label: "Friend of the Sea", desc: "Sustainable marine ingredient sourcing" },
  { label: "NSF Ingredient Verification", desc: "Independent identity and purity" },
  { label: "Informed Sport Compliant", desc: "Banned substance screening protocol" },
];

const TEAM = [
  {
    name: "Dhruv Mehta",
    role: "Co-Founder & Head of Formulation",
    bio: "Former clinical research nutritionist. Spent 8 years reading clinical trials so you don't have to.",
    initials: "DM",
    color: "#2E5F73",
  },
  {
    name: "Anika Sharma",
    role: "Co-Founder & Chief Wellness Officer",
    bio: "Functional medicine practitioner and yoga instructor. Believes supplements should feel like food.",
    initials: "AS",
    color: "#9B2D3A",
  },
  {
    name: "James Calloway",
    role: "Director of Quality Assurance",
    desc: "15 years in pharmaceutical QC. Joined because he was tired of seeing supplement companies cut corners.",
    initials: "JC",
    color: "#E3B341",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-foundation-bg">

      {/* ── Hero ── */}
      <section className="relative min-h-[80vh] flex items-end pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#1E1E1E]" />
        {/* Glow orbs */}
        <div className="absolute top-20 right-0 w-[700px] h-[700px] rounded-full bg-beetroot-primary/6 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-saffron-primary/6 blur-[120px] pointer-events-none" />
        {/* Decorative lines */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 80px)"
          }}
        />
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-saffron-primary/30 text-saffron-primary">
              <Heart className="w-3 h-3" />
              Our Story
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-8">
              We started because we
              <span className="block text-saffron-primary">were disappointed.</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl mb-12">
              Disappointed by supplements that made big promises, showed tiny doses, and hid behind proprietary blends. So we started one that wouldn't.
            </p>
            <div className="flex flex-wrap gap-10">
              {[
                { v: "2021", l: "Founded" },
                { v: "100k+", l: "Happy Rituals" },
                { v: "12", l: "Products" },
                { v: "0", l: "Paid Reviews" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-display font-extrabold text-white">{s.v}</div>
                  <div className="text-xs uppercase text-white/30 tracking-wider font-semibold mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Statement ── */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-beetroot-primary text-xs font-bold uppercase tracking-widest block mb-4">Our Mission</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foundation-text leading-tight mb-6">
              A supplement you'd actually recommend to your doctor.
            </h2>
            <p className="text-foundation-text-secondary leading-relaxed text-base mb-6">
              Our mission is simple: make clinically effective, beautifully designed supplements that a knowledgeable health professional would be comfortable with. Not impressed by the packaging — comfortable with every ingredient and dose.
            </p>
            <p className="text-foundation-text-secondary leading-relaxed text-base">
              That standard means: no proprietary blends, no pixie-dusting, no borrowed credibility from cheap clinical studies. Just real ingredients, real dosages, and complete transparency.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-[1.75rem] p-6 border border-foundation-border/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                  style={{ background: v.bg }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: v.color + "20" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: v.color }} />
                  </div>
                  <h4 className="font-display font-bold text-sm text-foundation-text mb-2 leading-tight">{v.title}</h4>
                  <p className="text-xs text-foundation-text-secondary leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Company Timeline ── */}
      <section className="py-24 bg-[#F3F1EC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-saffron-primary text-xs font-bold uppercase tracking-widest block mb-3">Our Journey</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foundation-text">
              From a kitchen counter to 100,000 rituals
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-foundation-border/60" />

            <div className="space-y-12">
              {TIMELINE.map((item, idx) => (
                <div
                  key={item.year}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <span
                      className="text-xs font-bold uppercase tracking-widest mb-2 block"
                      style={{ color: item.color }}
                    >
                      {item.year}
                    </span>
                    <h3 className="font-display font-bold text-xl text-foundation-text mb-3">{item.title}</h3>
                    <p className="text-sm text-foundation-text-secondary leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex flex-col items-center shrink-0">
                    <div
                      className="w-5 h-5 rounded-full border-4 border-white shadow-md"
                      style={{ background: item.color }}
                    />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Quality Standards ── */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-ltheanine-primary text-xs font-bold uppercase tracking-widest block mb-4">Quality Standards</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foundation-text leading-tight mb-6">
              Manufacturing transparency, every step.
            </h2>
            <p className="text-foundation-text-secondary leading-relaxed text-sm mb-8">
              We document and publish our manufacturing process in detail because we think transparency isn't a marketing strategy — it's a minimum ethical standard.
            </p>

            <div className="space-y-6">
              {QUALITY_STEPS.map((step) => (
                <div key={step.step} className="flex gap-5 items-start">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ background: step.color }}
                  >
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-foundation-text mb-1">{step.title}</h4>
                    <p className="text-xs text-foundation-text-secondary leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-[2rem] bg-[#1E1E1E] p-8 border border-white/5">
              <div className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-5">Certifications & Compliance</div>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.label} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-ltheanine-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-white">{cert.label}</div>
                      <div className="text-xs text-white/40 mt-0.5">{cert.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-[2rem] p-8 border border-saffron-primary/20"
              style={{ background: "#FCF8EC" }}
            >
              <div className="flex items-start gap-4">
                <Award className="w-10 h-10 text-saffron-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-foundation-text mb-2">COA On Request</h4>
                  <p className="text-xs text-foundation-text-secondary leading-relaxed">
                    Every batch we ship has a Certificate of Analysis from an independent lab. Email us your batch number and we'll send the full report within 24 hours. No marketing fluff attached.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-[2rem] p-8 border border-foundation-border/40"
              style={{ background: "#EEF3F5" }}
            >
              <div className="flex items-start gap-4">
                <Globe className="w-10 h-10 text-creatine-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-foundation-text mb-2">Sustainably Produced</h4>
                  <p className="text-xs text-foundation-text-secondary leading-relaxed">
                    95% post-consumer recycled packaging. Carbon offset shipping on all orders. Our manufacturing facility runs on 100% renewable energy sourced from certified California solar projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-24 bg-[#F3F1EC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-beetroot-primary text-xs font-bold uppercase tracking-widest block mb-3">The People</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foundation-text">
              Meet the ones behind the ritual
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-[2rem] p-8 border border-foundation-border/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-center"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6"
                  style={{ background: member.color }}
                >
                  {member.initials}
                </div>
                <h3 className="font-display font-bold text-lg text-foundation-text mb-1">{member.name}</h3>
                <p className="text-xs text-foundation-text-secondary mb-4 font-semibold">{member.role}</p>
                <p className="text-sm text-foundation-text-secondary leading-relaxed">{member.bio || member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#1E1E1E] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-beetroot-primary/8 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-saffron-primary/8 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              Ready to start your ritual?
            </h2>
            <p className="text-white/50 text-base leading-relaxed">
              Every product carries our quality promise — transparent labeling, clinical dosing, and third-party purity verification.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-saffron-primary text-foundation-text text-sm font-bold uppercase tracking-wider hover:bg-saffron-accent transition-all hover:scale-105 group"
            >
              Shop Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/learn"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white text-sm font-bold uppercase tracking-wider hover:border-white/40 hover:bg-white/5 transition-all"
            >
              Read Our Science
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
