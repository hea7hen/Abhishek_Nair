
import { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'backend' | 'python';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'fullstack' | 'frontend' | 'backend' | 'python';
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
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
      title: "NFT Marketplace",
      description: "A frontend application for an NFT marketplace, enabling users to mint, buy, and sell non-fungible tokens.",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2432&auto=format&fit=crop",
      category: "frontend",
      tags: ["React.js", "Web3.js", "Solidity"],
      repoUrl: "https://github.com/hea7hen/neo-nft-frontend"
    },
    {
      id: 2,
      title: "Frontend Project",
      description: "A frontend-focused project demonstrating advanced UI/UX design principles and responsive layouts.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2670&auto=format&fit=crop",
      category: "frontend",
      tags: ["HTML", "CSS", "JavaScript"],
      repoUrl: "https://github.com/hea7hen/blackbelt"
    },
    {
      id: 3,
      title: "Image to Text OCR",
      description: "An application that extracts text from images using Optical Character Recognition (OCR) techniques.",
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2670&auto=format&fit=crop",
      category: "python",
      tags: ["Python", "Tesseract OCR"],
      repoUrl: "https://github.com/hea7hen/OCR-Image-to-text"
    },
    {
      id: 4,
      title: "Full Stack Blog App",
      description: "A full-featured blogging platform with functionalities like user authentication, content creation, and comments.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2670&auto=format&fit=crop",
      category: "fullstack",
      tags: ["Node.js", "Express.js", "MongoDB"],
      repoUrl: "https://github.com/hea7hen/AI_Blog"
    },
    {
      id: 5,
      title: "Full Stack API Book Certification",
      description: "A platform that provides certifications for books, allowing users to verify the authenticity and details of literary works.",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2670&auto=format&fit=crop",
      category: "fullstack",
      tags: ["Next.js", "Tailwind CSS"],
      liveUrl: "https://lnkd.in/gywBMV8t",
      repoUrl: "https://github.com/hea7hen/BookCert"
    },
    {
      id: 6,
      title: "MVC Model Fullstack Project",
      description: "A full-stack application following the MVC architecture to generate random characters, possibly for gaming or storytelling purposes.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop",
      category: "fullstack",
      tags: ["Node.js", "Express.js", "SQLite", "EJS"],
      repoUrl: "https://github.com/hea7hen/Random_charactor_Generator"
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  );

  const categories: { value: ProjectCategory; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'python', label: 'Python' }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="section bg-gray-50 transition-opacity duration-1000 opacity-0"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Featured Projects</h2>
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
