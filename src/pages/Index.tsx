import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { ParticleCanvas } from "@/components/ParticleCanvas";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <CustomCursor />
      <ParticleCanvas />
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <WhyUs />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
