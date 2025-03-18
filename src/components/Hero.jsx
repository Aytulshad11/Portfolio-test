import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = ({ darkMode }) => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Jane Smith</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
              Software Engineer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              I build exceptional and accessible digital experiences for the web.
              Passionate about creating elegant solutions to complex problems.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com/janesmith"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/janesmith"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:jane.smith@example.com"
                className="p-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="#resume"
                className="p-2 bg-green-600 text-white rounded-full hover:bg-green-500 transition-colors duration-300"
                aria-label="Resume"
              >
                <FileText size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="Jane Smith"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;