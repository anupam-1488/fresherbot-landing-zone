
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "FresherBot helped me land my first job in tech within just 2 months of completing their program.",
    author: "NTR",
    position: "Software Developer",
    company: "ANDHRA"
  },
  {
    quote: "The training programs are comprehensive and aligned perfectly with industry requirements.",
    author: "NAGA CHAITANYA",
    position: "Data Analyst,PIZZA",
    company: "SCUZI"
  },
  {
    quote: "As an employer, finding qualified freshers has never been easier. The platform provides great talent.",
    author: "RAM CHARAN",
    position: "HR Manager",
    company: "APCFSS"
  },
  {
    quote: "Our college's placement rates improved by 40% after partnering with FresherBot.",
    author: "Dr. SANDEEP REDDY VANGA",
    position: "Placement Director",
    company: "Engineering College"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-fresherbot-green/10 text-fresherbot-green font-medium py-1 px-3 rounded-full text-sm">Testimonials</span>
          <h2 className="text-4xl font-bold mt-3 mb-4">What People Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Hear from our users about how FresherBot has helped them achieve their goals.</p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                <Card className="border-0 shadow-lg bg-white h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote className="h-8 w-8 text-fresherbot-blue/20 mb-4" />
                    <p className="text-lg flex-grow mb-6">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="relative inset-0 translate-y-0 bg-fresherbot-blue text-white hover:bg-fresherbot-lightBlue hover:text-white" />
            <CarouselNext className="relative inset-0 translate-y-0 bg-fresherbot-blue text-white hover:bg-fresherbot-lightBlue hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
