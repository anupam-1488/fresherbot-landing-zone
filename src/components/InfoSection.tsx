
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Building, GraduationCap } from "lucide-react";

const InfoSection = () => {
  const userGroups = [
    {
      title: "For Candidates",
      description: "Find your dream job, build your professional profile, and connect with employers looking for fresh talent.",
      icon: <Users className="w-10 h-10 text-fresherbot-blue" />,
      link: "/candidate",
    },
    {
      title: "For Employers",
      description: "Discover talented freshers, streamline your hiring process, and build your company's future workforce.",
      icon: <Building className="w-10 h-10 text-fresherbot-green" />,
      link: "/employer",
    },
    {
      title: "For Colleges",
      description: "Help your students find opportunities and track their placement success through our dedicated portal.",
      icon: <GraduationCap className="w-10 h-10 text-fresherbot-lightBlue" />,
      link: "/college",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Who We Serve</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {userGroups.map((group, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{group.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{group.title}</h3>
              <p className="text-gray-600 mb-4">{group.description}</p>
              <Button variant="link" className="p-0 text-fresherbot-blue group" asChild>
                <Link to={group.link} className="flex items-center">
                  Learn More 
                  <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
