import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import CartDrawer from "./components/CartDrawer";
import { ArrowRight } from "lucide-react";
import logoWhite from "./assets/Body Cafe Co logo white.svg";
import Lenis from "lenis";
import creatineImg from "./assets/Product Images/Creatine Monohydrate (Micronized).png";
import omegaImg from "./assets/Product Images/Fish Oil.png";

// Pages
import HomePage from "./pages/HomePage";
import ShopPageRoute from "./pages/ShopPageRoute";
import ProductPageRoute from "./pages/ProductPageRoute";
import LearnPage from "./pages/LearnPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  const [cart, setCart] = useState([
    {
      id: "creatine",
      name: "Creatine Monohydrate",
      variant: "300g (60 Servings)",
      flavor: "Unflavored",
      oneTimePrice: 49.00,
      price: 49.00,
      quantity: 1,
      image: creatineImg,
      isSubscription: false,
    },
    {
      id: "omega-3",
      name: "Omega-3 Fish Oil",
      variant: "90 Softgels (30-day Supply)",
      flavor: "Organic Orange Zest Oil",
      oneTimePrice: 39.00,
      price: 39.00,
      quantity: 1,
      image: omegaImg,
      isSubscription: false,
    }
  ]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastTimeoutId, setToastTimeoutId] = useState(null);

  const handleAddItem = (item, isBundle = false) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(
        (x) =>
          x.id === item.id &&
          x.variant === item.variant &&
          x.flavor === item.flavor &&
          x.isSubscription === item.isSubscription
      );
      if (existingIdx > -1) {
        const newCart = [...prevCart];
        newCart[existingIdx].quantity += item.quantity;
        return newCart;
      } else {
        return [...prevCart, item];
      }
    });

    setToastText(isBundle ? "✓ Added To Daily Ritual" : `✓ Added To Cart: ${item.name}`);
    if (toastTimeoutId) clearTimeout(toastTimeoutId);
    const timeoutId = setTimeout(() => setToastText(""), 3000);
    setToastTimeoutId(timeoutId);
    setCartOpen(true);
  };

  const handleAddMultipleItems = (items, isBundle = true) => {
    setCart((prevCart) => {
      let newCart = [...prevCart];
      items.forEach((item) => {
        const existingIdx = newCart.findIndex(
          (x) =>
            x.id === item.id &&
            x.variant === item.variant &&
            x.flavor === item.flavor &&
            x.isSubscription === item.isSubscription
        );
        if (existingIdx > -1) {
          newCart[existingIdx].quantity += item.quantity;
        } else {
          newCart.push(item);
        }
      });
      return newCart;
    });

    setToastText(isBundle ? "✓ Added To Daily Ritual" : "✓ Added To Cart");
    if (toastTimeoutId) clearTimeout(toastTimeoutId);
    const timeoutId = setTimeout(() => setToastText(""), 3000);
    setToastTimeoutId(timeoutId);
    setCartOpen(true);
  };

  const handleUpdateQuantity = (id, variant, flavor, isSubscription, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (
          item.id === id &&
          item.variant === variant &&
          item.flavor === flavor &&
          item.isSubscription === isSubscription
        ) {
          return { ...item, quantity: Math.max(1, item.quantity + delta) };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (id, variant, flavor, isSubscription) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(
            item.id === id &&
            item.variant === variant &&
            item.flavor === flavor &&
            item.isSubscription === isSubscription
          )
      )
    );
  };

  // Lenis smooth scroll — re-initialised on mount only
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-foundation-bg text-foundation-text relative selection:bg-beetroot-primary selection:text-white">
      {/* Sticky Header — always rendered */}
      <Header
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
      />

      {/* Page Router */}
      <Routes>
        <Route
          path="/"
          element={<HomePage onAddRitual={handleAddItem} />}
        />
        <Route
          path="/shop"
          element={
            <ShopPageRoute
              onAddRitual={handleAddItem}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductPageRoute
              onAddRitual={(itemsOrItem, isBundle) => {
                if (Array.isArray(itemsOrItem)) {
                  handleAddMultipleItems(itemsOrItem, isBundle);
                } else if (itemsOrItem && typeof itemsOrItem === "object") {
                  handleAddItem(itemsOrItem, isBundle);
                }
              }}
            />
          }
        />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      {/* Footer — always rendered */}
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
              <li><Link to="/product/creatine" className="hover:text-beetroot-primary transition-colors">Creatine Monohydrate</Link></li>
              <li><Link to="/product/omega-3" className="hover:text-beetroot-primary transition-colors">Omega-3 Fish Oil</Link></li>
              <li><Link to="/product/vit-d3-k2" className="hover:text-beetroot-primary transition-colors">Vitamin D3 + K2</Link></li>
              <li><Link to="/product/saffron" className="hover:text-beetroot-primary transition-colors">Affron Saffron Extract</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">Company</h5>
            <ul className="space-y-2 text-xs text-foundation-disabled">
              <li><Link to="/about" className="hover:text-beetroot-primary transition-colors">About Our Brand</Link></li>
              <li><Link to="/learn" className="hover:text-beetroot-primary transition-colors">Scientific Ingredient Standard</Link></li>
              <li><Link to="/about" className="hover:text-beetroot-primary transition-colors">Sustainability Code</Link></li>
              <li><Link to="/learn" className="hover:text-beetroot-primary transition-colors">Wellness Journal</Link></li>
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

      {/* Global Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onAddItem={(item, isBundle) => handleAddItem(item, isBundle)}
        toastText={toastText}
        onClearToast={() => setToastText("")}
      />
    </div>
  );
}
