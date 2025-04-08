
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { useEffect } from "react";
import { motion } from "framer-motion";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import StatisticsSection from "@/components/StatisticsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  useEffect(() => {
    document.title = "FresherBot - Launch Your Career Journey";
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-fresherbot-darker">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Trusted By Companies */}
      <section className="py-16 bg-fresherbot-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <p className="text-lg text-foreground/70">Trusted by leading organizations</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-12 opacity-70"
          >
            {["Google", "Microsoft", "Amazon", "Meta", "Apple", "IBM"].map((company, index) => (
              <div key={index} className="text-2xl font-bold text-foreground/60">{company}</div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Featured Programs */}
      <FeaturedPrograms />
      
      {/* Statistics Section */}
      <StatisticsSection />
      
      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default Index;
