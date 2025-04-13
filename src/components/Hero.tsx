
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
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

  // Stats data
  const stats = [
    { 
      number: "16K+", 
      label: "Businesses", 
      color: "#f8a4cc", // Pink color from image
      subtext: "Keeping projects on-track, more profitable and less-nightmarish." 
    },
    { 
      number: "1.4M+", 
      label: "Client relationships", 
      color: "#ff9d76", // Orange/peach color from image
      subtext: "Managed each year. We just help keep the sparks flying." 
    },
    { 
      number: "17K+", 
      label: "New projects", 
      color: "#a587ff", // Purple color from image
      subtext: "Created each week (then smashed out of ballparks, probably)." 
    },
    { 
      number: "40M+", 
      label: "Billable hours", 
      color: "#f075ba", // Pink color from image
      subtext: "Logged in 2024. That's 4,566 years of ka-chings." 
    }
  ];

  return (
    <section className="w-full overflow-hidden">
      {/* Full Screen Hero Section with absolutely positioned content */}
      <div className="h-screen w-full relative">
        {/* Background Image - Full Screen */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
            alt="FresherBot Career Dashboard" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#800020]/50 to-[#121339]/0"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative h-full w-full flex items-center">
          <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center">
            {/* Left Text Content */}
            <div className="w-full lg:w-1/2 text-left pt-16 z-10">
              <div className="max-w-xl">
                {/* Main Heading */}
                <motion.h1
                  custom={1}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={fadeUp}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white font-['Montserrat',sans-serif]"
                >
                 Building Your Career..?  We have got this <span className="text-[#8F76FF]">Together</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                  custom={2}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={fadeUp}
                  className="text-lg mb-6 text-white/90 font-['Montserrat',sans-serif] max-w-lg"
                >
                  Career Paths Taillored 
                  <span className="text-[#8F76FF] font-medium"> For Freshers</span>, your 
                  <span className="text-[#8F76FF] font-medium"> resourcing in check</span>, and your 
                  <span className="text-[#8F76FF] font-medium"> profits on point</span>. Finally, a 
                  management tool that actually manages.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  custom={3}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={fadeUp}
                  className="flex flex-col sm:flex-row gap-4 mb-8"
                >
                  <Button 
                    size="lg" 
                    className="bg-[#8F76FF] hover:bg-[#7B65E8] text-white px-6 rounded-full font-medium shadow-lg"
                    asChild
                  >
                    <Link to="/get-started">
                      Get started for free
                    </Link>
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 rounded-full"
                    asChild
                  >
                    <Link to="/book-demo">
                      Book a demo
                    </Link>
                  </Button>
                </motion.div>
                
                {/* Trial note */}
                <motion.p
                  custom={4}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={fadeUp}
                  className="text-xs text-white/60 font-['Montserrat',sans-serif]"
                >
                  30 DAY TRIAL<br/>
                  NO CREDIT CARD REQUIRED
                </motion.p>
              </div>
            </div>
            
            {/* Right Side - Task Cards */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageAnimation}
              className="w-full lg:w-1/2 h-full relative hidden lg:block"
            >
              {/* Manage Projects Button */}
              {/* <motion.div 
                className="absolute top-1/3 right-8"
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut" 
                }}
              >
                <Button 
                  className="bg-[#FF6EB5] hover:bg-[#FF5AA8] text-white px-4 py-2 rounded-full shadow-lg"
                >
                  Manage Projects
                </Button>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Stats Section with Dark Background */}
      <div className="bg-burgundy-800 w-full py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-lg text-white mb-12">
              Happy customers. Happier clients. And the least-stressed teams around
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-left"
                >
                  <div className="w-full flex flex-col items-center md:items-start">
                    <span 
                      className="text-4xl md:text-5xl font-bold mb-1"
                      style={{ color: stat.color }}
                    >
                      {stat.number}
                    </span>
                    <span className="text-white font-medium mb-2">{stat.label}</span>
                    <p className="text-white/70 text-sm max-w-[250px] text-center md:text-left">{stat.subtext}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
