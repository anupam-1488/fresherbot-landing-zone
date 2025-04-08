
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Menu } from "lucide-react";
import logo from "/Images/fresherbot_logo_dark.png";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full py-3 fixed top-0 left-0 right-0 z-50 shadow-sm" style={{ backgroundColor: "#E0EDF4" }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="FresherBot Logo" className="h-8" />
            </Link>
          </div>
          
          {isMobile ? (
            <>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
              
              {menuOpen && (
                <div className="absolute top-16 right-0 left-0 shadow-md py-4 px-4 border-t border-gray-100" style={{ backgroundColor: "#E0EDF4" }}>
                  <div className="flex flex-col space-y-3">
                    <Link to="/candidate" className="px-3 py-2 hover:bg-blue-100 rounded">For Candidates</Link>
                    <Link to="/employer" className="px-3 py-2 hover:bg-blue-100 rounded">For Employers</Link>
                    <Link to="/college" className="px-3 py-2 hover:bg-blue-100 rounded">For Colleges</Link>
                    
                    <div className="pt-2 border-t border-gray-100">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                        <Link to="/register">Register</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center space-x-6">
              <Link to="/candidate" className="text-slate-700 hover:text-blue-600 font-medium">For Candidates</Link>
              <Link to="/employer" className="text-slate-700 hover:text-blue-600 font-medium">For Employers</Link>
              <Link to="/college" className="text-slate-700 hover:text-blue-600 font-medium">For Colleges</Link>
              
              <Button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md" asChild>
                <Link to="/register">Recruiter Signup →</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
