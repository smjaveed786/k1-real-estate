import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useColors } from "@/context/ThemeContext";

const stats = [
  { value: "4.9★", label: "Google Rating" },
  { value: "500+", label: "Properties Sold" },
  { value: "1000+", label: "Happy Clients" },
  { value: "9AM–8PM", label: "Open Daily" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const c = useColors();

  return (
    <section id="about" className={`py-24 md:py-32 px-6 md:px-12 lg:px-24 ${c.bg} transition-colors duration-500`} ref={ref}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={`text-xs font-semibold tracking-[0.25em] uppercase mb-4 ${c.overline}`}>About Us</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }}
            className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight mb-6 ${c.textH}`}>
            Building Dreams,
            <br /><span className="italic">One Property at a Time</span>
          </h2>
          <p className={`text-base leading-relaxed mb-4 ${c.textB}`}>
            K1 Real Estate Marketing (KBN) is a trusted property consultant based in Guntur, Andhra Pradesh. From the heart of Hussain Nagar, we serve buyers and sellers across Guntur, Budampadu, Ponnur Road, and the NH-16 corridor.
          </p>
          <p className={`text-base leading-relaxed mb-4 ${c.textB}`}>
            We specialize in plots, agricultural lands, residential homes, and commercial spaces — with deep local expertise and a commitment to transparent, honest service.
          </p>
          <p className={`text-sm leading-relaxed mb-10 ${c.textM}`}>
            Hussain Nagar 1st Line, Guntur–Ponnur Rd, Guntur, Andhra Pradesh 522003
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=K1+Real+Estate+Marketing+%28%40kbn%29&query_place_id=ChIJib6s_OULSjoRundCpbAYxvw"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#D4AF37] text-[#D4AF37] text-sm font-medium tracking-wider uppercase hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
          >
            View on Google Maps
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="relative overflow-hidden h-72 lg:h-80">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=85"
              alt="K1 Real Estate professional team Guntur"
              className={`w-full h-full object-cover transition-all duration-700 hover:grayscale-0 ${c.isDark ? "grayscale" : ""}`}
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${c.isDark ? "from-[#0A0A0B]/60" : "from-white/40"} to-transparent`} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className={`${c.cardBg} border ${c.borderC} p-5 transition-colors duration-500`}
              >
                <p style={{ fontFamily: "'Playfair Display', serif" }}
                  className={`text-3xl font-light mb-1 ${c.textA}`}>{s.value}</p>
                <p className={`text-xs tracking-[0.1em] uppercase ${c.textM}`}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
