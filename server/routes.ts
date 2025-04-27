import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/projects', (req, res) => {
    res.json([
      {
        id: 1,
        title: "Keyboard",
        category: "Illustration",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        author: {
          name: "Jamie Jonson",
          position: "AVO.COM",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        }
      },
      {
        id: 2,
        title: "Spiral",
        category: "Web Development",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        image: "https://images.unsplash.com/photo-1562619374-b683d83e9000?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        author: {
          name: "Jamie Jonson",
          position: "AVO.COM",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        }
      },
      {
        id: 3,
        title: "Miniwall Clock",
        category: "Application",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        image: "https://images.unsplash.com/photo-1507098926914-89e42066ef88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        author: {
          name: "Jamie Jonson",
          position: "AVO.COM",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        }
      },
      {
        id: 4,
        title: "Avo Portfolio Agency",
        category: "UI/UX Design",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        author: {
          name: "Jamie Jonson",
          position: "AVO.COM",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        }
      },
      {
        id: 5,
        title: "Hand Writing",
        category: "Web Development",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        image: "https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        author: {
          name: "Jamie Jonson",
          position: "AVO.COM",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        }
      }
    ]);
  });

  app.get('/api/testimonials', (req, res) => {
    res.json([
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
    ]);
  });

  app.get('/api/blog', (req, res) => {
    res.json([
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
      }
    ]);
  });

  const httpServer = createServer(app);

  return httpServer;
}
