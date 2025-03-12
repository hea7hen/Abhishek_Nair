
import { useEffect, useRef } from 'react';
import { Code, Paintbrush, Globe, Database, Layout, Server } from 'lucide-react';

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
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Vue.js", level: 70 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 75 },
        { name: "Django", level: 70 },
        { name: "PHP", level: 65 }
      ]
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "Redis", level: 60 }
      ]
    },
    {
      title: "UI/UX Design",
      icon: <Paintbrush className="h-6 w-6" />,
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 75 },
        { name: "Sketch", level: 70 },
        { name: "Wireframing", level: 80 },
        { name: "Prototyping", level: 75 }
      ]
    },
    {
      title: "CMS",
      icon: <Layout className="h-6 w-6" />,
      skills: [
        { name: "WordPress", level: 90 },
        { name: "Shopify", level: 80 },
        { name: "Strapi", level: 75 },
        { name: "Contentful", level: 70 },
        { name: "Ghost", level: 65 }
      ]
    },
    {
      title: "Other",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "CI/CD", level: 75 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "SEO", level: 80 }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills & Technologies</h2>
          <p className="text-slate-600">
            I've worked with a variety of technologies and frameworks to create engaging and functional digital solutions.
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
