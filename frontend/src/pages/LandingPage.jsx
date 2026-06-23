import { ThemeProvider } from "@/context/ThemeContext";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Listings from "@/components/Listings";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ThemeSettings from "@/components/ThemeSettings";

const LandingPage = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <ParticleBackground />
        <div className="relative" style={{ zIndex: 1 }}>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Listings />
          <Gallery />
          <ContactForm />
          <Footer />
          <ThemeSettings />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LandingPage;
