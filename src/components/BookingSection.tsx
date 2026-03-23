import { useState } from "react";

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your booking request has been received. We'll contact you shortly.");
    setFormData({ name: "", email: "", phone: "", service: "", date: "", message: "" });
  };

  const inputClasses =
    "w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors";

  return (
    <section id="booking" className="spa-section bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">Reservations</p>
          <h2 className="spa-heading text-foreground">Book Your Escape</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className={inputClasses} />
            <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className={inputClasses} />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className={inputClasses} />
            <select name="service" value={formData.service} onChange={handleChange} required className={inputClasses}>
              <option value="">Select Service</option>
              <option value="hair">Hair Treatment</option>
              <option value="body">Body Wellness</option>
              <option value="massage">Massage Therapy</option>
            </select>
          </div>
          <input name="date" type="date" value={formData.date} onChange={handleChange} required className={inputClasses} />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Special requests or notes..."
            rows={4}
            className={inputClasses + " resize-none"}
          />
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-12 py-4 font-body text-sm uppercase tracking-widest hover:opacity-90 transition-opacity rounded-sm"
            >
              Request Booking
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingSection;
