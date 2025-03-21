
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import Clock from "./Clock";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-white shadow-sm" : "py-6 bg-white"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-display font-bold text-black"
        >
          AN
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-5 w-5 text-black" />
          ) : (
            <Menu className="h-5 w-5 text-black" />
          )}
        </button>

        {/* Clock in the top right corner */}
        <div className="absolute top-0 right-0 py-4 pr-4">
          <Clock />
        </div>
      </div>

      {/* Desktop Navigation in the top center with GitHub and LinkedIn icons */}
      <div className="hidden md:flex items-center justify-center space-x-12 absolute top-0 left-1/2 transform -translate-x-1/2 py-4">
        <a 
          href="https://github.com/hea7hen" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-black transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        {["home", "projects", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="text-sm uppercase tracking-widest text-gray-500 hover:text-black transition-colors duration-200"
          >
            {item}
          </button>
        ))}
        <a 
          href="https://www.linkedin.com/in/abhishek-nair-302235211/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-black transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100">
          <div className="container-custom py-6 flex flex-col space-y-6">
            <div className="flex justify-center space-x-8 py-2">
              <a 
                href="https://github.com/hea7hen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/abhishek-nair-302235211/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            {["home", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm uppercase tracking-widest text-gray-500 hover:text-black transition-colors py-2"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
