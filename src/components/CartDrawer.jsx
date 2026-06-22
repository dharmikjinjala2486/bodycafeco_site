import React, { useEffect, useState } from "react";
import {
  X, Minus, Plus, Trash2, ShieldCheck, Award, Lock, Truck,
  ChevronRight, Sparkles, Check, ShoppingBag, ArrowRight
} from "lucide-react";
import { PRODUCT_DATA } from "./ProductDetail";

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onAddItem,
  toastText,
  onClearToast
}) {
  const [mounted, setMounted] = useState(false);

  // Manage visibility transition state
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      const timer = setTimeout(() => setMounted(false), 300);
      document.body.style.overflow = "";
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted && !isOpen) return null;

  // Formatting helper for currency (USD base * 80 = INR)
  const formatPrice = (priceInUSD) => {
    return "₹" + Math.round(priceInUSD * 80).toLocaleString("en-IN");
  };

  // Math calculations
  const subtotal = cart.reduce((total, item) => total + (item.oneTimePrice * item.quantity), 0);

  // 15% savings for subscription items
  const subscriptionSavings = cart.reduce((total, item) => {
    if (item.isSubscription) {
      return total + (item.oneTimePrice * 0.15 * item.quantity);
    }
    return total;
  }, 0);

  // 10% bundle savings if cart contains 3 or more distinct products
  const distinctProductCount = new Set(cart.map(item => item.id)).size;
  const bundleTarget = 3;
  const isBundleQualified = distinctProductCount >= bundleTarget;
  const bundleSavings = cart.reduce((total, item) => {
    // If the cart qualifies for bundle savings, apply 10% discount on non-subscription items
    if (isBundleQualified && !item.isSubscription) {
      return total + (item.oneTimePrice * 0.10 * item.quantity);
    }
    return total;
  }, 0);

  // Free shipping progress logic (₹1,200 threshold)
  const freeShippingThreshold = 15; // 15 USD = ₹1,200 INR
  const discountedSubtotal = subtotal - subscriptionSavings - bundleSavings;
  const shippingCost = discountedSubtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 1.875; // 1.875 USD = ₹150 INR
  const finalTotal = discountedSubtotal + shippingCost;

  const shippingProgress = Math.min(100, (discountedSubtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - discountedSubtotal);

  // Upsell logic based on cart items
  const getUpsellRecommendations = () => {
    if (cart.length === 0) {
      return ["creatine", "omega-3"];
    }
    const cartIds = cart.map((item) => item.id);
    const recMap = {
      creatine: ["omega-3", "vit-d3-k2"],
      "omega-3": ["vit-d3-k2", "magnesium"],
      "vit-d3-k2": ["omega-3", "multivitamin"],
      saffron: ["l-theanine", "magnesium"],
      beetroot: ["creatine", "omega-3"],
      berberine: ["omega-3", "vit-d3-k2"],
      iron: ["vit-d3-k2", "multivitamin"],
      "myo-inositol": ["vit-d3-k2", "omega-3"],
      "l-theanine": ["saffron", "magnesium"],
      magnesium: ["l-theanine", "vit-d3-k2"],
      multivitamin: ["omega-3", "magnesium"]
    };

    let candidates = [];
    cartIds.forEach((id) => {
      if (recMap[id]) {
        candidates.push(...recMap[id]);
      }
    });

    let uniqueCandidates = Array.from(new Set(candidates)).filter(
      (id) => !cartIds.includes(id)
    );

    const defaults = ["creatine", "omega-3", "vit-d3-k2", "magnesium", "multivitamin"];
    for (let defId of defaults) {
      if (uniqueCandidates.length >= 2) break;
      if (!cartIds.includes(defId) && !uniqueCandidates.includes(defId)) {
        uniqueCandidates.push(defId);
      }
    }

    return uniqueCandidates.slice(0, 2);
  };

  const upsellIds = getUpsellRecommendations();

  const getBenefitBadges = (id) => {
    switch (id) {
      case "creatine": return ["ATP Hydration", "Power Output"];
      case "omega-3": return ["Heart Health", "Brain Function"];
      case "vit-d3-k2": return ["Bone Health", "Immune Support"];
      case "saffron": return ["Calm Mind", "Mood Support"];
      case "beetroot": return ["Nitric Oxide", "Endurance"];
      case "berberine": return ["AMPK Activator", "Metabolic Health"];
      case "iron": return ["Oxygen Flow", "Cell Energy"];
      case "myo-inositol": return ["Hormonal Harmony", "Ovarian Support"];
      case "l-theanine": return ["Alpha Waves", "Flow State"];
      case "magnesium": return ["Muscle Recovery", "Deep Sleep"];
      case "multivitamin": return ["Daily Vitality", "Immune Defense"];
      default: return ["Daily Wellness", "Purity Standard"];
    }
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

  const handleAddUpsell = (productId) => {
    const product = PRODUCT_DATA[productId];
    if (!product) return;

    // Add upsell as a standard one-time purchase
    const itemToAdd = {
      id: product.id,
      name: product.name,
      variant: product.variants[0]?.name || product.format,
      flavor: product.flavors[0] || "",
      oneTimePrice: product.price,
      price: product.price,
      quantity: 1,
      image: product.image,
      isSubscription: false,
    };
    onAddItem(itemToAdd, false);
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Backdrop overlay with blur */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/35 backdrop-blur-[10px] pointer-events-auto transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
          }`}
      />

      {/* Drawer content panel */}
      <div
        className={`fixed right-0 top-0 bottom-0 h-full w-full sm:w-[440px] bg-[#FAF9F5] shadow-[0_0_50px_rgba(0,0,0,0.15)] flex flex-col pointer-events-auto transition-transform duration-300 ease-out z-50
          max-sm:bottom-0 max-sm:top-auto max-sm:h-[85vh] max-sm:rounded-t-[24px] max-sm:translate-x-0 ${isOpen
            ? "translate-x-0 max-sm:translate-y-0"
            : "translate-x-full max-sm:translate-y-full"
          }`}
      >
        {/* Fine background details */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#2E5F73]/5 blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#9B2D3A]/5 blur-3xl pointer-events-none -z-10" />

        {/* 1. Header Section */}
        <div className="flex-shrink-0 px-6 py-5 border-b border-[#EBEAE6] bg-white flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0F766E]" />
            <h3 className="font-display font-bold text-sm tracking-widest text-[#1E1E1E] uppercase">
              RITUAL BAG
            </h3>
            <span className="bg-[#EEF3F5] text-[#2E5F73] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-[#2E5F73]/10">
              {cart.reduce((sum, item) => sum + item.quantity, 0)} Items
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-[#EBEAE6] flex items-center justify-center text-[#8C8C82] hover:text-[#1E1E1E] hover:border-[#1E1E1E] active:scale-90 transition-all duration-300 outline-none cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Success toast notification inside drawer */}
        {toastText && (
          <div className="bg-emerald-50 border-b border-emerald-100 px-6 py-3 flex items-center justify-between text-xs font-bold text-emerald-800 animate-[fadeInUp_0.3s_cubic-bezier(0.16,1,0.3,1)_forwards] z-20">
            <div className="flex items-center gap-2">
              <div className="w-4.5 h-4.5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">
                ✓
              </div>
              <span>{toastText}</span>
            </div>
            <button
              onClick={onClearToast}
              className="text-emerald-500 hover:text-emerald-800 font-extrabold cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}

        <div
          data-lenis-prevent
          className="flex-1 overflow-y-auto px-6 py-5 space-y-6 premium-card-scrollbar"
        >
          {cart.length === 0 ? (
            /* Premium Empty State */
            <div className="text-center py-20 px-6 space-y-6 bg-white border border-[#EBEAE6] rounded-3xl shadow-sm relative overflow-hidden my-auto flex flex-col justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F5]/30 to-transparent pointer-events-none" />
              <div className="mx-auto w-24 h-24 text-[#0F766E]/20 flex items-center justify-center relative">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-float">
                  {/* Bottle cap */}
                  <rect x="28" y="16" width="24" height="6" rx="2" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.5" />
                  {/* Bottle body */}
                  <path d="M22 28C22 24.6863 24.6863 22 28 22H52C55.3137 22 58 24.6863 58 28V62C58 65.3137 55.3137 68 52 68H28C24.6863 68 22 65.3137 22 62V28Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Label */}
                  <rect x="28" y="32" width="24" height="20" rx="1" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
                  {/* Apothecary leaf detail */}
                  <path d="M40 38C40 38 43 41 43 43C43 45 41.5 46 40 46C38.5 46 37 45 37 43C37 41 40 38 40 38Z" fill="currentColor" fillOpacity="0.6" stroke="currentColor" strokeWidth="1" />
                  {/* Floating Wellness Leaf */}
                  <path d="M54 14C49.5 14 46.5 18.5 46.5 23C46.5 27.5 51 29 55.5 26C60 23 60 17 60 14C55.5 14 54 14 54 14Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M46.5 23C51 21.5 55.5 18.5 60 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-[#1E1E1E] tracking-tight">Your Ritual Bag Is Empty</h4>
                <p className="text-xs text-[#8C8C82] max-w-[260px] mx-auto leading-relaxed font-medium">
                  Start building your daily wellness ritual.
                </p>
              </div>
              <button
                onClick={onClose}
                className="bg-[#1E1E1E] hover:bg-[#0F766E] text-white text-[10px] font-bold uppercase tracking-widest px-8 py-3.5 rounded-full transition-all duration-300 outline-none cursor-pointer hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow"
              >
                Explore Products
              </button>
            </div>
          ) : (
            <>
              {/* 1. Free Shipping Tracker */}
              <div className="bg-white p-5 rounded-2xl border border-[#EBEAE6] shadow-[0_4px_20px_rgba(0,0,0,0.015)] space-y-3.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  {remainingForFreeShipping > 0 ? (
                    <p className="text-[#1E1E1E]">
                      <span className="text-[#0F766E]">{formatPrice(remainingForFreeShipping)}</span> away from Free Shipping
                    </p>
                  ) : (
                    <p className="text-emerald-600 flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px]">
                      <Check className="w-3.5 h-3.5 bg-emerald-600 text-white rounded-full p-0.5" />
                      Free Shipping Unlocked
                    </p>
                  )}
                  {remainingForFreeShipping > 0 && (
                    <span className="text-[#8C8C82] text-[10px]">
                      {formatPrice(discountedSubtotal)} / {formatPrice(freeShippingThreshold)}
                    </span>
                  )}
                </div>

                <div className="w-full h-2 bg-[#FAF9F5] border border-[#EBEAE6] rounded-full overflow-hidden relative">
                  <div
                    style={{ width: `${shippingProgress}%` }}
                    className={`h-full rounded-full transition-all duration-700 ease-out-quad ${remainingForFreeShipping === 0
                        ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
                        : "bg-[#0F766E]"
                      }`}
                  />
                </div>

                {remainingForFreeShipping === 0 && (
                  <div className="flex justify-between items-center text-[10px] font-bold border-t border-[#FAF9F5] pt-2">
                    <span className="text-[#8C8C82]">
                      {formatPrice(discountedSubtotal)} / {formatPrice(freeShippingThreshold)}
                    </span>
                    <span className="text-emerald-600 font-extrabold flex items-center gap-1">
                      Estimated delivery: <span className="underline">Tomorrow</span>
                    </span>
                  </div>
                )}
              </div>

              {/* 2. Cart Items List */}
              <div className="space-y-4">
                {cart.map((item, idx) => (
                  <div
                    key={`${item.id}-${item.variant}-${item.flavor}-${item.isSubscription}`}
                    className="bg-white rounded-2xl border border-[#EBEAE6] p-4.5 flex gap-4 hover:shadow-md transition-all duration-300 group"
                  >
                    {/* Product Image Frame */}
                    <div className="w-24 h-24 bg-[#FAF9F5] border border-[#EBEAE6] rounded-xl flex items-center justify-center p-2 shrink-0 relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain filter contrast-[1.02] drop-shadow-sm select-none"
                      />
                      {item.isSubscription && (
                        <span className="absolute bottom-0 left-0 right-0 bg-[#0F766E] text-white text-[8px] font-extrabold text-center py-0.5 tracking-wider uppercase">
                          Ritual
                        </span>
                      )}
                    </div>

                    {/* Product Content Details */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div className="flex justify-between items-start gap-3">
                        <div className="min-w-0">
                          <h4 className="font-display font-bold text-xs tracking-tight text-[#1E1E1E]">
                            {item.name}
                          </h4>

                          <div className="flex flex-wrap gap-1.5 mt-1.5">
                            <span className="text-[8px] font-extrabold uppercase tracking-wider text-[#8C8C82] bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#EBEAE6]">
                              {item.variant}
                            </span>
                            {item.flavor && (
                              <span className="text-[8px] font-extrabold uppercase tracking-wider text-[#8C8C82] bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#EBEAE6]">
                                {item.flavor}
                              </span>
                            )}
                          </div>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id, item.variant, item.flavor, item.isSubscription)}
                          className="text-[#8C8C82] hover:text-[#9B2D3A] p-1.5 cursor-pointer transition-colors duration-300 hover:bg-[#9B2D3A]/5 rounded-full"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-end justify-between mt-4 pt-3.5 border-t border-[#FAF9F5]">
                        {/* Quantity Selector */}
                        <div className="flex items-center border border-[#EBEAE6] rounded-lg bg-[#FAF9F5] p-0.5">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.variant, item.flavor, item.isSubscription, -1)}
                            className="w-7 h-7 flex items-center justify-center rounded-md text-[#8C8C82] hover:text-[#1E1E1E] hover:bg-white active:scale-90 transition-all duration-200 cursor-pointer outline-none"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center text-[10px] font-extrabold text-[#1E1E1E] select-none">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.variant, item.flavor, item.isSubscription, 1)}
                            className="w-7 h-7 flex items-center justify-center rounded-md text-[#8C8C82] hover:text-[#1E1E1E] hover:bg-white active:scale-90 transition-all duration-200 cursor-pointer outline-none"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Pricing Tag */}
                        <div className="text-right">
                          {item.isSubscription && (
                            <div className="text-[8px] font-bold text-emerald-600 line-through tracking-wider uppercase mb-0.5">
                              {formatPrice(item.oneTimePrice * item.quantity)}
                            </div>
                          )}
                          <span className="font-display font-extrabold text-sm text-[#1E1E1E] transition-all duration-300">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 3. Order Summary Calculation */}
              <div className="bg-white p-5 rounded-2xl border border-[#EBEAE6] space-y-3 shadow-[0_4px_20px_rgba(0,0,0,0.015)]">
                <h4 className="font-display font-bold text-[10px] uppercase tracking-widest text-[#1E1E1E] border-b border-[#FAF9F5] pb-2">
                  Order Summary
                </h4>

                <div className="space-y-2 text-xs font-semibold text-[#8C8C82]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-[#1E1E1E]">{formatPrice(subtotal)}</span>
                  </div>

                  {bundleSavings > 0 && (
                    <div className="flex justify-between text-emerald-600 font-bold">
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Bundle Savings (10%)
                      </span>
                      <span>-{formatPrice(bundleSavings)}</span>
                    </div>
                  )}

                  {subscriptionSavings > 0 && (
                    <div className="flex justify-between text-emerald-600 font-bold">
                      <span>Subscription Savings (15%)</span>
                      <span>-{formatPrice(subscriptionSavings)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className={shippingCost === 0 ? "text-emerald-600 font-bold" : "text-[#1E1E1E]"}>
                      {shippingCost === 0 ? "FREE" : formatPrice(shippingCost)}
                    </span>
                  </div>

                  <div className="border-t border-[#FAF9F5] pt-3.5 flex justify-between items-baseline">
                    <span className="text-xs font-extrabold text-[#1E1E1E] uppercase tracking-wider">
                      Total
                    </span>
                    <span className="text-2xl font-display font-black text-[#1E1E1E]">
                      {formatPrice(finalTotal)}
                    </span>
                  </div>
                </div>
              </div>

              {/* 4. Subscription Highlight Banner */}
              {subscriptionSavings > 0 && (
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex items-center gap-3.5 shadow-[0_2px_10px_rgba(16,185,129,0.04)] animate-[fadeInUp_0.3s_ease_forwards]">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-extrabold text-[#1E1E1E] block uppercase tracking-wider">
                      Ritual Savings Active
                    </span>
                    <span className="text-xs text-emerald-700 font-medium block">
                      You save <span className="font-extrabold text-emerald-800">{formatPrice(subscriptionSavings)}</span> every month
                    </span>
                  </div>
                </div>
              )}

              {/* 5. Ritual Bundle Incentive */}
              <div className="bg-[#FAF9F5] p-5 rounded-2xl border border-[#EBEAE6] space-y-3.5 shadow-sm">
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-[10px] uppercase tracking-widest text-[#1E1E1E] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#0F766E]" />
                    Build Your Complete Ritual
                  </h4>
                  <p className="text-[11px] text-[#5F6368] font-medium leading-relaxed">
                    {distinctProductCount >= bundleTarget ? (
                      <span className="text-emerald-600 font-bold">✓ 10% Ritual Bundle Savings Unlocked!</span>
                    ) : (
                      <span>
                        Add <span className="font-bold text-[#1E1E1E]">{bundleTarget - distinctProductCount}</span> more product{bundleTarget - distinctProductCount > 1 ? "s" : ""} and unlock <span className="font-bold text-[#0F766E]">10% Ritual Bundle Savings</span>
                      </span>
                    )}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="w-full h-1.5 bg-white border border-[#EBEAE6] rounded-full overflow-hidden relative">
                    <div
                      style={{ width: `${Math.min(100, (distinctProductCount / bundleTarget) * 100)}%` }}
                      className={`h-full rounded-full transition-all duration-500 ease-out ${distinctProductCount >= bundleTarget
                          ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
                          : "bg-[#0F766E]"
                        }`}
                    />
                  </div>
                  <div className="flex justify-between items-center text-[9px] font-bold text-[#8C8C82]">
                    <span>{distinctProductCount} / {bundleTarget} Products Added</span>
                    {distinctProductCount >= bundleTarget && <span className="text-emerald-600 font-extrabold uppercase">10% Off Applied</span>}
                  </div>
                </div>
              </div>

              {/* 6. Complete Your Ritual (Intelligent Upsells) */}
              {upsellIds.length > 0 && (
                <div className="space-y-3.5">
                  <h4 className="font-display font-bold text-[10px] uppercase tracking-widest text-[#1E1E1E] flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#0F766E]" />
                    Complete Your Ritual
                  </h4>

                  <div className="grid grid-cols-1 gap-3">
                    {upsellIds.map((upsellId) => {
                      const upsell = PRODUCT_DATA[upsellId];
                      if (!upsell) return null;

                      return (
                        <div
                          key={upsell.id}
                          className="bg-white rounded-2xl border border-[#EBEAE6] p-3 flex items-center justify-between gap-3 shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:border-[#2E5F73]/30 transition-colors duration-300"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            {/* Image */}
                            <div className="w-14 h-14 bg-[#FAF9F5] border border-[#EBEAE6] rounded-xl flex items-center justify-center p-1.5 shrink-0">
                              <img
                                src={upsell.image}
                                alt={upsell.name}
                                className="w-full h-full object-contain filter contrast-[1.02]"
                              />
                            </div>

                            {/* Details */}
                            <div className="min-w-0 space-y-1">
                              <h5 className="font-display font-bold text-[11px] text-[#1E1E1E] leading-tight truncate">
                                {upsell.name}
                              </h5>
                              
                              {/* Benefit Pills */}
                              <div className="flex gap-1 flex-wrap">
                                {getBenefitBadges(upsell.id).map((badge, idx) => (
                                  <span key={idx} className="text-[8px] font-bold text-[#0F766E] bg-[#EEF3F5] px-1.5 py-0.5 rounded-full border border-[#0F766E]/5">
                                    {badge}
                                  </span>
                                ))}
                              </div>

                              <span className="font-sans font-bold text-[10px] text-[#1E1E1E] block">
                                {formatPrice(upsell.price)}
                              </span>
                            </div>
                          </div>

                          {/* Add Button */}
                          <button
                            onClick={() => handleAddUpsell(upsell.id)}
                            className="bg-[#FAF9F5] hover:bg-[#1E1E1E] hover:text-white border border-[#EBEAE6] hover:border-transparent text-[#1E1E1E] text-[9px] font-bold uppercase tracking-widest px-3 py-2 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer outline-none shrink-0"
                          >
                            + Add To Ritual
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 7. Trust Badges Section */}
              <div className="bg-[#FAF9F5] rounded-2xl border border-[#EBEAE6] p-4.5 grid grid-cols-2 gap-3.5">
                <div className="flex gap-2.5 items-start">
                  <Check className="w-3.5 h-3.5 text-[#0F766E] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-extrabold text-[#1E1E1E] block uppercase tracking-wider">GMP Certified</span>
                    <span className="text-[8px] text-[#8C8C82] block leading-tight">Elite manufacturing standards</span>
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0F766E] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-extrabold text-[#1E1E1E] block uppercase tracking-wider">Third-Party Tested</span>
                    <span className="text-[8px] text-[#8C8C82] block leading-tight">100% verified potency</span>
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <Lock className="w-3.5 h-3.5 text-[#0F766E] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-extrabold text-[#1E1E1E] block uppercase tracking-wider">Secure Checkout</span>
                    <span className="text-[8px] text-[#8C8C82] block leading-tight">256-bit SSL encryption</span>
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <Truck className="w-3.5 h-3.5 text-[#0F766E] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-extrabold text-[#1E1E1E] block uppercase tracking-wider">Fast Delivery</span>
                    <span className="text-[8px] text-[#8C8C82] block leading-tight">Ships within 24 hours</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Sticky Footer CTA - Only shown when cart has items */}
        {cart.length > 0 && (
          <div className="flex-shrink-0 p-6 border-t border-[#EBEAE6] bg-white shadow-[0_-8px_30px_rgba(0,0,0,0.06)] z-10 flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-[9px] uppercase font-bold tracking-widest text-[#8C8C82]">Total Amount</span>
              <span className="text-xl font-display font-black text-[#1E1E1E] leading-tight">
                {formatPrice(finalTotal)}
              </span>
            </div>

            <button
              onClick={() => {
                alert(`Proceeding to checkout with total: ${formatPrice(finalTotal)}`);
              }}
              className="flex-1 bg-[#1E1E1E] hover:bg-[#0F766E] text-white py-4 px-6 rounded-xl font-sans font-bold text-[10px] uppercase tracking-[0.16em] active:scale-[0.98] transition-all duration-300 shadow-sm hover:shadow flex items-center justify-center gap-1.5 cursor-pointer outline-none"
            >
              <span>Proceed To Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
