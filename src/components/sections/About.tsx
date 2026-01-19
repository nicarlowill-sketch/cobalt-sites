import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Target, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Purpose-Driven",
    description: "Every pixel serves a purpose. We design with intention.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Your vision, our expertise. Together we create magic.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We never settle for good. We strive for exceptional.",
  },
  {
    icon: Heart,
    title: "Passionate",
    description: "We love what we do, and it shows in every project.",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-medium mb-4 block">About Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              We're a Team of
              <br />
              <span className="gradient-text">Digital Craftsmen</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Founded in 2016, NexaDev has been at the forefront of web innovation. 
              We're not just developers – we're digital architects who transform 
              complex ideas into elegant, functional websites.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our diverse team brings together expertise in design, development, 
              and strategy to deliver solutions that don't just look great but 
              drive real business results.
            </p>
          </motion.div>

          {/* Right Column - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="glass-card p-6 hover-glow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-24"
        >
          <p className="text-center text-muted-foreground mb-8">
            Technologies we work with
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "PostgreSQL", "AWS", "Figma"].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.1, borderColor: "hsl(var(--primary))" }}
                  className="px-6 py-3 rounded-full border border-border text-muted-foreground hover:text-foreground transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
