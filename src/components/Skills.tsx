
import { useEffect, useRef } from 'react';
import { Code, Paintbrush, Brain, Database, Layout, Server, Globe, GitBranch } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export default function Skills() {
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

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "React / Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Redux / Zustand", level: 82 },
        { name: "WebGL / Three.js", level: 70 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js / Express", level: 88 },
        { name: "Python / Django", level: 85 },
        { name: "GraphQL", level: 78 },
        { name: "REST API Design", level: 90 },
        { name: "Microservices", level: 75 }
      ]
    },
    {
      title: "Database & DevOps",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "Docker / Kubernetes", level: 75 },
        { name: "AWS / GCP", level: 80 },
        { name: "CI/CD Pipelines", level: 78 }
      ]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "TensorFlow / PyTorch", level: 82 },
        { name: "Scikit-learn", level: 85 },
        { name: "Computer Vision", level: 75 },
        { name: "NLP", level: 78 },
        { name: "Data Visualization", level: 80 }
      ]
    },
    {
      title: "UI/UX Design",
      icon: <Paintbrush className="h-6 w-6" />,
      skills: [
        { name: "Figma", level: 85 },
        { name: "User Research", level: 75 },
        { name: "Wireframing", level: 80 },
        { name: "Responsive Design", level: 90 },
        { name: "Design Systems", level: 78 }
      ]
    },
    {
      title: "Tools & Workflow",
      icon: <GitBranch className="h-6 w-6" />,
      skills: [
        { name: "Git / GitHub", level: 92 },
        { name: "Agile / Scrum", level: 85 },
        { name: "Testing (Jest, Cypress)", level: 80 },
        { name: "Performance Optimization", level: 78 },
        { name: "Documentation", level: 88 }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="section bg-white transition-opacity duration-1000 opacity-0"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-3">
            Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-slate-600">
            As a full stack developer with a focus on machine learning, I've developed expertise across various technologies and domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`p-6 rounded-xl border border-gray-100 shadow-lg transition-all duration-500 hover:shadow-xl bg-white animate-slide-up animation-delay-${categoryIndex * 100}`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
