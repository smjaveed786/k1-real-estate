import { MapPin, Phone, Mail, ExternalLink, Instagram, Facebook } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Listings", href: "#listings" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080808] border-t border-white/5">
      <div className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-5">
              <span
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl font-medium tracking-widest text-[#D4AF37]"
              >
                K1
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#71717A] ml-2">
                Real Estate & Marketing
              </span>
            </div>
            <p className="text-sm text-[#71717A] leading-relaxed max-w-xs mb-6">
              Your trusted partner for premium real estate transactions and marketing solutions. Building dreams, one property at a time.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.google.com/search?q=K1+Real+Estate+Marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1A1A1D] border border-white/5 flex items-center justify-center text-[#71717A] hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300"
                aria-label="Google Business"
              >
                <ExternalLink size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#1A1A1D] border border-white/5 flex items-center justify-center text-[#71717A] hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#1A1A1D] border border-white/5 flex items-center justify-center text-[#71717A] hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#A1A1AA] mb-6">Quick Links</p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-[#71717A] hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#A1A1AA] mb-6">Contact Info</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#71717A]">K1 Real Estate & Marketing</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#71717A]">Contact via Google Business</span>
              </li>
              <li className="flex items-start gap-3">
                <ExternalLink size={15} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.google.com/search?q=K1+Real+Estate+Marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#71717A] hover:text-[#D4AF37] transition-colors"
                >
                  K1 Real Estate Marketing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#71717A]">
            &copy; {new Date().getFullYear()} K1 Real Estate & Marketing. All rights reserved.
          </p>
          <a
            href="/admin"
            className="text-xs text-[#71717A]/40 hover:text-[#71717A] transition-colors"
          >
            Admin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
