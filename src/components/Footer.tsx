import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h3 className="font-heading text-2xl mb-4">Serenité Spa</h3>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              Your sanctuary for wellness and beauty. Experience the art of relaxation.
            </p>
          </div>
          <div>
            <h4 className="font-body text-xs uppercase tracking-widest mb-4 text-primary-foreground/50">Services</h4>
            <ul className="space-y-2">
              {["Hair Care", "Body Care", "Massages", "Couples Packages"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/ /g, "")}`} className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body text-xs uppercase tracking-widest mb-4 text-primary-foreground/50">Quick Links</h4>
            <ul className="space-y-2">
              {[{ l: "Specials", h: "#specials" }, { l: "Reviews", h: "#ratings" }, { l: "Book Now", h: "#booking" }, { l: "About", h: "#about" }].map((link) => (
                <li key={link.l}>
                  <a href={link.h} className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body text-xs uppercase tracking-widest mb-4 text-primary-foreground/50">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 font-body text-sm text-primary-foreground/70">
                <Phone size={14} /> +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3 font-body text-sm text-primary-foreground/70">
                <Mail size={14} /> hello@serenitespa.com
              </li>
              <li className="flex items-center gap-3 font-body text-sm text-primary-foreground/70">
                <MapPin size={14} /> 123 Wellness Ave, NY
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            © 2026 Serenité Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
