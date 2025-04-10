
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
import EntrepreneurBanner from "@/components/EntrepreneurBanner";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    document.title = "FresherBot - Launch Your Career Journey";
    // Add padding to body to account for fixed navbar and download banner
    document.body.style.paddingTop = "0"; // No padding needed as we want hero to be full height
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.backgroundColor = "#3D0C11"; // Dark burgundy background
    
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-burgundy-950 via-burgundy-900 to-burgundy-800">
      <Navbar />
      
      {/* Entrepreneur Banner */}
      <EntrepreneurBanner />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Animated Floating Shapes */}
      <div className="relative overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-burgundy-500/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-60 right-20 w-40 h-40 rounded-full bg-burgundy-300/10 blur-3xl"
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
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
      </div>
      
      <Footer />
      
      {/* Persistent Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
