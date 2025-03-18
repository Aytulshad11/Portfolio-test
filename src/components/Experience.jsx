import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Innovations Inc.',
      position: 'Senior Software Engineer',
      period: 'Jan 2021 - Present',
      description: [
        'Lead a team of 5 developers in building a microservices architecture using Node.js and React',
        'Implemented CI/CD pipelines that reduced deployment time by 40%',
        'Architected and developed a real-time analytics dashboard that processes over 1M events daily',
        'Mentored junior developers and conducted code reviews to ensure code quality'
      ]
    },
    {
      company: 'DataSphere Solutions',
      position: 'Software Engineer',
      period: 'Mar 2019 - Dec 2020',
      description: [
        'Developed RESTful APIs using Express.js and MongoDB that served 100K+ daily users',
        'Built responsive front-end interfaces with React and Redux',
        'Optimized database queries resulting in a 30% performance improvement',
        'Collaborated with UX designers to implement user-friendly interfaces'
      ]
    },
    {
      company: 'WebFront Systems',
      position: 'Junior Developer',
      period: 'Jun 2017 - Feb 2019',
      description: [
        'Created and maintained client websites using HTML, CSS, and JavaScript',
        'Developed custom WordPress themes and plugins',
        'Implemented responsive designs and ensured cross-browser compatibility',
        'Participated in agile development processes including daily stand-ups and sprint planning'
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Work Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-4 border-blue-500 dark:border-blue-400 pl-6 ml-6">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`mb-12 ${index === experiences.length - 1 ? '' : 'pb-8 border-b border-gray-200 dark:border-gray-700'}`}
              >
                <div className="absolute w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full -left-8 mt-1.5"></div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-1 mb-3">
                  <p className="text-lg font-medium text-blue-600 dark:text-blue-400">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1 md:mt-0">{exp.period}</p>
                </div>
                <ul className="list-disc list-outside ml-5 text-gray-700 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="mb-2">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;