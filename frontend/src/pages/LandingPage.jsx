import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Listings from "@/components/Listings";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const LandingPage = () => {
  return (
    <div className="bg-[#0A0A0B] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Listings />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LandingPage;
