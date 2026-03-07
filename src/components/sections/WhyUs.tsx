const traditional = [
  "4-8 week delivery timeline",
  "Large upfront deposit required",
  "Generic templates, no originality",
  "SEO not included by default",
  "Slow communication, long delays",
  "Changes cost extra every time",
  "No mobile-first thinking",
];

const cobalt = [
  { text: "48 hour delivery", bold: "from brief to live" },
  { text: "Pay nothing", bold: "until you love it" },
  { text: "Custom-built", bold: "for your brand, always" },
  { text: "SEO + GEO optimization", bold: "included" },
  { text: "Direct communication,", bold: "fast responses" },
  { text: "Revisions", bold: "until it's perfect" },
  { text: "Mobile-first,", bold: "every single time" },
];

export const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 surface-bg relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="font-display text-[10px] tracking-[0.3em] text-accent mb-4 block">
            WHY CHOOSE US
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            The Difference Is <span className="text-accent glow-text">Clear</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto reveal">
          {/* Traditional */}
          <div className="border border-border p-8">
            <p className="font-display text-xs tracking-[0.2em] text-muted-foreground mb-8 uppercase">
              Traditional Agency
            </p>
            <div className="space-y-4">
              {traditional.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 border border-border flex items-center justify-center flex-shrink-0 mt-0.5 text-muted-foreground text-xs">
                    x
                  </span>
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cobalt */}
          <div className="border border-accent/30 p-8 border-t-2 border-t-accent">
            <p className="font-display text-xs tracking-[0.2em] text-accent mb-8 uppercase">
              Cobalt Sites
            </p>
            <div className="space-y-4">
              {cobalt.map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <span className="w-5 h-5 border border-accent/40 bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-accent text-xs font-bold">
                    &rsaquo;
                  </span>
                  <span className="text-foreground text-sm">
                    {item.text} <span className="font-semibold">{item.bold}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
