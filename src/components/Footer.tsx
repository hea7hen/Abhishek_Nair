
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/hea7hen", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/abhishek-nair-302235211/", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://x.com/heathen_punk", label: "Twitter" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:abhisheknair616@gmail.com", label: "Email" }
  ];

  return (
    <footer className="py-16 border-t border-gray-200">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-10 md:mb-0">
            <h3 className="text-2xl font-display font-bold mb-4">Abhishek Nair</h3>
            <p className="text-gray-600 max-w-md">
              Full Stack Developer & Machine Learning Enthusiast building innovative digital solutions.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition-all duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-6 md:mb-0">
            © {currentYear} Abhishek Nair. All rights reserved.
          </p>
          
          <div className="flex space-x-8">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-500 hover:text-black transition-colors"
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
