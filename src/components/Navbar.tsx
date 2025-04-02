
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-fresherbot-blue">FresherBot</span>
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
              <div className="absolute top-16 right-0 left-0 bg-white shadow-md py-4 px-4">
                <div className="flex flex-col space-y-3">
                  <Link to="/candidate" className="px-4 py-2 hover:bg-gray-100 rounded-md">For Candidate</Link>
                  <Link to="/employer" className="px-4 py-2 hover:bg-gray-100 rounded-md">For Employer</Link>
                  <Link to="/college" className="px-4 py-2 hover:bg-gray-100 rounded-md">For College</Link>
                  <div className="border-t pt-2 flex flex-col space-y-2">
                    <Button variant="outline" asChild>
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="bg-fresherbot-blue hover:bg-fresherbot-lightBlue" asChild>
                      <Link to="/register">Register</Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-6">
            <div className="flex space-x-6 mr-4">
              <Link to="/candidate" className="text-gray-600 hover:text-fresherbot-blue transition-colors">For Candidate</Link>
              <Link to="/employer" className="text-gray-600 hover:text-fresherbot-blue transition-colors">For Employer</Link>
              <Link to="/college" className="text-gray-600 hover:text-fresherbot-blue transition-colors">For College</Link>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button className="bg-fresherbot-blue hover:bg-fresherbot-lightBlue" asChild>
                <Link to="/register">Register</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
