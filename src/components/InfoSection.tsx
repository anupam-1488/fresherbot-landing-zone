
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Building, GraduationCap, Cpu, Award, Globe } from "lucide-react";

const InfoSection = () => {
  const userGroups = [
    {
      title: "For Candidates",
      description: "Find your dream job, build your professional profile, and connect with employers looking for fresh talent.",
      icon: <Users className="w-12 h-12 text-fresherbot-blue" />,
      link: "/candidate",
      bgClass: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
    },
    {
      title: "For Employers",
      description: "Discover talented freshers, streamline your hiring process, and build your company's future workforce.",
      icon: <Building className="w-12 h-12 text-fresherbot-green" />,
      link: "/employer",
      bgClass: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
    },
    {
      title: "For Colleges",
      description: "Help your students find opportunities and track their placement success through our dedicated portal.",
      icon: <GraduationCap className="w-12 h-12 text-fresherbot-lightBlue" />,
      link: "/college",
      bgClass: "bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-900/20 dark:to-sky-800/20",
    },
  ];

  const features = [
    {
      title: "Latest Technology",
      description: "Built with cutting-edge technologies to provide a seamless experience.",
      icon: <Cpu className="w-10 h-10 text-fresherbot-blue" />,
    },
    {
      title: "Quality Programs",
      description: "Well-structured programs designed by industry experts.",
      icon: <Award className="w-10 h-10 text-fresherbot-green" />,
    },
    {
      title: "Global Reach",
      description: "Connect with opportunities from companies worldwide.",
      icon: <Globe className="w-10 h-10 text-fresherbot-lightBlue" />,
    },
  ];

  return (
    <>
      <section className=" bg-gray-50 z-11">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-fresherbot-blue/10 text-fresherbot-blue font-medium py-1 px-3 rounded-full text-sm">Our Services</span>
            <h2 className="text-4xl font-bold mt-3 mb-4">Who We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Empowering careers, businesses and educational institutions through our specialized services.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {userGroups.map((group, index) => (
              <div 
                key={index} 
                className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition-all ${group.bgClass} border border-white`}
              >
                <div className="mb-5 inline-block">{group.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{group.title}</h3>
                <p className="text-gray-600 mb-6 text-base">{group.description}</p>
                <Button variant="ghost" className="pl-0 text-fresherbot-blue group flex items-center font-medium" asChild>
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
    
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-fresherbot-green/10 rounded-lg z-0"></div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-fresherbot-blue/10 rounded-lg z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Student Success" 
                className="rounded-lg shadow-xl relative z-10 w-full h-auto object-cover"
              />
            </div>
            
            <div>
              <span className="bg-fresherbot-green/10 text-fresherbot-green font-medium py-1 px-3 rounded-full text-sm">Why Choose Us</span>
              <h2 className="text-3xl font-bold mt-3 mb-6">Empowering Your Career Journey</h2>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gray-100 p-3 rounded-lg mr-4">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

                 {/* NO CLARITY REGARDING THIS BUTTONS HAVE TO ASK AND REDIRECT */}
              <Button className="mt-8 bg-fresherbot-blue hover:bg-fresherbot-lightBlue text-white px-6" asChild>
                <Link to="/register">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSection;
