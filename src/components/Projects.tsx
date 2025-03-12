
import { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

type ProjectCategory = 'all' | 'fullstack' | 'ml' | 'frontend' | 'backend';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'fullstack' | 'ml' | 'frontend' | 'backend';
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Task Manager",
      description: "A full stack task management application with ML-based task prioritization and smart categorization features.",
      image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29",
      category: "fullstack",
      tags: ["React", "Node.js", "TensorFlow.js", "MongoDB"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 2,
      title: "Predictive Analytics Dashboard",
      description: "Interactive dashboard with real-time data visualization and ML-powered predictive analytics for business metrics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      category: "ml",
      tags: ["Python", "React", "D3.js", "Scikit-learn"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce solution with personalized recommendation system based on user behavior analysis.",
      image: "https://images.unsplash.com/photo-1556742077-0a6b6a4a4ac4",
      category: "fullstack",
      tags: ["Next.js", "Django", "PostgreSQL", "Redis"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 4,
      title: "Image Recognition API",
      description: "Scalable API for real-time image recognition and classification using convolutional neural networks.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      category: "ml",
      tags: ["Python", "PyTorch", "FastAPI", "Docker"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 5,
      title: "Real-Time Collaboration Tool",
      description: "Web-based collaboration platform with real-time editing, commenting, and version control features.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      category: "frontend",
      tags: ["React", "Socket.io", "Redux", "Firebase"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 6,
      title: "Natural Language Processing Service",
      description: "Backend service for sentiment analysis, text summarization, and entity recognition with a simple REST API.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
      category: "backend",
      tags: ["Python", "spaCy", "BERT", "Flask"],
      liveUrl: "#",
      repoUrl: "#"
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  );

  const categories: { value: ProjectCategory; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'ml', label: 'Machine Learning' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="section bg-gray-50 transition-opacity duration-1000 opacity-0"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-3">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-600">
            A collection of my work showcasing full stack development and machine learning projects 
            that demonstrate my technical skills and problem-solving approach.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2 p-1 rounded-lg bg-gray-100">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.value
                    ? 'bg-white shadow-md text-blue-700'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
