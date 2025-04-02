
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Menu, BookOpen, Code, Briefcase, Building, GraduationCap } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  };

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
                  <div className="px-4 py-2">
                    <p className="font-medium flex items-center"><BookOpen className="h-4 w-4 mr-2" /> For Candidate</p>
                    <div className="ml-4 mt-1 space-y-1">
                      <Link to="/candidate/blog" className="block px-2 py-1 hover:bg-gray-100 rounded-md">Blog</Link>
                      <Link to="/candidate/programs" className="block px-2 py-1 hover:bg-gray-100 rounded-md">Programs</Link>
                      <Link to="/candidate/internships" className="block px-2 py-1 hover:bg-gray-100 rounded-md">Internships</Link>
                    </div>
                  </div>
                  
                  <div className="px-4 py-2">
                    <p className="font-medium flex items-center"><Building className="h-4 w-4 mr-2" /> For Employer</p>
                    <div className="ml-4 mt-1 space-y-1">
                      <Link to="/employer/hiring-assessments" className="block px-2 py-1 hover:bg-gray-100 rounded-md">Hiring Assessments</Link>
                      <Link to="/employer/hackathon" className="block px-2 py-1 hover:bg-gray-100 rounded-md">Hackathon</Link>
                      <Link to="/employer/campus-hiring" className="block px-2 py-1 hover:bg-gray-100 rounded-md">Campus Hiring</Link>
                    </div>
                  </div>
                  
                  <div className="px-4 py-2">
                    <p className="font-medium flex items-center"><GraduationCap className="h-4 w-4 mr-2" /> For College</p>
                    <div className="ml-4 mt-1 space-y-1">
                      <Link to="/college/lms" className="block px-2 py-1 hover:bg-gray-100 rounded-md">LMS</Link>
                      <Link to="/college/crt" className="block px-2 py-1 hover:bg-gray-100 rounded-md">CRT</Link>
                      <Link to="/college/hrcc" className="block px-2 py-1 hover:bg-gray-100 rounded-md">HRCC</Link>
                    </div>
                  </div>
                  
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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" /> For Candidate
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-3">
                      <ListItem href="/candidate/blog" title="Blog" className="">
                        Read our latest articles and updates.
                      </ListItem>
                      <ListItem href="/candidate/programs" title="Programs" className="">
                        Explore our training programs.
                      </ListItem>
                      <ListItem href="/candidate/internships" title="Internships" className="">
                        Find the right internship opportunity.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center">
                    <Building className="h-4 w-4 mr-1" /> For Employer
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-3">
                      <ListItem href="/employer/hiring-assessments" title="Hiring Assessments" className="">
                        Assess candidates effectively.
                      </ListItem>
                      <ListItem href="/employer/hackathon" title="Hackathon" className="">
                        Organize hackathons to find top talent.
                      </ListItem>
                      <ListItem href="/employer/campus-hiring" title="Campus Hiring" className="">
                        Connect with universities for recruitment.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center">
                    <GraduationCap className="h-4 w-4 mr-1" /> For College
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-3">
                      <ListItem href="/college/lms" title="LMS" className="">
                        Learning Management System solutions.
                      </ListItem>
                      <ListItem href="/college/crt" title="CRT" className="">
                        Campus Recruitment Training.
                      </ListItem>
                      <ListItem href="/college/hrcc" title="HRCC" className="">
                        Human Resource Career Center.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
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
