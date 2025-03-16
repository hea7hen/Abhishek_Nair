
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
      className="section py-24 bg-gray-50 transition-opacity duration-1000 opacity-0"
    >
      <div className="container-custom max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-8 font-sans tracking-tight">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a href="mailto:abhisheknair616@gmail.com" className="text-lg font-medium hover:text-blue-600 transition-colors">
                      abhisheknair616@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <p className="text-lg font-medium">7349723145</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="text-lg font-medium">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-8 font-sans tracking-tight">Connect With Me</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <a 
                  href="https://github.com/hea7hen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-6 bg-gray-50 rounded-xl transition hover:bg-gray-100 border border-gray-100 hover:border-gray-200"
                >
                  <Github className="h-8 w-8 text-gray-700 mb-3 group-hover:text-black transition-colors" />
                  <h4 className="font-medium mb-1">GitHub</h4>
                  <p className="text-sm text-gray-500">Follow my code</p>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/abhishek-nair-302235211/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-6 bg-blue-50 rounded-xl transition hover:bg-blue-100 border border-blue-100 hover:border-blue-200"
                >
                  <Linkedin className="h-8 w-8 text-blue-700 mb-3 group-hover:text-blue-800 transition-colors" />
                  <h4 className="font-medium mb-1">LinkedIn</h4>
                  <p className="text-sm text-blue-700/70">Connect with me</p>
                </a>
                
                <a 
                  href="https://x.com/heathen_punk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-6 bg-gray-900 rounded-xl transition hover:bg-black border border-gray-800"
                >
                  <FaXTwitter className="h-8 w-8 text-white mb-3" />
                  <h4 className="font-medium mb-1 text-white">Twitter</h4>
                  <p className="text-sm text-gray-400">Follow my updates</p>
                </a>
                
                <a 
                  href="mailto:abhisheknair616@gmail.com" 
                  className="group p-6 bg-red-50 rounded-xl transition hover:bg-red-100 border border-red-100 hover:border-red-200"
                >
                  <Mail className="h-8 w-8 text-red-700 mb-3 group-hover:text-red-800 transition-colors" />
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-sm text-red-700/70">Send me a message</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
