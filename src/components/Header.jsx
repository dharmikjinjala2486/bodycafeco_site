import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { User, ShoppingBag, Menu, X, ArrowRight } from "lucide-react";
import logoImg from "../assets/Body Cafe Co logo Black.png";
import logoWhite from "../assets/Body Cafe Co logo white.svg";

export default function Header({ cartCount, onCartOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Derive theme from current route
  const isProductPage = location.pathname.startsWith("/product");
  const isShopPage = location.pathname === "/shop";
  const isDarkBg = isProductPage || isShopPage;
  // On home page, use scroll-based dynamic theming; on other pages always light
  const [scrollTheme, setScrollTheme] = useState("light");

  // Active route detection
  const getActiveLink = () => {
    if (location.pathname === "/") return "Home";
    if (location.pathname === "/shop") return "Shop";
    if (location.pathname === "/learn") return "Learn";
    if (location.pathname === "/about") return "About Us";
    if (location.pathname.startsWith("/product")) return "";
    return "";
  };
  const activeLink = getActiveLink();

  // Navigation Links
  const navLinks = [
    { name: "Home", to: "/", id: "nav-link-home", mobileId: "mobile-nav-link-home" },
    { name: "Shop", to: "/shop", id: "nav-link-shop", mobileId: "mobile-nav-link-shop" },
    { name: "Learn", to: "/learn", id: "nav-link-learn", mobileId: "mobile-nav-link-learn" },
    { name: "About Us", to: "/about", id: "nav-link-about", mobileId: "mobile-nav-link-about" },
  ];

  // Header scroll-based theme (only used on home page)
  useEffect(() => {
    if (location.pathname !== "/") {
      setScrollTheme("light");
      return;
    }
    const handleThemeChange = (e) => {
      if (e.detail && e.detail.theme) setScrollTheme(e.detail.theme);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const t = entry.target.getAttribute("data-header-theme");
            if (t) setScrollTheme(t);
          }
        });
      },
      { rootMargin: "-80px 0px -90% 0px", threshold: 0 }
    );
    const sections = document.querySelectorAll("[data-header-theme]");
    sections.forEach((s) => observer.observe(s));
    window.addEventListener("header-theme-change", handleThemeChange);
    return () => {
      sections.forEach((s) => observer.unobserve(s));
      window.removeEventListener("header-theme-change", handleThemeChange);
    };
  }, [location.pathname]);

  // Active theme: product/shop pages force "light" header; home page uses dynamic scroll theme
  const theme = location.pathname === "/" ? scrollTheme : "light";

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Prevent scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
          ? theme === "dark"
            ? "py-2.5 bg-black/20 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
            : "py-2.5 bg-white/20 backdrop-blur-xl border-b border-foundation-border/10 shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
          : "py-3 md:py-4 bg-transparent"
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between relative">

          {/* Logo — pointer-events-none on wrapper, auto on the link itself */}
          <div className="flex-1 flex justify-start relative z-20 pointer-events-none">
            <Link
              to="/"
              id="header-logo"
              className="group focus:outline-none inline-block py-1 pointer-events-auto"
            >
              <div className={`relative transition-all duration-500 ${isScrolled ? "h-14 md:h-16" : "h-10 md:h-14"}`}>
                <img
                  src={logoImg}
                  alt="BODY CAFÉ CO."
                  className={`h-full w-auto object-contain transition-all duration-500 transform group-hover:scale-[1.02] origin-left ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
                />
                <img
                  src={logoWhite}
                  alt="BODY CAFÉ CO."
                  className={`absolute inset-0 h-full w-auto object-contain transition-all duration-500 transform group-hover:scale-[1.02] origin-left ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
                />
              </div>
            </Link>
          </div>

          {/* Desktop Nav — z-30 so it sits above the flex-1 siblings */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-12 z-30">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              const linkColorClass = theme === "dark"
                ? (isActive ? "text-saffron-primary" : "text-white/80 hover:text-saffron-primary")
                : (isActive ? "text-beetroot-primary" : "text-foundation-text hover:text-beetroot-primary");
              return (
                <Link
                  key={link.name}
                  id={link.id}
                  to={link.to}
                  className={`group relative font-sans text-[11px] md:text-xs font-bold tracking-[0.16em] uppercase py-2 transition-colors duration-300 outline-none ${linkColorClass}`}
                >
                  {link.name}
                  {/* Active dot indicator */}
                  <span
                    className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-current transition-all duration-500 ease-out ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"}`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right icons — pointer-events-none on wrapper, auto on each button */}
          <div className="flex-1 flex justify-end items-center gap-4 relative z-20 pointer-events-none">
            <button
              id="btn-profile"
              aria-label="User profile"
              className={`pointer-events-auto p-2 rounded-full transition-all duration-300 hover:scale-105 ${theme === "dark" ? "text-white/80 hover:text-saffron-primary" : "text-foundation-text hover:text-beetroot-primary"}`}
            >
              <User className="w-5 h-5" strokeWidth={1.75} />
            </button>

            <button
              id="btn-cart"
              aria-label="Shopping cart"
              onClick={onCartOpen}
              className={`pointer-events-auto p-2 rounded-full transition-all duration-300 hover:scale-105 relative ${theme === "dark" ? "text-white/80 hover:text-saffron-primary" : "text-foundation-text hover:text-beetroot-primary"}`}
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.75} />
              {cartCount > 0 && (
                <span
                  key={cartCount}
                  className="absolute top-0 right-0 w-4 h-4 text-[9px] font-extrabold rounded-full flex items-center justify-center shadow-sm border border-white bg-[#0F766E] text-white animate-pop-in"
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              id="btn-mobile-toggle"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
              className={`pointer-events-auto md:hidden p-2 rounded-full transition-all duration-300 ${theme === "dark" ? "text-white/80" : "text-foundation-text"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={1.5} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 z-40 bg-foundation-bg/98 backdrop-blur-2xl transition-all duration-500 ease-in-out md:hidden flex flex-col justify-between p-8 pt-36 ${isMobileMenuOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        <div className="absolute top-1/4 -left-12 w-64 h-64 rounded-full bg-saffron-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-12 w-72 h-72 rounded-full bg-beetroot-primary/10 blur-3xl pointer-events-none" />

        <nav className="flex flex-col gap-8 text-center mt-6">
          {navLinks.map((link, idx) => {
            const isActive = activeLink === link.name;
            return (
              <Link
                key={link.name}
                id={link.mobileId}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-4xl font-display font-medium tracking-tight transition-all duration-300 inline-block ${isActive ? "text-beetroot-primary scale-105" : "text-foundation-text"}`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="w-full max-w-sm mx-auto z-10 mb-8 flex flex-col items-center gap-6">
          <div className="flex gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-beetroot-primary" />
            <span className="w-1.5 h-1.5 rounded-full bg-saffron-primary" />
            <span className="w-1.5 h-1.5 rounded-full bg-ltheanine-primary" />
          </div>
          <Link
            id="btn-mobile-shop-cta"
            to="/shop"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-foundation-text text-white font-sans font-medium hover:bg-beetroot-primary transition-colors shadow-lg group"
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </>
  );
}
