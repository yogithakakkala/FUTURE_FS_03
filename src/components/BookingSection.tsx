import { useState } from "react";

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your booking request has been received. We'll contact you shortly to confirm.");
    setFormData({ name: "", email: "", phone: "", service: "", date: "", time: "", message: "" });
  };

  const inputClasses =
    "w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors";

  return (
    <section id="booking" className="spa-section bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">Reservations</p>
          <h2 className="spa-heading text-foreground mb-4">Book Your Escape</h2>
          <p className="spa-body max-w-xl mx-auto">
            Reserve your appointment in just a few clicks. We'll confirm your booking within 24 hours.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name *" required className={inputClasses} />
              <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" required className={inputClasses} />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className={inputClasses} />
              <select name="service" value={formData.service} onChange={handleChange} required className={inputClasses}>
                <option value="">Select Service *</option>
                <optgroup label="Hair Care">
                  <option value="keratin">Keratin Smoothing — $150</option>
                  <option value="scalp">Scalp Rejuvenation — $95</option>
                  <option value="conditioning">Deep Conditioning — $80</option>
                  <option value="herbal-hair">Herbal Hair Spa — $120</option>
                </optgroup>
                <optgroup label="Body Care">
                  <option value="body-scrub">Signature Body Scrub — $110</option>
                  <option value="detox-wrap">Detox Body Wrap — $140</option>
                  <option value="golden-glow">Golden Glow Facial Body — $165</option>
                  <option value="hydrotherapy">Hydrotherapy Ritual — $95</option>
                </optgroup>
                <optgroup label="Massage">
                  <option value="swedish">Swedish Relaxation — $95</option>
                  <option value="deep-tissue">Deep Tissue Therapy — $130</option>
                  <option value="hot-stone">Hot Stone Massage — $155</option>
                  <option value="aromatherapy">Aromatherapy Massage — $110</option>
                </optgroup>
                <optgroup label="Packages">
                  <option value="couples">Couples Retreat — $299</option>
                  <option value="hair-body-bundle">Hair + Body Bundle — $210</option>
                </optgroup>
              </select>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <input name="date" type="date" value={formData.date} onChange={handleChange} required className={inputClasses} />
              <select name="time" value={formData.time} onChange={handleChange} required className={inputClasses}>
                <option value="">Preferred Time *</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="17:00">5:00 PM</option>
              </select>
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Special requests, preferences, or health notes..."
              rows={4}
              className={inputClasses + " resize-none"}
            />
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-14 py-4 font-body text-sm uppercase tracking-widest hover:opacity-90 transition-opacity rounded-sm"
              >
                Request Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
