import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
  { text: "Revisions", bold: "free revisions" },
  { text: "Mobile-first,", bold: "every single time" },
];

export const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-32 surface-bg relative z-10">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-display text-[10px] tracking-[0.3em] text-accent mb-4 block">
            WHY CHOOSE US
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            The Difference Is <span className="text-accent glow-text">Clear</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-border p-8 hover:border-muted-foreground/30 transition-colors duration-300"
          >
            <p className="font-display text-xs tracking-[0.2em] text-muted-foreground mb-8 uppercase">
              Traditional Agency
            </p>
            <div className="space-y-4">
              {traditional.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-5 h-5 border border-border flex items-center justify-center flex-shrink-0 mt-0.5 text-muted-foreground text-xs">
                    x
                  </span>
                  <span className="text-muted-foreground text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cobalt */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-accent/30 p-8 border-t-2 border-t-accent hover:border-accent/50 transition-colors duration-300"
          >
            <p className="font-display text-xs tracking-[0.2em] text-accent mb-8 uppercase">
              Cobalt Sites
            </p>
            <div className="space-y-4">
              {cobalt.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-5 h-5 border border-accent/40 bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-accent text-xs font-bold">
                    &rsaquo;
                  </span>
                  <span className="text-foreground text-sm">
                    {item.text} <span className="font-semibold">{item.bold}</span>
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
