import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import axios from "axios";
import { CONTACT } from "@/constants/testIds";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [form, setForm] = useState({ name: "", mobile: "", requirement: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#0A0A0B] relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#D4AF37]/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37] mb-4">
            Get In Touch
          </p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-[#FAFAFA] mb-6"
          >
            Let's Find Your
            <br />
            <span className="italic">Perfect Property</span>
          </h2>
          <p className="text-base text-[#A1A1AA] leading-relaxed mb-10">
            Share your requirement and our expert team will reach out to guide you through the best options available.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-[#D4AF37] text-lg">&#9742;</span>
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-[#71717A] mb-1">Call Us</p>
                <p className="text-[#FAFAFA]">Available Mon–Sat, 9am–7pm</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-[#D4AF37] text-lg">&#9993;</span>
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-[#71717A] mb-1">Google Business</p>
                <a
                  href="https://www.google.com/search?q=K1+Real+Estate+Marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:text-white transition-colors text-sm"
                >
                  K1 Real Estate Marketing
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {success ? (
            <motion.div
              data-testid={CONTACT.successMessage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center py-16 border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-8"
            >
              <CheckCircle size={48} className="text-[#D4AF37] mb-5" />
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl font-light text-[#FAFAFA] mb-3"
              >
                Thank You!
              </h3>
              <p className="text-[#A1A1AA] leading-relaxed max-w-xs">
                We've received your inquiry and our team will contact you shortly.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-8 text-sm text-[#D4AF37] border-b border-[#D4AF37]/40 pb-0.5 hover:border-[#D4AF37] transition-colors"
              >
                Submit Another Inquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="text-xs tracking-[0.15em] uppercase text-white/50 mb-3 block"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  data-testid={CONTACT.nameInput}
                  className="w-full bg-transparent border-0 border-b border-white/20 py-3 text-base text-[#FAFAFA] placeholder:text-[#71717A] focus:outline-none focus:border-[#D4AF37] transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="text-xs tracking-[0.15em] uppercase text-white/50 mb-3 block"
                >
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  data-testid={CONTACT.mobileInput}
                  className="w-full bg-transparent border-0 border-b border-white/20 py-3 text-base text-[#FAFAFA] placeholder:text-[#71717A] focus:outline-none focus:border-[#D4AF37] transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="requirement"
                  className="text-xs tracking-[0.15em] uppercase text-white/50 mb-3 block"
                >
                  Your Requirement
                </label>
                <textarea
                  id="requirement"
                  name="requirement"
                  rows={4}
                  value={form.requirement}
                  onChange={handleChange}
                  placeholder="Describe what you're looking for..."
                  data-testid={CONTACT.requirementInput}
                  className="w-full bg-transparent border-0 border-b border-white/20 py-3 text-base text-[#FAFAFA] placeholder:text-[#71717A] focus:outline-none focus:border-[#D4AF37] transition-colors duration-300 resize-none"
                />
              </div>

              {error && (
                <p
                  data-testid={CONTACT.errorMessage}
                  className="text-sm text-red-400 -mt-4"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                data-testid={CONTACT.submitButton}
                className="w-full py-5 bg-[#D4AF37] text-black font-semibold tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3 disabled:opacity-60"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send size={16} />
                    Send Inquiry
                  </>
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
