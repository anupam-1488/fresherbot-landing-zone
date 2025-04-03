
import React from "react";
import { 
  BookOpen, 
  Cpu, 
  Users, 
  Network, 
  GraduationCap 
} from "lucide-react";

const HowWeDoIt = () => {
  const methodologies = [
    {
      icon: <BookOpen className="h-10 w-10 text-fresherbot-blue" />,
      title: "Well-Defined Teaching Methodology",
      description: "Our structured curriculum follows industry standards with practical projects, ensuring you gain relevant skills through hands-on experience and real-world problem solving.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-fresherbot-green" />,
      title: "Tech-Enabled Learning & AI Skills",
      description: "Stay ahead with cutting-edge technology training and AI-powered learning tools that adapt to your progress, offering personalized paths to master in-demand skills.",
    },
    {
      icon: <Users className="h-10 w-10 text-fresherbot-blue" />,
      title: "Mentorship & Guidance",
      description: "Connect with industry experts who provide personalized guidance, feedback on your projects, and career advice to help you navigate your professional journey.",
    },
    {
      icon: <Network className="h-10 w-10 text-fresherbot-green" />,
      title: "Network Access & Leverage",
      description: "Gain access to our extensive network of alumni, industry professionals, and corporate partners, opening doors to opportunities through meaningful connections.",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-fresherbot-blue" />,
      title: "Leadership & Personal Development",
      description: "Develop essential soft skills, emotional intelligence, and leadership qualities through workshops, team projects, and personalized coaching sessions.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-fresherbot-blue/10 text-fresherbot-blue font-medium py-1 px-3 rounded-full text-sm inline-block mb-3">Our Approach</span>
          <h2 className="text-4xl font-bold mb-4">How We Do It</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive approach combines cutting-edge technology, industry expertise, and personalized guidance to ensure your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {methodologies.map((item, index) => (
            <div key={index} className="relative group">
              <div className="bg-gray-50 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100">
                <div className="bg-white p-3 rounded-lg shadow-sm inline-block mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-1 rounded-lg bg-gray-50">
            <div className="bg-fresherbot-green text-white px-4 py-2 rounded-md font-medium">
              97% Success Rate
            </div>
            <div className="px-4">
              <span className="block text-sm text-gray-500">Our students consistently achieve their career goals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
