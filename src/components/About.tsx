
import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

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
    "Over 5 years of experience in web development",
    "Specialized in creating responsive, user-friendly interfaces",
    "Passionate about clean, efficient code and modern technologies",
    "Collaborative approach and strong communication skills"
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
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
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
                Passionate about creating exceptional digital solutions
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I'm a dedicated web developer with a keen eye for design and a commitment to creating intuitive, 
                user-centric digital experiences. My approach combines technical expertise with creative thinking 
                to deliver solutions that not only meet but exceed expectations.
              </p>
              <p className="text-slate-600 leading-relaxed">
                My journey in technology began with a fascination for how things work, which evolved into a passion 
                for building digital tools that solve real problems. I believe in continuous learning and staying 
                at the forefront of industry trends to deliver the best possible outcomes.
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
