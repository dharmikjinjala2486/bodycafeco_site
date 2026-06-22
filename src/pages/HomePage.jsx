import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProductStorytelling from "../components/ProductStorytelling";
import { ArrowRight, Star, Shield, Leaf, FlaskConical } from "lucide-react";

// Testimonials data
const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Yoga Instructor · Los Angeles",
    text: "My morning ritual completely transformed after adding Body Café Co. The Creatine is unflavored and dissolves instantly — it's science in the purest form.",
    rating: 5,
    avatar: "SM",
    accentColor: "#9B2D3A",
  },
  {
    name: "James K.",
    role: "Biohacker · San Francisco",
    text: "The Omega-3 fish oil is the cleanest I've found — no fishy aftertaste. The orange zest flavoring is subtle and the EPA/DHA ratios are clinically dosed.",
    rating: 5,
    avatar: "JK",
    accentColor: "#2E5F73",
  },
  {
    name: "Priya L.",
    role: "Nutritionist · New York",
    text: "I recommend Body Café Co. to every client who asks about supplementation. The transparent labeling and third-party testing give me complete confidence.",
    rating: 5,
    avatar: "PL",
    accentColor: "#E3B341",
  },
];

const BENEFITS = [
  {
    icon: FlaskConical,
    title: "Science-First Formulation",
    desc: "Every active is clinically studied at its effective dose. No proprietary blends, ever.",
    color: "#2E5F73",
    bg: "#EEF3F5",
  },
  {
    icon: Shield,
    title: "Third-Party Verified",
    desc: "Independent lab testing for purity, potency, and heavy metal contamination.",
    color: "#9B2D3A",
    bg: "#FAF2F3",
  },
  {
    icon: Leaf,
    title: "Sustainably Crafted",
    desc: "Micro-batch production using locally harvested, sustainably grown botanicals.",
    color: "#7A7F58",
    bg: "#F5F6F2",
  },
];

export default function HomePage({ onAddRitual }) {
  return (
    <>
      {/* Hero Section */}
      <div data-header-theme="light">
        <Hero />
      </div>

      {/* Product Storytelling */}
      <div data-header-theme="dark">
        <ProductStorytelling />
      </div>


      {/* Benefits Bar */}
      <section data-header-theme="light" className="py-20 bg-foundation-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="text-beetroot-primary text-xs font-bold uppercase tracking-widest block mb-3">Why Body Café Co.</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foundation-text">
              The standard we hold ourselves to
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="rounded-[2rem] p-8 flex flex-col gap-4 border border-foundation-border/50 hover:shadow-lg transition-all duration-500"
                  style={{ backgroundColor: b.bg }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: b.color + "20" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: b.color }} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foundation-text">{b.title}</h3>
                  <p className="text-sm text-foundation-text-secondary leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section data-header-theme="dark" className="py-24" style={{ background: "#F7F6F2" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="text-saffron-primary text-xs font-bold uppercase tracking-widest block mb-3">Community Stories</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foundation-text">
              What the ritual does
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-[2rem] p-8 flex flex-col gap-5 shadow-sm border border-foundation-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-saffron-primary text-saffron-primary" />
                  ))}
                </div>
                <p className="text-sm text-foundation-text-secondary leading-relaxed flex-1 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-foundation-border/50">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ backgroundColor: t.accentColor }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-foundation-text">{t.name}</div>
                    <div className="text-xs text-foundation-disabled">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot CTA */}
      <section id="about" data-header-theme="dark" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-[#1E1E1E] text-foundation-bg rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-beetroot-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-saffron-primary/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-saffron-primary text-xs font-bold uppercase tracking-widest">Our Founding Vision</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Crafted in California. <br />
              Inspired by holistic nourishment.
            </h2>
            <p className="font-sans text-foundation-surface/80 text-lg leading-relaxed">
              We started Body Café Co. around a single kitchen counter in Santa Monica. Dismayed by the dry, clinical, and uninspiring supplement choices on shelves, we decided to build a wellness brand that captures the sensory joy of a fresh morning cafe.
            </p>
            <div className="pt-4 flex flex-wrap gap-8 items-center">
              <div>
                <div className="text-4xl font-display font-extrabold text-saffron-primary">2021</div>
                <div className="text-xs uppercase text-foundation-surface tracking-wider font-semibold">Founded</div>
              </div>
              <div className="w-px h-10 bg-foundation-border/20" />
              <div>
                <div className="text-4xl font-display font-extrabold text-beetroot-primary">100k+</div>
                <div className="text-xs uppercase text-foundation-surface tracking-wider font-semibold">Happy Minds</div>
              </div>
              <div className="w-px h-10 bg-foundation-border/20" />
              <div>
                <div className="text-4xl font-display font-extrabold text-ltheanine-primary">100%</div>
                <div className="text-xs uppercase text-foundation-surface tracking-wider font-semibold">Sustainably Made</div>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-saffron-primary text-foundation-text text-xs font-bold uppercase tracking-wider hover:bg-saffron-accent transition-colors group"
              >
                Our Full Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section data-header-theme="light" className="py-20 bg-beetroot-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight">
              Ready to build your ritual?
            </h2>
            <p className="text-white/70 text-sm mt-2">
              Free shipping on orders over $60. Cancel subscriptions anytime.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-beetroot-primary text-sm font-bold uppercase tracking-wider hover:bg-foundation-bg transition-all hover:scale-105 shadow-lg group whitespace-nowrap"
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
