import massageImg from "@/assets/massage-hero.jpg";
import { Hand, Flame, Wind, Zap } from "lucide-react";

const massages = [
  {
    icon: Hand,
    title: "Swedish Relaxation",
    description: "Classic long-stroke massage to ease tension, improve circulation, and promote total relaxation.",
    duration: "60 min",
    price: "$95",
  },
  {
    icon: Zap,
    title: "Deep Tissue Therapy",
    description: "Targeted pressure on deep muscle layers to release chronic pain and restore mobility.",
    duration: "75 min",
    price: "$130",
  },
  {
    icon: Flame,
    title: "Hot Stone Massage",
    description: "Heated basalt stones placed along energy lines to melt away stress and soothe sore muscles.",
    duration: "90 min",
    price: "$155",
  },
  {
    icon: Wind,
    title: "Aromatherapy Massage",
    description: "Custom-blended essential oils combined with gentle techniques for holistic mind-body healing.",
    duration: "60 min",
    price: "$110",
  },
];

const MassageSection = () => {
  return (
    <section id="massage" className="spa-section bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">Massage Therapy</p>
            <h2 className="spa-heading text-foreground mb-6">Healing Through Touch</h2>
            <p className="spa-body mb-8">
              Our licensed massage therapists bring years of expertise to every session. Whether you seek deep relaxation or targeted pain relief, we customize every treatment for your body's needs.
            </p>
            <a
              href="#booking"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 font-body text-xs uppercase tracking-widest hover:opacity-90 transition-opacity rounded-sm"
            >
              Book Massage
            </a>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src={massageImg} alt="Hot stone massage therapy" className="w-full h-80 lg:h-[420px] object-cover" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {massages.map((t) => (
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

export default MassageSection;
