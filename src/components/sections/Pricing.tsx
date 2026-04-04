import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "Starter",
    price: "$150 USD",
    jmd: "~$23,000 JMD",
    featured: false,
    features: [
      "3-page website",
      "Mobile responsive",
      "Contact form",
      "WhatsApp integration",
      "SEO fundamentals",
      "Live deployment",
    ],
  },
  {
    name: "Standard",
    price: "$300 USD",
    jmd: "~$46,000 JMD",
    featured: true,
    features: [
      "5-page custom website",
      "Gallery section",
      "Custom domain setup",
      "WhatsApp ordering",
      "SEO + GEO optimization",
      "48hr delivery",
      "1 month free maintenance",
    ],
  },
  {
    name: "Premium",
    price: "$500 USD",
    jmd: "~$77,000 JMD",
    featured: false,
    features: [
      "Full custom site",
      "Booking or menu system",
      "Advanced animations",
      "SEO + GEO optimization",
      "Priority support",
      "3 months free maintenance",
      "48hr delivery",
    ],
  },
];

export const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-32 relative z-10">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-display text-[10px] tracking-[0.3em] text-accent mb-4 block">
            PRICING
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Transparent. <span className="text-accent glow-text">No Surprises.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`light-sweep border p-8 relative hover:border-accent/40 transition-colors duration-300 ${
                plan.featured
                  ? "border-accent/40 border-t-2 border-t-accent"
                  : "border-border"
              }`}
            >
              {plan.featured && (
                <span className="absolute top-4 right-4 font-display text-[9px] tracking-[0.2em] bg-accent/10 text-accent px-3 py-1 border border-accent/30">
                  MOST POPULAR
                </span>
              )}
              <p className="font-display text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">
                {plan.name}
              </p>
              <p className="font-display text-3xl font-bold text-foreground mb-1">{plan.price}</p>
              <p className="text-xs text-muted-foreground mb-8">{plan.jmd}</p>

              <div className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`clip-btn block text-center font-display text-xs tracking-wider px-6 py-3 font-semibold transition-all duration-300 ${
                  plan.featured
                    ? "bg-accent text-accent-foreground hover:shadow-[0_0_20px_hsl(200_100%_50%/0.4)]"
                    : "border border-accent/50 text-foreground hover:bg-accent/10 hover:border-accent"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xs text-muted-foreground mt-10"
        >
          Monthly retainers from $40 USD/month. All packages include a free demo before any payment.
        </motion.p>
      </div>
    </section>
  );
};
