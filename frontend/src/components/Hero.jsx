import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { HERO } from "@/constants/testIds";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { isDark } = useTheme();

  const scrollToListings = () => document.querySelector("#listings")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact  = () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  const overlay = isDark
    ? "bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/55 to-black/30"
    : "bg-gradient-to-t from-white/95 via-white/50 to-white/20";

  return (
    <section id="home" className="relative min-h-screen flex items-end pb-24 overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=85')" }}
      />
      <div className={`absolute inset-0 ${overlay} z-10`} />

      <div className="relative z-20 w-full px-6 md:px-12 lg:px-24 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37] mb-6"
        >
          Premier Real Estate & Marketing — Guntur, Andhra Pradesh
        </motion.p>

        <motion.h1
          data-testid={HERO.heading}
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "'Playfair Display', serif" }}
          className={`text-5xl sm:text-6xl lg:text-7xl font-light tracking-tighter leading-none mb-6 ${isDark ? "text-[#FAFAFA]" : "text-[#1A1A1D]"}`}
        >
          K1 Real Estate
          <br />
          <span className="italic text-[#D4AF37]">&amp; Marketing</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className={`text-lg max-w-xl mb-10 leading-relaxed ${isDark ? "text-[#A1A1AA]" : "text-[#4A4A50]"}`}
        >
          Trusted property consultants in Guntur, Andhra Pradesh. Plots, lands &amp; apartments — with excellence in every deal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-wrap gap-4"
        >
          <button
            data-testid={HERO.exploreBtn} onClick={scrollToListings}
            className="px-8 py-4 bg-[#D4AF37] text-black font-semibold tracking-wide text-sm uppercase hover:bg-white transition-colors duration-300"
          >
            Explore Listings
          </button>
          <button
            data-testid={HERO.contactBtn} onClick={scrollToContact}
            className={`px-8 py-4 bg-transparent border text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37] ${
              isDark ? "border-white/30 text-white" : "border-[#1A1A1D]/30 text-[#1A1A1D]"
            }`}
          >
            Contact Us
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 flex items-center gap-3"
        >
          <a
            href="https://wa.me/919392140148?text=Hi%2C%20I%27m%20interested%20in%20a%20property%20from%20K1%20Real%20Estate%20Marketing"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 bg-[#25D366] text-white text-sm font-medium hover:bg-[#1ebe5d] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp Us
          </a>
          <a
            href="tel:+919392140148"
            className="flex items-center gap-2 px-5 py-2 border border-[#D4AF37]/50 text-[#D4AF37] text-sm font-medium hover:bg-[#D4AF37] hover:text-black transition-all"
          >
            +91 93921 40148
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#71717A]"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
