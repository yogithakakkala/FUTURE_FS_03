import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="spa-section bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">Get In Touch</p>
          <h2 className="spa-heading text-foreground mb-4">Contact Us</h2>
          <p className="spa-body max-w-xl mx-auto">
            Have questions? Reach out to us anytime. We'd love to hear from you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone size={22} className="text-primary" />
            </div>
            <h4 className="font-heading text-base font-semibold text-foreground mb-2">Phone</h4>
            <p className="font-body text-sm text-muted-foreground">+1 (555) 123-4567</p>
            <p className="font-body text-sm text-muted-foreground">+1 (555) 987-6543</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail size={22} className="text-primary" />
            </div>
            <h4 className="font-heading text-base font-semibold text-foreground mb-2">Email</h4>
            <p className="font-body text-sm text-muted-foreground">hello@serenitespa.com</p>
            <p className="font-body text-sm text-muted-foreground">booking@serenitespa.com</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin size={22} className="text-primary" />
            </div>
            <h4 className="font-heading text-base font-semibold text-foreground mb-2">Location</h4>
            <p className="font-body text-sm text-muted-foreground">123 Wellness Avenue</p>
            <p className="font-body text-sm text-muted-foreground">New York, NY 10001</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock size={22} className="text-primary" />
            </div>
            <h4 className="font-heading text-base font-semibold text-foreground mb-2">Hours</h4>
            <p className="font-body text-sm text-muted-foreground">Mon – Sat: 9AM – 8PM</p>
            <p className="font-body text-sm text-muted-foreground">Sunday: 10AM – 6PM</p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="rounded-lg overflow-hidden border border-border shadow-md">
          <iframe
            title="Serenité Spa Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459568!3d40.74076797932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/15551234567?text=Hi%20Serenit%C3%A9%20Spa!%20I'd%20like%20to%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle size={26} />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
