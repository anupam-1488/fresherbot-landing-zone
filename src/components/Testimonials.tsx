
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "FresherBot helped me land my first job in tech within just 2 months of completing their program.",
    author: "NTR",
    position: "Software Developer",
    company: "TechCorp",
    stars: 5
  },
  {
    quote: "The training programs are comprehensive and aligned perfectly with industry requirements.",
    author: "Rahul Kumar",
    position: "Data Analyst",
    company: "Analytics Inc.",
    stars: 5
  },
  {
    quote: "As an employer, finding qualified freshers has never been easier. The platform provides great talent.",
    author: "RAM CHARAN",
    position: "HR Manager",
    company: "InnovateTech",
    stars: 5
  },
  {
    quote: "Our college's placement rates improved by 40% after partnering with FresherBot.",
    author: "Dr. SANDEEP REDDY VANGA",
    position: "Placement Director",
    company: "Engineering College",
    stars: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-fresherbot-success/10 to-fresherbot-success/20 text-fresherbot-success mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.span>
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="heading-gradient">What People Say</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Hear from our users about how FresherBot has helped them achieve their goals.
          </motion.p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-xl rounded-2xl bg-white h-full">
                    <div className="p-8 flex flex-col h-full">
                      <div className="mb-4">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} className="inline-block h-5 w-5 text-fresherbot-warning fill-fresherbot-warning mr-1" />
                        ))}
                      </div>
                      <Quote className="h-10 w-10 text-fresherbot-primary/20 mb-4" />
                      <p className="text-lg flex-grow mb-6">"{testimonial.quote}"</p>
                      <div className="flex items-center mt-auto">
                        <div className="w-12 h-12 bg-fresherbot-primary/10 rounded-full flex items-center justify-center text-xl font-bold text-fresherbot-primary mr-3">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="relative inset-0 translate-y-0 bg-gradient-to-r from-fresherbot-primary to-fresherbot-secondary text-white hover:opacity-90" />
            <CarouselNext className="relative inset-0 translate-y-0 bg-gradient-to-r from-fresherbot-primary to-fresherbot-secondary text-white hover:opacity-90" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
