
import { useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
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

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="section py-20 bg-gray-50 transition-opacity duration-1000 opacity-0"
    >
      <div className="container-custom max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-6 font-sans tracking-tight">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:abhisheknair616@gmail.com" className="text-md font-medium hover:text-blue-600 transition-colors">
                      abhisheknair616@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-md font-medium">7349723145</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-md font-medium">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="bg-gray-50 p-6">
              <h3 className="text-xl font-bold mb-5 font-sans tracking-tight">Connect With Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://github.com/hea7hen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors border border-gray-100"
                >
                  <Github className="h-5 w-5 text-gray-700 group-hover:text-black transition-colors" />
                  <span className="font-medium text-sm">GitHub</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/abhishek-nair-302235211/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors border border-gray-100"
                >
                  <Linkedin className="h-5 w-5 text-blue-700 group-hover:text-blue-800 transition-colors" />
                  <span className="font-medium text-sm">LinkedIn</span>
                </a>
                
                <a 
                  href="https://x.com/heathen_punk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors border border-gray-100"
                >
                  <FaXTwitter className="h-5 w-5 text-gray-900" />
                  <span className="font-medium text-sm">Twitter</span>
                </a>
                
                <a 
                  href="mailto:abhisheknair616@gmail.com" 
                  className="group flex items-center space-x-2 p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors border border-gray-100"
                >
                  <Mail className="h-5 w-5 text-red-700 group-hover:text-red-800 transition-colors" />
                  <span className="font-medium text-sm">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
