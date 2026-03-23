import specialsBg from "@/assets/specials-bg.jpg";
import { Tag, Gift, Clock, Percent } from "lucide-react";

const specials = [
  {
    icon: Percent,
    badge: "25% OFF",
    title: "First Visit Special",
    description: "New clients receive 25% off any single treatment. Experience the Serenité difference today.",
    validUntil: "Valid for new clients",
  },
  {
    icon: Gift,
    badge: "PACKAGE",
    title: "Couples Retreat Package",
    description: "Two 90-min massages, champagne, and a shared aromatherapy experience. Save $80 as a couple.",
    validUntil: "Book anytime",
    originalPrice: "$380",
    discountPrice: "$299",
  },
  {
    icon: Tag,
    badge: "SAVE $50",
    title: "Hair + Body Bundle",
    description: "Combine any hair treatment with a body scrub and save $50. The ultimate head-to-toe renewal.",
    validUntil: "Limited time",
    originalPrice: "$260",
    discountPrice: "$210",
  },
  {
    icon: Clock,
    badge: "LOYALTY",
    title: "5th Visit Free",
    description: "Earn a stamp with every visit. Your 5th treatment (up to $120 value) is completely free!",
    validUntil: "Ongoing program",
  },
];

const SpecialsSection = () => {
  return (
    <section id="specials" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={specialsBg} alt="Special offers" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>
      <div className="relative z-10 spa-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-3">Specials & Discounts</p>
            <h2 className="spa-heading text-primary-foreground mb-4">Exclusive Offers</h2>
            <p className="font-body text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Take advantage of our limited-time deals and loyalty rewards. Treat yourself or someone special.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specials.map((s) => (
              <div key={s.title} className="bg-background/95 backdrop-blur-sm rounded-lg p-6 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-body text-[10px] uppercase tracking-wider font-bold">
                  {s.badge}
                </div>
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <s.icon size={20} className="text-accent-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="spa-body text-sm mb-4">{s.description}</p>
                {s.originalPrice && (
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-body text-sm text-muted-foreground line-through">{s.originalPrice}</span>
                    <span className="font-heading text-xl text-primary font-semibold">{s.discountPrice}</span>
                  </div>
                )}
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">{s.validUntil}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;
