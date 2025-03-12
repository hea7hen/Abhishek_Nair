
import { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

type ProjectCategory = 'all' | 'web' | 'mobile' | 'design';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'mobile' | 'design';
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
      title: "E-commerce Platform",
      description: "A modern e-commerce platform with product filtering, cart management, and secure checkout.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "web",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 2,
      title: "Finance Dashboard",
      description: "An interactive dashboard for monitoring financial data with real-time analytics.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "web",
      tags: ["Vue.js", "D3.js", "Firebase"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 3,
      title: "Travel App",
      description: "A mobile application for planning trips, finding destinations, and booking accommodations.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      category: "mobile",
      tags: ["React Native", "GraphQL", "AWS"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with modern design.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "design",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 5,
      title: "Weather App",
      description: "A weather forecast application with detailed reports and interactive maps.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "web",
      tags: ["React", "API Integration", "CSS"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 6,
      title: "Food Delivery UI",
      description: "UI/UX design for a food delivery mobile application focusing on user experience.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      category: "design",
      tags: ["Figma", "Adobe XD", "Prototyping"],
      liveUrl: "#",
      repoUrl: "#"
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  );

  const categories: { value: ProjectCategory; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'design', label: 'UI/UX Design' }
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
            Explore a collection of my recent work showcasing my skills and experience in web development, 
            mobile applications, and UI/UX design.
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
