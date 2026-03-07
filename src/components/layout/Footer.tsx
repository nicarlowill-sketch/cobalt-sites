import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.a
            href="#"
            className="font-display text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}>
            
            ​Cobalt Sites 
          </motion.a>

          <p className="text-muted-foreground text-sm">
            © 2026 Cobalt Sites. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

};