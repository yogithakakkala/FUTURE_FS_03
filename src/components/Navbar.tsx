import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Hair Care", href: "#hair" },
  { label: "Body Care", href: "#body" },
  { label: "Massages", href: "#massage" },
  { label: "Specials", href: "#specials" },
  { label: "Ratings", href: "#ratings" },
  { label: "Booking", href: "#booking" },
  { label: "Contact", href: "#contact" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-heading text-2xl font-semibold text-foreground tracking-wide">
          Serenité Spa
        </a>

        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-body text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#booking"
          className="hidden lg:inline-block bg-primary text-primary-foreground px-6 py-2 font-body text-xs uppercase tracking-widest hover:opacity-90 transition-opacity rounded-sm"
        >
          Book Now
        </a>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <ul className="flex flex-col items-center gap-5 py-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
