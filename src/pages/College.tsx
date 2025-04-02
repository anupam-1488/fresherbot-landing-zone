
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const College = () => {
  const collegeOptions = [
    {
      title: "Learning Management System (LMS)",
      description: "Transform your educational institution with our comprehensive Learning Management System designed specifically for colleges and universities.",
      link: "/college/lms"
    },
    {
      title: "Campus Recruitment Training (CRT)",
      description: "Prepare your students for successful campus placements with our comprehensive Campus Recruitment Training program.",
      link: "/college/crt"
    },
    {
      title: "Human Resource Career Center (HRCC)",
      description: "Enhance your placement cell capabilities and provide students with resources they need to secure their dream jobs.",
      link: "/college/hrcc"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">For Colleges</h1>
        
        <div className="max-w-3xl mb-8">
          <p className="text-lg mb-4">
            FresherBot partners with educational institutions to enhance student employability and
            streamline the campus recruitment process. Our solutions are designed to bridge the gap
            between academia and industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          {collegeOptions.map((option, index) => (
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
          <h2 className="text-2xl font-bold mb-4">Join Our College Network</h2>
          <p className="mb-6">
            Partner with FresherBot to provide world-class career services to your students and improve
            your institution's placement record.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-fresherbot-blue hover:bg-fresherbot-lightBlue">
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline">
              Download Brochure
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default College;
