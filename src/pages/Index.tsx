import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HairCareSection from "@/components/HairCareSection";
import BodyCareSection from "@/components/BodyCareSection";
import MassageSection from "@/components/MassageSection";
import SpecialsSection from "@/components/SpecialsSection";
import RatingsSection from "@/components/RatingsSection";
import BookingSection from "@/components/BookingSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HairCareSection />
      <BodyCareSection />
      <MassageSection />
      <SpecialsSection />
      <RatingsSection />
      <BookingSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
