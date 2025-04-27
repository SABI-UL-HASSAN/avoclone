import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <img 
        src="src/assets/background.png" 
        className="absolute inset-0 w-full h-full object-cover object-center"
        alt="Background"
      />

      <motion.div 
        className="relative z-10 text-center px-6 sm:px-8 md:px-16 py-12 md:py-16 flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-2xl mx-auto">
          <h3 className="text-white text-3xl sm:text-4xl font-montserrat font-semibold mb-6 md:mb-8 leading-tight">
            Fill in the brief and get the project estimate
          </h3>
          
          <p className="text-gray-300 text-lg sm:text-xl mb-8">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
          
          {/* CTA Button */}
          <motion.button 
            className="bg-[#FF0000] hover:bg-red-700 text-white font-medium py-3 px-8 rounded-sm transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default CTASection;

