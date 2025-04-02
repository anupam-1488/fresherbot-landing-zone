
import React, { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    // Redirect to Google
    window.location.href = "https://www.google.com";
  }, []);

  // Return a loading message or spinner while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to blog...</p>
    </div>
  );
};

export default Blog;
