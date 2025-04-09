
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "/Images/fresherbot_logo_dark.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

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
      className="w-full py-3 fixed top-0 left-0 right-0 z-50 shadow-sm bg-white/80 backdrop-blur-md"
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
                className="text-blue-700"
              >
                <Menu className="h-6 w-6" />
              </Button>
              
              {menuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-16 right-0 left-0 shadow-md py-4 px-4 border-t border-gray-100 bg-white/90 backdrop-blur-md"
                >
                  <div className="flex flex-col space-y-3">
                    <Link to="/candidate" className="px-3 py-2 hover:bg-blue-100 rounded text-gray-800 font-['Montserrat',sans-serif]">For Candidates</Link>
                    <Link to="/employer" className="px-3 py-2 hover:bg-blue-100 rounded text-gray-800 font-['Montserrat',sans-serif]">For Employers</Link>
                    <Link to="/college" className="px-3 py-2 hover:bg-blue-100 rounded text-gray-800 font-['Montserrat',sans-serif]">For Colleges</Link>
                    
                    <div className="pt-2 border-t border-gray-100">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-['Montserrat',sans-serif]" asChild>
                        <Link to="/register">Register</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </>
          ) : (
            <div className="flex items-center space-x-6">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link to="/candidate" className="text-gray-800 hover:text-blue-600 font-medium font-['Montserrat',sans-serif]">For Candidates</Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link to="/employer" className="text-gray-800 hover:text-blue-600 font-medium font-['Montserrat',sans-serif]">For Employers</Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link to="/college" className="text-gray-800 hover:text-blue-600 font-medium font-['Montserrat',sans-serif]">For Colleges</Link>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow-md font-['Montserrat',sans-serif]" asChild>
                  <Link to="/register">Recruiter Signup →</Link>
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
