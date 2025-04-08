
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="w-full py-16 md:py-20 overflow-hidden" style={{ backgroundColor: "#E0EDF4" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            {/* Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeUp}
              className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6"
            >
              • EFFORTLESS SCREENING
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
            >
              Shortlist<br />Candidates In<br />Minutes
            </motion.h1>

            {/* Subheading */}
            <motion.p
              custom={2}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-lg mb-8 text-gray-600"
            >
              Online Skill-based Tests at <span className="text-indigo-700 font-medium">₹85 per Candidate</span>
            </motion.p>

            {/* CTA Button */}
            <motion.div
              custom={3}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeUp}
            >
              <Button 
                size="lg" 
                className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-6 rounded-full font-medium"
                asChild
              >
                <Link to="/programs">
                  Explore Tests
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
                alt="Team collaboration on laptops" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
