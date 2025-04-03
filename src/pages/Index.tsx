
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Testimonials } from "@/components/Testimonials";
import HowWeDoIt from "@/components/HowWeDoIt";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "FresherBot - Building Your Career, Together";
    
    // Add smooth scroll behavior to the entire document
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      // Clean up
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <InfoSection />
        <HowWeDoIt />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
