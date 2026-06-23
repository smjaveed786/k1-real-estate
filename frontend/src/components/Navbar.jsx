import { useState, useEffect } from "react";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { NAV } from "@/constants/testIds";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Listings", href: "#listings" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navBg = scrolled
    ? isDark
      ? "backdrop-blur-2xl bg-[#0A0A0B]/90 border-b border-white/10"
      : "backdrop-blur-2xl bg-white/90 border-b border-black/10 shadow-sm"
    : "bg-transparent";

  // If it's light theme, text must be dark even before scrolling because the sky background is bright.
  const textCol = isDark ? "text-[#FAFAFA]" : "text-[#1A1A1D]";
  const mobileMenuBg = isDark ? "bg-[#0A0A0B]/97 border-white/10" : "bg-white/97 border-black/10";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="px-6 md:px-12 lg:px-24 py-5 flex items-center justify-between">
        <a
          href="#home"
          data-testid={NAV.logo}
          onClick={() => handleNavClick("#home")}
          className="flex flex-col items-center justify-center cursor-pointer scale-95 origin-left"
        >
          <div className="flex items-center text-4xl font-bold font-sans tracking-tighter mb-0.5">
            <span className="text-[#F97316]">K</span>
            <span className={isDark ? "text-white" : "text-[#0F172A]"}>1</span>
          </div>
          <span className={`text-[11px] font-black tracking-widest uppercase leading-none ${isDark ? "text-white" : "text-[#0F172A]"}`}>
            Real Estate
          </span>
          <div className="flex items-center gap-1 mt-1">
            <span className={`w-3 h-[1px] ${isDark ? "bg-white/50" : "bg-black/30"}`}></span>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#F97316] leading-none">
              Marketing
            </span>
            <span className={`w-3 h-[1px] ${isDark ? "bg-white/50" : "bg-black/30"}`}></span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button onClick={() => handleNavClick(link.href)}
                className={`text-sm font-semibold tracking-wide hover:text-[var(--accent-light)] transition-colors duration-300 ${textCol}`}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggle}
            data-testid="theme-toggle-btn"
            className={`w-10 h-10 flex items-center justify-center border transition-all duration-300 ${
              isDark
                ? "border-white/20 text-[#A1A1AA] hover:border-[var(--accent-light)] hover:text-[var(--accent-light)]"
                : "border-black/20 text-[#4A4A50] hover:border-[var(--accent-dark)] hover:text-[var(--accent-dark)]"
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => handleNavClick("#contact")}
            data-testid={NAV.contactCta}
            className="flex items-center gap-2 px-6 py-2.5 bg-[var(--accent-light)] text-black text-sm font-semibold tracking-wider uppercase hover:bg-white transition-colors duration-300">
            <Phone size={14} />
            Get In Touch
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button onClick={toggle} data-testid="theme-toggle-mobile"
            className={`p-2 ${isDark ? "text-[#A1A1AA]" : "text-[#4A4A50]"}`}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button data-testid={NAV.menuToggle}
            className={`p-1 ${isDark ? "text-[#FAFAFA]" : "text-[#1A1A1D]"}`}
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={`md:hidden backdrop-blur-2xl border-t px-6 py-6 ${mobileMenuBg}`}>
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button onClick={() => handleNavClick(link.href)}
                  className={`text-base hover:text-[var(--accent-light)] transition-colors ${textCol}`}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => handleNavClick("#contact")}
            className="mt-6 w-full py-3 bg-[var(--accent-light)] text-black font-semibold tracking-wider uppercase text-sm">
            Get In Touch
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
