
import { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';

export default function Hero() {
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

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-opacity duration-1000 opacity-0"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 -z-10" />
      
      {/* Abstract shapes */}
      <div className="absolute top-[20%] left-[15%] w-64 h-64 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-purple-500/10 blur-3xl animate-float" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <p className="text-white/80 text-sm font-medium animate-slide-down">Welcome to my portfolio</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Digital</span> Experiences
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            I design and build exceptional digital experiences that are intuitive, functional, and visually appealing.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-300">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}
              className="px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:shadow-lg hover:shadow-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-medium hover:bg-white/20 transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDownCircle className="h-10 w-10" />
      </button>
    </section>
  );
}
