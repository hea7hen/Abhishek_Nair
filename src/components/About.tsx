
import { useEffect, useRef } from 'react';
import { Check, Brain, Code, Database } from 'lucide-react';

export default function About() {
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

  const keyPoints = [
    "Full stack development with modern frameworks (React, Node.js, Django)",
    "Machine Learning and AI enthusiast with practical project experience",
    "BSc in Computer Science with strong algorithmic foundations",
    "Passionate about creating accessible and scalable applications"
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section bg-white transition-opacity duration-1000 opacity-0"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay" />
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1000" 
                alt="Developer at work" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-lg -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 rounded-lg -z-10" />
          </div>
          
          <div className="space-y-8">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-3">
                About Me
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Full Stack Developer with a passion for Machine Learning
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I'm Abhishek Nair, a full stack developer with a BSc in Computer Science and a strong interest in Machine Learning. 
                I combine technical expertise with a deep understanding of user needs to build innovative, scalable applications.
              </p>
              <p className="text-slate-600 leading-relaxed">
                My journey in technology began with a fascination for problem-solving through code, which evolved into a 
                passion for creating end-to-end solutions. I work across the entire development stack and am particularly 
                excited about the intersection of web development and machine learning.
              </p>
            </div>
            
            <div className="space-y-3">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-blue-500" />
                  </div>
                  <p className="text-slate-600">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-slate-100 rounded-full">
                <Code className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">Full Stack</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-slate-100 rounded-full">
                <Brain className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium">Machine Learning</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-slate-100 rounded-full">
                <Database className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">Data Science</span>
              </div>
            </div>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
