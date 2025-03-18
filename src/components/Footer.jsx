import React from 'react';
import { Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-800 dark:bg-gray-900 text-white transition-colors duration-300 border-t border-gray-700 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <Github size={20} className="mr-2" />
            <p className="text-sm text-gray-300">
              &copy; {currentYear} Jane Smith. All rights reserved.
            </p>
          </div>
          
          <div>
            <nav className="flex space-x-6">
              <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
                About
              </a>
              <a href="#experience" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
                Experience
              </a>
              <a href="#skills" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
                Skills
              </a>
              <a href="#projects" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
                Projects
              </a>
              <a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;