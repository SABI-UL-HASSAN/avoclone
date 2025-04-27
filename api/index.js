import express from 'express';

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const projects = [
  {
    id: 1,
    title: "Keyboard",
    category: "Illustration",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Jamie Jonson",
      position: "CEO.CTO",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  },
];

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }
  res.json(project);
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working correctly!' });
});

app.use('/api', (req, res) => {
  res.status(404).json({ message: 'API endpoint not found' });
});

export default app;