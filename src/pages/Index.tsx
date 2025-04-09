
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { useEffect } from "react";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import Competitors from "@/components/Competitors";
import HowWeDoIt from "@/components/HowWeDoIt";
import { Testimonials } from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import BottomNav from "@/components/BottomNav";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    document.title = "FresherBot - Launch Your Career Journey";
    // Add padding to body to account for fixed navbar
    document.body.style.paddingTop = "64px";
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.backgroundColor = "#E0EDF4";
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
      document.body.style.paddingTop = "0";
      document.body.style.backgroundColor = "";
    };
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#E0EDF4" }}>
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Trusted By Companies */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <TrustedBy />
      </motion.div>
      
      {/* Features Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Features />
      </motion.div>
      
      {/* How We Do It */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <HowWeDoIt />
      </motion.div>
      
      {/* Testimonials */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Testimonials />
      </motion.div>
      
      {/* Competitors Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Competitors />
      </motion.div>
      
      {/* CTA Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <CTASection />
      </motion.div>
      
      <Footer />
      
      {/* Persistent Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
