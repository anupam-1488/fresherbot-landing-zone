
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-fresherbot-darker text-foreground border-t border-fresherbot-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-fresherbot-primary">FresherBot</h3>
            <p className="text-muted-foreground mb-4">
              Connecting talented freshers with the right opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-fresherbot-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-fresherbot-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-fresherbot-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-fresherbot-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-fresherbot-primary">For Users</h4>
            <ul className="space-y-2">
              <li><Link to="/candidate" className="text-muted-foreground hover:text-fresherbot-primary transition-colors">Candidates</Link></li>
              <li><Link to="/employer" className="text-muted-foreground hover:text-fresherbot-primary transition-colors">Employers</Link></li>
              <li><Link to="/college" className="text-muted-foreground hover:text-fresherbot-primary transition-colors">Colleges</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-fresherbot-primary">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-fresherbot-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fresherbot-primary transition-colors">Career Tips</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fresherbot-primary transition-colors">Interview Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-fresherbot-primary">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-fresherbot-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fresherbot-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fresherbot-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fresherbot-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-fresherbot-primary/20 mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} FresherBot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
