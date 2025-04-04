
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import TypedText from "./TypedText";
import { ArrowRight, Sparkles, Users, Rocket, Check } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const [showTypedText, setShowTypedText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypedText(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Modern geometric background with gradient overlay */}
      <div className="absolute inset-0 bg-mesh-bg z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-fresherbot-dark/90 via-fresherbot-dark/80 to-fresherbot-dark/70"></div>
        
        {/* Animated shapes */}
        <motion.div 
          className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-fresherbot-primary/20 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-32 -left-16 w-72 h-72 rounded-full bg-fresherbot-accent/20 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <motion.div 
            className="inline-flex items-center mb-6 bg-white/10 backdrop-blur-md py-2 px-4 rounded-full border border-white/20"
            initial={fadeIn.hidden}
            animate={fadeIn.visible}
          >
            <Sparkles className="h-4 w-4 mr-2 text-fresherbot-accent" />
            <span className="text-sm font-medium">
              Join 10,000+ freshers already on board
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building your <span className="text-fresherbot-accent">future</span> starts here
          </motion.h1>

          <motion.div 
            className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-fresherbot-primary to-fresherbot-secondary bg-clip-text text-transparent h-[60px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {showTypedText ? (
              <TypedText text="WE HAVE GOT YOUR BACK" typingSpeed={100} />
            ) : (
              <span>&nbsp;</span>
            )}
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Connect with top companies, colleges, and opportunities tailored for
            freshers and early career professionals. Your career journey begins with us.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="btn-primary text-white px-8 py-6 text-lg flex items-center rounded-full"
            >
              Explore Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white bg-white/10 hover:bg-white/20 text-white px-8 py-6 text-lg transition-all rounded-full"
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div 
            className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex items-center">
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full">
                <Check className="h-5 w-5 text-fresherbot-accent" />
              </div>
              <span className="ml-2 text-sm md:text-base">300+ Programs</span>
            </div>
            <div className="flex items-center">
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full">
                <Users className="h-5 w-5 text-fresherbot-primary" />
              </div>
              <span className="ml-2 text-sm md:text-base">500+ Employers</span>
            </div>
            <div className="flex items-center">
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full">
                <Rocket className="h-5 w-5 text-fresherbot-secondary" />
              </div>
              <span className="ml-2 text-sm md:text-base">97% Success Rate</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modern wave overlay at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
