import { motion } from 'framer-motion';
import { Link } from 'wouter';

interface BlogPost {
  id: number;
  title: string;
  image: string;
  date: string;
  author: string;
  excerpt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Amplify your blockchain team",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    date: "JUNE 01, 2020",
    author: "ADMIN",
    excerpt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
  },
  {
    id: 2,
    title: "Amplify your blockchain team",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    date: "JUNE 01, 2020",
    author: "ADMIN",
    excerpt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
  },
  {
    id: 3,
    title: "Amplify your blockchain team",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    date: "JUNE 01, 2020",
    author: "ADMIN",
    excerpt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
  },
  {
    id: 4,
    title: "Amplify your blockchain team",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    date: "JUNE 01, 2020",
    author: "ADMIN",
    excerpt: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 relative diagonal-box">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-16">RECENT BLOG</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id} 
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm mb-3">{post.title}</h3>
              <Link href={`/blog/${post.id}`} className="block mb-3 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                />
              </Link>
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
                <span className="ml-2">•</span>
                <span className="w-2 h-2 rounded-full bg-gray-300 ml-2"></span>
              </div>
              <p className="text-gray-600 text-sm">
                {post.excerpt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
