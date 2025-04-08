
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-fresherbot-darker z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-fresherbot-darker to-fresherbot-dark/95"></div>
        </div>
        
        {/* Animated shape overlays */}
        <motion.div 
          className="absolute -right-10 top-1/4 w-80 h-80 rounded-full bg-fresherbot-primary/5 blur-3xl"
          animate={{
            x: [0, -10, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -left-20 bottom-1/4 w-96 h-96 rounded-full bg-fresherbot-primary/5 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeUp}
              className="inline-flex items-center px-3 py-1 rounded-full bg-fresherbot-primary/10 border border-fresherbot-primary/30 text-fresherbot-primary text-sm font-medium mb-6"
            >
              Launch Your Career Journey
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Your <span className="text-fresherbot-primary">Success</span> Starts Here
            </motion.h1>

            {/* Subheading */}
            <motion.p
              custom={2}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-lg md:text-xl mb-8 text-foreground/80 max-w-lg"
            >
              Connect with top opportunities tailored for freshers with our AI-powered platform that bridges the talent gap.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button 
                size="lg" 
                className="bg-fresherbot-primary hover:bg-fresherbot-primary/90 text-fresherbot-dark px-6 py-6 text-base md:text-lg font-medium rounded-full"
                asChild
              >
                <Link to="/register">
                  Get Started 
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-fresherbot-primary/80 bg-transparent hover:bg-fresherbot-primary/10 text-fresherbot-primary px-6 py-6 text-base md:text-lg rounded-full"
                asChild
              >
                <Link to="/programs">
                  Explore Programs
                </Link>
              </Button>
            </motion.div>

            {/* Key Points */}
            <motion.div
              custom={4}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeUp}
              className="space-y-3"
            >
              {[
                "500+ employer partners across industries",
                "AI-powered skills matching for better opportunities",
                "97% placement success rate for our graduates"
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-fresherbot-primary flex-shrink-0" />
                  <p className="text-sm md:text-base">{point}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-fresherbot-primary/10 to-fresherbot-primary/5 blur-sm transform rotate-2"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Young professional using laptop" 
                  className="w-full h-auto rounded-3xl object-cover border border-fresherbot-primary/20 relative z-10"
                />
              </div>

              {/* Floating Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-fresherbot-dark border border-fresherbot-primary/20 rounded-2xl p-4 shadow-lg max-w-[200px]"
              >
                <div className="text-2xl font-bold text-fresherbot-primary mb-1">10,000+</div>
                <div className="text-sm text-foreground/80">Successfully placed candidates</div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -top-6 -right-6 bg-fresherbot-dark border border-fresherbot-primary/20 rounded-2xl p-4 shadow-lg max-w-[200px]"
              >
                <div className="text-2xl font-bold text-fresherbot-primary mb-1">250+</div>
                <div className="text-sm text-foreground/80">College partners nationwide</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
