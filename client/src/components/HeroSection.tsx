import { useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };
  
  return (
    <section 
      className="relative bg-black min-h-screen flex items-center pt-20"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.8)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white font-montserrat font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
              WE CREATE<br />
              MODERN &<br />
              MINIMAL WEBSITE
            </h1>
            <p className="text-gray-300 mb-8 max-w-md">
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
            <button className="bg-[#FF0000] hover:bg-red-700 text-white font-medium py-3 px-8 rounded-sm transition duration-300">
              Start Project
            </button>
          </motion.div>
          
          <motion.div 
            className="text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="inline-block relative">
              <span className="text-white font-montserrat font-bold text-6xl md:text-7xl">
                {currentSlide === 0 ? '400' : '131'}
              </span>
              <span className="absolute top-0 right-0 h-16 w-1 bg-[#FF0000] md:h-20"></span>
              <p className="text-gray-300 mt-2 text-sm">
                More than a<br />
                hundred successful<br />
                projects
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <motion.button 
            className="w-14 h-14 rounded-full bg-[#FF0000] flex items-center justify-center focus:outline-none hover:bg-red-700 transition duration-300" 
            aria-label="Play video"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 5v10l7-5-7-5z"></path>
            </svg>
          </motion.button>
        </div>
        
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div 
            className={`w-2 h-2 rounded-full cursor-pointer ${currentSlide === 0 ? 'bg-white' : 'bg-gray-500'}`}
            onClick={() => handleDotClick(0)}
          ></div>
          <div 
            className={`w-2 h-2 rounded-full cursor-pointer ${currentSlide === 1 ? 'bg-white' : 'bg-gray-500'}`}
            onClick={() => handleDotClick(1)}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
