import hairImg from "@/assets/service-hair.jpg";
import bodyImg from "@/assets/service-body.jpg";
import massageImg from "@/assets/service-massage.jpg";

const services = [
  {
    id: "hair",
    title: "Hair Treatments",
    description: "From deep conditioning to scalp therapy, restore your hair's natural beauty with our luxurious treatments using organic botanical products.",
    image: hairImg,
    price: "From $80",
  },
  {
    id: "body",
    title: "Body Wellness",
    description: "Revitalize your skin with our signature body scrubs, wraps, and hydrating rituals designed to leave you glowing from head to toe.",
    image: bodyImg,
    price: "From $120",
  },
  {
    id: "massage",
    title: "Massage Therapy",
    description: "Release tension and restore balance with therapeutic massages ranging from Swedish relaxation to deep tissue recovery.",
    image: massageImg,
    price: "From $95",
  },
];

const ServicesSection = () => {
  return (
    <section className="spa-section bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">Our Services</p>
          <h2 className="spa-heading text-foreground">Select Your Bliss</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow duration-500"
            >
              <div className="overflow-hidden h-72">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="spa-body text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-lg text-primary font-medium">{service.price}</span>
                  <a href="#booking" className="font-body text-xs uppercase tracking-widest text-primary hover:text-accent transition-colors">
                    Book Now →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
