
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Code, Building, ChartBar } from "lucide-react";
import { motion } from "framer-motion";

const Employer = () => {
  const employerOptions = [
    {
      title: "Hiring Assessments",
      description: "Create customized assessments to evaluate candidates efficiently on skills that matter for your roles.",
      link: "/employer/hiring-assessments",
      icon: <ChartBar className="h-6 w-6 text-fresherbot-blue" />
    },
    {
      title: "Hackathon",
      description: "Organize or participate in hackathons designed to identify exceptional tech talent.",
      link: "/employer/hackathon",
      icon: <Code className="h-6 w-6 text-fresherbot-blue" />
    },
    {
      title: "Campus Hiring",
      description: "Connect with top talent from colleges across India through our streamlined campus recruitment platform.",
      link: "/employer/campus-hiring",
      icon: <Building className="h-6 w-6 text-fresherbot-blue" />
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl mb-12 shadow-sm">
          <h1 className="text-4xl font-bold mb-6" style={{color: 'rgb(3 105 161)'}}>For Employers</h1>
          
          <div className="max-w-3xl mb-8">
            <p className="text-lg mb-4">
              FresherBot helps companies streamline their recruitment process and find the best talent.
              Our solutions are designed to make hiring efficient, cost-effective, and result-oriented.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <Briefcase className="h-6 w-6 text-fresherbot-blue" />
              <span className="font-medium">Trusted by 500+ companies for their talent acquisition needs</span>
            </div>
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {employerOptions.map((option, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader className="pb-2">
                  <div className="bg-blue-50 inline-flex p-3 rounded-lg mb-4">
                    {option.icon}
                  </div>
                  <CardTitle>{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{option.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-fresherbot-blue hover:bg-fresherbot-lightBlue" asChild>
                    <Link to={option.link}>
                      Explore {option.title}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="bg-gradient-to-r from-fresherbot-blue to-fresherbot-lightBlue p-8 rounded-lg mt-12 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Partner with Us</h2>
          <p className="mb-6">
            Join hundreds of companies that trust FresherBot for their recruitment needs.
            Let us help you build a strong talent pipeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-fresherbot-blue hover:bg-gray-100">
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Employer;
