
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
    { number: "16K+", label: "Businesses", subtext: "Keeping projects on-track, more profitable and less-nightmarish." },
    { number: "1.4M+", label: "Client relationships", subtext: "Managed each year. We just help keep the sparks flying." },
    { number: "17K+", label: "New projects", subtext: "Created each week (then smashed out of ballparks, probably)." },
    { number: "40M+", label: "Billable hours", subtext: "Logged in 2024. That's 4,566 years of ka-chings." }
  ];

  return (
    <section className="w-full pb-16 overflow-hidden">
      {/* Full Screen Hero Section */}
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Left Text Content - Dark Side */}
        <div className="w-full lg:w-1/2 bg-gradient-to-r from-burgundy-950 to-burgundy-800 text-left px-4 md:px-10 lg:px-16 flex flex-col justify-center">
          <div className="max-w-xl">
            {/* Main Heading */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-beige-100 font-['Montserrat',sans-serif]"
            >
              Master <span className="text-burgundy-300">skills</span>,<br />
              resources, and<br />
              <span className="text-burgundy-300">profits</span> like a pro
            </motion.h1>

            {/* Subheading */}
            <motion.p
              custom={2}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-lg mb-6 text-beige-200/80 font-['Montserrat',sans-serif] max-w-lg"
            >
              FresherBot is the smarter career management platform that keeps your 
              <span className="text-burgundy-300 font-medium"> career goals on track</span>, your 
              <span className="text-burgundy-300 font-medium"> resourcing in check</span>, and your 
              <span className="text-burgundy-300 font-medium"> profits on point</span>. Finally, a 
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
                className="bg-burgundy-500 hover:bg-burgundy-400 text-white px-6 rounded-md font-medium shadow-lg"
                asChild
              >
                <Link to="/get-started">
                  Get started for free
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-beige-200/30 text-beige-100 hover:bg-burgundy-800/50"
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
              className="text-xs text-beige-200/60 font-['Montserrat',sans-serif]"
            >
              30 DAY TRIAL<br/>
              NO CREDIT CARD REQUIRED
            </motion.p>
          </div>
        </div>
        
        {/* Right - Dashboard Image - Brighter Side */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageAnimation}
          className="w-full lg:w-1/2 h-full relative bg-beige-50"
        >
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
            alt="FresherBot Career Dashboard" 
            className="w-full h-full object-cover"
          />
          
          {/* Manage Projects Button */}
          <motion.div 
            className="absolute bottom-6 right-6"
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
              className="bg-burgundy-400 hover:bg-burgundy-300 text-white px-4 py-2 rounded-md shadow-lg"
            >
              Manage Projects
            </Button>
          </motion.div>
          
          {/* Task Card */}
          <motion.div 
            className="absolute top-8 right-8 bg-white text-gray-900 rounded-lg p-3 shadow-lg max-w-xs"
            animate={{ 
              x: [0, 5, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              ease: "easeInOut" 
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="h-8 w-8 rounded-full bg-burgundy-100 flex items-center justify-center">
                <span className="text-burgundy-600 font-bold">FB</span>
              </div>
              <div className="text-sm font-medium text-gray-800">
                Building Your <span className="text-burgundy-500">Career</span>?
              </div>
            </div>
            <div className="text-xs text-gray-600">
              We've got this together
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Stats Section */}
      <div className="container mx-auto px-4 bg-beige-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 mt-16"
        >
          <h3 className="text-lg text-burgundy-900 mb-8">
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
                className="flex flex-col items-center"
              >
                <span className="text-3xl md:text-4xl font-bold text-burgundy-500 mb-1">{stat.number}</span>
                <span className="text-burgundy-900 font-medium mb-2">{stat.label}</span>
                <p className="text-xs text-burgundy-700/70 max-w-[200px]">{stat.subtext}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
