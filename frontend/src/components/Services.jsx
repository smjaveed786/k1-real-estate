import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Home, Building2, BarChart3, Headphones } from "lucide-react";
import { useColors } from "@/context/ThemeContext";

const services = [
  {
    icon: <Home size={28} />,
    title: "Residential Sales",
    description: "Expert guidance for buying and selling homes, villas, and apartments at the best market value in Guntur and surrounding areas.",
  },
  {
    icon: <Building2 size={28} />,
    title: "Plots & Lands",
    description: "Agricultural plots, NA lands, and residential layouts near Budampadu, Ponnur Road, NH-16 corridor, and Guntur city.",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Real Estate Marketing",
    description: "Strategic marketing campaigns that maximize property visibility and attract the right buyers for maximum value.",
  },
  {
    icon: <Headphones size={28} />,
    title: "Property Consultation",
    description: "End-to-end advisory from valuation to legal documentation and registration, with honest and transparent guidance.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const c = useColors();

  return (
    <section id="services" className={`py-24 md:py-32 px-6 md:px-12 lg:px-24 ${c.bg2} transition-colors duration-500`} ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-16">
          <p className={`text-xs font-semibold tracking-[0.25em] uppercase mb-4 ${c.overline}`}>What We Offer</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }}
            className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight ${c.textH}`}>
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div key={service.title}
              initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              data-testid={`service-card-${i}`}
              className={`group ${c.bg3} border ${c.borderC} p-8 hover:border-[var(--accent-light)]/40 transition-all duration-500 hover:-translate-y-2`}
            >
              <div className={`mb-6 group-hover:scale-110 transition-transform duration-300 ${c.textA}`}>{service.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif" }} className={`text-xl font-medium mb-3 ${c.textH}`}>{service.title}</h3>
              <p className={`text-sm leading-relaxed ${c.textM}`}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
