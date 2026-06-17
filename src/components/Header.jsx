import React, { useState, useEffect } from "react";
import { User, ShoppingBag, Menu, X, ArrowRight } from "lucide-react";
import logoImg from "../assets/Body Cafe Co logo Black.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [cartCount, setCartCount] = useState(2); // Demo cart state

  // Navigation Links
  const navLinks = [
    { name: "Home", href: "#home", id: "nav-link-home", mobileId: "mobile-nav-link-home" },
    { name: "Shop", href: "#shop", id: "nav-link-shop", mobileId: "mobile-nav-link-shop" },
    { name: "Learn", href: "#learn", id: "nav-link-learn", mobileId: "mobile-nav-link-learn" },
    { name: "About Us", href: "#about", id: "nav-link-about", mobileId: "mobile-nav-link-about" },
  ];

  // Scroll handler to apply sticky glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "py-2.5 bg-foundation-bg/80 backdrop-blur-xl border-b border-foundation-border/30 shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
            : "py-3 md:py-4 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between relative">
          
          {/* Left: Large Prominent Logo Section */}
          <div className="flex-1 flex justify-start z-50">
            <a
              href="#home"
              id="header-logo"
              className="group focus:outline-none inline-block py-1"
              onClick={() => {
                setActiveLink("Home");
                setIsMobileMenuOpen(false);
              }}
            >
              <img 
                src={logoImg} 
                alt="BODY CAFÉ CO." 
                className={`w-auto object-contain transition-all duration-500 transform group-hover:scale-[1.02] origin-left ${
                  isScrolled ? "h-8 md:h-9" : "h-10 md:h-14"
                }`}
              />
            </a>
          </div>

          {/* Center: Perfectly Centered Desktop Navigation Links */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-12">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <a
                  key={link.name}
                  id={link.id}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`group relative font-sans text-[11px] md:text-xs font-bold tracking-[0.16em] uppercase py-2 transition-colors duration-300 outline-none ${
                    isActive ? "text-beetroot-primary" : "text-foundation-text hover:text-beetroot-primary"
                  }`}
                >
                  {link.name}
                  {/* Premium Dot Indicator */}
                  <span
                    className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-current transition-all duration-500 ease-out ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right: Minimal Modern Profile & Cart Icons */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <button
              id="btn-profile"
              aria-label="User profile"
              className={`p-2 rounded-full transition-all duration-300 hover:scale-105 text-foundation-text hover:text-beetroot-primary`}
            >
              <User className="w-5 h-5" strokeWidth={1.75} />
            </button>

            <button
              id="btn-cart"
              aria-label="Shopping cart"
              className={`p-2 rounded-full transition-all duration-300 hover:scale-105 relative text-foundation-text hover:text-beetroot-primary`}
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.75} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-beetroot-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm border-2 border-transparent">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="btn-mobile-toggle"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
              className={`md:hidden p-2 rounded-full transition-all duration-300 text-foundation-text`}
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

      {/* Full screen Mobile Menu Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 z-40 bg-foundation-bg/98 backdrop-blur-2xl transition-all duration-500 ease-in-out md:hidden flex flex-col justify-between p-8 pt-36 ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute top-1/4 -left-12 w-64 h-64 rounded-full bg-saffron-primary/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-12 w-72 h-72 rounded-full bg-beetroot-primary/10 blur-3xl pointer-events-none"></div>

        <nav className="flex flex-col gap-8 text-center mt-6">
          {navLinks.map((link, idx) => {
            const isActive = activeLink === link.name;
            return (
              <a
                key={link.name}
                id={link.mobileId}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-4xl font-display font-medium tracking-tight transition-all duration-300 inline-block ${
                  isActive ? "text-beetroot-primary scale-105" : "text-foundation-text"
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="w-full max-w-sm mx-auto z-10 mb-8 flex flex-col items-center gap-6">
          <div className="flex gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-beetroot-primary"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-saffron-primary"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-ltheanine-primary"></span>
          </div>
          <button
            id="btn-mobile-shop-cta"
            className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-foundation-text text-white font-sans font-medium hover:bg-beetroot-primary transition-colors shadow-lg group"
            onClick={() => {
              setActiveLink("Shop");
              setIsMobileMenuOpen(false);
            }}
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </>
  );
}
