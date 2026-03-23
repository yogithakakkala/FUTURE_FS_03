import hairImg from "@/assets/hair-hero.jpg";
import { Scissors, Sparkles, Droplets, Leaf } from "lucide-react";

const treatments = [
  {
    icon: Scissors,
    title: "Keratin Smoothing",
    description: "Eliminate frizz and restore silky smoothness with our premium keratin treatment lasting up to 12 weeks.",
    duration: "90 min",
    price: "$150",
  },
  {
    icon: Sparkles,
    title: "Scalp Rejuvenation",
    description: "Deep cleansing scalp therapy with essential oils to promote healthy hair growth and balance.",
    duration: "60 min",
    price: "$95",
  },
  {
    icon: Droplets,
    title: "Deep Conditioning",
    description: "Intensive moisture therapy using organic botanical extracts to repair and hydrate damaged hair.",
    duration: "45 min",
    price: "$80",
  },
  {
    icon: Leaf,
    title: "Herbal Hair Spa",
    description: "Traditional herbal infusion treatment combining ayurvedic herbs for strengthened, lustrous hair.",
    duration: "75 min",
    price: "$120",
  },
];

const HairCareSection = () => {
  return (
    <section id="hair" className="spa-section bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">Hair Care</p>
            <h2 className="spa-heading text-foreground mb-6">Luxurious Hair Treatments</h2>
            <p className="spa-body mb-8">
              Our hair specialists use only the finest organic products and cutting-edge techniques to transform your hair. From deep conditioning rituals to scalp therapies, every treatment is tailored to your hair's unique needs.
            </p>
            <a
              href="#booking"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 font-body text-xs uppercase tracking-widest hover:opacity-90 transition-opacity rounded-sm"
            >
              Book Hair Treatment
            </a>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src={hairImg} alt="Professional hair treatment" className="w-full h-80 lg:h-[420px] object-cover" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((t) => (
            <div key={t.title} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-500 group">
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

export default HairCareSection;
