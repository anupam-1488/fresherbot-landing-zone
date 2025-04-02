
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const CRT = () => {
  const crtModules = [
    {
      id: 1,
      title: "Aptitude Training",
      description: "Comprehensive preparation for quantitative aptitude, logical reasoning, and verbal ability tests.",
      features: [
        "Practice tests with company-specific patterns",
        "Time management strategies",
        "Video tutorials for complex topics",
        "Regular mock tests"
      ]
    },
    {
      id: 2,
      title: "Technical Training",
      description: "Domain-specific training for programming, data structures, algorithms, and other technical subjects.",
      features: [
        "Hands-on coding sessions",
        "Industry-relevant projects",
        "Expert-led workshops",
        "Technical assessment preparation"
      ]
    },
    {
      id: 3,
      title: "Soft Skills Development",
      description: "Essential communication and interpersonal skills training required for corporate success.",
      features: [
        "Group discussion practice",
        "Interview preparation",
        "Business communication",
        "Personality development"
      ]
    },
    {
      id: 4,
      title: "HR Interview Preparation",
      description: "Comprehensive preparation for HR rounds with mock interviews and feedback sessions.",
      features: [
        "Common HR questions and answers",
        "Resume building workshops",
        "Body language training",
        "Stress interview practice"
      ]
    }
  ];
  
  const statistics = [
    { value: "85%", label: "Placement Rate" },
    { value: "200+", label: "Partner Companies" },
    { value: "50,000+", label: "Students Trained" },
    { value: "300+", label: "College Partners" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Campus Recruitment Training (CRT)</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Prepare your students for successful campus placements with our comprehensive
            Campus Recruitment Training program. Our industry-aligned training modules help
            students build the skills that employers are looking for.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-fresherbot-blue">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Our CRT Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {crtModules.map((module) => (
              <Card key={module.id}>
                <CardHeader>
                  <CardTitle>{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="font-medium mb-2">Key Components:</h3>
                  <ul className="space-y-1">
                    {module.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-fresherbot-blue mr-2"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Program Timeline</h2>
          <div className="relative border-l-2 border-fresherbot-blue pl-8 space-y-12">
            <div>
              <div className="absolute -left-3 mt-1.5">
                <div className="h-6 w-6 rounded-full border-2 border-fresherbot-blue bg-white flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-fresherbot-blue"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Phase 1: Foundation Building</h3>
                <p className="text-gray-600 mt-1">4 weeks</p>
                <p className="mt-2">
                  Focus on fundamental concepts in aptitude, logical reasoning, and verbal ability.
                  Introduction to technical subjects relevant to the students' domains.
                </p>
              </div>
            </div>
            
            <div>
              <div className="absolute -left-3 mt-1.5">
                <div className="h-6 w-6 rounded-full border-2 border-fresherbot-blue bg-white flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-fresherbot-blue"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Phase 2: Skill Enhancement</h3>
                <p className="text-gray-600 mt-1">6 weeks</p>
                <p className="mt-2">
                  Deep dive into advanced topics, hands-on projects, and regular practice tests.
                  Introduction to soft skills training and interview preparation.
                </p>
              </div>
            </div>
            
            <div>
              <div className="absolute -left-3 mt-1.5">
                <div className="h-6 w-6 rounded-full border-2 border-fresherbot-blue bg-white flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-fresherbot-blue"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Phase 3: Mock Assessments</h3>
                <p className="text-gray-600 mt-1">2 weeks</p>
                <p className="mt-2">
                  Full-length mock tests simulating actual company assessment patterns.
                  Group discussion and mock interview sessions with detailed feedback.
                </p>
              </div>
            </div>
            
            <div>
              <div className="absolute -left-3 mt-1.5">
                <div className="h-6 w-6 rounded-full border-2 border-fresherbot-blue bg-white flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-fresherbot-blue"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Phase 4: Company-Specific Preparation</h3>
                <p className="text-gray-600 mt-1">Ongoing</p>
                <p className="mt-2">
                  Targeted preparation for specific companies visiting the campus.
                  Company-specific mock tests and interview preparation.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-fresherbot-blue text-white p-8 rounded-lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Partner with Us</h2>
            <p className="text-lg mb-6">
              Enhance your students' placement opportunities with our proven Campus Recruitment Training program.
              Let's work together to prepare your students for successful careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-fresherbot-blue hover:bg-gray-100">
                Schedule a Meeting
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-fresherbot-blue">
                Request Brochure
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CRT;
