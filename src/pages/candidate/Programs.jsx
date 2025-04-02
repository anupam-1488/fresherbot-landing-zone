
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Full Stack Development",
      description: "Learn modern web development technologies including React, Node.js, and MongoDB.",
      duration: "12 weeks",
      level: "Intermediate"
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      description: "Master Python, data analysis, statistics and machine learning fundamentals.",
      duration: "10 weeks",
      level: "Beginner to Intermediate"
    },
    {
      id: 3,
      title: "Cloud Architecture",
      description: "Learn AWS, Azure, and Google Cloud Platform fundamentals and architecture patterns.",
      duration: "8 weeks",
      level: "Advanced"
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Learn design principles, user research, wireframing, and prototyping skills.",
      duration: "6 weeks",
      level: "Beginner"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 container mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Our Programs</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Explore our industry-focused training programs designed to equip you with
            in-demand skills for today's competitive job market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{program.title}</CardTitle>
                <CardDescription>Duration: {program.duration} | Level: {program.level}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{program.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-fresherbot-blue hover:bg-fresherbot-lightBlue">
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
