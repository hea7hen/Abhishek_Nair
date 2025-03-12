
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:contact@abhisheknair.com", label: "Email" }
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-display font-bold mb-2">Abhishek Nair</h3>
            <p className="text-slate-400 max-w-md">
              Full Stack Developer & Machine Learning Enthusiast building innovative digital solutions with cutting-edge technologies.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-slate-800/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {currentYear} Abhishek Nair. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
