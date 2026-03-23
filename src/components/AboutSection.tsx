const AboutSection = () => {
  return (
    <section id="about" className="spa-section bg-card">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">About Us</p>
          <h2 className="spa-heading text-foreground mb-6">
            A Sanctuary for<br />Your Soul
          </h2>
          <p className="spa-body mb-6">
            Nestled in the heart of the city, Serenité Spa has been a haven of peace and rejuvenation for over a decade. Our philosophy is rooted in the belief that true beauty comes from within.
          </p>
          <p className="spa-body mb-8">
            Our team of certified therapists combines ancient healing traditions with modern wellness techniques to create transformative experiences tailored to your unique needs.
          </p>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary">12+</p>
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary">50+</p>
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mt-1">Treatments</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary">10k+</p>
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mt-1">Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-secondary rounded-lg aspect-[4/5] flex items-center justify-center">
            <div className="p-12 text-center">
              <p className="spa-subheading text-foreground mb-4">"Wellness is not a luxury, it's a necessity."</p>
              <p className="font-body text-sm text-muted-foreground uppercase tracking-wider">— Our Philosophy</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full" />
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/30 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
