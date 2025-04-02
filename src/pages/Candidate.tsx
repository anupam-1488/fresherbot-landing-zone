
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Candidate = () => {
  const candidateOptions = [
    {
      title: "Blog",
      description: "Read our latest articles and updates on career development, interview tips, and industry trends.",
      link: "/candidate/blog",
      external: true
    },
    {
      title: "Programs",
      description: "Explore our training programs designed to equip you with in-demand skills for today's job market.",
      link: "/candidate/programs",
      external: false
    },
    {
      title: "Internships",
      description: "Find internship opportunities across various domains and durations to kickstart your career.",
      link: "/candidate/internships",
      external: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">For Candidates</h1>
        
        <div className="max-w-3xl mb-8">
          <p className="text-lg mb-4">
            FresherBot is designed to help you launch your career successfully. Whether you're 
            looking for training programs, internship opportunities, or valuable career insights, 
            we have resources to support your professional journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          {candidateOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{option.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{option.description}</p>
              </CardContent>
              <CardFooter>
                {option.external ? (
                  <Button className="w-full bg-fresherbot-blue hover:bg-fresherbot-lightBlue" asChild>
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                      Explore {option.title}
                    </a>
                  </Button>
                ) : (
                  <Button className="w-full bg-fresherbot-blue hover:bg-fresherbot-lightBlue" asChild>
                    <Link to={option.link}>
                      Explore {option.title}
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg mt-12">
          <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
          <p className="mb-6">
            Create an account to access personalized recommendations and updates about
            opportunities that match your profile.
          </p>
          <Button size="lg" className="bg-fresherbot-blue hover:bg-fresherbot-lightBlue" asChild>
            <Link to="/register">Register Now</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Candidate;
