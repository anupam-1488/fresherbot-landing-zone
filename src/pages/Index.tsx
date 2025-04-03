
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
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
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
