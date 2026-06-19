import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RitualGrid from "./components/RitualGrid";
import { ArrowRight, Leaf, Wind, ShieldCheck, HelpCircle, Sparkles } from "lucide-react";
import logoWhite from "./assets/Body Cafe Co logo white.svg";

export default function App() {
  const [cartCount, setCartCount] = useState(2);

  return (
    <div className="min-h-screen bg-foundation-bg text-foundation-text relative selection:bg-beetroot-primary selection:text-white">
      {/* Premium Sticky Header */}
      <Header cartCount={cartCount} />

      {/* Hero Section */}
      <Hero />

      {/* Premium 3x3 Ritual Grid Section */}
      <RitualGrid onAddRitual={() => setCartCount((prev) => prev + 1)} />

      {/* Mock Section: Learn */}
      <section id="learn" className="bg-atmosphere-beetroot-100 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-beetroot-soft text-beetroot-primary text-xs font-bold uppercase tracking-wider">
              <Wind className="w-3.5 h-3.5" />
              Our Rituals
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-foundation-text">
              Wellness isn't a task. <br />
              <span className="italic text-beetroot-primary font-serif">It's a celebration.</span>
            </h2>
            <p className="font-sans text-foundation-text-secondary text-lg leading-relaxed">
              At Body Café Co., we believe premium care starts with joy. We create daily elixirs that blend modern nutritional science with rich, delicious botanical extracts. No chalky powders, no sterile capsules—just organic, cold-pressed goodness designed to elevate your daily routine.
            </p>
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-saffron-primary flex items-center justify-center text-white shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foundation-text">Raw Cold-Pressed Extraction</h4>
                  <p className="text-sm text-foundation-text-secondary">Our cold-extraction processes lock in 99.8% of pure raw active enzymes and vitamins.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-beetroot-primary flex items-center justify-center text-white shrink-0 mt-0.5">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foundation-text">Zero Synthetic Fillers</h4>
                  <p className="text-sm text-foundation-text-secondary">100% whole-food and botanical formulas. Free from colorants, artificial sweeteners, or synthetic gums.</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <a
                id="btn-learn-more"
                href="#about"
                className="inline-flex items-center gap-2 font-sans font-bold text-beetroot-primary hover:text-beetroot-accent transition-colors group"
              >
                Explore our ingredient standard
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            {/* Visual Abstract representing premium wellness elixirs */}
            <div className="absolute w-80 h-80 rounded-full bg-saffron-primary/10 blur-2xl animate-pulse"></div>
            <div className="relative w-full aspect-square max-w-md bg-white rounded-3xl p-8 border border-foundation-border shadow-lg flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between border-b border-foundation-border pb-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-beetroot-primary">
                  Daily Supplement Facts
                </span>
                <span className="text-xs font-bold text-ltheanine-primary bg-ltheanine-soft px-2.5 py-1 rounded-full">
                  100% Bioactive
                </span>
              </div>

              <div className="space-y-4 my-6">
                <div className="flex justify-between text-sm border-b border-foundation-border pb-2">
                  <span className="font-medium text-foundation-text">Cold-Pressed Greens Complex</span>
                  <span className="font-bold text-foundation-text">4,500 mg</span>
                </div>
                <div className="flex justify-between text-sm border-b border-foundation-border pb-2">
                  <span className="font-medium text-foundation-text">Active Probiotic Culture (15B CFU)</span>
                  <span className="font-bold text-foundation-text">Present</span>
                </div>
                <div className="flex justify-between text-sm border-b border-foundation-border pb-2">
                  <span className="font-medium text-foundation-text">Organic Ashwagandha Adaptogen</span>
                  <span className="font-bold text-foundation-text">300 mg</span>
                </div>
                <div className="flex justify-between text-sm pb-2">
                  <span className="font-medium text-foundation-text">Citrus Vitamin C Bioflavonoids</span>
                  <span className="font-bold text-foundation-text">1,200 mg</span>
                </div>
              </div>

              <div className="bg-foundation-surface p-4 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ltheanine-primary flex items-center justify-center text-white shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <p className="text-xs text-foundation-text-secondary leading-relaxed font-medium">
                  Formulated to increase cellular hydration, strengthen physical resilience, and optimize digestive energy profiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mock Section: About Us */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-[#1E1E1E] text-foundation-bg rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-beetroot-primary/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-saffron-primary/10 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-saffron-primary text-xs font-bold uppercase tracking-widest">
              Our Founding Vision
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Crafted in California. <br />
              Inspired by holistic nourishment.
            </h2>
            <p className="font-sans text-foundation-surface/80 text-lg leading-relaxed">
              We started Body Café Co. around a single kitchen counter in Santa Monica. Dismayed by the dry, clinical, and uninspiring supplement choices on shelves, we decided to build a wellness brand that captures the sensory joy of a fresh morning cafe. All of our oils, juices, and elixirs are crafted in micro-batches using locally harvested, sustainably grown botanicals.
            </p>
            <div className="pt-4 flex flex-wrap gap-8 items-center">
              <div>
                <div className="text-4xl font-display font-extrabold text-saffron-primary">2021</div>
                <div className="text-xs uppercase text-foundation-surface tracking-wider font-semibold">Founded</div>
              </div>
              <div className="w-px h-10 bg-foundation-border/20"></div>
              <div>
                <div className="text-4xl font-display font-extrabold text-beetroot-primary">100k+</div>
                <div className="text-xs uppercase text-foundation-surface tracking-wider font-semibold">Happy Minds</div>
              </div>
              <div className="w-px h-10 bg-foundation-border/20"></div>
              <div>
                <div className="text-4xl font-display font-extrabold text-ltheanine-primary">100%</div>
                <div className="text-xs uppercase text-foundation-surface tracking-wider font-semibold">Sustainably Made</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#1E1E1E] text-foundation-surface py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <img src={logoWhite} alt="Body Café Co." className="h-16 w-auto object-contain" />
            <p className="text-xs text-foundation-disabled leading-relaxed">
              Premium, cold-pressed wellness rituals for the mindful daily journey.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">Products</h5>
            <ul className="space-y-2 text-xs text-foundation-disabled">
              <li><a href="#shop" className="hover:text-beetroot-primary transition-colors">Daily Greens Juice</a></li>
              <li><a href="#shop" className="hover:text-beetroot-primary transition-colors">Botanical Energy Shots</a></li>
              <li><a href="#shop" className="hover:text-beetroot-primary transition-colors">Active Repair Skincare</a></li>
              <li><a href="#shop" className="hover:text-beetroot-primary transition-colors">Herbal Wellness Teas</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">Company</h5>
            <ul className="space-y-2 text-xs text-foundation-disabled">
              <li><a href="#about" className="hover:text-beetroot-primary transition-colors">About Our Brand</a></li>
              <li><a href="#learn" className="hover:text-beetroot-primary transition-colors">Scientific Ingredient Standard</a></li>
              <li><a href="#about" className="hover:text-beetroot-primary transition-colors">Sustainability Code</a></li>
              <li><a href="#learn" className="hover:text-beetroot-primary transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">Newsletter</h5>
            <p className="text-xs text-foundation-disabled mb-4 leading-relaxed">
              Subscribe to receive weekly wellness insights, recipes, and exclusive product drops.
            </p>
            <div className="flex gap-2">
              <input
                id="footer-email-input"
                type="email"
                placeholder="Your email address"
                className="bg-white/5 border border-white/10 rounded-full py-2 px-4 text-xs text-white placeholder-foundation-disabled focus:outline-none focus:border-beetroot-primary/50 w-full"
              />
              <button
                id="footer-email-submit"
                className="bg-beetroot-primary hover:bg-beetroot-accent text-white rounded-full p-2 w-8 h-8 flex items-center justify-center shrink-0 hover:scale-105 active:scale-95 transition-all"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-foundation-disabled font-semibold">
          <p>© 2026 BODY CAFÉ CO. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-beetroot-primary transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-beetroot-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
