
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
  repoUrl?: string;
  createdAt: string;
  inProgress?: boolean;
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  const inProgressRef = useRef<HTMLDivElement>(null);
  
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

    const elements = [sectionRef.current, inProgressRef.current];
    
    elements.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach(element => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Neo NFT Marketplace",
      description: "A frontend application for an NFT marketplace, crafted for the Neo Hackathon, enabling seamless minting, buying, and selling of digital assets.",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2432&auto=format&fit=crop",
      category: "frontend",
      tags: ["React.js", "Web3.js", "Solidity"],
      repoUrl: "https://github.com/hea7hen/neo-nft-frontend",
      createdAt: "August 27, 2023"
    },
    {
      id: 2,
      title: "BlackBelt: Dynamic Frontend UI Showcase",
      description: "A frontend-focused project demonstrating advanced UI/UX design principles and responsive layouts.",
      image: "/lovable-uploads/3c531d70-613b-4b41-8ff9-910e157c0704.png",
      category: "frontend",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://hea7hen.github.io/blackbelt/",
      repoUrl: "https://github.com/hea7hen/blackbelt",
      createdAt: "July 10, 2023"
    },
    {
      id: 3,
      title: "Image to Text OCR",
      description: "An application that extracts text from images using Optical Character Recognition (OCR) techniques.",
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2670&auto=format&fit=crop",
      category: "python",
      tags: ["Python", "Tesseract OCR"],
      repoUrl: "https://github.com/hea7hen/OCR-Image-to-text",
      createdAt: "June 7, 2024"
    },
    {
      id: 4,
      title: "Full Stack Blog App",
      description: "A full-featured blogging platform with functionalities like user authentication, content creation, and comments.",
      image: "/lovable-uploads/4b9a9b43-bc85-466f-8835-90f3931962d1.png",
      category: "fullstack",
      tags: ["Node.js", "Express.js", "MongoDB"],
      liveUrl: "https://thoughtthread.onrender.com/",
      repoUrl: "https://github.com/hea7hen/AI_Blog",
      createdAt: "July 3, 2024"
    },
    {
      id: 5,
      title: "Full Stack API Book Certification",
      description: "A platform that provides verifiable, shareable certifications for book completion, ensuring authenticity and recognition of literary achievements.",
      image: "/lovable-uploads/fd819102-0238-41a9-987f-5c308e903369.png",
      category: "fullstack",
      tags: ["Next.js", "Tailwind CSS", "Firebase", "Google Books API", "Firestore"],
      liveUrl: "https://u4rsnob0spemqbtx.vercel.app/",
      repoUrl: "https://github.com/hea7hen/BookCert",
      createdAt: "December 14, 2024"
    },
    {
      id: 6,
      title: "Random Character Generator",
      description: "A web application designed to create random minecraft characters, offering both predefined and customizable options. Users can generate characters with random attributes or define specific characteristics to suit their preferences.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop",
      category: "fullstack",
      tags: ["Node.js", "Express.js", "SQLite", "EJS"],
      repoUrl: "https://github.com/hea7hen/Random_charactor_Generator",
      createdAt: "May 23, 2024"
    }
  ];

  // Projects in progress
  const projectsInProgress: Project[] = [
    {
      id: 101,
      title: "Football Juggle Counter using YOLO",
      description: "An ML project that uses YOLO object detection to count football juggling movements in real-time video, helping athletes track their practice sessions.",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2670&auto=format&fit=crop",
      category: "python",
      tags: ["Machine Learning", "YOLO", "Computer Vision", "TensorFlow"],
      createdAt: "In Development",
      inProgress: true
    },
    {
      id: 102,
      title: "Payment Portal Clone",
      description: "A secure and responsive payment portal implementation with modern UI and multiple payment method integrations.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2670&auto=format&fit=crop",
      category: "fullstack",
      tags: ["React", "Node.js", "Stripe API", "Authentication"],
      createdAt: "In Development",
      inProgress: true
    },
    {
      id: 103,
      title: "Plant Disease Prediction using Stems",
      description: "Research project exploring novel approaches to plant disease detection by analyzing stem patterns instead of traditional leaf analysis.",
      image: "https://images.unsplash.com/photo-1465567603598-2e40006dea33?q=80&w=2670&auto=format&fit=crop",
      category: "python",
      tags: ["Research", "Deep Learning", "Agricultural Tech", "CNN"],
      createdAt: "Research Phase",
      inProgress: true
    },
    {
      id: 104,
      title: "AI-Powered Image Search Engine",
      description: "A full-stack application with AI capabilities that allows semantic image searching based on natural language descriptions.",
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=2564&auto=format&fit=crop",
      category: "fullstack",
      tags: ["AI", "Full Stack", "Vector Database", "Computer Vision"],
      createdAt: "Planning Phase",
      inProgress: true
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
    <>
      <section 
        id="projects" 
        ref={sectionRef}
        className="section bg-gray-50 transition-opacity duration-1000 opacity-0"
      >
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Featured Projects</h2>
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
                createdAt={project.createdAt}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section 
        id="projects-in-progress" 
        ref={inProgressRef}
        className="section bg-white transition-opacity duration-1000 opacity-0"
      >
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Projects in Progress</h2>
            <p className="text-gray-600">
              Current research and development initiatives that showcase ongoing innovation and learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsInProgress.map((project, index) => (
              <div 
                key={project.id} 
                className="p-5 bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-gray-900 font-serif">{project.title}</h3>
                  <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-1 rounded">
                    {project.createdAt}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-0">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
