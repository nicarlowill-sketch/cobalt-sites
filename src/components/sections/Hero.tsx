import { useEffect, useRef, useState } from "react";

const industries = [
  "RESTAURANT",
  "BARBERSHOP",
  "SALON",
  "CAFE",
  "CLOTHING BRAND",
  "GYM",
  "LAW FIRM",
  "HOTEL",
];

const tickerItems = [
  "Web Design",
  "Mobile Optimized",
  "SEO Ready",
  "48hr Delivery",
  "Caribbean Built",
  "Pay When Happy",
];

export const Hero = () => {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => setShowCursor((p) => !p), 530);

    const typeInterval = setInterval(() => {
      const word = industries[indexRef.current];
      if (!deletingRef.current) {
        charRef.current++;
        setTyped(word.slice(0, charRef.current));
        if (charRef.current >= word.length) {
          deletingRef.current = true;
          // Pause before deleting
          setTimeout(() => {}, 1500);
        }
      } else {
        charRef.current--;
        setTyped(word.slice(0, charRef.current));
        if (charRef.current <= 0) {
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % industries.length;
        }
      }
    }, deletingRef.current ? 50 : 120);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(typeInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Breathing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full -top-40 -left-40"
          style={{
            background: "radial-gradient(circle, hsl(220 100% 43% / 0.2), transparent 70%)",
            animation: "breathe 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full top-1/3 -right-32"
          style={{
            background: "radial-gradient(circle, hsl(200 100% 50% / 0.15), transparent 70%)",
            animation: "breathe 10s ease-in-out infinite 2s",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bottom-20 left-1/4"
          style={{
            background: "radial-gradient(circle, hsl(220 100% 43% / 0.12), transparent 70%)",
            animation: "breathe 12s ease-in-out infinite 4s",
          }}
        />
      </div>

      {/* Scan lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="scan-line" />
        <div className="scan-line" />
        <div className="scan-line" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-10 reveal">
            <span className="w-8 h-px bg-accent" />
            <span className="font-display text-[10px] tracking-[0.4em] text-accent">
              CARIBBEAN &middot; DIGITAL &middot; EXCELLENCE
            </span>
            <span className="w-8 h-px bg-accent" />
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold leading-tight mb-8 reveal">
            <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-foreground">
              YOUR
            </span>
            <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl mt-2">
              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: "1.5px hsl(200 100% 50%)",
                }}
              >
                {typed}
              </span>
              <span
                className="inline-block w-[3px] h-[0.8em] bg-accent ml-1 align-middle"
                style={{
                  opacity: showCursor ? 1 : 0,
                }}
              />
            </span>
            <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-accent glow-text mt-2">
              NEEDS A WEBSITE.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-muted-foreground text-base md:text-lg max-w-[560px] mx-auto mb-10 leading-relaxed reveal">
            We build fast, bold, conversion-ready websites for Caribbean businesses ready to
            compete on a global level. Delivered in 48 hours. Built to last.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal">
            <a
              href="#work"
              className="clip-btn bg-accent text-accent-foreground font-display text-xs tracking-wider px-8 py-3.5 font-semibold hover:shadow-[0_0_24px_hsl(200_100%_50%/0.4)] transition-shadow duration-300 text-center"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="clip-btn border border-accent/50 text-foreground font-display text-xs tracking-wider px-8 py-3.5 font-semibold hover:bg-accent/10 hover:border-accent transition-all duration-300 text-center"
            >
              Get a Free Demo
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20 reveal">
          <div className="relative w-px h-12 bg-border">
            <div
              className="absolute w-1.5 h-1.5 rounded-full bg-accent left-1/2 -translate-x-1/2"
              style={{ animation: "pulse-down 2s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="border-t border-border bg-background/80 py-3 overflow-hidden">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "ticker 30s linear infinite" }}
        >
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className={`font-display text-[10px] tracking-[0.3em] mx-6 ${
                i % 2 === 0 ? "text-muted-foreground" : "text-accent"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
