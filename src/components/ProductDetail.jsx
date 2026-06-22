import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, Star, Minus, Plus, Check, Truck, RotateCcw,
  ShieldCheck, Award, Info, ChevronDown, Sparkles, Clock,
  FlaskConical, Heart, Share2, Globe, HelpCircle
} from "lucide-react";

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
import magnesiumImg from "../assets/Product Images/Magnesium.png";
import multivitaminImg from "../assets/Product Images/Multivitamin.png";

export const PRODUCT_DATA = {
  creatine: {
    id: "creatine",
    name: "Creatine Monohydrate",
    subtitle: "Micronized & Pure Force",
    category: "Cellular Energy & Power",
    rating: 4.9,
    reviewsCount: 342,
    price: 49.00,
    oneTimePrice: 49.00,
    subPrice: 41.65,
    format: "300g Powder",
    image: creatineImg,
    primaryColor: "var(--color-creatine-primary)",
    accentColor: "var(--color-creatine-accent)",
    softBg: "var(--color-creatine-soft)",
    colorClass: "creatine",
    description: "Our Micronized Creatine Monohydrate is processed at 200 mesh for instantaneous solubility. Formulated with zero fillers, binders, or synthetic flavors, it supplies pure cellular ATP hydration to optimize muscle output and cognitive recovery.",
    variants: [
      { name: "300g (60 Servings)", priceOffset: 0 },
      { name: "500g (100 Servings)", priceOffset: 20 }
    ],
    flavors: ["Unflavored", "Natural Berry Extract", "Citrus Matcha"],
    benefits: [
      { title: "ATP Hydration", desc: "Supercharges muscle cell phosphocreatine stores for explosive strength output." },
      { title: "Neuro-Energy Buffer", desc: "Supports brain creatine levels to mitigate mental fatigue and enhance recall speed." },
      { title: "Rapid Recovery", desc: "Accelerates glycogen replenishment and diminishes cellular micro-tears." }
    ],
    ingredients: [
      { name: "Micronized Creatine Monohydrate (Creapure®)", dosage: "5,000 mg", role: "100% pure bioactive energy substrate with 99.9% saturation efficiency." },
      { name: "BioPerine® Black Pepper Extract", dosage: "5 mg", role: "Clinically proven to maximize intestinal absorption and uptake of amino acids." }
    ],
    science: [
      { study: "Muscular Saturation & Power Output", result: "A 4-week clinical trial observed a 15% increase in phosphocreatine muscle saturation and a subsequent 18% improvement in peak bench press power output.", stat: "+18%", statLabel: "Peak Power", journal: "J. Appl. Physiol.", parameters: "n = 48, Double-Blind, Placebo-Controlled" },
      { study: "Neurological Fatigue & Cognitive Speed", result: "In a double-blind, sleep-deprivation study, subjects taking 5g of creatine daily maintained 22% higher executive performance metrics.", stat: "+22%", statLabel: "Cognitive Speed", journal: "Psychopharmacology", parameters: "n = 32, Randomized Clinical Trial" }
    ],
    storytelling: {
      headline: "THE RIGHT AMOUNT OF STRENGTH",
      hook: "Most creatine supplements focus on quantity.",
      subhook: "We focus on absorption.",
      copy: "Our ultra-fine micronized creatine dissolves instantly, absorbs efficiently, and delivers clean cellular energy without digestive discomfort.",
      bullets: ["Creapure® Grade", "200 Mesh Micronization", "Third-Party Tested", "Transparent Label"]
    },
    reviews: [
      { name: "Liam M.", rating: 5, date: "12 days ago", comment: "Absolutely pure! No chalky aftertaste, mixes instantly. I've noticed a significant power jump during my heavy lift days after 2 weeks of daily use. Best Creatine on the market.", before: "Struggled with fatigue on heavy sets.", after: "Pure muscle force and rapid set recovery.", helpfulCount: 24 },
      { name: "Charlotte K.", rating: 5, date: "3 weeks ago", comment: "The subscription is a lifesaver. Never runs out and the Citrus Matcha flavor feels so clean in the morning. Packaging looks like luxury apothecary.", before: "Always forgot to reorder my training fuel.", after: "Seamless delivery, amazing clean flavor.", helpfulCount: 18 },
      { name: "Oliver S.", rating: 4, date: "1 month ago", comment: "Excellent bioavailability metrics. Third party lab tests PDF available on request is a huge trust builder. The product dissolved easily in cold almond milk. Recommended.", before: "Bloated from cheap brand powders.", after: "Smooth digestion and clean ATP saturation.", helpfulCount: 12 }
    ],
    usage: [
      { step: "01", title: "Measure", desc: "Scoop exactly 1 level scoop (5g) of micronized powder." },
      { step: "02", title: "Combine & Shake", desc: "Dissolve in 8-12 oz of cold alkaline water, organic juice, or morning shake. Shake vigorously for 15 seconds." },
      { step: "03", title: "Timing", desc: "Consume immediately post-workout or first thing in the morning to maintain optimal muscle cell saturation." }
    ],
    faqs: [
      { q: "Is a loading phase necessary?", a: "No, a loading phase is not mandatory. Taking 5g daily will saturate your muscles over 3-4 weeks. If you prefer to load, take 20g (divided in 4 servings) for 5-7 days." },
      { q: "Does Creatine cause water retention?", a: "Creatine draws water into the muscle cell itself (cellular hydration), which is highly beneficial for recovery and muscle health. It does not cause subcutaneous bloating." },
      { q: "Can I cancel my subscription at any time?", a: "Absolutely. Subscriptions are fully flexible. You can skip, delay, or cancel your orders anytime from your account settings with a single click." }
    ]
  },
  "omega-3": {
    id: "omega-3",
    name: "Omega-3 Fish Oil",
    subtitle: "Neurological & Lipid Purity",
    category: "Cognitive Purity & Lipids",
    rating: 4.8,
    reviewsCount: 198,
    price: 39.00,
    oneTimePrice: 39.00,
    subPrice: 33.15,
    format: "90 Softgels",
    image: omegaImg,
    primaryColor: "var(--color-omega-primary)",
    accentColor: "var(--color-omega-accent)",
    softBg: "var(--color-omega-soft)",
    colorClass: "omega",
    description: "Sustainably harvested from deep wild-caught anchovies, our Omega-3 Fish Oil undergoes multi-stage molecular distillation to eliminate heavy metals and toxins. High in EPA and DHA to optimize cellular membrane fluidity and inflammatory response.",
    variants: [
      { name: "90 Softgels (30-day Supply)", priceOffset: 0 },
      { name: "180 Softgels (60-day Supply)", priceOffset: 25 }
    ],
    flavors: ["Organic Orange Zest Oil"],
    benefits: [
      { title: "Neuro-fluidity", desc: "Provides high-dose DHA to support cell membrane structural integrity in the cerebral cortex." },
      { title: "Cardiovascular Lipid Balance", desc: "Maintains optimal systemic blood lipid levels and vascular flexibility." },
      { title: "Systemic Inflammatory Response", desc: "EPA modulates cytokine pathways to lower joint discomfort after physical strain." }
    ],
    ingredients: [
      { name: "Concentrated Marine Lipids", dosage: "2,000 mg", role: "Delivering 800mg EPA and 600mg DHA per serving in highly bioavailable triglyceride form." },
      { name: "Astaxanthin Antioxidant", dosage: "2 mg", role: "Protects delicate oils against oxidation while scavenging cell-damaging free radicals." }
    ],
    science: [
      { study: "Synaptic Transmission Efficiency", result: "Clinical trials showed that 3 months of DHA supplementation optimized synaptic density and improved processing speed by up to 14%.", stat: "+14%", statLabel: "Synaptic Speed", journal: "Neurology Journal", parameters: "n = 64, Randomized Clinical Study" },
      { study: "Joint Mobility Assessment", result: "Subjects reported a 28% reduction in morning joint stiffness after 6 weeks of daily high-EPA oil intake.", stat: "-28%", statLabel: "Joint Stiffness", journal: "Am. J. Cardiol.", parameters: "n = 50, Placebo-Controlled Trial" }
    ],
    storytelling: {
      headline: "THE RIGHT AMOUNT OF HEART HEALTH",
      hook: "Most omega-3 supplements focus on volume.",
      subhook: "We focus on molecular purity.",
      copy: "Sustainably harvested and molecularly distilled to target 100% absorption, boosting cellular lipid transmission with zero mercury or fishy reflux.",
      bullets: ["Wild Peruvian Anchovy", "Pure Triglyceride Form", "Heavy Metal Screened", "Orange Zest Infused"]
    },
    reviews: [
      { name: "Lucas G.", rating: 5, date: "1 week ago", comment: "No fishy burps whatsoever! The orange flavor is subtle. I feel much more focused at work, and my post-run knee pain has cleared up.", before: "Frequent fishy aftertaste and stiff knees.", after: "Clean orange taste, fluid joint movements.", helpfulCount: 31 },
      { name: "Sophia P.", rating: 5, date: "3 weeks ago", comment: "Lab reports showed zero heavy metals. For someone who is pregnant, purity is everything. Body Cafe Co has the highest EPA/DHA concentration.", before: "Scared of mercury in store-bought capsules.", after: "Peace of mind and pure lipid nourishment.", helpfulCount: 42 }
    ],
    usage: [
      { step: "01", title: "Dosage", desc: "Take 3 liquid softgels daily with a fat-containing meal." },
      { step: "02", title: "Optimize", desc: "Take alongside fat-soluble vitamins (such as D3/K2) to optimize intestinal absorption." },
      { step: "03", title: "Storage", desc: "Keep the amber glass bottle stored in a cool, dark place or refrigerate to preserve enzyme stability." }
    ],
    faqs: [
      { q: "Does this product leave a fishy aftertaste?", a: "No, we incorporate organic orange oil extract and utilize advanced molecular distillation, which completely eliminates the 'fishy' smell and digestive reflux." },
      { q: "Is the fish oil sustainably sourced?", a: "Yes, our fish oil is certified by Friend of the Sea. We source exclusively from sustainable, wild-caught, short-lived pelagic fish (anchovies) off the coast of Peru." }
    ]
  },
  "vit-d3-k2": {
    id: "vit-d3-k2",
    name: "Vitamin D3 + K2",
    subtitle: "Bioactive Calcium Synergy",
    category: "Structural Synergy",
    rating: 4.9,
    reviewsCount: 220,
    price: 35.00,
    oneTimePrice: 35.00,
    subPrice: 29.75,
    format: "30ml Liquid Drops",
    image: vitdImg,
    primaryColor: "var(--color-vitd-primary)",
    accentColor: "var(--color-vitd-accent)",
    softBg: "var(--color-vitd-soft)",
    colorClass: "vitd",
    description: "A synergistic organic liquid emulsion containing active Vitamin D3 and Menaquinone-7 (K2). Formulated in a carrier oil of cold-pressed coconut MCTs, this formulation ensures calcium is absorbed by the digestive system and correctly deposited into bone structures.",
    variants: [
      { name: "30ml Bottle (600 Drops)", priceOffset: 0 },
      { name: "60ml Double Pack", priceOffset: 25 }
    ],
    flavors: ["Unflavored (Natural MCT Oil)"],
    benefits: [
      { title: "Calcification Direction", desc: "K2 activates osteocalcin, directing calcium to bones and keeping it out of arterial walls." },
      { title: "Immune System Adaptogen", desc: "Modulates immune cell receptors to boost baseline pathogen resistance." },
      { title: "Hormonal Synthesis", desc: "D3 acts as a key pro-hormone, optimizing cellular energy and thyroid signaling." }
    ],
    ingredients: [
      { name: "Vitamin D3 (Cholecalciferol from Lichen)", dosage: "5,000 IU", role: "Plant-derived, highly bioavailable active vitamin D3." },
      { name: "Vitamin K2 (as Menaquinone-7)", dosage: "100 mcg", role: "Long-acting, trans-isomer K2 to sustain circulatory calcification regulation." }
    ],
    science: [
      { study: "Bone Mineral Density Study", result: "A 12-month study showed a significant 3.4% increase in femoral neck bone density when D3 was combined with K2 compared to D3 alone.", stat: "+3.4%", statLabel: "Bone Density", journal: "Osteoporosis Int.", parameters: "n = 120, 12-Month Intervention" },
      { study: "Arterial Calcification Suppression", result: "Clinical trials indicate that proper K2 levels reduce arterial calcification rates by 47% over a 5-year observation period.", stat: "-47%", statLabel: "Calcification Rate", journal: "J. Vasc. Res.", parameters: "n = 244, Long-term Cohort" }
    ],
    storytelling: {
      headline: "THE RIGHT AMOUNT OF VITALITY",
      hook: "Most D3 brands ignore calcium direction.",
      subhook: "We focus on biological synergy.",
      copy: "Active vegan D3 paired with long-acting trans-isomer K2 guides calcium to your bones and away from your arteries, suspended in pure organic MCTs.",
      bullets: ["100% Plant-Derived Lichen", "Menaquinone-7 (K2)", "Sublingual Dropper Delivery", "Organic Coconut MCTs"]
    },
    reviews: [
      { name: "Ethan W.", rating: 5, date: "15 days ago", comment: "So easy to use. I drop it straight under my tongue every morning. My recent bloodwork showed a massive improvement in Vitamin D levels.", before: "Low energy and chronically deficient.", after: "Optimal blood panel numbers and daily vigor.", helpfulCount: 19 },
      { name: "Maya T.", rating: 5, date: "1 month ago", comment: "Most D3 is from sheep's wool lanolin. Love that this is 100% vegan from organic lichen. Purity and ethics in one bottle.", before: "Unhappy with animal-sourced supplements.", after: "Clean, plant-derived structural vitality.", helpfulCount: 22 }
    ],
    usage: [
      { step: "01", title: "Drop", desc: "Place 5 drops directly under the tongue or add to food." },
      { step: "02", title: "Eat Fat", desc: "Always consume with food containing healthy fats (avocado, nuts) for maximum absorption." },
      { step: "03", title: "Timing", desc: "Take in the morning. Vitamin D3 can block melatonin production if taken too close to bedtime." }
    ],
    faqs: [
      { q: "Is this D3 derived from sheep's lanolin?", a: "No. Our Vitamin D3 is 100% vegan, extracted from organically harvested wild lichen. It is clean, plant-based, and highly bioavailable." },
      { q: "Why is K2 paired with D3?", a: "Vitamin D3 absorbs calcium from food, but Vitamin K2 determines where that calcium goes. Without K2, calcium can build up in arteries instead of strengthening your bones." }
    ]
  },
  "saffron": {
    id: "saffron",
    name: "Affron® Saffron",
    subtitle: "Emotional Radiance",
    category: "Emotional Radiance & Calm",
    rating: 4.9,
    reviewsCount: 154,
    price: 55.00,
    oneTimePrice: 55.00,
    subPrice: 46.75,
    format: "60 Capsules",
    image: saffronImg,
    primaryColor: "var(--color-saffron-primary)",
    accentColor: "var(--color-saffron-accent)",
    softBg: "var(--color-saffron-soft)",
    colorClass: "saffron",
    description: "Featuring Affron®, the most clinically-studied saffron extract in the world. Standardized to contain >3.5% Lepticrosalides®, this formula naturally raises serotonin and dopamine levels while balancing cortisol release.",
    variants: [
      { name: "60 Capsules (30-day Supply)", priceOffset: 0 }
    ],
    flavors: ["Standardized Capsule"],
    benefits: [
      { title: "Neurotransmitter Reuptake", desc: "Blocks reuptake of serotonin and dopamine to sustain mood stability." },
      { title: "Cortisol Regulator", desc: "Reduces salivary cortisol levels to mitigate physical symptoms of chronic stress." },
      { title: "Sleep Architecture", desc: "Improves deep delta-wave sleep cycles and morning wakefulness indices." }
    ],
    ingredients: [
      { name: "Affron® Saffron Extract (Crocus sativus L.)", dosage: "28 mg", role: "Clinically proven dose standardized to contain bioactive crocins and safranal." }
    ],
    science: [
      { study: "Generalized Mood & Calm State", result: "A 4-week randomized clinical trial observed a 41% decrease in self-reported stress, tension, and mild mood fluctuations.", stat: "-41%", statLabel: "Stress Markers", journal: "J. Affect. Disord.", parameters: "n = 80, Randomized, Double-Blind" },
      { study: "Sleep Quality Index", result: "Subjects reported a 33% increase in restorative sleep score and woke up feeling significantly less groggy after 3 weeks.", stat: "+33%", statLabel: "Restorative Sleep", journal: "Sleep Med. J.", parameters: "n = 60, Placebo-Controlled Study" }
    ],
    storytelling: {
      headline: "THE RIGHT AMOUNT OF EMOTIONAL RADIANCE",
      hook: "Most mood boosters use raw, unstandardized herbs.",
      subhook: "We focus on clinical active compounds.",
      copy: "Affron® saffron extract is standardized to >3.5% Lepticrosalides® to modulate serotonin, dopamine, and cortisol pathways for emotional calm.",
      bullets: ["Affron® Saffron Extract", "Standardized Bioactives", "Cortisol Balancing", "Non-Habit Forming"]
    },
    reviews: [
      { name: "Isabella R.", rating: 5, date: "4 days ago", comment: "This has completely smoothed out my work anxiety. I feel calm, balanced, and don't get triggered by high-pressure situations anymore.", before: "Mind racing and chest tightness under stress.", after: "Calm baseline and clear, focused execution.", helpfulCount: 29 }
    ],
    usage: [
      { step: "01", title: "Morning Capsule", desc: "Take 1 capsule with your morning tea or coffee." },
      { step: "02", title: "Evening Capsule", desc: "Take 1 capsule 2 hours before bed for sleep quality improvement." },
      { step: "03", title: "Consistency", desc: "Use daily. Affron Saffron builds up adaptogenic efficiency in the nervous system over 2-3 weeks." }
    ],
    faqs: [
      { q: "Will Saffron make me sleepy during the day?", a: "No, Affron Saffron is an adaptogen. In the morning, it supports focus and emotional calm without drowsiness; in the evening, it promotes restful sleep." }
    ]
  },
  "beetroot": {
    id: "beetroot",
    name: "Beetroot (TruBeet®)",
    subtitle: "Nitric Oxide Endurance",
    category: "Oxygenation & Endurance",
    rating: 4.7,
    reviewsCount: 112,
    price: 32.00,
    oneTimePrice: 32.00,
    subPrice: 27.20,
    format: "60 Capsules",
    image: beetrootImg,
    primaryColor: "var(--color-beetroot-primary)",
    accentColor: "var(--color-beetroot-accent)",
    softBg: "var(--color-beetroot-soft)",
    colorClass: "beetroot",
    description: "TruBeet® is a high-nitrate red beetroot extract clinically proven to raise blood nitric oxide levels. By expanding blood vessels and reducing oxygen cost, it boosts cardiorespiratory stamina and reduces recovery times.",
    variants: [
      { name: "60 Capsules", priceOffset: 0 }
    ],
    flavors: ["Standardized Capsule"],
    benefits: [
      { title: "Vasodilation Pump", desc: "Synthesizes nitric oxide to relax blood vessels, increasing oxygen delivery to working tissues." },
      { title: "Oxygen Efficiency", desc: "Lowers the physiological oxygen cost of muscular contractions during exercise." },
      { title: "Mitochondrial Energy", desc: "Promotes mitochondrial efficiency to extend cardiorespiratory endurance thresholds." }
    ],
    ingredients: [
      { name: "TruBeet® Beetroot Extract", dosage: "1,000 mg", role: "High-nitrate organic beetroot extract standardized for 6.0% inorganic nitrates." }
    ],
    science: [
      { study: "Cardiorespiratory Peak Stamina", result: "Elite cyclists taking TruBeet® experienced a 15% reduction in oxygen utilization rate at submaximal work thresholds, extending fatigue limits.", stat: "-15%", statLabel: "Oxygen Utilization", journal: "Med. Sci. Sports", parameters: "n = 16, Crossover Study" }
    ],
    storytelling: {
      headline: "THE RIGHT AMOUNT OF ENDURANCE",
      hook: "Most athletic boosters use synthetic stimulants.",
      subhook: "We focus on nitric oxide vasodilation.",
      copy: "TruBeet® red beetroot extract is standardized to 6.0% inorganic nitrates to lower oxygen cost and expand physical stamina thresholds naturally.",
      bullets: ["TruBeet® Extract", "6% Inorganic Nitrates", "Vascular Dilation Support", "100% Whole-Food Source"]
    },
    reviews: [
      { name: "Marcus V.", rating: 5, date: "10 days ago", comment: "The vascular pump is unreal. I take this an hour before my long runs, and I've shaved off 15 seconds per mile from my pace.", before: "Hitting the wall at mile 5 during runs.", after: "Endless aerobic stamina and vascular dilation.", helpfulCount: 14 }
    ],
    usage: [
      { step: "01", title: "Dosage", desc: "Take 2 capsules daily." },
      { step: "02", title: "Pre-Workout", desc: "Take 45-60 minutes prior to heavy endurance training or long workouts." },
      { step: "03", title: "Hydration", desc: "Drink at least 16 oz of water alongside your dosage to aid optimal vascular expansion." }
    ],
    faqs: [
      { q: "Is this better than normal beetroot powder?", a: "Yes, TruBeet® is standardized to contain 6% nitrates. Standard beet powders contain variable and much lower levels of nitrates, meaning you'd need to swallow up to 10g of powder to match this dosage." }
    ]
  },
  "berberine": {
    id: "berberine",
    name: "Berberine + Cinnamon",
    subtitle: "AMPK Metabolic Activator",
    category: "Metabolic Harmony",
    rating: 4.8,
    reviewsCount: 165,
    price: 45.00,
    oneTimePrice: 45.00,
    subPrice: 38.25,
    format: "60 Capsules",
    image: berberineImg,
    primaryColor: "var(--color-berberine-primary)",
    accentColor: "var(--color-berberine-accent)",
    softBg: "var(--color-berberine-soft)",
    colorClass: "berberine",
    description: "An advanced metabolic synergy formula combining high-purity Berberine HCl with Ceylon Cinnamon extract. Berberine is a powerful AMPK enzyme activator, optimizing cellular insulin sensitivity and blood glucose clearance.",
    variants: [
      { name: "60 Capsules", priceOffset: 0 }
    ],
    flavors: ["Standardized Capsule"],
    benefits: [
      { title: "AMPK Pathway Activator", desc: "Triggers AMPK, the master metabolic switch, driving cellular glucose uptake and fatty acid oxidation." },
      { title: "Postprandial Clearance", desc: "Reduces post-meal blood sugar spikes by inhibiting digestive enzymes." },
      { title: "Intestinal Integrity", desc: "Supports a healthy gut flora, discouraging dysbiosis and microbial overgrowth." }
    ],
    ingredients: [
      { name: "Berberine HCl (97% Purity)", dosage: "500 mg", role: "High-grade botanical alkaloid extracted from Berberis aristata roots." },
      { name: "Ceylon Cinnamon Extract (10:1)", dosage: "100 mg", role: "True ceylon cinnamon extract to support healthy insulin responses without liver toxins." }
    ],
    science: [
      { study: "Postprandial Glycemic Index", result: "Clinical trials demonstrated that 500mg of Berberine HCl taken before meals reduced average post-meal blood sugar levels by 19%.", stat: "-19%", statLabel: "Post-Meal Spikes", journal: "Metab. Clin. Pract.", parameters: "n = 84, 90-Day Observation" }
    ],
    storytelling: {
      headline: "THE RIGHT AMOUNT OF METABOLIC HARMONY",
      hook: "Most blood sugar supplements ignore gut synergy.",
      subhook: "We focus on AMPK pathway activation.",
      copy: "High-purity Berberine HCl synergized with organic Ceylon Cinnamon triggers cell glucose uptake and metabolic clearance without liver load.",
      bullets: ["Berberine HCl (97%)", "Ceylon Cinnamon Extract", "AMPK Pathway Activator", "Zero Synthetic Fillers"]
    },
    reviews: [
      { name: "Aria L.", rating: 5, date: "18 days ago", comment: "My sugar cravings are completely gone. I take it 15 minutes before lunch, and I no longer get the dreaded 3 PM food coma.", before: "Constant carb cravings and afternoon fatigue.", after: "Stable energy levels and lean body composition.", helpfulCount: 25 }
    ],
    usage: [
      { step: "01", title: "Timing", desc: "Take 1 capsule 15-20 minutes before your two largest carbohydrate meals." },
      { step: "02", title: "Consistency", desc: "For optimal metabolic outcomes, take daily. Results compound over 4-8 weeks." },
      { step: "03", title: "Breaks", desc: "Take a 1-week break every 8 weeks of continuous usage to keep receptor pathways responsive." }
    ],
    faqs: [
      { q: "Why is Ceylon Cinnamon included?", a: "Ceylon Cinnamon (true cinnamon) acts synergistically with Berberine, supporting glucose uptake via distinct insulin-mimetic mechanisms while reducing potential digestive side effects." }
    ]
  },
  "iron": {
    id: "iron",
    name: "Iron Bisglycinate",
    subtitle: "High-Bioavailability Blood Support",
    category: "Cellular Vitality & Renewal",
    rating: 4.6,
    reviewsCount: 94,
    price: 28.00,
    oneTimePrice: 28.00,
    subPrice: 23.80,
    format: "60 Capsules",
    image: ironImg,
    primaryColor: "var(--color-iron-primary)",
    accentColor: "var(--color-iron-accent)",
    softBg: "var(--color-iron-soft)",
    colorClass: "iron",
    description: "A gentle, non-constipating iron supplement formulated using chelated Iron Bisglycinate. Unlike ferrous sulfate, our chelated iron is bound to two glycine molecules, bypassing digestion checkpoints to absorb easily without stomach upset.",
    variants: [
      { name: "60 Capsules", priceOffset: 0 }
    ],
    flavors: ["Standardized Capsule"],
    benefits: [
      { title: "Chelated Absorption", desc: "Bypasses normal iron competition pathways, increasing absorption up to 4 times over standard iron." },
      { title: "Gastric Comfort", desc: "Remains intact until reaching the intestines, completely eliminating nausea, cramping, and constipation." },
      { title: "Oxygen Carry Capacity", desc: "Directly increases hemoglobin synthesis to combat chronic physical fatigue and brain fog." }
    ],
    ingredients: [
      { name: "Iron (as Ferrochel® Bisglycinate)", dosage: "25 mg", role: "Patented Albion chelated iron, safe for sensitive stomachs." },
      { name: "Vitamin C (as Ascorbic Acid)", dosage: "100 mg", role: "Speeds reduction of iron to its absorbable ferrous state inside the stomach." }
    ],
    science: [
      { study: "Hemoglobin Saturation Rate", result: "Female patients taking 25mg of Ferrochel® daily reported a 32% faster increase in serum ferritin and hemoglobin levels compared to sulfate.", stat: "+32%", statLabel: "Ferritin Levels", journal: "Nutrition Journal", parameters: "n = 90, Comparative Study" }
    ],
    storytelling: {
      headline: "THE RIGHT AMOUNT OF CELLULAR VITALITY",
      hook: "Most iron supplements cause severe gastric distress.",
      subhook: "We focus on chelated absorption.",
      copy: "Ferrochel® Iron Bisglycinate bypasses stomach acid to absorb directly in the intestines, resolving fatigue without cramping or nausea.",
      bullets: ["Ferrochel® Chelated Iron", "Gentle Gastric Tolerance", "High Bioavailability", "Synergized with Vitamin C"]
    },
    reviews: [
      { name: "Elena B.", rating: 5, date: "2 weeks ago", comment: "Finally, an iron supplement that doesn't upset my stomach! I've been taking it for a month, and my chronic fatigue is completely gone.", before: "Pale skin, fatigue, and stomach cramps from sulfate.", after: "Vibrant energy and zero digestive irritation.", helpfulCount: 16 }
    ],
    usage: [
      { step: "01", title: "Daily Dose", desc: "Take 1 capsule daily." },
      { step: "02", title: "Avoid Calcium", desc: "Take on an empty stomach with water or juice. Avoid consuming dairy, coffee, or calcium supplements within 2 hours." },
      { step: "03", title: "Vitamin C Support", desc: "We formulate this with Vitamin C, but drinking orange juice alongside can further boost cellular uptake." }
    ],
    faqs: [
      { q: "Will this iron cause constipation?", a: "No. Ferrochel® Iron Bisglycinate is chemically neutral and doesn't dissolve in stomach acid. This prevents the free iron ions that cause irritation and constipation." }
    ]
  },
  "myo-inositol": {
    id: "myo-inositol",
    name: "Myo-Inositol + D-Chiro",
    subtitle: "Endocrine Harmony",
    category: "Hormonal Rhythm & Balance",
    rating: 4.8,
    reviewsCount: 142,
    price: 42.00,
    oneTimePrice: 42.00,
    subPrice: 35.70,
    format: "120g Powder",
    image: myoImg,
    primaryColor: "var(--color-myo-primary)",
    accentColor: "var(--color-myo-accent)",
    softBg: "var(--color-myo-soft)",
    colorClass: "myo",
    description: "Designed in the clinically validated 40:1 ratio, our Myo-Inositol & D-Chiro-Inositol powder supports healthy ovarian function, cellular insulin sensitivity, and endocrine balance. Unflavored and clean.",
    variants: [
      { name: "120g Powder (60 Servings)", priceOffset: 0 }
    ],
    flavors: ["Unflavored"],
    benefits: [
      { title: "40:1 Endocrine Ratio", desc: "Mimics the body's natural circulating levels to correct reproductive hormone signaling." },
      { title: "Insulin Messenger Support", desc: "Enhances cellular signaling, aiding metabolic cleanup and reducing carbohydrate cravings." },
      { title: "Ovarian Follicle Quality", desc: "Supplies crucial inositol isomers to optimize follicular fluid and cycle regularity." }
    ],
    ingredients: [
      { name: "Myo-Inositol", dosage: "2,000 mg", role: "Primary isomer regulating hormone messengers and glucose uptake." },
      { name: "D-Chiro-Inositol", dosage: "50 mg", role: "Secondary isomer helping manage peripheral glycogen storage." }
    ],
    science: [
      { study: "Menstrual Cycle Regularity", result: "PCOS patients consuming a 40:1 ratio saw a 74% restoration in regular ovulatory cycles within 12 weeks of treatment.", stat: "+74%", statLabel: "Cycle Regularity", journal: "Eur. Rev. Med. Sci.", parameters: "n = 100, 12-Week Study" }
    ],
    storytelling: {
      headline: "THE RIGHT AMOUNT OF ENDOCRINE HARMONY",
      hook: "Most hormone formulas ignore human plasma ratios.",
      subhook: "We focus on the clinical 40:1 ratio.",
      copy: "Soluble, bio-identical Myo-Inositol & D-Chiro-Inositol powder restores natural ovarian hormone signaling and endocrine metabolic balance.",
      bullets: ["Clinical 40:1 Ratio", "Bio-Identical Inositols", "Ovarian Signaling Support", "100% Soluble & Unflavored"]
    },
    reviews: [
      { name: "Chloe D.", rating: 5, date: "3 weeks ago", comment: "This helped regulate my cycle after months of irregular patterns. It dissolves completely in water and has a very mild sweet taste.", before: "Unpredictable cycle and hormone acne.", after: "Balanced hormones and restored cycle regularity.", helpfulCount: 33 }
    ],
    usage: [
      { step: "01", title: "Scoop", desc: "Mix 1 scoop (2.05g) of powder." },
      { step: "02", title: "Dissolve", desc: "Stir into 6-8 oz of cold water, herbal tea, or smoothie. The powder is naturally sweet and dissolves instantly." },
      { step: "03", title: "Timing", desc: "Take twice daily: once in the morning before breakfast, once in the evening before dinner." }
    ],
    faqs: [
      { q: "Why the 40:1 ratio?", a: "This is the precise ratio found in healthy blood plasma. Clinical research shows that deviating from this ratio significantly reduces the endocrine benefits." }
    ]
  },
  "l-theanine": {
    id: "l-theanine",
    name: "L-Theanine",
    subtitle: "Alpha-Wave Flow State",
    category: "Cognitive Calm & Alpha Waves",
    rating: 4.8,
    reviewsCount: 184,
    price: 29.00,
    oneTimePrice: 29.00,
    subPrice: 24.65,
    format: "60 Capsules",
    image: theanineImg,
    primaryColor: "var(--color-ltheanine-primary)",
    accentColor: "var(--color-ltheanine-accent)",
    softBg: "var(--color-ltheanine-soft)",
    colorClass: "ltheanine",
    description: "Our pure Suntheanine® L-Theanine capsules stimulate alpha-wave activity in the brain. Designed to lower baseline stress, improve executive focus, and perfectly smooth out the jittery side effects of caffeine.",
    variants: [
      { name: "60 Capsules", priceOffset: 0 }
    ],
    flavors: ["Standardized Capsule"],
    benefits: [
      { title: "Alpha Brainwave Generation", desc: "Promotes a state of alert relaxation, similar to deep meditation, without drowsiness." },
      { title: "Caffeine Synergy", desc: "Reduces vascular constriction and heart-racing sensations associated with coffee intake." },
      { title: "GABA Precursor Support", desc: "Nourishes natural inhibitory neurotransmitter pathways to calm an overactive mind." }
    ],
    ingredients: [
      { name: "L-Theanine (Suntheanine®)", dosage: "200 mg", role: "100% pure, patented isomer-pure L-theanine synthesized via safe fermentation." }
    ],
    science: [
      { study: "Alert Focus Response", result: "EEG brain scans of patients taking 200mg of L-theanine demonstrated a significant boost in alpha-band activity starting 40 minutes post-ingestion.", stat: "+38%", statLabel: "Alpha Activity", journal: "Alt. Med. Rev.", parameters: "n = 28, EEG Mapping Trial" }
    ],
    storytelling: {
      headline: "THE RIGHT AMOUNT OF COGNITIVE CALM",
      hook: "Most relaxants induce heavy daytime fatigue.",
      subhook: "We focus on alpha-wave focus.",
      copy: "Suntheanine® L-Theanine stimulates alpha brainwave activity to quiet an overactive mind and smooth coffee jitters without drowsiness.",
      bullets: ["Suntheanine® L-Theanine", "Alpha Brainwave Stimulant", "Coffee Synergy Focus", "Non-Drowsy Calming"]
    },
    reviews: [
      { name: "Daniel F.", rating: 5, date: "12 days ago", comment: "I pair this with my morning double espresso. The combination is incredible—laser focus without any of the nervous heart jitters.", before: "Coffee jitters and afternoon crash.", after: "Smooth, calm attention span and steady focus.", helpfulCount: 22 }
    ],
    usage: [
      { step: "01", title: "Stress Relief", desc: "Take 1 capsule whenever you experience acute work stress or cognitive overwhelm." },
      { step: "02", title: "Caffeine Pairing", desc: "Take 1 capsule alongside your morning cup of coffee to amplify clean focus and remove jitters." },
      { step: "03", title: "Sleep Wind-Down", desc: "Take 1 capsule 30 minutes before bed to turn off circular thinking patterns." }
    ],
    faqs: [
      { q: "Will L-Theanine make me drowsy?", a: "No. Unlike prescription sedatives or melatonin, L-Theanine does not cause drowsiness. It induces relaxation while keeping you mentally alert." }
    ]
  },
  magnesium: {
    id: "magnesium",
    name: "Magnesium Glycinate",
    subtitle: "High-Potency Neuromuscular Calm",
    category: "Neuromuscular Relaxation",
    rating: 4.8,
    reviewsCount: 154,
    price: 34.00,
    oneTimePrice: 34.00,
    subPrice: 28.90,
    format: "120 Capsules",
    image: magnesiumImg,
    primaryColor: "#326e55",
    accentColor: "#4a8d73",
    softBg: "#f1f6f4",
    colorClass: "magnesium",
    description: "Our high-absorption Magnesium Glycinate is chelated to support deep neuromuscular relaxation, improved sleep architecture, and stress resilience without digestive side effects.",
    variants: [
      { name: "120 Capsules", priceOffset: 0 }
    ],
    flavors: ["Standardized Capsule"],
    benefits: [
      { title: "Muscle Relaxation", desc: "Supports healthy nerve transmission and muscular contraction pathways." },
      { title: "Restorative Sleep", desc: "Regulates GABA and melatonin receptors to improve deep delta-wave sleep quality." }
    ],
    ingredients: [
      { name: "Magnesium Bisglycinate Chelate", dosage: "200 mg", role: "Highly bioavailable chelated mineral source." }
    ],
    science: [
      { study: "Sleep Architecture Study", result: "Clinical trials showed a 33% improvement in deep sleep recovery time after 4 weeks of use.", stat: "+33%", statLabel: "Deep Sleep", journal: "J. Clin. Sleep Med.", parameters: "n = 60" }
    ],
    storytelling: {
      headline: "THE RIGHT AMOUNT OF REST",
      hook: "Most magnesium forms cause laxative side effects.",
      subhook: "We focus on pure glycinate chelation.",
      copy: "Our chelated Magnesium Glycinate absorbs intact in the intestines, delivering muscle calm and restorative sleep support without stomach distress.",
      bullets: ["Chelated Glycinate", "High Bioavailability", "Sleep Support", "Gastric Friendly"]
    },
    reviews: [
      { name: "Aidan P.", rating: 5, date: "1 week ago", comment: "I take this an hour before bed. My sleep score has consistently increased and muscle spasms from leg days are gone.", before: "Tossing and turning, morning muscle cramps.", after: "Solid 8 hours of sleep, fully recovered legs.", helpfulCount: 15 }
    ],
    usage: [
      { step: "01", title: "Dosage", desc: "Take 2 capsules daily." },
      { step: "02", title: "Timing", desc: "For optimal sleep and recovery benefits, consume in the evening, 30-60 minutes before bed." }
    ],
    faqs: [
      { q: "Will this cause stomach upset?", a: "No. Unlike magnesium oxide or citrate, Magnesium Glycinate is highly stable and doesn't draw water into the colon, eliminating digestive distress." }
    ]
  },
  multivitamin: {
    id: "multivitamin",
    name: "Daily Multivitamin",
    subtitle: "Bioactive Micronutrient Support",
    category: "Systemic Vitality",
    rating: 4.9,
    reviewsCount: 178,
    price: 44.00,
    oneTimePrice: 44.00,
    subPrice: 37.40,
    format: "90 Capsules",
    image: multivitaminImg,
    primaryColor: "#b56f2d",
    accentColor: "#cc8747",
    softBg: "#f9f4ef",
    colorClass: "multivitamin",
    description: "A comprehensive daily multi-nutrient blend featuring plant-sourced bioactive vitamins and chelated trace minerals, optimized for daily energy, immune defense, and cellular longevity.",
    variants: [
      { name: "90 Capsules", priceOffset: 0 }
    ],
    flavors: ["Standardized Capsule"],
    benefits: [
      { title: "Metabolic Support", desc: "Coenzymated B-vitamins play a direct role in mitochondrial energy synthesis." },
      { title: "Immune Resilience", desc: "Synergized zinc, selenium, and active vitamins C & D for defense cell support." }
    ],
    ingredients: [
      { name: "Full-Spectrum Bioactive Blend", dosage: "1,200 mg", role: "Vitamins and chelated trace minerals in active, methylated forms." }
    ],
    science: [
      { study: "Micronutrient Saturation", result: "Subjects reported a 25% increase in self-reported physical vigor and energy within 3 weeks.", stat: "+25%", statLabel: "Vigor", journal: "Nutrition Reviews", parameters: "n = 90" }
    ],
    storytelling: {
      headline: "THE RIGHT AMOUNT OF DAILY METABOLICS",
      hook: "Most multis use cheap synthetic isolates.",
      subhook: "We use food-bound coenzymated forms.",
      copy: "Features plant-sourced active vitamins and chelated minerals that your body recognizes as real food, maximizing absorption efficiency.",
      bullets: ["Active Coenzymated Forms", "Sustainably Harvested", "Mitochondrial Fueling", "No Synthetic Colors"]
    },
    reviews: [
      { name: "Sienna J.", rating: 5, date: "3 days ago", comment: "The capsules look clean and have zero weird smell. I feel way more active in the afternoon, no crash.", before: "Sluggish afternoons, dull hair and nails.", after: "Vibrant daily energy and strong recovery.", helpfulCount: 19 }
    ],
    usage: [
      { step: "01", title: "Daily Dose", desc: "Take 3 capsules daily." },
      { step: "02", title: "Timing", desc: "For optimal metabolic energy absorption, take in the morning with a breakfast containing healthy fats." }
    ],
    faqs: [
      { q: "Why do I need to take 3 capsules?", a: "Because we do not use synthetic isolates or high-pressure compression binders. Food-sourced nutrients require more volume to provide clinically effective dosages." }
    ]
  }
};

export default function ProductDetail({ productId, onAddRitual }) {
  const navigate = useNavigate();
  const productKey = PRODUCT_DATA[productId] ? productId : "creatine";
  const product = PRODUCT_DATA[productKey];

  const formatPrice = (priceInUSD) => {
    return "₹" + Math.round(priceInUSD * 80).toLocaleString("en-IN");
  };

  const [activeGalleryTab, setActiveGalleryTab] = useState("aesthetic"); // aesthetic, macro, label, lifestyle, scale
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isSubscription, setIsSubscription] = useState(false);
  const [subscriptionInterval, setSubscriptionInterval] = useState("30");
  const [activeTabInfo, setActiveTabInfo] = useState("shipping"); // shipping, returns, purity
  const [isAdding, setIsAdding] = useState(false);
  const [addedToast, setAddedToast] = useState(false);
  const [liked, setLiked] = useState(false);

  const [selectedBundleItems, setSelectedBundleItems] = useState([true, true]);
  const [bundleAdding, setBundleAdding] = useState(false);
  const [bundleToast, setBundleToast] = useState(false);

  useEffect(() => {
    setSelectedBundleItems([true, true]);
  }, [productId]);

  // Reviews dynamic sorting & helpfulness states
  const [reviewsSort, setReviewsSort] = useState("helpful");
  const [helpfulCounts, setHelpfulCounts] = useState({});
  const [reviewsExpanded, setReviewsExpanded] = useState(false);

  // Accordions active states
  const [openAccordions, setOpenAccordions] = useState({
    details: false,
    ingredients: false,
    usage: false,
    research: false,
    certs: false,
    shipping: false,
    faqs: false
  });

  const handleHelpfulClick = (reviewName) => {
    setHelpfulCounts(prev => ({
      ...prev,
      [reviewName]: (prev[reviewName] || 0) + 1
    }));
  };

  // Variant change handler
  const handleVariantChange = (index) => {
    setSelectedVariant(index);
  };

  // Pricing calculations
  const basePrice = product.price + (product.variants[selectedVariant]?.priceOffset || 0);
  const oneTimePrice = basePrice;
  const subscriptionPrice = Number((basePrice * 0.85).toFixed(2));
  const activePrice = isSubscription ? subscriptionPrice : oneTimePrice;

  // Add to cart click handler
  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
      
      const itemToAdd = {
        id: product.id,
        name: product.name,
        variant: product.variants[selectedVariant]?.name || product.format,
        flavor: product.flavors[selectedFlavor] || "",
        oneTimePrice: product.price + (product.variants[selectedVariant]?.priceOffset || 0),
        price: activePrice,
        quantity: quantity,
        image: product.image,
        isSubscription: isSubscription,
      };

      if (onAddRitual) {
        onAddRitual(itemToAdd, false);
      }
      setAddedToast(true);
      setTimeout(() => {
        setAddedToast(false);
      }, 3000);
    }, 800);
  };

  // Bundle recommendation logic mapping
  const getBundleRecommendations = (id) => {
    switch (id) {
      case "creatine":
        return ["omega-3", "vit-d3-k2"];
      case "omega-3":
        return ["vit-d3-k2", "magnesium"];
      case "vit-d3-k2":
        return ["omega-3", "multivitamin"];
      case "saffron":
        return ["l-theanine", "magnesium"];
      case "beetroot":
        return ["creatine", "omega-3"];
      case "berberine":
        return ["omega-3", "vit-d3-k2"];
      case "iron":
        return ["vit-d3-k2", "multivitamin"];
      case "myo-inositol":
        return ["vit-d3-k2", "omega-3"];
      case "l-theanine":
        return ["saffron", "magnesium"];
      default:
        return ["omega-3", "vit-d3-k2"];
    }
  };

  const recommendationIds = getBundleRecommendations(productKey);
  const rec1 = PRODUCT_DATA[recommendationIds[0]];
  const rec2 = PRODUCT_DATA[recommendationIds[1]];

  const mainOriginalPrice = product.price;
  const mainSavings = mainOriginalPrice * 0.10;

  const rec1OriginalPrice = rec1 ? rec1.price : 0;
  const rec1Savings = rec1OriginalPrice * 0.10;

  const rec2OriginalPrice = rec2 ? rec2.price : 0;
  const rec2Savings = rec2OriginalPrice * 0.10;

  let combinedRetail = mainOriginalPrice;
  let totalSavings = mainSavings;

  if (selectedBundleItems[0] && rec1) {
    combinedRetail += rec1OriginalPrice;
    totalSavings += rec1Savings;
  }
  if (selectedBundleItems[1] && rec2) {
    combinedRetail += rec2OriginalPrice;
    totalSavings += rec2Savings;
  }

  const bundleTotal = combinedRetail - totalSavings;

  const handleAddBundleToCart = () => {
    setBundleAdding(true);
    setTimeout(() => {
      setBundleAdding(false);
      
      const itemsToAdd = [];
      
      // Main product
      itemsToAdd.push({
        id: product.id,
        name: product.name,
        variant: product.variants[selectedVariant]?.name || product.format,
        flavor: product.flavors[selectedFlavor] || "",
        oneTimePrice: product.price + (product.variants[selectedVariant]?.priceOffset || 0),
        price: isSubscription ? subscriptionPrice : oneTimePrice,
        quantity: 1,
        image: product.image,
        isSubscription: isSubscription,
        isBundle: true,
      });

      // Recommendation 1
      if (selectedBundleItems[0] && rec1) {
        itemsToAdd.push({
          id: rec1.id,
          name: rec1.name,
          variant: rec1.variants[0]?.name || rec1.format,
          flavor: rec1.flavors[0] || "",
          oneTimePrice: rec1.price,
          price: rec1.price,
          quantity: 1,
          image: rec1.image,
          isSubscription: false,
          isBundle: true,
        });
      }

      // Recommendation 2
      if (selectedBundleItems[1] && rec2) {
        itemsToAdd.push({
          id: rec2.id,
          name: rec2.name,
          variant: rec2.variants[0]?.name || rec2.format,
          flavor: rec2.flavors[0] || "",
          oneTimePrice: rec2.price,
          price: rec2.price,
          quantity: 1,
          image: rec2.image,
          isSubscription: false,
          isBundle: true,
        });
      }

      if (onAddRitual) {
        onAddRitual(itemsToAdd, true);
      }
      setBundleToast(true);
      setTimeout(() => {
        setBundleToast(false);
      }, 4000);
    }, 1000);
  };

  const getBenefitLabel = (id) => {
    switch (id) {
      case "creatine": return "ATP Hydration & Power";
      case "omega-3": return "Cognitive Purity & Lipids";
      case "vit-d3-k2": return "Bioactive Calcium Synergy";
      case "saffron": return "Emotional Radiance & Calm";
      case "beetroot": return "Nitric Oxide Endurance";
      case "berberine": return "AMPK Metabolic Activator";
      case "iron": return "High-Bioavailability Blood";
      case "myo-inositol": return "Endocrine Harmony";
      case "l-theanine": return "Alpha-Wave Flow State";
      case "magnesium": return "Neuromuscular Relaxation";
      case "multivitamin": return "Bioactive Micronutrients";
      default: return "Daily Wellness Support";
    }
  };

  const getAddedItemsText = () => {
    const items = [product.name];
    if (selectedBundleItems[0] && rec1) items.push(rec1.name);
    if (selectedBundleItems[1] && rec2) items.push(rec2.name);
    if (items.length === 1) return items[0];
    if (items.length === 2) return `${items[0]} and ${items[1]}`;
    return `${items[0]}, ${items[1]} and ${items[2]}`;
  };

  // Set the CSS properties for themes dynamically on mount and update
  useEffect(() => {
    document.documentElement.style.setProperty("--active-product-primary", product.primaryColor);
    document.documentElement.style.setProperty("--active-product-accent", product.accentColor);
    document.documentElement.style.setProperty("--active-product-soft", product.softBg);
  }, [product]);

  // Fallback reviews array
  const productReviews = product.reviews || [
    { name: "Liam M.", rating: 5, date: "12 days ago", comment: `Absolutely pure! No chalky aftertaste, mixes instantly. Best ${product.name} on the market.`, before: "Struggled with energy drops.", after: "Consistent vitality and recovery support.", helpfulCount: 14 },
    { name: "Charlotte K.", rating: 5, date: "3 weeks ago", comment: "The subscription is a lifesaver. Never runs out and the packaging looks like luxury apothecary.", before: "Forgot to buy health fuels.", after: "Delivered automatically, zero friction.", helpfulCount: 8 },
    { name: "Oliver S.", rating: 4, date: "1 month ago", comment: "Excellent bioavailability metrics. Third party lab tests are a huge trust builder.", before: "Digestive discomfort with other powders.", after: "Smooth, rapid cellular saturation.", helpfulCount: 6 }
  ];

  // Sorted reviews
  const sortedReviews = [...productReviews].sort((a, b) => {
    if (reviewsSort === "helpful") {
      const helpfulA = (a.helpfulCount || 0) + (helpfulCounts[a.name] || 0);
      const helpfulB = (b.helpfulCount || 0) + (helpfulCounts[b.name] || 0);
      return helpfulB - helpfulA;
    }
    if (reviewsSort === "highest") {
      return b.rating - a.rating;
    }
    if (reviewsSort === "recent") {
      const dateWeight = (dateStr) => {
        if (dateStr.includes("day")) return parseInt(dateStr) || 1;
        if (dateStr.includes("week")) return (parseInt(dateStr) || 1) * 7;
        if (dateStr.includes("month")) return (parseInt(dateStr) || 1) * 30;
        return 999;
      };
      return dateWeight(a.date) - dateWeight(b.date);
    }
    return 0;
  });

  return (
    <div className="bg-[#FAF9F5] pt-24 min-h-screen text-[#1E1E1E] premium-noise relative pb-16 selection:bg-[var(--active-product-primary)] selection:text-white">

      {/* Decorative Blur Backdrops */}
      <div
        style={{ backgroundColor: `${product.accentColor}0a` }}
        className="absolute top-0 right-0 w-[50rem] h-[50rem] rounded-full blur-[140px] pointer-events-none -z-10"
      />
      <div
        style={{ backgroundColor: `${product.primaryColor}06` }}
        className="absolute top-1/2 left-0 w-[45rem] h-[45rem] rounded-full blur-[120px] pointer-events-none -z-10"
      />

      {/* Top Breadcrumb Bar */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-6 flex justify-between items-center z-10 relative">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foundation-text-secondary hover:text-[var(--active-product-primary)] duration-300 group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
          Back
        </button>
        <div className="flex gap-4">
          <button
            onClick={() => setLiked(!liked)}
            className="w-10 h-10 rounded-full border border-foundation-border flex items-center justify-center bg-white/40 backdrop-blur-sm shadow-sm hover:scale-105 active:scale-95 duration-300 text-foundation-text-secondary hover:text-beetroot-accent"
          >
            <Heart className={`w-4 h-4 ${liked ? "fill-beetroot-accent text-beetroot-accent" : ""}`} />
          </button>
          <button
            className="w-10 h-10 rounded-full border border-foundation-border flex items-center justify-center bg-white/40 backdrop-blur-sm shadow-sm hover:scale-105 active:scale-95 duration-300 text-foundation-text-secondary hover:text-[var(--active-product-primary)]"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Product link copied to clipboard!");
            }}
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Split-Scroll Layout Grid */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 relative">

        {/* ========================================== */}
        {/* LEFT COLUMN: SCROLLS INDEPENDENTLY (60%)   */}
        {/* ========================================== */}
        <div className="lg:col-span-6 space-y-12 lg:pb-32">

          {/* SECTION 1: LARGE GALLERY */}
          <section id="gallery" className="space-y-6">

            {/* Main Stage Display Box */}
            <div className="relative aspect-[4/3] w-full rounded-[2.5rem] bg-white border border-[#EBEAE6] shadow-[0_30px_70px_rgba(0,0,0,0.015)] overflow-hidden flex items-center justify-center p-8 group">

              {/* Dynamic Glow and Stage Accents */}
              <div
                style={{ backgroundColor: `${product.accentColor}12` }}
                className="absolute inset-0 m-auto w-[85%] h-[80%] rounded-[2rem] blur-3xl pointer-events-none"
              />

              {/* Internal Fine Glass Morph Stage lines */}
              <div className="absolute inset-x-12 inset-y-8 rounded-[1.8rem] border border-black/[0.02] bg-gradient-to-tr from-white/[0.02] to-white/[0.08] pointer-events-none" />

              {/* Glossy Sheen light reflection overlay */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem] z-20">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-[1200ms] ease-out" />
              </div>

              {/* Conditionally render different views of the product */}
              {activeGalleryTab === "aesthetic" && (
                <div className="w-full h-full flex flex-col justify-center items-center relative animate-fade-in-up duration-500 select-none">
                  <div className="animate-float-slow-rotate relative flex justify-center items-center h-[75%] w-auto group-hover:scale-108 transition-all duration-700 ease-out">
                    <img
                      src={product.image}
                      alt={`${product.name} Front`}
                      className="h-full w-auto object-contain select-none filter contrast-[1.05] brightness-[1.03] drop-shadow-[0_20px_50px_rgba(0,0,0,0.12)] duration-700 ease-out"
                    />
                  </div>
                  {/* Subtle float shadow */}
                  <div className="absolute bottom-[10%] w-[35%] h-[8px] bg-black/5 rounded-full blur-[8px] animate-shadow-slow-rotate" />
                  <div className="absolute bottom-4 text-[9px] uppercase tracking-[0.25em] text-[#C4C4BC] font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[var(--active-product-primary)]" />
                    Ultra-purified botanical ritual
                  </div>
                </div>
              )}

              {activeGalleryTab === "macro" && (
                <div className="w-full h-full flex flex-col justify-center items-center p-6 animate-fade-in-up">
                  <div className="w-full max-w-sm bg-white border border-[#ECEBE8] p-6 rounded-[2rem] shadow-sm text-center space-y-4 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none font-mono text-[9px] text-left p-4 leading-relaxed">
                      Active Saturation Dynamics: {productKey.toUpperCase()} Molecular Grid
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[var(--active-product-soft)] mx-auto flex items-center justify-center text-[var(--active-product-primary)]">
                      <FlaskConical className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display font-extrabold text-[10px] uppercase tracking-widest text-[#1E1E1E]">ACTIVE RAW INGREDIENT</h4>
                      <p className="text-[9px] text-[#8C8C82] italic">Microscopic Assay Purity</p>
                    </div>
                    <div className="h-28 bg-[#FAF9F5] border border-[#EBEAE6] rounded-xl flex items-center justify-center p-4 relative overflow-hidden">
                      <svg className="w-full h-full text-[var(--active-product-primary)]/10" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                        <polygon points="50,15 80,35 80,65 50,85 20,65 20,35" />
                        <polygon points="50,25 72,40 72,60 50,75 28,60 28,40" strokeDasharray="2" />
                        <line x1="50" y1="15" x2="50" y2="85" />
                        <line x1="20" y1="35" x2="80" y2="65" />
                        <line x1="20" y1="65" x2="80" y2="35" />
                        <circle cx="50" cy="50" r="4" fill="var(--active-product-primary)" />
                        <circle cx="28" cy="40" r="3" fill="var(--active-product-accent)" />
                        <circle cx="72" cy="60" r="3" fill="var(--active-product-accent)" />
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                      <div className="absolute bottom-2 font-mono text-[9px] font-bold text-[var(--active-product-primary)] uppercase">
                        {productKey === "creatine" ? "Creapure® Bio-Matrices" : productKey === "omega-3" ? "Triglyceride Lipids" : "Bioactive Lichen D3"}
                      </div>
                    </div>
                    <p className="text-[10px] text-[#5F6368] leading-relaxed">
                      {productKey === "creatine"
                        ? "Creapure® is synthesized in Germany via chemical synthesis under GMP guidelines. Totally free from creatinine, dicyandiamide, and heavy metals."
                        : productKey === "omega-3"
                          ? "Unsaturated marine fatty acids in natural triglyceride configuration, ensuring up to 70% higher absorption than standard ethyl esters."
                          : "Vitamin D3 sourced from organic lichen rather than sheep wool grease (lanolin), paired with Menaquinone-7 from fermented chickpeas."}
                    </p>
                  </div>
                </div>
              )}

              {activeGalleryTab === "label" && (
                <div className="w-full h-full flex flex-col justify-center items-center p-6 animate-fade-in-up select-none">
                  <div className="w-full max-w-sm bg-white border border-[#ECEBE8] p-6 rounded-2xl shadow-sm text-xs font-sans text-left space-y-4">
                    <div className="border-b border-[#EBEAE6] pb-3 text-center">
                      <h4 className="font-lemon text-sm tracking-wider text-[#1E1E1E]">SUPPLEMENT FACTS</h4>
                      <p className="text-[10px] text-[#A1A1AA]">Serving Size: {productKey === "creatine" ? "1 Scoop (5g)" : productKey === "omega-3" ? "3 Softgels" : "1 Capsule"}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between font-bold border-b border-[#ECEBE8] pb-1">
                        <span>Active Ingredients</span>
                        <span>Amount Per Serving</span>
                      </div>
                      {product.ingredients.map((ing, idx) => (
                        <div key={idx} className="flex justify-between border-b border-[#ECEBE8] pb-1 text-[#4B4B43]">
                          <span>{ing.name}</span>
                          <span className="font-bold text-[#1E1E1E]">{ing.dosage}</span>
                        </div>
                      ))}
                      <div className="text-[10px] text-[#8C8C82] leading-relaxed pt-2">
                        * Daily Value (DV) not established. <br />
                        <strong>Other Ingredients:</strong> Organic vegetarian capsule shell (HPMC), organic coconut derived MCT oil (in liquid lines).
                      </div>
                    </div>
                    <div className="bg-[#FAF9F5] p-3 rounded-lg border border-[#ECEBE8] flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <p className="text-[10px] text-[#4B4B43] leading-relaxed">
                        <strong>Lab certified:</strong> Zero synthetic additives, fillers, binders, heavy metals, or magnesium stearate.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeGalleryTab === "lifestyle" && (
                <div className="w-full h-full flex flex-col justify-center items-center relative animate-fade-in-up p-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--active-product-soft)] to-white opacity-40" />
                  <div className="w-full max-w-sm bg-white/80 backdrop-blur-md border border-[#ECEBE8] p-6 rounded-[2.5rem] shadow-sm flex flex-col justify-between h-[85%] relative overflow-hidden">
                    <div className="flex justify-between items-center border-b border-[#EBEAE6] pb-3">
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#1E1E1E]">DAILY PROTOCOL</span>
                      <div className="flex items-center gap-1 text-xs font-bold text-[var(--active-product-primary)]">
                        <Clock className="w-4 h-4 animate-spin-slow" />
                        {productKey === "creatine" ? "POST-WORKOUT" : productKey === "omega-3" ? "WITH LUNCH" : "WITH BREAKFAST"}
                      </div>
                    </div>

                    <div className="my-4 space-y-3">
                      {product.usage.map((step, idx) => (
                        <div key={idx} className="flex gap-3 items-start">
                          <span className="w-5.5 h-5.5 rounded-full bg-[var(--active-product-soft)] text-[var(--active-product-primary)] text-[10px] font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                            {step.step}
                          </span>
                          <div className="space-y-0.5">
                            <h5 className="text-[11px] font-extrabold uppercase tracking-wider text-[#1E1E1E]">{step.title}</h5>
                            <p className="text-[10px] text-[#5F6368] leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-[var(--active-product-soft)] p-3 rounded-xl border border-[var(--active-product-primary)]/10 text-center">
                      <span className="text-[8px] font-extrabold uppercase tracking-widest text-[var(--active-product-primary)] block mb-1">PRO-TIP SHIELD</span>
                      <p className="text-[9px] text-[#5F6368] leading-relaxed">
                        {productKey === "creatine"
                          ? "Dissolve in slightly warm water or carbohydrate solutions to amplify cellular creatine transporter efficiency."
                          : productKey === "omega-3"
                            ? "Avoid taking with high-calcium meals as calcium can bind fatty acids, reducing overall intestinal lipid absorption rates."
                            : "Pair sublingual drops with healthy fats (e.g. eggs, avocados) to optimize D3/K2 absorption speed."}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeGalleryTab === "scale" && (
                <div className="w-full h-full flex flex-col justify-center items-center p-6 animate-fade-in-up">
                  <div className="w-full max-w-sm bg-white border border-[#ECEBE8] p-6 rounded-[2rem] shadow-sm space-y-4 relative overflow-hidden">
                    <div className="border-b border-[#EBEAE6] pb-3 text-center">
                      <span className="text-[8px] font-bold uppercase tracking-widest text-[#8C8C82] block">TACTILE METRIC STANDARDS</span>
                      <h4 className="font-display font-extrabold text-[10px] uppercase tracking-widest text-[#1E1E1E] mt-1">PHYSICAL PACKAGING SCALE</h4>
                    </div>

                    <div className="h-28 bg-[#FAF9F5] border border-[#EBEAE6] rounded-xl flex items-center justify-around p-4 relative overflow-hidden">
                      <div className="flex flex-col items-center gap-1.5 opacity-40">
                        <div className="w-10 h-16 border border-neutral-300 rounded bg-white flex items-center justify-center text-[7px] font-bold text-neutral-400">
                          iPhone
                        </div>
                        <span className="text-[8px] font-bold font-mono">146 mm</span>
                      </div>
                      <div className="h-full w-px bg-neutral-200 border-dashed" />
                      <div className="flex flex-col items-center gap-1">
                        <img
                          src={product.image}
                          alt="Bottle size comparison"
                          className="h-16 w-auto object-contain filter contrast-[1.05] brightness-[1.02] drop-shadow-md select-none"
                        />
                        <span className="text-[8px] font-bold font-mono text-[var(--active-product-primary)]">138 mm Height</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-left">
                      <div className="bg-[#FAF9F5] p-3 rounded-xl border border-[#EBEAE6]">
                        <span className="text-[8px] font-bold uppercase tracking-wider text-[#8C8C82] block">CONTAINER VESSEL</span>
                        <span className="text-[9px] font-extrabold text-[#1E1E1E] block mt-0.5">Amber Apothecary Glass</span>
                        <span className="text-[8px] text-[#5F6368] block mt-0.5">Blocks 99% UV light decay.</span>
                      </div>
                      <div className="bg-[#FAF9F5] p-3 rounded-xl border border-[#EBEAE6]">
                        <span className="text-[8px] font-bold uppercase tracking-wider text-[#8C8C82] block">NET QUANTITY</span>
                        <span className="text-[9px] font-extrabold text-[#1E1E1E] block mt-0.5">{product.format}</span>
                        <span className="text-[8px] text-[#5F6368] block mt-0.5">Recyclable aluminum cap.</span>
                      </div>
                    </div>

                    <div className="bg-[#FAF9F5] border border-[#EBEAE6] p-3 rounded-xl flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[var(--active-product-soft)] flex items-center justify-center text-[var(--active-product-primary)] shrink-0">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-[9px] text-[#5F6368] leading-relaxed">
                        Feels weighted and premium in-hand. Coated in matte soft-touch labeling for moisture-resistance.
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Thumbnail Selectors */}
            <div className="grid grid-cols-5 gap-3">
              {[
                { id: "aesthetic", label: "Studio" },
                { id: "macro", label: "Macro" },
                { id: "label", label: "Label" },
                { id: "lifestyle", label: "Ritual" },
                { id: "scale", label: "Scale" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveGalleryTab(tab.id)}
                  style={{
                    borderColor: activeGalleryTab === tab.id ? "var(--active-product-primary)" : "#EBEAE6",
                    backgroundColor: activeGalleryTab === tab.id ? "white" : "rgba(255, 255, 255, 0.4)"
                  }}
                  className="py-2 px-1 rounded-xl border text-center transition-all duration-300 shadow-sm hover:scale-[1.03] active:scale-[0.98] cursor-pointer outline-none flex flex-col items-center justify-center gap-1 group/thumb"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FAF9F5] border border-neutral-100 flex items-center justify-center overflow-hidden shrink-0 group-hover/thumb:scale-105 duration-300">
                    {tab.id === "aesthetic" && (
                      <img src={product.image} alt="" className="w-6 h-6 object-contain filter contrast-[1.05]" />
                    )}
                    {tab.id === "macro" && (
                      <FlaskConical className="w-4 h-4 text-neutral-400 group-hover/thumb:text-[var(--active-product-primary)] duration-300" />
                    )}
                    {tab.id === "label" && (
                      <Info className="w-4 h-4 text-neutral-400 group-hover/thumb:text-[var(--active-product-primary)] duration-300" />
                    )}
                    {tab.id === "lifestyle" && (
                      <Clock className="w-4 h-4 text-neutral-400 group-hover/thumb:text-[var(--active-product-primary)] duration-300" />
                    )}
                    {tab.id === "scale" && (
                      <Sparkles className="w-4 h-4 text-neutral-400 group-hover/thumb:text-[var(--active-product-primary)] duration-300" />
                    )}
                  </div>
                  <span className={`block text-[8px] font-extrabold uppercase tracking-wider ${activeGalleryTab === tab.id ? "text-[var(--active-product-primary)]" : "text-[#8C8C82]"}`}>
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>

          </section>

          {/* TRUST STRIP */}
          <div className="py-3.5 border-y border-[#EBEAE6] bg-white flex flex-wrap items-center justify-around gap-y-2.5 gap-x-4 text-[9px] font-extrabold uppercase tracking-widest text-[#1E1E1E] shadow-[0_2px_10px_rgba(0,0,0,0.005)]">
            <div className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[var(--active-product-primary)]" />
              <span>15,000+ Bottles Sold</span>
            </div>
            <div className="text-neutral-300 hidden md:block">•</div>
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-500 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current text-amber-400" />)}
              </div>
              <span>4.9/5 Rating</span>
            </div>
            <div className="text-neutral-300 hidden md:block">•</div>
            <div className="flex items-center gap-1.5">
              <FlaskConical className="w-3.5 h-3.5 text-[var(--active-product-primary)]" />
              <span>Third-Party Tested</span>
            </div>
            <div className="text-neutral-300 hidden md:block">•</div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>GMP Certified</span>
            </div>
            <div className="text-neutral-300 hidden md:block">•</div>
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[var(--active-product-primary)]" />
              <span>Transparent Formula</span>
            </div>
            <div className="text-neutral-300 hidden md:block">•</div>
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[var(--active-product-primary)]" />
              <span>Global Deliveries</span>
            </div>
          </div>

          {/* STRONG EMOTIONAL STORYTELLING SECTION */}
          {product.storytelling && (
            <section id="emotional-storytelling" className="py-10 px-8 sm:px-12 rounded-[2.5rem] bg-white border border-[#EBEAE6] shadow-sm relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
              <div
                style={{ backgroundColor: `${product.primaryColor}03` }}
                className="absolute inset-0 pointer-events-none -z-10"
              />

              <div className="space-y-4 md:w-[60%] text-left">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[var(--active-product-primary)] block">
                  THE PURITY PHILOSOPHY
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E1E1E] leading-tight uppercase">
                  {product.storytelling.headline}
                </h3>

                <div className="space-y-3 pt-2 text-[#1E1E1E]">
                  <p className="text-[11px] font-extrabold uppercase tracking-wide text-neutral-400">
                    {product.storytelling.hook}
                  </p>
                  <p className="text-sm font-extrabold text-[var(--active-product-primary)]">
                    {product.storytelling.subhook}
                  </p>
                  <p className="text-xs text-[#5F6368] leading-relaxed font-normal">
                    {product.storytelling.copy}
                  </p>
                </div>
              </div>

              {/* Bullet Features Grid */}
              <div className="grid grid-cols-2 gap-3.5 w-full md:w-[40%] bg-[#FAF9F5]/80 p-5 rounded-2xl border border-[#EBEAE6] self-center">
                {product.storytelling.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="text-[9px] font-extrabold uppercase tracking-wide text-[#1E1E1E]">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SECTION 2: INGREDIENTS SPOTLIGHT */}
          <section id="ingredients" className="space-y-6">
            <div className="space-y-2">
              <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#8C8C82] block">Active Composition</span>
              <h3 className="font-lemon text-xl tracking-wide text-[#1E1E1E]">INGREDIENT SPOTLIGHT</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {product.ingredients.slice(0, 2).map((ing, idx) => (
                <div key={idx} className="p-5.5 rounded-2xl bg-white border border-[#EBEAE6] shadow-sm flex flex-col justify-between hover:scale-[1.01] duration-300">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="font-display font-extrabold text-xs uppercase tracking-wide text-[#1E1E1E]">
                        {ing.name}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[var(--active-product-soft)] text-[var(--active-product-primary)] font-display font-black text-[10px]">
                        {ing.dosage}
                      </span>
                    </div>
                    <p className="text-[11px] text-foundation-text-secondary leading-relaxed font-normal">
                      {ing.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: SCIENTIFIC RESEARCH */}
          <section id="research" className="space-y-6">
            <div className="space-y-2">
              <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#8C8C82] block">Peer-Reviewed Studies</span>
              <h3 className="font-lemon text-xl tracking-wide text-[#1E1E1E]">SCIENTIFIC DISCOVERY</h3>
            </div>

            {/* SCIENTIFIC EVIDENCE VISUAL BLOCK */}
            <div className="p-6 sm:p-8 rounded-[2.5rem] bg-white border border-[#EBEAE6] shadow-sm space-y-5">
              <h4 className="font-display font-extrabold text-[9px] uppercase tracking-[0.25em] text-[#8C8C82] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--active-product-primary)] animate-pulse" />
                CLINICAL SATURATION PROFILE & DYNAMICS
              </h4>
              <div className="h-48 w-full border border-dashed border-[#EBEAE6] rounded-2xl bg-[#FAF9F5]/40 flex items-center justify-center p-4 relative overflow-hidden">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="0" y1="20" x2="100" y2="20" stroke="#ECEBE8" strokeWidth="0.5" strokeDasharray="3" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="#ECEBE8" strokeWidth="0.5" strokeDasharray="3" />
                  <line x1="0" y1="80" x2="100" y2="80" stroke="#ECEBE8" strokeWidth="0.5" strokeDasharray="3" />

                  <path
                    d={
                      productKey === "creatine"
                        ? "M 0 95 Q 25 60, 50 30 T 100 15"
                        : productKey === "omega-3"
                          ? "M 0 90 C 20 70, 40 40, 60 25 T 100 20"
                          : "M 0 95 Q 15 40, 40 20 T 100 10"
                    }
                    fill="none"
                    stroke="var(--active-product-primary)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  <path
                    d={
                      productKey === "creatine"
                        ? "M 0 95 Q 25 60, 50 30 T 100 15 L 100 100 L 0 100 Z"
                        : productKey === "omega-3"
                          ? "M 0 90 C 20 70, 40 40, 60 25 T 100 20 L 100 100 L 0 100 Z"
                          : "M 0 95 Q 15 40, 40 20 T 100 10 L 100 100 L 0 100 Z"
                    }
                    fill="url(#gradient-chart)"
                    opacity="0.08"
                  />

                  <defs>
                    <linearGradient id="gradient-chart" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="var(--active-product-primary)" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="absolute left-4 top-4 text-[9px] font-bold text-[#8C8C82] font-mono">100% SATURATION</div>
                <div className="absolute left-4 bottom-4 text-[9px] font-bold text-[#8C8C82] font-mono">BASELINE</div>
                <div className="absolute right-4 bottom-4 text-[9px] font-bold text-[var(--active-product-primary)] font-mono uppercase">28-DAY CYCLE</div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-2 text-center">
                <div>
                  <span className="text-xs font-display font-extrabold text-[#1E1E1E] block">
                    {productKey === "creatine" ? "200 mesh" : productKey === "omega-3" ? "Triglyceride" : "Plant-based"}
                  </span>
                  <span className="text-[8px] text-[#8C8C82] uppercase font-bold tracking-wider">Bioavailability</span>
                </div>
                <div className="border-x border-[#F1EFEA]">
                  <span className="text-xs font-display font-extrabold text-[#1E1E1E] block">
                    {productKey === "creatine" ? "Creapure®" : productKey === "omega-3" ? "Friend of Sea" : "Organic Lichen"}
                  </span>
                  <span className="text-[8px] text-[#8C8C82] uppercase font-bold tracking-wider">Raw Standard</span>
                </div>
                <div>
                  <span className="text-xs font-display font-extrabold text-[#1E1E1E] block">
                    {productKey === "creatine" ? "100% Pure" : productKey === "omega-3" ? "No Heavy Metals" : "No Synthetics"}
                  </span>
                  <span className="text-[8px] text-[#8C8C82] uppercase font-bold tracking-wider">Purity Assured</span>
                </div>
              </div>
            </div>

            {/* Studies List (Keep exactly 2 strongest) */}
            <div className="space-y-4">
              {product.science.slice(0, 2).map((sci, idx) => (
                <div key={idx} className="p-5 sm:p-6 rounded-[1.8rem] bg-white border border-[#EBEAE6] shadow-sm relative overflow-hidden flex flex-col sm:flex-row gap-5 items-center hover:shadow-[0_15px_45px_rgba(0,0,0,0.01)] duration-300">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--active-product-primary)]" />

                  {sci.stat && (
                    <div className="w-16 h-16 rounded-2xl bg-[var(--active-product-soft)] border border-[var(--active-product-primary)]/10 flex flex-col items-center justify-center shrink-0 text-[var(--active-product-primary)]">
                      <span className="text-sm font-display font-black leading-none">{sci.stat}</span>
                      <span className="text-[8px] font-extrabold uppercase tracking-wider text-center leading-tight mt-1">{sci.statLabel.split(" ")[0]}</span>
                    </div>
                  )}

                  <div className="space-y-2 flex-1 text-left w-full">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F1EFEA] pb-2">
                      <span className="font-display font-extrabold text-xs uppercase tracking-wide text-[#1E1E1E]">
                        {sci.study}
                      </span>
                      {sci.journal && (
                        <span className="text-[8px] font-bold text-[#8C8C82] uppercase tracking-wider bg-[#FAF9F5] border border-[#EBEAE6] px-2 py-0.5 rounded">
                          {sci.journal}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#5F6368] leading-relaxed font-normal">
                      {sci.result}
                    </p>
                    {sci.parameters && (
                      <span className="text-[8px] font-mono text-[#8C8C82] block">
                        Study parameters: {sci.parameters}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PREMIUM ACCORDIONS SECTION */}
          <section id="premium-accordions" className="space-y-2.5">
            {[
              { id: "details", label: "Product Details", icon: Award },
              { id: "ingredients", label: "Ingredients & Nutrition Facts", icon: FlaskConical },
              { id: "usage", label: "Usage Instructions", icon: Clock },
              { id: "research", label: "Scientific Research & Clinical Studies", icon: ShieldCheck },
              { id: "certs", label: "Certifications & Third-Party Testing", icon: Check },
              { id: "shipping", label: "Shipping & Returns", icon: Truck },
              { id: "faqs", label: "Frequently Asked Questions", icon: HelpCircle }
            ].map((acc) => {
              const isOpen = openAccordions[acc.id];
              return (
                <div
                  key={acc.id}
                  className="border border-[#EBEAE6] rounded-[1.5rem] bg-white overflow-hidden shadow-sm transition-all duration-300 text-left"
                >
                  <button
                    onClick={() => setOpenAccordions(prev => ({ ...prev, [acc.id]: !prev[acc.id] }))}
                    className="w-full text-left py-3.5 px-5 flex justify-between items-center hover:bg-[#FAF9F5]/40 duration-300 cursor-pointer outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7.5 h-7.5 rounded-full bg-[var(--active-product-soft)] flex items-center justify-center text-[var(--active-product-primary)] shrink-0">
                        <acc.icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1E1E1E]">
                        {acc.label}
                      </span>
                    </div>
                    <ChevronDown className={`w-3.5 h-3.5 text-[#8C8C82] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[var(--active-product-primary)]" : ""}`} />
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px] border-t border-[#F1EFEA] opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="p-5 text-[11px] text-[#5F6368] leading-relaxed font-normal bg-[#FAF9F5]/10 space-y-4">

                      {acc.id === "details" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {product.benefits.map((b, idx) => (
                            <div key={idx} className="flex gap-2 items-start">
                              <div className="w-4 h-4 rounded-full bg-[var(--active-product-soft)] text-[var(--active-product-primary)] flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-2.5 h-2.5" />
                              </div>
                              <div>
                                <h5 className="font-extrabold text-[9px] uppercase tracking-wide text-[#1E1E1E]">{b.title}</h5>
                                <p className="text-[10px] text-[#5F6368] leading-relaxed mt-0.5">{b.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {acc.id === "ingredients" && (
                        <div className="space-y-4">
                          <div className="w-full max-w-sm bg-white border border-[#ECEBE8] p-4.5 rounded-2xl shadow-sm text-xs font-sans text-left space-y-3">
                            <div className="border-b border-[#EBEAE6] pb-2 text-center">
                              <h4 className="font-lemon text-[11px] tracking-wider text-[#1E1E1E]">SUPPLEMENT FACTS</h4>
                              <p className="text-[9px] text-[#A1A1AA]">Serving Size: {productKey === "creatine" ? "1 Scoop (5g)" : productKey === "omega-3" ? "3 Softgels" : "1 Capsule"}</p>
                            </div>
                            <div className="space-y-1.5">
                              {product.ingredients.map((ing, idx) => (
                                <div key={idx} className="flex justify-between border-b border-[#ECEBE8] pb-1 text-[#4B4B43] text-[10px]">
                                  <span>{ing.name}</span>
                                  <span className="font-bold text-[#1E1E1E]">{ing.dosage}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {acc.id === "usage" && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                          {product.usage.map((step, idx) => (
                            <div key={idx} className="p-3.5 rounded-xl border border-[#EBEAE6] bg-[#FAF9F5]/40 space-y-1.5">
                              <span className="text-[9px] font-extrabold uppercase text-[var(--active-product-primary)]">STEP {step.step}</span>
                              <h5 className="font-extrabold text-[9px] uppercase tracking-wide text-[#1E1E1E]">{step.title}</h5>
                              <p className="text-[9.5px] text-[#5F6368] leading-relaxed">{step.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {acc.id === "research" && (
                        <div className="space-y-3">
                          {product.science.map((sci, idx) => (
                            <div key={idx} className="p-3.5 rounded-xl border border-[#EBEAE6] bg-[#FAF9F5]/40 space-y-1">
                              <div className="flex justify-between items-center text-[10px] font-extrabold uppercase tracking-wide text-[#1E1E1E] border-b border-[#F1EFEA] pb-1">
                                <span>{sci.study}</span>
                                <span className="text-[8px] text-[#8C8C82] normal-case">{sci.journal}</span>
                              </div>
                              <p className="text-[9.5px] text-[#5F6368] leading-relaxed pt-1">{sci.result}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {acc.id === "certs" && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                          {[
                            "GMP Certified facility standards",
                            "Third Party Tested for potency",
                            "Heavy Metal assayed clean",
                            "Transparent Label formulation",
                            "Non-GMO ingredients standard",
                            "Premium clinically studied compounds"
                          ].map((text, idx) => (
                            <div key={idx} className="p-2.5 rounded-xl border border-[#EBEAE6] bg-[#FAF9F5]/30 flex items-center gap-2">
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span className="text-[8.5px] font-bold uppercase tracking-wider text-[#1E1E1E]">{text}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {acc.id === "shipping" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <h5 className="font-extrabold text-[9px] uppercase tracking-wide text-[#1E1E1E]">Shipping Standard</h5>
                            <p className="text-[10px] text-[#5F6368] leading-relaxed">Free climate-controlled standard shipping on all subscriptions and orders over ₹3,000. Dispatched within 24 hours. Delivery takes 2-4 business days.</p>
                          </div>
                          <div className="space-y-1">
                            <h5 className="font-extrabold text-[9px] uppercase tracking-wide text-[#1E1E1E]">Returns Code</h5>
                            <p className="text-[10px] text-[#5F6368] leading-relaxed">Our 30-day ritual trial ensures complete satisfaction. If a product does not suit your biology, return it for a full refund—no questions asked.</p>
                          </div>
                        </div>
                      )}

                      {acc.id === "faqs" && (
                        <div className="space-y-3">
                          {product.faqs.map((faq, idx) => (
                            <div key={idx} className="space-y-1 border-b border-[#F1EFEA] pb-2 last:border-b-0 last:pb-0">
                              <h5 className="font-extrabold text-[9px] uppercase tracking-wide text-[#1E1E1E]">Q: {faq.q}</h5>
                              <p className="text-[10px] text-[#5F6368] leading-relaxed">A: {faq.a}</p>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              );
            })}
          </section>

          {/* SECTION 7: CUSTOMER REVIEWS */}
          <section id="reviews" className="space-y-6">
            <div className="space-y-2">
              <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#8C8C82] block">Customer Feedback</span>
              <h3 className="font-lemon text-xl tracking-wide text-[#1E1E1E]">VERIFIED REVIEWS</h3>
            </div>

            {/* RATING DISTRIBUTION HEADER */}
            <div className="p-6 sm:p-8 rounded-[2.5rem] bg-white border border-[#EBEAE6] shadow-sm flex flex-col md:flex-row gap-8 items-center">
              <div className="text-center md:text-left space-y-2 md:border-r md:border-[#F1EFEA] md:pr-10 shrink-0">
                <div className="text-4xl font-display font-extrabold text-[#1E1E1E]">
                  {product.rating} <span className="text-xl text-[#8C8C82]">/ 5.0</span>
                </div>
                <div className="flex text-amber-500 justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current text-amber-400" />)}
                </div>
                <span className="text-[10px] text-foundation-text-secondary font-bold uppercase tracking-wider block">
                  Based on {product.reviewsCount} verified purchases
                </span>
              </div>
              <div className="flex-1 w-full space-y-2">
                {[
                  { stars: 5, pct: 92 },
                  { stars: 4, pct: 6 },
                  { stars: 3, pct: 2 },
                  { stars: 2, pct: 0 },
                  { stars: 1, pct: 0 }
                ].map((row, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs">
                    <span className="w-12 text-[#8C8C82] text-[10px] font-bold text-right uppercase tracking-wider">{row.stars} Stars</span>
                    <div className="flex-1 h-1.5 bg-[#FAF9F5] border border-[#EBEAE6] rounded-full overflow-hidden">
                      <div
                        style={{
                          width: `${row.pct}%`,
                          backgroundColor: "var(--active-product-primary)"
                        }}
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                      />
                    </div>
                    <span className="w-8 text-[#1E1E1E] text-[10px] font-bold text-left">{row.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CONTROLS (SORTING) */}
            <div className="flex justify-between items-center bg-[#FAF9F5]/45 border border-[#EBEAE6] p-4 rounded-2xl">
              <span className="text-[10px] text-[#8C8C82] font-bold uppercase tracking-wider">
                Showing {reviewsExpanded ? sortedReviews.length : Math.min(3, sortedReviews.length)} Featured Reviews
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-[#8C8C82] font-bold uppercase tracking-wider">Sort by</span>
                <div className="relative">
                  <select
                    value={reviewsSort}
                    onChange={(e) => setReviewsSort(e.target.value)}
                    className="bg-white border border-[#EBEAE6] py-1.5 pl-3 pr-8 rounded-xl text-[10px] font-bold focus:outline-none focus:border-[var(--active-product-primary)] appearance-none cursor-pointer"
                  >
                    <option value="helpful">Most Helpful</option>
                    <option value="highest">Highest Rating</option>
                    <option value="recent">Most Recent</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 absolute right-2 top-1/2 -translate-y-1/2 text-[#8C8C82] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* REVIEWS LIST (Keep exactly 3 by default) */}
            <div className="space-y-4">
              {sortedReviews.slice(0, reviewsExpanded ? sortedReviews.length : 3).map((rev, idx) => {
                const currentHelpful = (rev.helpfulCount || 0) + (helpfulCounts[rev.name] || 0);
                const hasVoted = helpfulCounts[rev.name] > 0;
                return (
                  <div key={idx} className="p-5 sm:p-6 rounded-[2rem] bg-white border border-[#EBEAE6] shadow-sm space-y-4 hover:shadow-[0_15px_45px_rgba(0,0,0,0.01)] duration-300 text-left">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[var(--active-product-soft)] border border-[var(--active-product-primary)]/10 flex items-center justify-center font-display font-extrabold text-xs text-[var(--active-product-primary)] uppercase">
                          {rev.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#1E1E1E]">{rev.name}</span>
                            <span className="text-[8px] text-emerald-600 font-extrabold uppercase bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                              <ShieldCheck className="w-3 h-3 fill-emerald-600/10" />
                              Verified
                            </span>
                          </div>
                          <span className="text-[9px] text-[#8C8C82] font-semibold">{rev.date}</span>
                        </div>
                      </div>
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${i < rev.rating ? "fill-current" : "text-gray-200"}`}
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-[#5F6368] leading-relaxed font-normal">
                      "{rev.comment}"
                    </p>

                    {rev.before && rev.after && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#FAF9F5] p-3.5 rounded-2xl border border-[#EBEAE6]">
                        <div className="space-y-1">
                          <span className="text-[8px] font-extrabold text-[#8C8C82] uppercase tracking-wider block">BEFORE RITUAL</span>
                          <p className="text-[10px] text-[#5F6368] leading-normal italic font-medium">"{rev.before}"</p>
                        </div>
                        <div className="space-y-1 sm:border-l sm:border-[#EBEAE6] sm:pl-4">
                          <span className="text-[8px] font-extrabold text-[var(--active-product-primary)] uppercase tracking-wider block">AFTER RITUAL</span>
                          <p className="text-[10px] text-[#1E1E1E] leading-normal font-bold">"{rev.after}"</p>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <div className="w-14 h-14 rounded-xl border border-[#EBEAE6] bg-[#FAF9F5] overflow-hidden flex items-center justify-center relative group/img cursor-zoom-in">
                        <img
                          src={product.image}
                          alt="Customer usage bottle"
                          className="w-9 h-9 object-contain filter brightness-[1.03] contrast-[1.05] grayscale-[20%] group-hover:scale-110 duration-500"
                        />
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-[8px] text-white font-extrabold uppercase bg-black/40 px-1 py-0.5 rounded">Zoom</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#F1EFEA] flex justify-between items-center">
                      <button
                        onClick={() => handleHelpfulClick(rev.name)}
                        disabled={hasVoted}
                        style={{
                          color: hasVoted ? "var(--active-product-primary)" : "#8C8C82"
                        }}
                        className="text-[9px] font-extrabold uppercase tracking-wider flex items-center gap-1.5 hover:text-[#1E1E1E] disabled:pointer-events-none duration-300 cursor-pointer outline-none"
                      >
                        <ShieldCheck className={`w-4 h-4 ${hasVoted ? "fill-[var(--active-product-soft)]" : ""}`} />
                        {hasVoted ? "Helpful voted" : "Was this helpful?"} ({currentHelpful})
                      </button>
                      <button
                        onClick={() => alert("Reported for review moderation.")}
                        className="text-[9px] font-extrabold uppercase tracking-wider text-[#C4C4BC] hover:text-red-500 duration-300 cursor-pointer"
                      >
                        Report
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* View All Reviews Toggle Button */}
            {sortedReviews.length > 3 && (
              <div className="pt-2 text-center">
                <button
                  onClick={() => setReviewsExpanded(!reviewsExpanded)}
                  className="px-6 py-3 border border-[#EBEAE6] bg-white text-[#1E1E1E] rounded-xl font-sans font-bold text-[10px] uppercase tracking-wider hover:bg-[#FAF9F5] active:scale-98 duration-300 cursor-pointer outline-none"
                >
                  {reviewsExpanded ? "Show Less Reviews" : "View All Reviews"}
                </button>
              </div>
            )}
          </section>

        </div>

        {/* ========================================== */}
        {/* RIGHT COLUMN: STICKY PANEL (40%)           */}
        {/* ========================================== */}
        <div className="lg:col-span-4 z-20">
          <div className="lg:sticky lg:top-28 lg:h-[calc(100vh-140px)] lg:max-h-[720px] flex flex-col bg-white border border-[#EBEAE6] rounded-[2.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.015)] overflow-hidden">

            {/* Scrollable details and selections area */}
            <div data-lenis-prevent className="flex-1 overflow-y-auto premium-card-scrollbar scroll-smooth p-6 sm:p-8 pb-4 space-y-6 pr-3">

              {/* Category & Title */}
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[var(--active-product-primary)] block">
                  {product.category}
                </span>
                <h2 className="font-lemon text-xl sm:text-2xl leading-none text-[#1E1E1E] uppercase tracking-wide">
                  {product.name}
                </h2>
                <p className="text-xs text-[#8C8C82] font-semibold tracking-wide italic">
                  {product.subtitle}
                </p>
              </div>

              {/* Stars rating panel */}
              <div className="flex items-center gap-2 border-b border-[#F1EFEA] pb-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-400" />)}
                </div>
                <span className="text-[10px] text-foundation-text-secondary font-bold">
                  {product.rating} ({product.reviewsCount} reviews)
                </span>
              </div>

              {/* Dynamic Price Display */}
              <div className="flex justify-between items-baseline">
                <div className="space-y-1">
                  <span className="text-3xl font-display font-extrabold text-[#1E1E1E]">
                    {formatPrice(activePrice)}
                  </span>
                  {isSubscription && (
                    <span className="text-[9px] font-bold text-emerald-600 block uppercase tracking-wider">
                      Saves 15% on subscriptions
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-semibold text-[#8C8C82] uppercase tracking-wider">
                  {product.format}
                </span>
              </div>

              {/* Subscription vs One-time toggle */}
              <div className="space-y-3">

                {/* One-time order card */}
                <label
                  style={{
                    borderColor: !isSubscription ? "var(--active-product-primary)" : "#EBEAE6",
                    backgroundColor: !isSubscription ? "var(--active-product-soft)" : "transparent"
                  }}
                  className="flex items-center justify-between p-4 rounded-2xl border cursor-pointer hover:bg-[#FAF9F5]/30 duration-300 relative group/opt select-none"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="purchase_option"
                      checked={!isSubscription}
                      onChange={() => setIsSubscription(false)}
                      className="w-4.5 h-4.5 text-[var(--active-product-primary)] focus:ring-0 cursor-pointer accent-[var(--active-product-primary)]"
                    />
                    <div>
                      <span className="text-xs font-bold text-[#1E1E1E] block">One-time Purchase</span>
                      <span className="text-[10px] text-[#8C8C82]">Standard single order delivery</span>
                    </div>
                  </div>
                  <span className="text-sm font-display font-bold text-[#1E1E1E]">
                    {formatPrice(oneTimePrice)}
                  </span>
                </label>

                {/* Subscription order card */}
                <label
                  style={{
                    borderColor: isSubscription ? "var(--active-product-primary)" : "#EBEAE6",
                    backgroundColor: isSubscription ? "var(--active-product-soft)" : "transparent"
                  }}
                  className="flex items-center justify-between p-4 rounded-2xl border cursor-pointer hover:bg-[#FAF9F5]/30 duration-300 relative group/opt select-none"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="purchase_option"
                      checked={isSubscription}
                      onChange={() => setIsSubscription(true)}
                      className="w-4.5 h-4.5 text-[var(--active-product-primary)] focus:ring-0 cursor-pointer accent-[var(--active-product-primary)]"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#1E1E1E] block">Subscribe & Save 15%</span>
                        <span className="bg-emerald-600 text-white font-sans text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-md">
                          Auto-Ship
                        </span>
                      </div>
                      <span className="text-[10px] text-[#8C8C82]">Cancel anytime, free delivery standard</span>
                    </div>
                  </div>
                  <span className="text-sm font-display font-bold text-emerald-600">
                    {formatPrice(subscriptionPrice)}
                  </span>
                </label>

                {/* Delivery Interval Select (visible only when subscribe is selected) */}
                {isSubscription && (
                  <div className="p-3 bg-[#FAF9F5] border border-[#EBEAE6] rounded-2xl space-y-2 animate-fade-in-up">
                    <label className="text-[9px] font-extrabold uppercase tracking-wider text-[#8C8C82] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[var(--active-product-primary)]" />
                      Delivery Frequency
                    </label>
                    <div className="relative">
                      <select
                        value={subscriptionInterval}
                        onChange={(e) => setSubscriptionInterval(e.target.value)}
                        className="w-full bg-white border border-[#EBEAE6] py-2 px-3 rounded-xl text-xs font-bold focus:outline-none focus:border-[var(--active-product-primary)] appearance-none cursor-pointer"
                      >
                        <option value="30">Deliver every 30 days (Recommended)</option>
                        <option value="45">Deliver every 45 days</option>
                        <option value="60">Deliver every 60 days</option>
                      </select>
                      <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#8C8C82] pointer-events-none" />
                    </div>
                  </div>
                )}

              </div>

              {/* Variant Selector (e.g. Size, only renders if variants are defined) */}
              {product.variants && product.variants.length > 1 && (
                <div className="space-y-2.5">
                  <label className="text-[9px] font-extrabold uppercase tracking-wider text-[#8C8C82] block">
                    Select Pack Size
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {product.variants.map((v, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleVariantChange(idx)}
                        style={{
                          borderColor: selectedVariant === idx ? "var(--active-product-primary)" : "#EBEAE6",
                          backgroundColor: selectedVariant === idx ? "var(--active-product-soft)" : "transparent"
                        }}
                        className="py-2.5 px-3 border rounded-xl text-center text-xs font-bold hover:bg-[#FAF9F5]/30 active:scale-95 duration-300 outline-none cursor-pointer"
                      >
                        <span className={selectedVariant === idx ? "text-[var(--active-product-primary)]" : "text-[#1E1E1E]"}>
                          {v.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Flavor Selector */}
              {product.flavors && product.flavors.length > 0 && (
                <div className="space-y-2.5">
                  <label className="text-[9px] font-extrabold uppercase tracking-wider text-[#8C8C82] block">
                    Choose Flavor
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.flavors.map((flv, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedFlavor(idx)}
                        style={{
                          borderColor: selectedFlavor === idx ? "var(--active-product-primary)" : "#EBEAE6",
                          backgroundColor: selectedFlavor === idx ? "var(--active-product-soft)" : "transparent"
                        }}
                        className="py-2 px-3.5 border rounded-full text-center text-[10px] font-bold uppercase tracking-wider hover:bg-[#FAF9F5]/30 active:scale-95 duration-300 outline-none cursor-pointer"
                      >
                        <span className={selectedFlavor === idx ? "text-[var(--active-product-primary)]" : "text-[#8C8C82]"}>
                          {flv}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Conversion trust elements directly above the checkout action buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2 pb-2 text-[8px] font-extrabold uppercase tracking-wider text-[#8C8C82] border-t border-[#F1EFEA]">
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Ships Within 24 Hours</span>
                </div>
                <div className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-[var(--active-product-primary)]" />
                  <span>Free Delivery Standard</span>
                </div>
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[var(--active-product-primary)]" />
                  <span>Secure Checkout Encryption</span>
                </div>
                <div className="flex items-center gap-1">
                  <RotateCcw className="w-3.5 h-3.5 text-[var(--active-product-accent)]" />
                  <span>30-Day Satisfaction Trial</span>
                </div>
              </div>

              {/* Micro-information accordion tabs (Shipping, returns, purity) */}
              <div className="border-t border-[#F1EFEA] pt-4 text-left">
                <div className="flex border-b border-[#F1EFEA] mb-3 text-[10px] font-bold uppercase tracking-wider">
                  {[
                    { id: "shipping", label: "Shipping" },
                    { id: "returns", label: "Returns" },
                    { id: "purity", label: "Assurance" }
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveTabInfo(t.id)}
                      className={`pb-2 pr-4 transition-colors duration-300 outline-none cursor-pointer ${activeTabInfo === t.id ? "text-[var(--active-product-primary)] border-b border-[var(--active-product-primary)]" : "text-[#8C8C82] hover:text-[#1E1E1E]"
                        }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
                <div className="text-[10px] text-[#5F6368] leading-relaxed animate-fade-in-up">
                  {activeTabInfo === "shipping" && (
                    <p className="flex items-start gap-2">
                      <Truck className="w-4.5 h-4.5 text-[var(--active-product-primary)] shrink-0 mt-0.5" />
                      <span>Free climate-controlled standard shipping on all subscriptions and orders over ₹3,000. Dispatched within 24 hours. Delivery takes 2-4 business days.</span>
                    </p>
                  )}
                  {activeTabInfo === "returns" && (
                    <p className="flex items-start gap-2">
                      <RotateCcw className="w-4.5 h-4.5 text-[var(--active-product-primary)] shrink-0 mt-0.5" />
                      <span>Our 30-day ritual trial ensures complete satisfaction. If a product does not suit your biology, return it for a full refund—no questions asked.</span>
                    </p>
                  )}
                  {activeTabInfo === "purity" && (
                    <p className="flex items-start gap-2">
                      <ShieldCheck className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>GMP Certified facility in California. Free from artificial fillers, soy, gluten, and GMOs. Third-party testing certification included in every box.</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Security Trust Badges */}
              <div className="bg-[#FAF9F5] border border-[#EBEAE6] p-3.5 rounded-2xl flex justify-around items-center text-[#8C8C82]">
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span className="text-[8px] font-bold uppercase tracking-wider text-[#1E1E1E]">SECURE CHECKOUT</span>
                </div>
                <div className="w-px h-6 bg-[#EBEAE6]" />
                <div className="flex flex-col items-center gap-1">
                  <Truck className="w-5 h-5 text-[var(--active-product-primary)]" />
                  <span className="text-[8px] font-bold uppercase tracking-wider text-[#1E1E1E]">FREE DISPATCH</span>
                </div>
                <div className="w-px h-6 bg-[#EBEAE6]" />
                <div className="flex flex-col items-center gap-1">
                  <RotateCcw className="w-5 h-5 text-[var(--active-product-accent)]" />
                  <span className="text-[8px] font-bold uppercase tracking-wider text-[#1E1E1E]">30-DAY TRIAL</span>
                </div>
              </div>

            </div>

            {/* Sticky Action Footer Pinned to Bottom */}
            <div className="flex-shrink-0 border-t border-[#F1EFEA] p-6 sm:p-8 pt-4 bg-white space-y-4">

              {/* Quantity Selector & Add to Cart Container */}
              <div className="flex items-center gap-4">

                {/* Quantity Adjuster */}
                <div className="flex items-center border border-[#EBEAE6] rounded-xl bg-[#FAF9F5]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-[#8C8C82] hover:text-[#1E1E1E] active:scale-75 duration-300 cursor-pointer outline-none"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-[#1E1E1E] select-none">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-[#8C8C82] hover:text-[#1E1E1E] active:scale-75 duration-300 cursor-pointer outline-none"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className="flex-1 bg-[#1E1E1E] text-white py-3.5 px-6 rounded-xl font-sans font-bold text-[11px] uppercase tracking-[0.15em] hover:bg-[var(--active-product-primary)] active:scale-98 disabled:opacity-50 transition-all duration-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer outline-none"
                >
                  {isAdding ? "Securing Saturation..." : "Add to CART "}
                </button>
              </div>

              {/* Direct Buy Now button */}
              <button
                onClick={() => {
                  alert("Proceeding to checkout with " + quantity + "x " + product.name + " (" + (isSubscription ? "Subscription" : "One-time") + ")");
                }}
                style={{
                  backgroundColor: "var(--active-product-primary)"
                }}
                className="w-full text-white py-3.5 px-6 rounded-xl font-sans font-bold text-[11px] uppercase tracking-[0.15em] hover:brightness-110 active:scale-98 transition-all duration-300 shadow-lg shadow-[var(--active-product-accent)]/20 text-center cursor-pointer outline-none"
              >
                Express Checkout
              </button>

            </div>

          </div>
        </div>

      </div>

      {/* Frequently Bought Together: Build Your Daily Ritual */}
      {rec1 && rec2 && (
        <section id="bundle-ritual" className="max-w-[1500px] mx-auto px-6 md:px-12 mt-16 md:mt-24 mb-12">
          <div className="bg-white border border-[#EBEAE6] rounded-[24px] shadow-[0_30px_70px_rgba(0,0,0,0.015)] p-6 sm:p-8 space-y-8">
            
            {/* Header / Title Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#F1EFEA] pb-6">
              <div className="space-y-1.5 text-left">
                <h3 className="font-lemon text-lg sm:text-xl tracking-wide text-[#1E1E1E]">
                  Build Your Daily Ritual
                </h3>
                <p className="text-xs text-[#8C8C82] font-semibold tracking-wide italic">
                  Expertly paired products designed to work together.
                </p>
              </div>
              
              {/* Scientific trust indicators */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[9px] font-extrabold uppercase tracking-widest text-[#5F6368]">
                <span className="flex items-center gap-1.5 text-[var(--active-product-primary)]">
                  <Check className="w-3.5 h-3.5 stroke-[3] text-emerald-600" /> Works Better Together
                </span>
                <span className="flex items-center gap-1.5 text-[var(--active-product-primary)]">
                  <Check className="w-3.5 h-3.5 stroke-[3] text-emerald-600" /> Expert Recommended
                </span>
                <span className="flex items-center gap-1.5 text-[var(--active-product-primary)]">
                  <Check className="w-3.5 h-3.5 stroke-[3] text-emerald-600" /> Daily Wellness Stack
                </span>
              </div>
            </div>

            {/* Main Content Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Bundle Flow Area (Col Span 8) */}
              <div className="lg:col-span-8 flex flex-col md:flex-row items-center justify-between gap-4">
                
                {/* Current Product Card */}
                <div className="w-full md:w-[30%] flex flex-col items-center bg-[#FAF9F5]/50 border border-[#ECEBE8]/80 p-5 rounded-2xl relative select-none">
                  <div className="w-24 h-24 flex items-center justify-center mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="h-full object-contain filter contrast-[1.03] drop-shadow-[0_10px_20px_rgba(0,0,0,0.06)]" 
                    />
                  </div>
                  <span className="text-[8px] font-black uppercase tracking-wider text-[var(--active-product-primary)] bg-[var(--active-product-soft)] px-2.5 py-0.5 rounded-md mb-2">
                    {product.category}
                  </span>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wide text-[#1E1E1E] text-center line-clamp-1">
                    {product.name}
                  </h4>
                  <p className="text-[9px] text-[#8C8C82] text-center font-medium mt-1 line-clamp-1 italic">
                    {getBenefitLabel(productKey)}
                  </p>
                  
                  {/* Prices & Savings */}
                  <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
                    <span className="text-xs font-black text-[#1E1E1E]">{formatPrice(mainOriginalPrice * 0.9)}</span>
                    <span className="text-[10px] text-[#8C8C82] line-through">{formatPrice(mainOriginalPrice)}</span>
                    <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      Save {formatPrice(mainSavings)}
                    </span>
                  </div>

                  {/* Checked & Disabled Checkbox */}
                  <div className="absolute top-4 right-4">
                    <input 
                      type="checkbox" 
                      checked 
                      disabled 
                      className="w-4.5 h-4.5 rounded text-[var(--active-product-primary)] border-[#EBEAE6] focus:ring-0 accent-[var(--active-product-primary)] opacity-60 cursor-not-allowed" 
                    />
                  </div>
                </div>

                {/* Plus connector */}
                <div className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#EBEAE6] shadow-sm text-neutral-400 shrink-0">
                  <Plus className="w-4.5 h-4.5" />
                </div>
                <div className="flex md:hidden items-center justify-center w-8 h-8 rounded-full bg-white border border-[#EBEAE6] shadow-sm text-neutral-400 my-1">
                  <Plus className="w-3.5 h-3.5" />
                </div>

                {/* Recommended Product 1 Card */}
                <div 
                  onClick={() => setSelectedBundleItems([!selectedBundleItems[0], selectedBundleItems[1]])}
                  className={`w-full md:w-[30%] flex flex-col items-center bg-white border p-5 rounded-2xl relative select-none cursor-pointer duration-300 transition-all ${
                    selectedBundleItems[0] 
                      ? "border-[var(--active-product-primary)] bg-[var(--active-product-soft)]/20 shadow-[0_10px_25px_rgba(0,0,0,0.02)]" 
                      : "border-[#ECEBE8]/80 hover:border-neutral-400 bg-white"
                  }`}
                >
                  <a 
                    href={`#product/${rec1.id}`} 
                    onClick={(e) => e.stopPropagation()}
                    className="w-24 h-24 flex items-center justify-center mb-4 hover:scale-[1.03] transition-transform duration-300"
                  >
                    <img 
                      src={rec1.image} 
                      alt={rec1.name} 
                      className="h-full object-contain filter contrast-[1.03] drop-shadow-[0_10px_20px_rgba(0,0,0,0.06)]" 
                    />
                  </a>
                  <span className="text-[8px] font-black uppercase tracking-wider text-[var(--active-product-primary)] bg-[var(--active-product-soft)] px-2.5 py-0.5 rounded-md mb-2">
                    {rec1.category}
                  </span>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wide text-[#1E1E1E] text-center line-clamp-1">
                    <a 
                      href={`#product/${rec1.id}`} 
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-[var(--active-product-primary)] transition-colors duration-300"
                    >
                      {rec1.name}
                    </a>
                  </h4>
                  <p className="text-[9px] text-[#8C8C82] text-center font-medium mt-1 line-clamp-1 italic">
                    {getBenefitLabel(rec1.id)}
                  </p>
                  
                  {/* Prices & Savings */}
                  <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
                    <span className="text-xs font-black text-[#1E1E1E]">{formatPrice(rec1OriginalPrice * 0.9)}</span>
                    <span className="text-[10px] text-[#8C8C82] line-through">{formatPrice(rec1OriginalPrice)}</span>
                    <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      Save {formatPrice(rec1Savings)}
                    </span>
                  </div>

                  {/* Toggle Checkbox */}
                  <div className="absolute top-4 right-4" onClick={(e) => e.stopPropagation()}>
                    <input 
                      type="checkbox" 
                      checked={selectedBundleItems[0]} 
                      onChange={() => setSelectedBundleItems([!selectedBundleItems[0], selectedBundleItems[1]])}
                      className="w-4.5 h-4.5 rounded border-[#EBEAE6] text-[var(--active-product-primary)] focus:ring-0 accent-[var(--active-product-primary)] cursor-pointer" 
                    />
                  </div>
                </div>

                {/* Plus connector */}
                <div className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#EBEAE6] shadow-sm text-neutral-400 shrink-0">
                  <Plus className="w-4.5 h-4.5" />
                </div>
                <div className="flex md:hidden items-center justify-center w-8 h-8 rounded-full bg-white border border-[#EBEAE6] shadow-sm text-neutral-400 my-1">
                  <Plus className="w-3.5 h-3.5" />
                </div>

                {/* Recommended Product 2 Card */}
                <div 
                  onClick={() => setSelectedBundleItems([selectedBundleItems[0], !selectedBundleItems[1]])}
                  className={`w-full md:w-[30%] flex flex-col items-center bg-white border p-5 rounded-2xl relative select-none cursor-pointer duration-300 transition-all ${
                    selectedBundleItems[1] 
                      ? "border-[var(--active-product-primary)] bg-[var(--active-product-soft)]/20 shadow-[0_10px_25px_rgba(0,0,0,0.02)]" 
                      : "border-[#ECEBE8]/80 hover:border-neutral-400 bg-white"
                  }`}
                >
                  <a 
                    href={`#product/${rec2.id}`} 
                    onClick={(e) => e.stopPropagation()}
                    className="w-24 h-24 flex items-center justify-center mb-4 hover:scale-[1.03] transition-transform duration-300"
                  >
                    <img 
                      src={rec2.image} 
                      alt={rec2.name} 
                      className="h-full object-contain filter contrast-[1.03] drop-shadow-[0_10px_20px_rgba(0,0,0,0.06)]" 
                    />
                  </a>
                  <span className="text-[8px] font-black uppercase tracking-wider text-[var(--active-product-primary)] bg-[var(--active-product-soft)] px-2.5 py-0.5 rounded-md mb-2">
                    {rec2.category}
                  </span>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wide text-[#1E1E1E] text-center line-clamp-1">
                    <a 
                      href={`#product/${rec2.id}`} 
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-[var(--active-product-primary)] transition-colors duration-300"
                    >
                      {rec2.name}
                    </a>
                  </h4>
                  <p className="text-[9px] text-[#8C8C82] text-center font-medium mt-1 line-clamp-1 italic">
                    {getBenefitLabel(rec2.id)}
                  </p>
                  
                  {/* Prices & Savings */}
                  <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
                    <span className="text-xs font-black text-[#1E1E1E]">{formatPrice(rec2OriginalPrice * 0.9)}</span>
                    <span className="text-[10px] text-[#8C8C82] line-through">{formatPrice(rec2OriginalPrice)}</span>
                    <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      Save {formatPrice(rec2Savings)}
                    </span>
                  </div>

                  {/* Toggle Checkbox */}
                  <div className="absolute top-4 right-4" onClick={(e) => e.stopPropagation()}>
                    <input 
                      type="checkbox" 
                      checked={selectedBundleItems[1]} 
                      onChange={() => setSelectedBundleItems([selectedBundleItems[0], !selectedBundleItems[1]])}
                      className="w-4.5 h-4.5 rounded border-[#EBEAE6] text-[var(--active-product-primary)] focus:ring-0 accent-[var(--active-product-primary)] cursor-pointer" 
                    />
                  </div>
                </div>

              </div>

              {/* Bundle Summary block (Col Span 4) */}
              <div className="lg:col-span-4 bg-[#FAF9F5] border border-[#ECEBE8]/80 rounded-2xl p-6 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-4">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#8C8C82] block border-b border-[#ECEBE8] pb-2">
                    Stack Summary
                  </span>
                  
                  <div className="space-y-2.5">
                    <div className="flex justify-between text-xs text-[#5F6368] font-medium">
                      <span>Combined Retail</span>
                      <span className="font-bold text-[#1E1E1E]">{formatPrice(combinedRetail)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-emerald-600 font-bold">
                      <span>Stack Savings (10%)</span>
                      <span>-{formatPrice(totalSavings)}</span>
                    </div>
                    
                    <div className="border-t border-[#ECEBE8] pt-4 flex justify-between items-baseline">
                      <span className="text-xs font-extrabold text-[#1E1E1E] uppercase tracking-wider">Final Total</span>
                      <span className="text-2xl font-display font-black text-[var(--active-product-primary)]">
                        {formatPrice(bundleTotal)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Add to Daily Ritual CTA */}
                <button
                  onClick={handleAddBundleToCart}
                  disabled={bundleAdding}
                  style={{
                    backgroundColor: "var(--active-product-primary)"
                  }}
                  className="w-full text-white py-3.5 rounded-xl font-sans font-bold text-[11px] uppercase tracking-[0.15em] hover:brightness-105 active:scale-98 disabled:opacity-50 transition-all duration-300 shadow-lg shadow-[var(--active-product-accent)]/10 flex items-center justify-center gap-2 cursor-pointer outline-none"
                >
                  {bundleAdding ? "Securing Stack..." : (selectedBundleItems[0] && selectedBundleItems[1] ? "Add Complete Stack" : "Add Selected Stack")}
                </button>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* Bundle Success Toast */}
      {bundleToast && (
        <div className="fixed bottom-8 right-8 z-50 animate-fade-in-up">
          <div className="bg-[#1E1E1E] text-white px-6 py-4 rounded-full shadow-[0_15px_45px_rgba(0,0,0,0.18)] flex items-center gap-3 border border-white/10 backdrop-blur-md bg-opacity-95">
            <div className="w-8 h-8 rounded-full bg-[var(--active-product-soft)] text-[var(--active-product-primary)] flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <div className="text-xs font-semibold tracking-wide">
              Added <span className="text-[var(--active-product-primary)] font-bold">{getAddedItemsText()}</span> to your daily ritual.
            </div>
          </div>
        </div>
      )}

      {/* Adding to cart success toast notification */}
      {addedToast && (
        <div className="fixed bottom-8 right-8 z-50 animate-fade-in-up">
          <div className="bg-[#1E1E1E] text-white px-6 py-4 rounded-full shadow-[0_15px_45px_rgba(0,0,0,0.18)] flex items-center gap-3 border border-white/10 backdrop-blur-md bg-opacity-95">
            <div className="w-8 h-8 rounded-full bg-[var(--active-product-soft)] text-[var(--active-product-primary)] flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <div className="text-xs font-semibold tracking-wide">
              Added <span className="text-[var(--active-product-primary)] font-bold">{quantity}x</span> {product.name} ({product.variants[selectedVariant]?.name || product.format}) to your daily ritual.
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
