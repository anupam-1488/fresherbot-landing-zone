
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  BarChart, 
  CheckCircle, 
  Rocket, 
  Users, 
  GraduationCap, 
  BriefcaseBusiness, 
  Globe,
  ArrowRight
} from "lucide-react";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import StatisticsSection from "@/components/StatisticsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  useEffect(() => {
    document.title = "FresherBot - Launch Your Career Journey";
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-fresherbot-darker">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-24 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-fresherbot-darker to-transparent opacity-90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 lg:pr-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="inline-block px-3 py-1 border border-fresherbot-primary text-fresherbot-primary text-sm font-medium rounded-full mb-4">
                  Your Career Partner
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-fresherbot-primary">
                  Navigate Your <span className="bg-fresherbot-primary/10 px-2 rounded-md">Success</span> Journey
                </h1>
                <p className="text-xl text-foreground/80 mb-8 max-w-lg">
                  Connect with premier opportunities tailored for rising talent. From skill development to placement, we're with you every step of the way.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-fresherbot-primary text-fresherbot-darker hover:bg-fresherbot-primary/90 rounded-md px-6 py-6 text-lg"
                    asChild
                  >
                    <Link to="/register">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-fresherbot-primary text-fresherbot-primary hover:bg-fresherbot-primary/10 rounded-md px-6 py-6 text-lg"
                    asChild
                  >
                    <Link to="/programs">Explore Programs</Link>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="grid grid-cols-2 gap-6 mt-12"
              >
                {[
                  { icon: <Users className="h-6 w-6 text-fresherbot-primary" />, stat: "10,000+", label: "Graduates" },
                  { icon: <BriefcaseBusiness className="h-6 w-6 text-fresherbot-primary" />, stat: "500+", label: "Employer Partners" },
                  { icon: <CheckCircle className="h-6 w-6 text-fresherbot-primary" />, stat: "97%", label: "Success Rate" },
                  { icon: <GraduationCap className="h-6 w-6 text-fresherbot-primary" />, stat: "250+", label: "College Partners" }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-3 border border-fresherbot-primary/20 rounded-lg bg-fresherbot-darker/50 backdrop-blur-sm"
                  >
                    <div className="p-2 bg-fresherbot-primary/10 rounded-full mr-3">{item.icon}</div>
                    <div>
                      <p className="text-xl font-bold text-fresherbot-primary">{item.stat}</p>
                      <p className="text-sm text-foreground/70">{item.label}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-fresherbot-primary/10 to-fresherbot-primary/5 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-fresherbot-primary/10 to-fresherbot-primary/5 rounded-3xl transform -rotate-3"></div>
              
              <div className="relative bg-fresherbot-dark border border-fresherbot-primary/30 rounded-3xl p-6 shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-fresherbot-primary/10 rounded-full filter blur-xl transform translate-x-10 -translate-y-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-fresherbot-primary/10 rounded-full filter blur-xl transform -translate-x-10 translate-y-10"></div>
                
                <div className="grid gap-8">
                  <div className="p-4 bg-fresherbot-darker border border-fresherbot-primary/20 rounded-xl">
                    <h3 className="flex items-center font-semibold text-fresherbot-primary mb-3">
                      <Rocket className="h-5 w-5 mr-2" /> Fast-Track Programs
                    </h3>
                    <p className="text-foreground/80">Accelerate your career with our industry-aligned programs designed for rapid skill development.</p>
                  </div>
                  
                  <div className="p-4 bg-fresherbot-darker border border-fresherbot-primary/20 rounded-xl">
                    <h3 className="flex items-center font-semibold text-fresherbot-primary mb-3">
                      <Users className="h-5 w-5 mr-2" /> Dedicated Mentorship
                    </h3>
                    <p className="text-foreground/80">One-on-one guidance from industry experts who are invested in your success journey.</p>
                  </div>
                  
                  <div className="p-4 bg-fresherbot-darker border border-fresherbot-primary/20 rounded-xl">
                    <h3 className="flex items-center font-semibold text-fresherbot-primary mb-3">
                      <BarChart className="h-5 w-5 mr-2" /> Placement Assistance
                    </h3>
                    <p className="text-foreground/80">Direct connections with hiring partners actively seeking fresh talent like yours.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Programs */}
      <FeaturedPrograms />
      
      {/* Statistics Section */}
      <StatisticsSection />
      
      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default Index;
