
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { useEffect } from "react";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import Competitors from "@/components/Competitors";
import HowWeDoIt from "@/components/HowWeDoIt";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

const Index = () => {
  useEffect(() => {
    document.title = "FresherBot - Launch Your Career Journey";
    // Add padding to body to account for fixed navbar
    document.body.style.paddingTop = "64px";
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
      document.body.style.paddingTop = "0";
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Trusted By Companies */}
      <TrustedBy />
      
      {/* Features Section */}
      <Features />
      
      {/* How We Do It */}
      <HowWeDoIt />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Competitors Section */}
      <Competitors />
      
      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default Index;
