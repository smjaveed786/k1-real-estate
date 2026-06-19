import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, MapPin, Clock, Phone } from "lucide-react";
import axios from "axios";
import { useColors } from "@/context/ThemeContext";
import { CONTACT } from "@/constants/testIds";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const c = useColors();

  const [form, setForm] = useState({ name: "", mobile: "", requirement: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.mobile.trim() || !form.requirement.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      setSuccess(true);
      setForm({ name: "", mobile: "", requirement: "" });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls = `w-full bg-transparent border-0 border-b py-3 text-base placeholder:text-[#71717A] focus:outline-none transition-colors duration-300 ${
    c.isDark
      ? "border-white/20 text-[#FAFAFA] focus:border-[#D4AF37]"
      : "border-black/20 text-[#1A1A1D] focus:border-[#8B6914]"
  }`;

  return (
    <section id="contact" className={`py-24 md:py-32 px-6 md:px-12 lg:px-24 ${c.bg} relative overflow-hidden transition-colors duration-500`} ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#D4AF37]/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
          <p className={`text-xs font-semibold tracking-[0.25em] uppercase mb-4 ${c.overline}`}>Get In Touch</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }}
            className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight mb-6 ${c.textH}`}>
            Let's Find Your<br /><span className="italic">Perfect Property</span>
          </h2>
          <p className={`text-base leading-relaxed mb-10 ${c.textB}`}>
            Share your requirement and our expert team will reach out to guide you through the best options in Guntur.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={16} className="text-[#D4AF37]" />
              </div>
              <div>
                <p className={`text-xs tracking-[0.15em] uppercase mb-1 ${c.textM}`}>Address</p>
                <p className={`text-sm ${c.textB}`}>Hussain Nagar 1st Line, Guntur–Ponnur Rd,<br />Guntur, Andhra Pradesh 522003</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                <Phone size={16} className="text-[#D4AF37]" />
              </div>
              <div>
                <p className={`text-xs tracking-[0.15em] uppercase mb-1 ${c.textM}`}>Phone / WhatsApp</p>
                <a href="tel:+919392140148" className={`text-sm hover:text-[#D4AF37] transition-colors ${c.textB}`}>+91 93921 40148</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                <Clock size={16} className="text-[#D4AF37]" />
              </div>
              <div>
                <p className={`text-xs tracking-[0.15em] uppercase mb-1 ${c.textM}`}>Working Hours</p>
                <p className={`text-sm ${c.textB}`}>Monday – Sunday: 9:00 AM – 8:00 PM</p>
              </div>
            </div>

            <a href="https://wa.me/919392140148?text=Hi%2C%20I%27m%20interested%20in%20a%20property%20from%20K1%20Real%20Estate%20Marketing"
              target="_blank" rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1ebe5d] transition-colors w-fit"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
          {success ? (
            <motion.div data-testid={CONTACT.successMessage}
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className={`flex flex-col items-center justify-center text-center py-16 border ${c.isDark ? "border-[#D4AF37]/30 bg-[#D4AF37]/5" : "border-[#D4AF37]/40 bg-[#D4AF37]/8"} px-8`}
            >
              <CheckCircle size={48} className="text-[#D4AF37] mb-5" />
              <h3 style={{ fontFamily: "'Playfair Display', serif" }} className={`text-2xl font-light mb-3 ${c.textH}`}>Thank You!</h3>
              <p className={`leading-relaxed max-w-xs ${c.textB}`}>
                We've received your inquiry. Our team will contact you at your provided number shortly.
              </p>
              <button onClick={() => setSuccess(false)}
                className="mt-8 text-sm text-[#D4AF37] border-b border-[#D4AF37]/40 pb-0.5 hover:border-[#D4AF37] transition-colors">
                Submit Another Inquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10" noValidate>
              <div>
                <label htmlFor="name" className={`text-xs tracking-[0.15em] uppercase mb-3 block ${c.isDark ? "text-white/50" : "text-black/50"}`}>Full Name</label>
                <input id="name" name="name" type="text" value={form.name} onChange={handleChange}
                  placeholder="Your full name" data-testid={CONTACT.nameInput} className={inputCls} />
              </div>
              <div>
                <label htmlFor="mobile" className={`text-xs tracking-[0.15em] uppercase mb-3 block ${c.isDark ? "text-white/50" : "text-black/50"}`}>Mobile Number</label>
                <input id="mobile" name="mobile" type="tel" value={form.mobile} onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX" data-testid={CONTACT.mobileInput} className={inputCls} />
              </div>
              <div>
                <label htmlFor="requirement" className={`text-xs tracking-[0.15em] uppercase mb-3 block ${c.isDark ? "text-white/50" : "text-black/50"}`}>Your Requirement</label>
                <textarea id="requirement" name="requirement" rows={4} value={form.requirement} onChange={handleChange}
                  placeholder="e.g. Looking for a 3BHK in Guntur..." data-testid={CONTACT.requirementInput} className={`${inputCls} resize-none`} />
              </div>

              {error && <p data-testid={CONTACT.errorMessage} className="text-sm text-red-400 -mt-4">{error}</p>}

              <button type="submit" disabled={loading} data-testid={CONTACT.submitButton}
                className="w-full py-5 bg-[#D4AF37] text-black font-semibold tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3 disabled:opacity-60">
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <><Send size={16} /> Send Inquiry</>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
