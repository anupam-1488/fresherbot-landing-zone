
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">FresherBot</h3>
            <p className="text-slate-600 mb-4">
              Connecting talented freshers with the right opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-slate-900 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-slate-900 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-slate-900 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-slate-900 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-slate-900">Products</h4>
            <ul className="space-y-2">
              <li><Link to="/assessments" className="text-slate-600 hover:text-slate-900 transition-colors">Assessments</Link></li>
              <li><Link to="/proctoring" className="text-slate-600 hover:text-slate-900 transition-colors">Proctoring</Link></li>
              <li><Link to="/analytics" className="text-slate-600 hover:text-slate-900 transition-colors">Analytics</Link></li>
              <li><Link to="/integrations" className="text-slate-600 hover:text-slate-900 transition-colors">Integrations</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-slate-900">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-slate-600 hover:text-slate-900 transition-colors">Blog</Link></li>
              <li><Link to="/guides" className="text-slate-600 hover:text-slate-900 transition-colors">Guides</Link></li>
              <li><Link to="/case-studies" className="text-slate-600 hover:text-slate-900 transition-colors">Case Studies</Link></li>
              <li><Link to="/help-center" className="text-slate-600 hover:text-slate-900 transition-colors">Help Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-slate-900">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-600 hover:text-slate-900 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-slate-600 hover:text-slate-900 transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="text-slate-600 hover:text-slate-900 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-600 hover:text-slate-900 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 mt-12 pt-8 text-center text-slate-500">
          <p>&copy; {currentYear} FresherBot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
