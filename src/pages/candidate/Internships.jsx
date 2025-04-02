
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Internships = () => {
  const [activeTab, setActiveTab] = useState("long-term");
  
  const longTermInternships = [
    {
      id: 1,
      title: "Software Development Engineer",
      company: "TechCorp Inc.",
      location: "Hyderabad",
      duration: "6 months",
      stipend: "₹25,000/month",
      apsce: true,
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Data Analyst Intern",
      company: "Analytics Hub",
      location: "Bangalore",
      duration: "6 months",
      stipend: "₹20,000/month",
      apsce: true,
      tags: ["Python", "SQL", "Tableau"]
    },
    {
      id: 3,
      title: "DevOps Engineer Intern",
      company: "CloudSys Technologies",
      location: "Chennai",
      duration: "6 months",
      stipend: "₹22,000/month",
      apsce: false,
      tags: ["AWS", "Docker", "Jenkins"]
    }
  ];
  
  const shortTermInternships = [
    {
      id: 1,
      title: "UI/UX Design Intern",
      company: "DesignX Studios",
      location: "Remote",
      duration: "2 months",
      stipend: "₹15,000/month",
      apsce: false,
      tags: ["Figma", "Adobe XD", "User Research"]
    },
    {
      id: 2,
      title: "Digital Marketing Intern",
      company: "GrowthGen",
      location: "Delhi",
      duration: "3 months",
      stipend: "₹12,000/month",
      apsce: true,
      tags: ["SEO", "Social Media", "Analytics"]
    },
    {
      id: 3,
      title: "Content Writing Intern",
      company: "ContentFirst",
      location: "Remote",
      duration: "2 months",
      stipend: "₹10,000/month",
      apsce: false,
      tags: ["Blogging", "Copywriting", "SEO Writing"]
    }
  ];
  
  const apsceInternships = [
    {
      id: 1,
      title: "ML Engineer Intern",
      company: "AI Solutions",
      location: "Hyderabad",
      duration: "6 months",
      stipend: "₹25,000/month",
      apsce: true,
      tags: ["Python", "TensorFlow", "Computer Vision"]
    },
    {
      id: 2,
      title: "Data Analyst Intern",
      company: "Analytics Hub",
      location: "Bangalore",
      duration: "6 months",
      stipend: "₹20,000/month",
      apsce: true,
      tags: ["Python", "SQL", "Tableau"]
    },
    {
      id: 3,
      title: "Digital Marketing Intern",
      company: "GrowthGen",
      location: "Delhi",
      duration: "3 months",
      stipend: "₹12,000/month",
      apsce: true,
      tags: ["SEO", "Social Media", "Analytics"]
    }
  ];
  
  const renderInternships = (internships) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {internships.map((internship) => (
          <Card key={internship.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{internship.title}</CardTitle>
                  <CardDescription className="mt-2">{internship.company}</CardDescription>
                </div>
                {internship.apsce && (
                  <Badge className="bg-fresherbot-green">APSCHE Approved</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><span className="font-medium">Location:</span> {internship.location}</p>
                <p><span className="font-medium">Duration:</span> {internship.duration}</p>
                <p><span className="font-medium">Stipend:</span> {internship.stipend}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {internship.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-fresherbot-blue hover:bg-fresherbot-lightBlue">
                Apply Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 container mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Internship Opportunities</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Find the perfect internship opportunity to kickstart your career. We offer a wide range
            of internships across various domains and durations.
          </p>
        </div>
        
        <Tabs defaultValue="long-term" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="long-term">Long-term Internships</TabsTrigger>
            <TabsTrigger value="short-term">Short-term Internships</TabsTrigger>
            <TabsTrigger value="apsche">APSCHE Approved</TabsTrigger>
          </TabsList>
          
          <TabsContent value="long-term">
            {renderInternships(longTermInternships)}
          </TabsContent>
          
          <TabsContent value="short-term">
            {renderInternships(shortTermInternships)}
          </TabsContent>
          
          <TabsContent value="apsche">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">APSCHE Approved Internships</h2>
              <p className="text-gray-600">
                These internships are officially approved by the Andhra Pradesh State Council of Higher Education (APSCHE)
                and can be counted towards your academic credits.
              </p>
            </div>
            {renderInternships(apsceInternships)}
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Internships;
