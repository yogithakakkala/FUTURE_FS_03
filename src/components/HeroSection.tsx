import heroImg from "@/assets/hero-spa.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Serene spa interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      <div className="relative z-10 text-center max-w-3xl px-6 animate-fade-in-up">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-primary-foreground/80 mb-4">
          Welcome to Serenité
        </p>
        <h1 className="spa-heading text-primary-foreground mb-6">
          Let Your Body<br />Rest Today
        </h1>
        <p className="font-body text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
          Indulge in a world of tranquility. Our expert therapists craft personalized treatments to rejuvenate your body, mind, and spirit.
        </p>
        <a
          href="#booking"
          className="inline-block bg-primary text-primary-foreground px-10 py-4 font-body text-sm uppercase tracking-widest hover:opacity-90 transition-opacity rounded-sm"
        >
          Book an Appointment
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
