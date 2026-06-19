import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Properties Sold" },
  { value: "1000+", label: "Happy Clients" },
  { value: "50+", label: "Active Listings" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#0A0A0B]" ref={ref}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37] mb-4">
            About Us
          </p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[#FAFAFA] mb-6"
          >
            Building Dreams,
            <br />
            <span className="italic">One Property at a Time</span>
          </h2>
          <p className="text-base text-[#A1A1AA] leading-relaxed mb-5">
            K1 Real Estate and Marketing has been a cornerstone of the property market, delivering exceptional real estate experiences to buyers, sellers, and investors. We combine deep market knowledge with personalized service.
          </p>
          <p className="text-base text-[#A1A1AA] leading-relaxed mb-10">
            From residential villas to commercial spaces, our team is committed to making every transaction seamless, transparent, and rewarding. We're not just selling properties — we're building futures.
          </p>

          <a
            href="https://www.google.com/search?q=K1+Real+Estate+Marketing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#D4AF37] text-[#D4AF37] text-sm font-medium tracking-wider uppercase hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
          >
            View on Google Business
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="relative overflow-hidden h-72 lg:h-80">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=85"
              alt="K1 Real Estate professional team"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/60 to-transparent" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="bg-[#121214] border border-white/5 p-5"
              >
                <p
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-3xl font-light text-[#D4AF37] mb-1"
                >
                  {s.value}
                </p>
                <p className="text-xs tracking-[0.1em] uppercase text-[#71717A]">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
