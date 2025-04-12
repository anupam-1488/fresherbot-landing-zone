
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { useEffect, useRef } from "react";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import Competitors from "@/components/Competitors";
import HowWeDoIt from "@/components/HowWeDoIt";
import { Testimonials } from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import BottomNav from "@/components/BottomNav";
import EntrepreneurBanner from "@/components/EntrepreneurBanner";
import { motion } from "framer-motion";
import FeatureSlides from "@/components/FeatureSlides";

const Index = () => {
  useEffect(() => {
    document.title = "FresherBot - Launch Your Career Journey";
    // Remove any padding to enable full-screen hero
    document.body.style.padding = "0";
    document.body.style.margin = "0";
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.backgroundColor = "#121339"; // Dark navy/purple background to match the image
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
      document.body.style.padding = "";
      document.body.style.margin = "";
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

  // Staggered animation variants for sections
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      
      {/* Full screen Hero Section */}
      <Hero />
      
      {/* The rest of the page with beige background */}
      <div className="bg-beige-50">
        {/* Trusted By Companies and Colleges */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <TrustedBy />
        </motion.div>
        
        {/* Features Section with staggered animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="bg-beige-50"
        >
          <Features />
        </motion.div>
        
        {/* Full Screen Feature Slides */}
        <FeatureSlides />
        
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
      </div>
      
      <Footer />
      
      {/* Persistent Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
