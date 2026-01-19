import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Fintech Dashboard",
    category: "Web Application",
    description: "A comprehensive financial analytics platform with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "E-Commerce Platform",
    category: "Online Store",
    description: "Modern shopping experience with seamless checkout and inventory management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Healthcare Portal",
    category: "Enterprise Solution",
    description: "Patient management system with appointment scheduling and telemedicine features.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Creative Agency",
    category: "Marketing Site",
    description: "Award-winning portfolio website showcasing creative work with stunning animations.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop",
    color: "from-orange-500/20 to-red-500/20",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl glass-card">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isHovered ? 1 : 0 }}
              transition={{ delay: 0.1 }}
              className="w-16 h-16 rounded-full bg-primary flex items-center justify-center"
            >
              <ArrowUpRight className="w-6 h-6 text-primary-foreground" />
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <span className="text-primary text-sm font-medium">{project.category}</span>
          <h3 className="font-display text-2xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground">{project.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const Work = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="work" className="py-32 relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-secondary/30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Our Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our latest work and see how we've helped businesses 
            achieve their digital goals.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
