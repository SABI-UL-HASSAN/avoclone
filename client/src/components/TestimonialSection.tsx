import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  content: string;
  author: {
    name: string;
    position: string;
    avatar: string;
  };
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. You know better.",
    author: {
      name: "Roger Scott",
      position: "Marketing Manager",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  },
  {
    id: 2,
    content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. You know better.",
    author: {
      name: "Roger Scott",
      position: "Marketing Manager",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg"
    }
  },
  {
    id: 3,
    content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. You know better.",
    author: {
      name: "Roger Scott",
      position: "Marketing Manager",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  },
  {
    id: 4,
    content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. You know better.",
    author: {
      name: "Roger Scott",
      position: "Marketing Manager",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  }
];

const TestimonialSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-16">CLIENTS SAYS ABOUT US?</h2>
        
        <div className="relative testimonial-slider">
          <AnimatePresence mode="wait">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[0, 1, 2].map((index) => {
                const testimonialIndex = (activeSlide + index) % testimonials.length;
                const testimonial = testimonials[testimonialIndex];
                
                return (
                  <motion.div 
                    key={testimonial.id}
                    className="bg-gray-100 p-8 rounded-sm relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-[#FF0000] text-4xl absolute top-6 left-6">"</div>
                    <p className="text-gray-700 mb-6 pt-8">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.author.avatar} 
                          alt={testimonial.author.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.author.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.author.position}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatePresence>
          
          {/* Slider Dots */}
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <div 
                key={index}
                className={`h-3 rounded-full cursor-pointer transition-all duration-300 testimonial-dot ${activeSlide === index ? 'active w-3 bg-[#FF0000]' : 'w-3 bg-gray-300'}`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
