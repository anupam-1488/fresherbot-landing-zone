
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Employer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">For Employers</h1>
        <p className="text-lg mb-4">This page is under construction.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Employer;
