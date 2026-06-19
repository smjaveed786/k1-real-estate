import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, BedDouble, Maximize, ExternalLink } from "lucide-react";
import { LISTINGS } from "@/constants/testIds";

const listings = [
  {
    id: 1,
    title: "Verdant Hills Villa",
    type: "Residential Villa",
    bedrooms: 4,
    area: "3200 sq.ft",
    price: "₹2.5 Crore",
    location: "Prime Locality",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    tag: "Featured",
  },
  {
    id: 2,
    title: "Metro Heights",
    type: "Luxury Apartment",
    bedrooms: 3,
    area: "2100 sq.ft",
    price: "₹1.85 Crore",
    location: "City Center",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    tag: "New Launch",
  },
  {
    id: 3,
    title: "The Grand Residence",
    type: "Premium Villa",
    bedrooms: 5,
    area: "4800 sq.ft",
    price: "₹4.2 Crore",
    location: "Upscale Zone",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    tag: "Luxury",
  },
  {
    id: 4,
    title: "Lakeview Enclave",
    type: "Independent House",
    bedrooms: 3,
    area: "2800 sq.ft",
    price: "₹1.5 Crore",
    location: "Scenic Area",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
    tag: "Ready to Move",
  },
  {
    id: 5,
    title: "Urban Smart Home",
    type: "Modern Apartment",
    bedrooms: 2,
    area: "1400 sq.ft",
    price: "₹95 Lakh",
    location: "IT Corridor",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    tag: "Best Value",
  },
  {
    id: 6,
    title: "Prestige Commercial Hub",
    type: "Commercial Space",
    bedrooms: null,
    area: "3500 sq.ft",
    price: "₹6.5 Crore",
    location: "Business District",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    tag: "Commercial",
  },
];

const Listings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="listings"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#0A0A0B]"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37] mb-4">
              Our Portfolio
            </p>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[#FAFAFA]"
            >
              Featured Listings
            </h2>
          </div>
          <a
            href="https://www.google.com/search?q=K1+Real+Estate+Marketing"
            target="_blank"
            rel="noopener noreferrer"
            data-testid={LISTINGS.googleLink}
            className="flex items-center gap-2 text-sm text-[#D4AF37] border-b border-[#D4AF37]/40 pb-1 hover:border-[#D4AF37] whitespace-nowrap transition-colors"
          >
            <ExternalLink size={14} />
            View on Google Business
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-[#121214] border border-white/5 overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] to-transparent opacity-60" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#D4AF37] text-black text-xs font-semibold tracking-wide uppercase">
                  {p.tag}
                </span>
              </div>

              <div className="p-6">
                <p className="text-xs tracking-[0.15em] uppercase text-[#71717A] mb-2">{p.type}</p>
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl font-medium text-[#FAFAFA] mb-3"
                >
                  {p.title}
                </h3>

                <div className="flex items-center gap-1 text-[#71717A] text-sm mb-4">
                  <MapPin size={13} />
                  <span>{p.location}</span>
                </div>

                <div className="flex items-center gap-4 text-sm text-[#A1A1AA] mb-5">
                  {p.bedrooms && (
                    <span className="flex items-center gap-1">
                      <BedDouble size={14} /> {p.bedrooms} Beds
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Maximize size={14} /> {p.area}
                  </span>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <p
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xl font-medium text-[#D4AF37]"
                  >
                    {p.price}
                  </p>
                  <button
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-xs tracking-wider uppercase text-[#A1A1AA] hover:text-[#D4AF37] transition-colors"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-14"
        >
          <a
            href="https://www.google.com/search?q=K1+Real+Estate+Marketing"
            target="_blank"
            rel="noopener noreferrer"
            data-testid={LISTINGS.viewAllBtn}
            className="px-10 py-4 border border-white/20 text-[#A1A1AA] text-sm font-medium tracking-wider uppercase hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
          >
            View All Google Listings
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Listings;
