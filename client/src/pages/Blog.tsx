import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';

interface BlogPost {
  id: number;
  title: string;
  image: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Amplify your blockchain team",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    date: "JUNE 01, 2020",
    author: "ADMIN",
    excerpt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    category: "Development"
  },
  {
    id: 2,
    title: "Amplify your blockchain team",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    date: "JUNE 01, 2020",
    author: "ADMIN",
    excerpt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    category: "Design"
  },
  {
    id: 3,
    title: "Amplify your blockchain team",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    date: "JUNE 01, 2020",
    author: "ADMIN",
    excerpt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    category: "Development"
  },
  {
    id: 4,
    title: "Amplify your blockchain team",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    date: "JUNE 01, 2020",
    author: "ADMIN",
    excerpt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    category: "Marketing"
  },
  {
    id: 5,
    title: "Amplify your blockchain team",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    date: "MAY 15, 2020",
    author: "ADMIN",
    excerpt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    category: "Design"
  },
  {
    id: 6,
    title: "Amplify your blockchain team",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    date: "MAY 10, 2020",
    author: "ADMIN",
    excerpt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    category: "Business"
  }
];

const Blog = () => {
  return (
    <div className="pb-20">
      <PageHero 
        title="Our Blog" 
        subtitle="Read the latest news and insights from our team."
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              className="mb-10 bg-white shadow-sm rounded-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                  <span className="ml-2">•</span>
                  <span className="w-2 h-2 rounded-full bg-gray-300 ml-2"></span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {post.excerpt.substring(0, 120)}...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-gray-100 px-3 py-1 rounded">{post.category}</span>
                  <button className="text-[#FF0000] text-sm font-medium hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
