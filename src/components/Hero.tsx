
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

  // Animation for the image
  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: 0.3, 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="w-full pt-24 pb-16 md:py-24 overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100/40">
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
              className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium mb-6"
            >
              • EFFORTLESS SCREENING
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 font-['Montserrat',sans-serif]"
            >
              Shortlist<br />Candidates In<br />Minutes
            </motion.h1>

            {/* Subheading */}
            <motion.p
              custom={2}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-lg mb-8 text-gray-800 font-['Montserrat',sans-serif]"
            >
              Online Skill-based Tests at <span className="text-blue-700 font-medium">₹85 per Candidate</span>
            </motion.p>

            {/* CTA Button */}
            <motion.div
              custom={3}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-full font-medium shadow-lg"
                asChild
              >
                <Link to="/programs">
                  Explore Tests
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          {/* Right Image with Animated Elements */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageAnimation}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Modern office with people working" 
                className="w-full h-auto rounded-lg shadow-xl transition-transform hover:scale-105 duration-700"
              />
              
              {/* Animated floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-blue-500 text-white rounded-full p-3 shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut" 
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </motion.div>
              
              {/* Additional floating elements */}
              <motion.div 
                className="absolute bottom-4 -left-4 bg-white text-blue-600 rounded-lg p-2 shadow-lg"
                animate={{ 
                  x: [0, 5, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut" 
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">85</span>
                  </div>
                  <div className="text-sm font-medium text-gray-800">
                    per candidate
                  </div>
                </div>
              </motion.div>
              
              {/* Animated badge */}
              <motion.div 
                className="absolute top-1/3 -right-3 bg-yellow-400 text-gray-900 rounded-lg px-3 py-1 shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: 1,
                  x: 0,
                  rotate: [-2, 2, -2],
                }}
                transition={{ 
                  rotate: {
                    repeat: Infinity, 
                    duration: 5,
                  },
                  opacity: { delay: 1 },
                  x: { delay: 1 }
                }}
              >
                <span className="text-sm font-bold">Fast Results!</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
