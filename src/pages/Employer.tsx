
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Employer = () => {
  const employerOptions = [
    {
      title: "Hiring Assessments",
      description: "Create customized assessments to evaluate candidates efficiently on skills that matter for your roles.",
      link: "/employer/hiring-assessments"
    },
    {
      title: "Hackathon",
      description: "Organize or participate in hackathons designed to identify exceptional tech talent.",
      link: "/employer/hackathon"
    },
    {
      title: "Campus Hiring",
      description: "Connect with top talent from colleges across India through our streamlined campus recruitment platform.",
      link: "/employer/campus-hiring"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">For Employers</h1>
        
        <div className="max-w-3xl mb-8">
          <p className="text-lg mb-4">
            FresherBot helps companies streamline their recruitment process and find the best talent.
            Our solutions are designed to make hiring efficient, cost-effective, and result-oriented.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          {employerOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{option.title}</CardTitle>
              </CardHeader>
              <CardContent>
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
          ))}
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg mt-12">
          <h2 className="text-2xl font-bold mb-4">Partner with Us</h2>
          <p className="mb-6">
            Join hundreds of companies that trust FresherBot for their recruitment needs.
            Let us help you build a strong talent pipeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-fresherbot-blue hover:bg-fresherbot-lightBlue">
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline">
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
