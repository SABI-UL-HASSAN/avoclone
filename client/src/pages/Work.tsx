import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';

interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const workItems: WorkItem[] = [
  {
    id: 1,
    title: "Miniwall Clock",
    category: "Application",
    image: "src/assets/mini-wallclock.png"
  },
  {
    id: 2,
    title: "Avo Portfolio Agency",
    category: "UI/UX",
    image: "src/assets/avo-portfolio.png"
  },
  {
    id: 3,
    title: "Hand Writing",
    category: "Web",
    image: "src/assets/handwriting.png"
  },
  {
    id: 4,
    title: "Keyboard",
    category: "Illustration",
    image: "src/assets/Keyboard.png"
  },
  {
    id: 5,
    title: "Spiral",
    category: "Web",
    image: "src/assets/spiral.png"
  },
  {
    id: 6,
    title: "Creative Dashboard",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const filters = ['All', 'UI/UX', 'Web', 'Application', 'Illustration'];

const WorkPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredItems = activeFilter === 'All'
    ? workItems
    : workItems.filter(item => item.category === activeFilter);

  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      <PageHero 
        title="Our Work" 
        subtitle="Showcase of our best projects and designs."
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-3 my-12">
          {filters.map(filter => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-medium transition duration-300 ${
                activeFilter === filter 
                  ? 'bg-[#FF0000] text-white shadow-lg' 
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-500 bg-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-60 sm:h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{item.category}</p>
                <button className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black rounded-full transition-all duration-300">
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
