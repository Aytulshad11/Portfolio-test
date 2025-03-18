import React from 'react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <a 
              href="mailto:jane.smith@example.com" 
              className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Mail className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Email</h3>
              <p className="text-gray-700 dark:text-gray-300">jane.smith@example.com</p>
            </a>
            
            <a 
              href="https://linkedin.com/in/janesmith" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Linkedin className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">LinkedIn</h3>
              <p className="text-gray-700 dark:text-gray-300">linkedin.com/in/janesmith</p>
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/janesmith" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              <Github size={20} className="mr-2" />
              <span>GitHub</span>
            </a>
            <a 
              href="#resume" 
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              <FileText size={20} className="mr-2" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;