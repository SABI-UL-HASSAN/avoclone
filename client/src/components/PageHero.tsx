import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

/**
 * PageHero component displays a hero section with a background image
 * Used on internal pages (About, Blog, Work, Contact)
 */
const PageHero = ({ title, subtitle, children }: PageHeroProps) => {
  return (
    <section 
      className="relative bg-black py-32 mb-20"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.8)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-white">{title}</h1>
          {subtitle && (
            <p className="text-gray-300">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;