import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HERO } from "@/constants/testIds";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToListings = () => {
    document.querySelector("#listings")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end pb-24 overflow-hidden"
      ref={ref}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=85')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/50 to-black/30 z-10" />

      <div className="relative z-20 w-full px-6 md:px-12 lg:px-24 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37] mb-6"
        >
          Premier Real Estate & Marketing
        </motion.p>

        <motion.h1
          data-testid={HERO.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tighter leading-none text-[#FAFAFA] mb-6"
        >
          K1 Real Estate
          <br />
          <span className="italic text-[#D4AF37]">&amp; Marketing</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg text-[#A1A1AA] max-w-xl mb-10 leading-relaxed"
        >
          Private homes &amp; commercial spaces for clients who expect excellence. Trusted expertise in every transaction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-wrap gap-4"
        >
          <button
            data-testid={HERO.exploreBtn}
            onClick={scrollToListings}
            className="px-8 py-4 bg-[#D4AF37] text-black font-semibold tracking-wide text-sm uppercase hover:bg-white transition-colors duration-300"
          >
            Explore Listings
          </button>
          <button
            data-testid={HERO.contactBtn}
            onClick={scrollToContact}
            className="px-8 py-4 bg-transparent border border-white/30 text-white font-medium tracking-wide text-sm uppercase hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
          >
            Contact Us
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#71717A]"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
