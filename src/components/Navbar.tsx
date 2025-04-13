
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "/Images/fresherbotlogo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Animation variants
  const navAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navAnimation}
      className={`w-full py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-burgundy-900/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="flex items-center">
              <img src={logo} alt="FresherBot Logo" className="h-8" />
            </Link>
          </motion.div>
          
          {isMobile ? (
            <>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                className="text-gray-100"
              >
                <Menu className="h-6 w-6" />
              </Button>
              
              {menuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-16 right-0 left-0 shadow-md py-4 px-4 bg-burgundy-900/90 backdrop-blur-md"
                >
                  <div className="flex flex-col space-y-3">
                    <Link to="/why-fresherbot" className="px-3 py-2 hover:bg-burgundy-800/50 rounded text-beige-100 font-['Montserrat',sans-serif]">Why FresherBot</Link>
                    <Link to="/product" className="px-3 py-2 hover:bg-burgundy-800/50 rounded text-beige-100 font-['Montserrat',sans-serif]">Product</Link>
                    <Link to="/compare-us" className="px-3 py-2 hover:bg-burgundy-800/50 rounded text-beige-100 font-['Montserrat',sans-serif]">Compare Us</Link>
                    
                    <div className="pt-2 border-t border-burgundy-700">
                      <div className="flex gap-2">
                        <Button className="flex-1 bg-burgundy-700 hover:bg-burgundy-600 text-beige-100 font-['Montserrat',sans-serif]" asChild>
                          <Link to="/login">Login</Link>
                        </Button>
                        <Button className="flex-1 bg-burgundy-500 hover:bg-burgundy-400 text-white font-['Montserrat',sans-serif]" asChild>
                          <Link to="/register">Register</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </>
          ) : (
            <div className="flex items-center space-x-6">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link to="/why-fresherbot" className="text-burgundy-100 hover:text-white font-medium font-['Montserrat',sans-serif]">Why FresherBot</Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link to="/product" className="text-burgundy-100 hover:text-white font-medium font-['Montserrat',sans-serif]">Product</Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link to="/compare-us" className="text-burgundy-100 hover:text-white font-medium font-['Montserrat',sans-serif]">Compare Us</Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Button variant="ghost" className="text-burgundy-100 hover:text-white hover:bg-transparent font-medium font-['Montserrat',sans-serif]" asChild>
                  <Link to="/login">Login</Link>
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button className="bg-burgundy-500 hover:bg-burgundy-400 text-white px-5 py-2 rounded-md shadow-md font-['Montserrat',sans-serif]" asChild>
                  <Link to="/register">Register</Link>
                </Button>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
