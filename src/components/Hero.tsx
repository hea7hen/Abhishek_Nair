
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">BSc Computer Science</p>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
            Abhishek Nair
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl leading-relaxed mb-12">
            Full Stack Developer & Machine Learning Enthusiast passionate about building innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a 
              href="#projects"
              className="px-8 py-3 border border-black text-black rounded-none font-medium hover:bg-black hover:text-white transition-all duration-300"
            >
              View Projects
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 text-gray-600 hover:text-black transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
