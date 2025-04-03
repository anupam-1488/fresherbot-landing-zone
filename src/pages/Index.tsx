
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Award, Users, ChevronRight, Zap, Shield, Target, Coffee } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "FresherBot - Building Your Career, Together";
    
    // Add smooth scroll behavior to the entire document
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      // Clean up
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 overflow-hidden bg-gradient-to-br from-fresherbot-dark to-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="inline-block px-4 py-1.5 mb-5 bg-gradient-to-r from-fresherbot-primary/30 to-fresherbot-secondary/30 rounded-full text-sm font-medium border border-fresherbot-primary/30"
              >
                Launch Your Career With Confidence
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              >
                Your Career <span className="text-fresherbot-accent">Evolution</span> Starts Here
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-xl md:text-2xl mb-10 text-gray-300 max-w-xl"
              >
                Connecting ambitious talent with opportunities that matter. Elevate your career journey with personalized guidance and cutting-edge resources.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" className="bg-gradient-to-r from-fresherbot-primary to-fresherbot-secondary hover:opacity-90 text-white rounded-full px-8 py-6 text-lg" asChild>
                  <Link to="/register">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 bg-transparent border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="flex flex-wrap items-center gap-8 mt-12"
              >
                <div className="flex items-center gap-2">
                  <div className="bg-fresherbot-primary/20 rounded-full p-1">
                    <Check className="h-4 w-4 text-fresherbot-primary" />
                  </div>
                  <span className="text-gray-300">97% Success Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-fresherbot-secondary/20 rounded-full p-1">
                    <Check className="h-4 w-4 text-fresherbot-secondary" />
                  </div>
                  <span className="text-gray-300">500+ Corporate Partners</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-fresherbot-accent/20 rounded-full p-1">
                    <Check className="h-4 w-4 text-fresherbot-accent" />
                  </div>
                  <span className="text-gray-300">10,000+ Career Launches</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-fresherbot-primary/30 to-fresherbot-secondary/30 mix-blend-overlay"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80" 
                  alt="Career professionals collaborating" 
                  className="object-cover h-full w-full"
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-8 w-8 text-fresherbot-primary" />
                  <div className="text-lg font-bold text-gray-800">10,000+</div>
                </div>
                <div className="text-sm text-gray-600">FresherBot graduates working in top companies</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -top-6 -right-6 bg-gradient-to-r from-fresherbot-primary to-fresherbot-secondary rounded-2xl shadow-xl p-4 max-w-[220px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-8 w-8 text-white" />
                  <div className="text-lg font-bold text-white">500+</div>
                </div>
                <div className="text-sm text-white/90">Hiring partners actively recruiting</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-fresherbot-primary/10 to-fresherbot-secondary/10 text-fresherbot-primary mb-4 inline-block">
                Why Choose FresherBot
              </span>
              <h2 className="text-4xl font-bold mb-5">Comprehensive Career Support System</h2>
              <p className="text-xl text-gray-600">
                We provide end-to-end solutions for students, colleges, and employers to create a seamless talent ecosystem.
              </p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8 text-white" />,
                title: "Accelerated Learning",
                description: "Industry-aligned curriculum designed to fast-track your skill development and career readiness.",
                color: "from-fresherbot-primary to-fresherbot-secondary"
              },
              {
                icon: <Shield className="h-8 w-8 text-white" />,
                title: "Placement Assurance",
                description: "Our network of 500+ corporate partners ensures opportunities aligned with your career goals.",
                color: "from-fresherbot-secondary to-fresherbot-accent"
              },
              {
                icon: <Target className="h-8 w-8 text-white" />,
                title: "Personalized Guidance",
                description: "One-on-one mentorship from industry experts to navigate your unique career path.",
                color: "from-fresherbot-accent to-fresherbot-info"
              },
              {
                icon: <Coffee className="h-8 w-8 text-white" />,
                title: "Skill Enhancement",
                description: "Practical workshops and projects that build both technical and soft skills employers value.",
                color: "from-fresherbot-info to-fresherbot-success"
              },
              {
                icon: <Users className="h-8 w-8 text-white" />,
                title: "Community Support",
                description: "Join our thriving community of professionals and peers for networking and growth.",
                color: "from-fresherbot-success to-fresherbot-warning"
              },
              {
                icon: <Award className="h-8 w-8 text-white" />,
                title: "Industry Recognition",
                description: "Credentials and certifications that are respected and recognized across industries.",
                color: "from-fresherbot-warning to-fresherbot-primary"
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden group-hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`h-3 bg-gradient-to-r ${feature.color}`}></div>
                  <div className="p-8">
                    <div className={`bg-gradient-to-r ${feature.color} rounded-xl w-14 h-14 flex items-center justify-center mb-5`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                    <div className="mt-6">
                      <Link to="/services" className="inline-flex items-center text-fresherbot-primary font-medium hover:text-fresherbot-secondary">
                        Learn more <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-fresherbot-dark/95 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="px-4 py-1.5 mb-5 bg-white/10 rounded-full text-sm font-medium border border-white/20 inline-block">
                Start Your Journey Today
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Accelerate Your Career Growth?</h2>
              <p className="text-xl mb-10 text-gray-300 max-w-xl">
                Join thousands of successful professionals who launched their careers with FresherBot's comprehensive support system.
              </p>
              
              <div className="space-y-6 mb-8">
                {[
                  "Access to premium job opportunities",
                  "Industry-aligned skill development",
                  "One-on-one career mentorship",
                  "Networking with top employers",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 bg-gradient-to-r from-fresherbot-primary to-fresherbot-secondary rounded-full p-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-fresherbot-dark hover:bg-gray-100 rounded-full px-8 py-6 text-lg" asChild>
                  <Link to="/register">
                    Register Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 bg-transparent border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden relative aspect-video lg:aspect-square shadow-2xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-fresherbot-primary/30 to-fresherbot-accent/30 mix-blend-overlay"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Team of professionals collaborating" 
                  className="object-cover h-full w-full"
                />
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-white text-gray-800 rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="font-bold text-xl mb-2">Join 10,000+ Success Stories</div>
                <p className="text-gray-600 mb-4">Our proven track record speaks for itself with a 97% success rate.</p>
                <Link to="/testimonials" className="text-fresherbot-primary font-medium hover:text-fresherbot-secondary flex items-center">
                  Read success stories <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
