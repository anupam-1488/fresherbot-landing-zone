
import React, { useEffect } from "react";
import { Loader2 } from "lucide-react";

const Blog = () => {
  useEffect(() => {
    // Redirect to Google after a short delay
    const timer = setTimeout(() => {
      window.location.href = "https://www.google.com";
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Show a loading spinner while redirecting
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-100">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-fresherbot-blue mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Redirecting to our blog</h1>
        <p className="text-gray-600">Please wait a moment...</p>
      </div>
    </div>
  );
};

export default Blog;
