import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "SERVICES", href: "#services" },
  { name: "WHY US", href: "#why-us" },
  { name: "PRICING", href: "#pricing" },
  { name: "CONTACT", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-lg font-bold tracking-wider text-foreground">
          COBALT<span className="text-accent">.</span>SITES
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block clip-btn bg-accent text-accent-foreground font-display text-xs tracking-wider px-6 py-2.5 font-semibold hover:shadow-[0_0_20px_hsl(200_100%_50%/0.4)] transition-shadow duration-300"
        >
          Start a Project
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm tracking-[0.15em] text-muted-foreground hover:text-accent transition-colors py-2"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="clip-btn bg-accent text-accent-foreground font-display text-xs tracking-wider px-6 py-3 font-semibold text-center mt-2"
              onClick={() => setIsMobileOpen(false)}
            >
              Start a Project
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
