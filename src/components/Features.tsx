
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6">
            • OUR JOURNEY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
            Features look good, but you<br />haven't heard of us?
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-blue-100 rounded-3xl p-10 flex flex-col h-full"
          >
            <div className="mb-4">
              <h3 className="text-3xl font-bold text-gray-900">150,000+</h3>
              <h4 className="text-xl font-bold text-gray-900">Candidates</h4>
              <p className="text-xl font-bold text-gray-900">500+</p>
              <p className="text-xl font-bold text-gray-900">Teams trust FresherBot</p>
            </div>
            <div className="mt-auto">
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full"
                asChild
              >
                <Link to="/reviews">
                  See Reviews
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-purple-100 rounded-3xl p-10 flex flex-col h-full"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Top-rated</h3>
              <p className="text-xl text-gray-900">on G2 Globally for Talent Assessments</p>
            </div>
            <div className="mt-auto">
              <Button 
                className="bg-purple-500 hover:bg-purple-600 text-white rounded-full"
                asChild
              >
                <Link to="/rankings">
                  View G2 Ranking
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
          
          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-yellow-100 rounded-3xl p-10 flex flex-col h-full"
          >
            <div className="mb-4">
              <h3 className="text-3xl font-bold text-gray-900">100+</h3>
              <p className="text-xl text-gray-900">Companies have switched to FresherBot</p>
            </div>
            <div className="mt-auto">
              <Button 
                className="bg-amber-500 hover:bg-amber-600 text-white rounded-full"
                asChild
              >
                <Link to="/customers">
                  View Our Customers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl font-medium text-gray-900">Funded by <span className="bg-black text-white px-3 py-1">Better</span></p>
        </div>
      </div>
    </section>
  );
};

export default Features;
