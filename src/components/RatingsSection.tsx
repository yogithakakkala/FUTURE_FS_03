import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    rating: 5,
    text: "Absolutely incredible experience! The deep tissue massage was exactly what I needed. The ambiance is so calming and the staff is phenomenal.",
    service: "Deep Tissue Massage",
  },
  {
    name: "James Rodriguez",
    rating: 5,
    text: "My wife and I did the Couples Retreat package and it was unforgettable. The attention to detail and quality of service is unmatched in the city.",
    service: "Couples Package",
  },
  {
    name: "Emily Chen",
    rating: 5,
    text: "The keratin treatment transformed my hair completely. Three months later and it still looks salon-fresh. Worth every penny!",
    service: "Keratin Smoothing",
  },
  {
    name: "Olivia Patel",
    rating: 4,
    text: "The body scrub was divine! My skin felt like silk for weeks afterward. The organic products they use smell heavenly. Booking again soon.",
    service: "Signature Body Scrub",
  },
  {
    name: "Michael Torres",
    rating: 5,
    text: "As someone with chronic back pain, the hot stone massage here is a game changer. Professional therapists who truly understand the body.",
    service: "Hot Stone Massage",
  },
  {
    name: "Aisha Williams",
    rating: 5,
    text: "First time trying the herbal hair spa and I'm hooked! My hair has never been this soft and manageable. The whole experience felt so luxurious.",
    service: "Herbal Hair Spa",
  },
];

const RatingStars = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating ? "fill-accent text-accent" : "text-border"}
      />
    ))}
  </div>
);

const RatingsSection = () => {
  return (
    <section id="ratings" className="spa-section bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">Testimonials</p>
          <h2 className="spa-heading text-foreground mb-4">What Our Clients Say</h2>
          <p className="spa-body max-w-2xl mx-auto mb-2">
            Join thousands of satisfied clients who have made Serenité their wellness home.
          </p>
        </div>

        {/* Aggregate rating */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} className="fill-accent text-accent" />
            ))}
          </div>
          <span className="font-heading text-2xl font-semibold text-foreground">4.9</span>
          <span className="font-body text-sm text-muted-foreground">/ 5 — Based on 2,400+ reviews</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <RatingStars rating={t.rating} />
              <p className="font-body text-sm text-foreground leading-relaxed mt-4 mb-5 italic">"{t.text}"</p>
              <div className="border-t border-border pt-4 flex items-center justify-between">
                <div>
                  <p className="font-heading text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RatingsSection;
