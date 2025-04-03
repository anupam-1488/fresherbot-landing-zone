import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import TypedText from "./TypedText";
import { ChevronRight, Sparkles, Award, Users } from "lucide-react";

const Hero = () => {
  const [showTypedText, setShowTypedText] = useState(false);

  useEffect(() => {
    // Start typing animation after a short delay
    const timer = setTimeout(() => {
      setShowTypedText(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-13rem)] flex flex-col justify-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')",
          backgroundPosition: "center 30%",
          backgroundSize: "cover", // Ensure the image covers the entire area
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <div className="inline-flex items-center mb-6 bg-fresherbot-blue/20 backdrop-blur-sm py-2 px-4 rounded-full">
            <Sparkles className="h-4 w-4 mr-2 text-fresherbot-green" />
            <span className="text-sm font-medium">
              Join 10,000+ freshers already on board
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Building your <span className="text-fresherbot-green">future?</span>
          </h1>

          <div className="text-3xl md:text-5xl font-bold mb-8 text-fresherbot-blue">
            {showTypedText ? (
              <TypedText text=" WE HAVE GOT YOUR BACK" typingSpeed={70} />
            ) : (
              <span>&nbsp;</span>
            )}
          </div>

          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl leading-relaxed">
            Connect with top companies, colleges, and opportunities tailored for
            freshers and early career professionals.
          </p>

          {/* NO CLARITY REGARDING THIS BUTTONS HAVE TO ASK AND REDIRECT */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-fresherbot-green hover:bg-fresherbot-green/90 text-white px-8 py-6 text-lg flex items-center transition-all shadow-lg shadow-fresherbot-green/20"
            >
              Find Jobs
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-black hover:bg-white/20 px-8 py-6 text-lg transition-all"
            >
              Learn More
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 md:gap-8">
            <div className="flex items-center">
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                <Award className="h-5 w-5 text-fresherbot-green" />
              </div>
              <span className="ml-2 text-sm md:text-base">300+ Programs</span>
            </div>
            <div className="flex items-center">
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                <Users className="h-5 w-5 text-fresherbot-blue" />
              </div>
              <span className="ml-2 text-sm md:text-base">500+ Employers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave overlay at bottom of hero--just white one not asked but done */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto"
        >
          <path
            fill="#f8f9fa"
            fillOpacity="1"
            d="M0,80L60,83C120,86,240,90,360,83C480,76,600,60,720,55C840,50,960,60,1080,70C1200,80,1320,85,1380,88L1440,90L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;