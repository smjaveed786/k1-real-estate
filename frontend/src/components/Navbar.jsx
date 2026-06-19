import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-[#0A0A0B]/90 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-12 lg:px-24 py-5 flex items-center justify-between">
        <a
          href="#home"
          data-testid={NAV.logo}
          onClick={() => handleNavClick("#home")}
          className="flex flex-col cursor-pointer"
        >
          <span
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-2xl font-medium tracking-widest text-[#D4AF37] leading-none"
          >
            K1
          </span>
          <span className="text-[9px] tracking-[0.25em] uppercase text-[#A1A1AA] leading-none mt-0.5">
            Real Estate & Marketing
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm tracking-wide text-[#A1A1AA] hover:text-[#D4AF37] transition-colors duration-300"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNavClick("#contact")}
          data-testid={NAV.contactCta}
          className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-[#D4AF37] text-black text-sm font-semibold tracking-wider uppercase hover:bg-white transition-colors duration-300"
        >
          <Phone size={14} />
          Get In Touch
        </button>

        <button
          data-testid={NAV.menuToggle}
          className="md:hidden text-[#FAFAFA] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden backdrop-blur-2xl bg-[#0A0A0B]/95 border-t border-white/10 px-6 py-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-base text-[#A1A1AA] hover:text-[#D4AF37] transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleNavClick("#contact")}
            className="mt-6 w-full py-3 bg-[#D4AF37] text-black font-semibold tracking-wider uppercase text-sm"
          >
            Get In Touch
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
