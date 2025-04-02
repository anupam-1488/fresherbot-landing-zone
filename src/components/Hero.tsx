
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import TypedText from "./TypedText";

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
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Building your future?</h1>
          <div className="text-3xl md:text-4xl font-bold mb-8 text-fresherbot-green">
            {showTypedText ? (
              <TypedText text="WE HAVE GOT YOUR BACK" typingSpeed={100} />
            ) : (
              <span>&nbsp;</span>
            )}
          </div>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
            Connect with top companies, colleges, and opportunities tailored for freshers
            and early career professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-fresherbot-blue hover:bg-fresherbot-lightBlue text-white">
              Find Jobs
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
