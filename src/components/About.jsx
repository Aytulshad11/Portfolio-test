import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 md:p-8 shadow-md dark:shadow-gray-900/20">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              I'm a passionate software engineer with over 5 years of experience building web applications and services. 
              I specialize in full-stack development with a focus on creating scalable, maintainable, and user-friendly solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              My journey in software development began during my computer science studies at MIT, where I developed a strong 
              foundation in algorithms, data structures, and software design principles. Since then, I've worked with startups 
              and established companies to deliver high-quality software products.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              When I'm not coding, you can find me hiking in the mountains, reading science fiction, or experimenting with 
              new technologies. I'm always eager to learn and grow, both as a developer and as a person.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;