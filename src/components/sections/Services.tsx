import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Palette, 
  Rocket, 
  Shield, 
  Smartphone, 
  Zap 
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Development",
    description: "Tailored web solutions built with cutting-edge technologies to meet your unique business needs.",
    gradient: "from-primary to-cyan-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that create memorable user experiences and drive engagement.",
    gradient: "from-accent to-pink-400",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Seamless experiences across all devices, from desktop to mobile and everything in between.",
    gradient: "from-green-400 to-emerald-400",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Lightning-fast load times and optimized code for the best possible user experience.",
    gradient: "from-orange-400 to-amber-400",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security measures to protect your data and your users.",
    gradient: "from-red-400 to-rose-400",
  },
  {
    icon: Zap,
    title: "Maintenance",
    description: "Ongoing support and updates to keep your website running smoothly and securely.",
    gradient: "from-primary to-accent",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <div className="glass-card p-8 h-full hover-glow transition-all duration-500 group-hover:border-primary/50">
        {/* Icon */}
        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}>
          <service.icon className="w-6 h-6 text-primary-foreground" />
        </div>

        {/* Content */}
        <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {service.description}
        </p>

        {/* Hover Arrow */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute bottom-8 right-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
        >
          →
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Services = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Services That <span className="gradient-text">Transform</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We offer a comprehensive suite of web development services designed 
            to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
