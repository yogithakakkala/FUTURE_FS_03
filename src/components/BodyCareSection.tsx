import bodyImg from "@/assets/bodycare-hero.jpg";
import { Heart, Sun, Flower2, Waves } from "lucide-react";

const treatments = [
  {
    icon: Flower2,
    title: "Signature Body Scrub",
    description: "Exfoliate and renew with our aromatic sugar and salt scrub infused with essential oils and honey.",
    duration: "60 min",
    price: "$110",
  },
  {
    icon: Heart,
    title: "Detox Body Wrap",
    description: "A purifying seaweed and clay wrap that draws out toxins while deeply nourishing your skin.",
    duration: "75 min",
    price: "$140",
  },
  {
    icon: Sun,
    title: "Golden Glow Facial Body",
    description: "Full body hydration with vitamin C and gold-infused serums for radiant, glowing skin.",
    duration: "90 min",
    price: "$165",
  },
  {
    icon: Waves,
    title: "Hydrotherapy Ritual",
    description: "Alternating warm and cool water therapy combined with aromatherapy for total relaxation.",
    duration: "60 min",
    price: "$95",
  },
];

const BodyCareSection = () => {
  return (
    <section id="body" className="spa-section bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-xl">
            <img src={bodyImg} alt="Body care spa products" className="w-full h-80 lg:h-[420px] object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">Body Care</p>
            <h2 className="spa-heading text-foreground mb-6">Revitalize Your Skin</h2>
            <p className="spa-body mb-8">
              Discover body treatments that go beyond the surface. Our rituals combine ancient techniques with modern science to exfoliate, hydrate, and transform your skin into pure silk.
            </p>
            <a
              href="#booking"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 font-body text-xs uppercase tracking-widest hover:opacity-90 transition-opacity rounded-sm"
            >
              Book Body Treatment
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((t) => (
            <div key={t.title} className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-500 group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <t.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{t.title}</h3>
              <p className="spa-body text-sm mb-4">{t.description}</p>
              <div className="flex items-center justify-between border-t border-border pt-4">
                <span className="font-body text-xs text-muted-foreground">{t.duration}</span>
                <span className="font-heading text-lg text-primary font-medium">{t.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BodyCareSection;
