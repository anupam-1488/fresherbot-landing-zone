
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import logo from "/Images/fresherbot_logo_dark.png";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const ListItem = ({ className, title, href, children }) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            to={href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900",
              className
            )}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-500">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  };

  return (
    <nav className="w-full bg-white py-3 fixed top-0 left-0 right-0 z-50 shadow-sm">
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
                <div className="absolute top-16 right-0 left-0 bg-white shadow-md py-4 px-4 border-t border-gray-100">
                  <div className="flex flex-col space-y-3">
                    <Link to="/features" className="px-3 py-2 hover:bg-slate-100 rounded">Features</Link>
                    <Link to="/roles" className="px-3 py-2 hover:bg-slate-100 rounded">Roles</Link>
                    <Link to="/pricing" className="px-3 py-2 hover:bg-slate-100 rounded">Pricing</Link>
                    <Link to="/resources" className="px-3 py-2 hover:bg-slate-100 rounded">Resources</Link>
                    <Link to="/customers" className="px-3 py-2 hover:bg-slate-100 rounded">Customers</Link>
                    
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
            <div className="flex items-center space-x-1">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-slate-700 hover:text-blue-600 bg-transparent">
                      Features <ChevronDown className="h-4 w-4" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                        <ListItem 
                          href="/features/assessments" 
                          title="Assessments" 
                          className=""
                        >
                          Create custom assessments for any role
                        </ListItem>
                        <ListItem 
                          href="/features/proctoring" 
                          title="Proctoring" 
                          className=""
                        >
                          Advanced anti-cheating techniques
                        </ListItem>
                        <ListItem 
                          href="/features/analytics" 
                          title="Analytics" 
                          className=""
                        >
                          Get detailed insights on candidate performance
                        </ListItem>
                        <ListItem 
                          href="/features/integrations" 
                          title="Integrations" 
                          className=""
                        >
                          Connect with your existing tools
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-slate-700 hover:text-blue-600 bg-transparent">
                      Roles <ChevronDown className="h-4 w-4" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                        <ListItem 
                          href="/roles/tech" 
                          title="Tech Roles" 
                          className=""
                        >
                          Developers, designers, and more
                        </ListItem>
                        <ListItem 
                          href="/roles/sales" 
                          title="Sales Roles" 
                          className=""
                        >
                          Sales, marketing, and customer support
                        </ListItem>
                        <ListItem 
                          href="/roles/operations" 
                          title="Operations" 
                          className=""
                        >
                          Operations, finance, and HR
                        </ListItem>
                        <ListItem 
                          href="/roles/leadership" 
                          title="Leadership" 
                          className=""
                        >
                          Management and executive positions
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link to="/pricing" className="px-3 py-2 text-slate-700 hover:text-blue-600">Pricing</Link>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-slate-700 hover:text-blue-600 bg-transparent">
                      Resources <ChevronDown className="h-4 w-4" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 bg-white">
                        <ListItem 
                          href="/resources/blog" 
                          title="Blog" 
                          className=""
                        >
                          Latest articles and updates
                        </ListItem>
                        <ListItem 
                          href="/resources/guides" 
                          title="Guides" 
                          className=""
                        >
                          How-to guides and tutorials
                        </ListItem>
                        <ListItem 
                          href="/resources/case-studies" 
                          title="Case Studies" 
                          className=""
                        >
                          Success stories from our customers
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-slate-700 hover:text-blue-600 bg-transparent">
                      Customers <ChevronDown className="h-4 w-4" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 bg-white">
                        <ListItem 
                          href="/customers/testimonials" 
                          title="Testimonials" 
                          className=""
                        >
                          What our customers say about us
                        </ListItem>
                        <ListItem 
                          href="/customers/partners" 
                          title="Partners" 
                          className=""
                        >
                          Our technology and integration partners
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
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
