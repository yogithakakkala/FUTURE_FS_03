import aboutImg from "@/assets/about-spa.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="spa-section bg-card">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img src={aboutImg} alt="Serenité Spa reception and lounge" className="w-full h-[500px] object-cover" />
        </div>
        <div>
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">About Us</p>
          <h2 className="spa-heading text-foreground mb-6">A Sanctuary for Your Soul</h2>
          <p className="spa-body mb-5">
            Nestled in the heart of the city, Serenité Spa has been a haven of peace and rejuvenation for over a decade. Our philosophy is rooted in the belief that true beauty comes from balance — of body, mind, and spirit.
          </p>
          <p className="spa-body mb-8">
            Our team of certified therapists combines ancient healing traditions with modern wellness science to deliver transformative experiences. Every product we use is organic, cruelty-free, and sustainably sourced.
          </p>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary">12+</p>
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mt-1">Years</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary">50+</p>
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mt-1">Treatments</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary">10k+</p>
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mt-1">Clients</p>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-6">
            <p className="spa-subheading text-foreground text-xl mb-2">"Wellness is not a luxury, it's a necessity."</p>
            <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">— Our Philosophy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
