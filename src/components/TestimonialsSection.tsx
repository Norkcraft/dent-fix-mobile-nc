
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 5,
      text: "Fast, professional and no paint needed. Incredible work by NC Paintless Dent Repair!",
      author: "Sarah",
      location: "Raleigh"
    },
    {
      rating: 5,
      text: "Fixed my hail dents without me even leaving work. Amazing mobile service!",
      author: "Kevin",
      location: "Smithfield"
    },
    {
      rating: 5,
      text: "My luxury car looks perfect again. These guys know what they're doing.",
      author: "Michael",
      location: "Cary"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-white mb-6">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-800/30 p-8 rounded-lg border border-gray-700/50 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-brand-light-gray text-lg mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="text-white font-montserrat font-semibold">
                – {testimonial.author}, {testimonial.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
