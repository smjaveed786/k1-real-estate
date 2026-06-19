import { MapPin, Phone, Clock, ExternalLink, Instagram, Facebook } from "lucide-react";
import { useColors } from "@/context/ThemeContext";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Listings", href: "#listings" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const c = useColors();
  const handleNavClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={`${c.bgFoot} border-t ${c.border2C} transition-colors duration-500`}>
      <div className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-5">
              <span style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl font-medium tracking-widest text-[#D4AF37]">K1</span>
              <span className={`text-[10px] tracking-[0.25em] uppercase ml-2 ${c.textM}`}>Real Estate & Marketing</span>
            </div>
            <p className={`text-sm leading-relaxed max-w-xs mb-2 ${c.textM}`}>
              Trusted property consultants in Guntur, Andhra Pradesh. Plots, homes & commercial spaces.
            </p>
            <p className={`text-xs mb-6 ${c.textM}`}>KBN | Since 2018 | 4.9★ Google Rating</p>
            <div className="flex gap-4">
              <a href="https://www.google.com/maps/search/?api=1&query=K1+Real+Estate+Marketing+%28%40kbn%29&query_place_id=ChIJib6s_OULSjoRundCpbAYxvw"
                target="_blank" rel="noopener noreferrer"
                className={`w-9 h-9 ${c.bg3} border ${c.borderC} flex items-center justify-center ${c.textM} hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300`}
                aria-label="Google Business">
                <ExternalLink size={15} />
              </a>
              <a href="#" className={`w-9 h-9 ${c.bg3} border ${c.borderC} flex items-center justify-center ${c.textM} hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300`} aria-label="Instagram">
                <Instagram size={15} />
              </a>
              <a href="#" className={`w-9 h-9 ${c.bg3} border ${c.borderC} flex items-center justify-center ${c.textM} hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300`} aria-label="Facebook">
                <Facebook size={15} />
              </a>
              <a href="https://wa.me/919392140148" target="_blank" rel="noopener noreferrer"
                className={`w-9 h-9 bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/30 transition-all duration-300`}
                aria-label="WhatsApp">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className={`text-xs tracking-[0.2em] uppercase mb-6 ${c.textB}`}>Quick Links</p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button onClick={() => handleNavClick(link.href)}
                    className={`text-sm hover:text-[#D4AF37] transition-colors ${c.textM}`}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={`text-xs tracking-[0.2em] uppercase mb-6 ${c.textB}`}>Contact Info</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span className={`text-sm ${c.textM}`}>Hussain Nagar 1st Line, Guntur–Ponnur Rd, Guntur, AP 522003</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <a href="tel:+919392140148" className={`text-sm hover:text-[#D4AF37] transition-colors ${c.textM}`}>+91 93921 40148</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span className={`text-sm ${c.textM}`}>Mon – Sun: 9:00 AM – 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={`max-w-6xl mx-auto mt-12 pt-8 border-t ${c.border2C} flex flex-col sm:flex-row items-center justify-between gap-4`}>
          <p className={`text-xs ${c.textM}`}>
            &copy; {new Date().getFullYear()} K1 Real Estate & Marketing (KBN). All rights reserved. | Guntur, Andhra Pradesh
          </p>
          <a href="/admin" className={`text-xs ${c.textM} opacity-40 hover:opacity-100 transition-opacity`}>Admin</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
