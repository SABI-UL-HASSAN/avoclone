// import { motion } from 'framer-motion';
// import { ReactNode } from 'react';
// import KeyboardIcon from '../assets/icons/KeyboardIcon';
// import SpiralIcon from '../assets/icons/SpiralIcon';

// interface ProjectProps {
//   title: string;
//   category: string;
//   description: string;
//   image: string;
//   author: {
//     name: string;
//     position: string;
//     avatar: string;
//   };
//   isReversed?: boolean;
//   icon?: ReactNode;
// }

// const ProjectItem = ({ 
//   title, 
//   category, 
//   description, 
//   image, 
//   author, 
//   isReversed = false,
//   icon
// }: ProjectProps) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20">
//       <div className={`order-2 ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
//         {icon ? (
//           <div className="w-full flex justify-center">
//             {icon}
//           </div>
//         ) : (
//           <img 
//             src={image} 
//             alt={title} 
//             className="w-full rounded-sm shadow-lg"
//           />
//         )}
//       </div>
      
//       <div className={`order-1 ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
//         <span className="text-gray-500 text-sm uppercase tracking-wide">{category}</span>
//         <h2 className="text-4xl font-montserrat font-bold mt-2 mb-4">{title}</h2>
//         <p className="text-gray-600 mb-6">
//           {description}
//         </p>
        
//         <div className="flex items-center mb-6">
//           <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
//             <img 
//               src={author.avatar} 
//               alt={author.name} 
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div>
//             <h4 className="font-bold">{author.name}</h4>
//             <p className="text-sm text-gray-500">{author.position}</p>
//           </div>
//         </div>
        
//         <motion.a 
//           href="#" 
//           className="inline-block border border-gray-300 px-6 py-2 text-sm uppercase tracking-wide hover:bg-gray-50 transition duration-300"
//           whileHover={{ y: -2 }}
//           whileTap={{ y: 0 }}
//         >
//           VIEW PORTFOLIO
//         </motion.a>
//       </div>
//     </div>
//   );
// };

// const ProjectSection = () => {
//   const projects = [
//     {
//       title: "Keyboard",
//       category: "Illustration",
//       description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//       image: "src/assets/Keyboard.png",
//       author: {
//         name: "Jamie Jonson",
//         position: "AVO.COM",
//         avatar: "https://randomuser.me/api/portraits/men/32.jpg"
//       },
//       isReversed: false,
//       // icon: <KeyboardIcon />
//     },
//     {
//       title: "Spiral",
//       category: "Web Development",
//       description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//       image: "https://images.unsplash.com/photo-1562619374-b683d83e9000?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       author: {
//         name: "Jamie Jonson",
//         position: "AVO.COM",
//         avatar: "https://randomuser.me/api/portraits/men/32.jpg"
//       },
//       isReversed: true,
//       icon: <SpiralIcon />
//     },
//     {
//       title: "Miniwall Clock",
//       category: "Application",
//       description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//       image: "https://images.unsplash.com/photo-1507098926914-89e42066ef88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       author: {
//         name: "Jamie Jonson",
//         position: "AVO.COM",
//         avatar: "https://randomuser.me/api/portraits/men/32.jpg"
//       },
//       isReversed: true
//     },
//     {
//       title: "Avo Portfolio Agency",
//       category: "UI/UX Design",
//       description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//       image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       author: {
//         name: "Jamie Jonson",
//         position: "AVO.COM",
//         avatar: "https://randomuser.me/api/portraits/men/32.jpg"
//       },
//       isReversed: false
//     },
//     {
//       title: "Hand Writing",
//       category: "Web Development",
//       description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//       image: "https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       author: {
//         name: "Jamie Jonson",
//         position: "AVO.COM",
//         avatar: "https://randomuser.me/api/portraits/men/32.jpg"
//       },
//       isReversed: true
//     }
//   ];

//   return (
//     <section className="relative">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {projects.map((project, index) => (
//           <ProjectItem 
//             key={index}
//             title={project.title}
//             category={project.category}
//             description={project.description}
//             image={project.image}
//             author={project.author}
//             isReversed={project.isReversed}
//             icon={project.icon}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectSection;
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import KeyboardIcon from '../assets/icons/KeyboardIcon';
import SpiralIcon from '../assets/icons/SpiralIcon';

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  image: string;
  author: {
    name: string;
    position: string;
    avatar: string;
  };
  isReversed?: boolean;
  icon?: ReactNode;
}

const ProjectItem = ({ 
  title, 
  category, 
  description, 
  image, 
  author, 
  isReversed = false,
  icon
}: ProjectProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20">
      {/* Conditionally apply order classes for alternating layout */}
      <div className={`order-2 ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
        {icon ? (
          <div className="w-full flex justify-center items-center">
            {icon}
          </div>
        ) : (
          <div className="w-full flex justify-center items-center">
            <img 
              src={image} 
              alt={title} 
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '400px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
              }}
            />
          </div>
        )}
      </div>
      
      <div className={`order-1 ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
        <span className="text-gray-500 text-sm uppercase tracking-wide">{category}</span>
        <h2 className="text-4xl font-montserrat font-bold mt-2 mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img 
              src={author.avatar} 
              alt={author.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold">{author.name}</h4>
            <p className="text-sm text-gray-500">{author.position}</p>
          </div>
        </div>
        
        <motion.a 
          href="#" 
          className="inline-block border border-gray-300 px-6 py-2 text-sm uppercase tracking-wide hover:bg-gray-50 transition duration-300"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          VIEW PORTFOLIO
        </motion.a>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  const projects = [
    {
      title: "Keyboard",
      category: "Illustration",
      description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "src/assets/Keyboard.png",
      author: {
        name: "Jamie Jonson",
        position: "AVO.COM",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      isReversed: false,
      // icon: <KeyboardIcon />
    },
    {
      title: "Spiral",
      category: "Web Development",
      description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "src/assets/Spiral.png",
      author: {
        name: "Jamie Jonson",
        position: "AVO.COM",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      isReversed: true,
      icon: <SpiralIcon />
    },
    {
      title: "Miniwall Clock",
      category: "Application",
      description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "src/assets/mini-wallclock.png",
      author: {
        name: "Jamie Jonson",
        position: "AVO.COM",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      isReversed: true
    },
    {
      title: "Avo Portfolio Agency",
      category: "UI/UX Design",
      description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "src/assets/avo-portfolio.png",
      author: {
        name: "Jamie Jonson",
        position: "AVO.COM",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      isReversed: false
    },
    {
      title: "Hand Writing",
      category: "Web Development",
      description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "src/assets/handwriting.png",
      author: {
        name: "Jamie Jonson",
        position: "AVO.COM",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      isReversed: true
    }
  ];

  return (
    <section className="relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {projects.map((project, index) => (
          <ProjectItem 
            key={index}
            title={project.title}
            category={project.category}
            description={project.description}
            image={project.image}
            author={project.author}
            isReversed={project.isReversed}
            icon={project.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;

// import { motion } from 'framer-motion';
// import { ReactNode } from 'react';
// import KeyboardIcon from '../assets/icons/KeyboardIcon';
// import SpiralIcon from '../assets/icons/SpiralIcon';

// interface ProjectProps {
//   title: string;
//   category: string;
//   description: string;
//   image: string;
//   author: {
//     name: string;
//     position: string;
//     avatar: string;
//   };
//   isReversed?: boolean;
//   icon?: ReactNode;
// }

// const ProjectItem = ({ 
//   title, 
//   category, 
//   description, 
//   image, 
//   author, 
//   isReversed = false,
//   icon
// }: ProjectProps) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20">
//       <div className={`order-2 ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
//         {icon ? (
//           <div className="w-full flex justify-center">
//             {icon}
//           </div>
//         ) : (
//           <img 
//             src={image} 
//             alt={title} 
//             style={{ width: '100%', height: 'auto', maxWidth: '400px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
//           />
//         )}
//       </div>
      
//       <div className={`order-1 ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
//         <span className="text-gray-500 text-sm uppercase tracking-wide">{category}</span>
//         <h2 className="text-4xl font-montserrat font-bold mt-2 mb-4">{title}</h2>
//         <p className="text-gray-600 mb-6">
//           {description}
//         </p>
        
//         <div className="flex items-center mb-6">
//           <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
//             <img 
//               src={author.avatar} 
//               alt={author.name} 
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div>
//             <h4 className="font-bold">{author.name}</h4>
//             <p className="text-sm text-gray-500">{author.position}</p>
//           </div>
//         </div>
        
//         <motion.a 
//           href="#" 
//           className="inline-block border border-gray-300 px-6 py-2 text-sm uppercase tracking-wide hover:bg-gray-50 transition duration-300"
//           whileHover={{ y: -2 }}
//           whileTap={{ y: 0 }}
//         >
//           VIEW PORTFOLIO
//         </motion.a>
//       </div>
//     </div>
//   );
// };

// const ProjectSection = () => {
//   const projects = [
//     {
//       title: "Keyboard",
//       category: "Illustration",
//       description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//       image: "src/assets/Keyboard.png",
//       author: {
//         name: "Jamie Jonson",
//         position: "AVO.COM",
//         avatar: "https://randomuser.me/api/portraits/men/32.jpg"
//       },
//       isReversed: false,
//       // icon: <KeyboardIcon />
//     },
//     {
//       title: "Spiral",
//       category: "Web Development",
//       description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//       image: "https://images.unsplash.com/photo-1562619374-b683d83e9000?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       author: {
//         name: "Jamie Jonson",
//         position: "AVO.COM",
//         avatar: "https://randomuser.me/api/portraits/men/32.jpg"
//       },
//       isReversed: true,
//       icon: <SpiralIcon />
//     },
//     {
//       title: "Miniwall Clock",
//       category: "Application",
//       description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//       image: "https://images.unsplash.com/photo-1507098926914-89e42066ef88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       author: {
//         name: "Jamie Jonson",
//         position: "AVO.COM",
//         avatar: "https://randomuser.me/api/portraits/men/32.jpg"
//       },
//       isReversed: true
//     },
//     {
//       title: "Avo Portfolio Agency",
//       category: "UI/UX Design",
//       description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//       image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       author: {
//         name: "Jamie Jonson",
//         position: "AVO.COM",
//         avatar: "https://randomuser.me/api/portraits/men/32.jpg"
//       },
//       isReversed: false
//     },
//     {
//       title: "Hand Writing",
//       category: "Web Development",
//       description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//       image: "https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       author: {
//         name: "Jamie Jonson",
//         position: "AVO.COM",
//         avatar: "https://randomuser.me/api/portraits/men/32.jpg"
//       },
//       isReversed: true
//     }
//   ];

//   return (
//     <section className="relative">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {projects.map((project, index) => (
//           <ProjectItem 
//             key={index}
//             title={project.title}
//             category={project.category}
//             description={project.description}
//             image={project.image}
//             author={project.author}
//             isReversed={project.isReversed}
//             icon={project.icon}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectSection;
