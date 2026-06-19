import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useColors } from "@/context/ThemeContext";

const images = [
  { url: "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Luxury suburban house" },
  { url: "https://images.unsplash.com/photo-1630699144035-c0f6311ec482?w=600&q=80", alt: "Modern luxury living room" },
  { url: "https://images.unsplash.com/photo-1617228133035-2347f159e755?w=600&q=80", alt: "Premium real estate interior" },
  { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c349c8c?w=600&q=80", alt: "Elegant master bedroom" },
  { url: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80", alt: "Luxury pool and garden" },
  { url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80", alt: "Beautiful house facade" },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const c = useColors();

  return (
    <section id="gallery" className={`py-24 md:py-32 px-6 md:px-12 lg:px-24 ${c.bg2} transition-colors duration-500`} ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-16">
          <p className={`text-xs font-semibold tracking-[0.25em] uppercase mb-4 ${c.overline}`}>Our Work</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }}
            className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight ${c.textH}`}>
            Property Gallery
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {images.map((img, i) => (
            <motion.div key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              data-testid={`gallery-image-${i}`}
              className={`group relative overflow-hidden ${i === 0 ? "row-span-2" : ""}`}
            >
              <img src={img.url} alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-xs tracking-wide text-white/90 bg-black/50 px-3 py-1.5 backdrop-blur-sm">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
