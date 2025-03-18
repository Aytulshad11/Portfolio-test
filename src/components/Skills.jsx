import React from 'react';
import { 
  Code, Database, Server, Globe, Layout, Terminal, 
  GitBranch, Cpu, Cloud, Shield, Workflow, Layers
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux']
    },
    {
      title: 'Backend',
      icon: <Server className="w-8 h-8 text-green-500 dark:text-green-400" />,
      skills: ['Node.js', 'Express', 'Python', 'Django', 'Java', 'Spring Boot']
    },
    {
      title: 'Databases',
      icon: <Database className="w-8 h-8 text-purple-500 dark:text-purple-400" />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch']
    },
    {
      title: 'DevOps',
      icon: <Cloud className="w-8 h-8 text-orange-500 dark:text-orange-400" />,
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Jenkins', 'Terraform']
    },
    {
      title: 'Tools & Version Control',
      icon: <GitBranch className="w-8 h-8 text-red-500 dark:text-red-400" />,
      skills: ['Git', 'GitHub', 'Jira', 'Confluence', 'VS Code', 'Postman']
    },
    {
      title: 'Other',
      icon: <Code className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />,
      skills: ['RESTful APIs', 'GraphQL', 'Microservices', 'Agile', 'Scrum', 'TDD']
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-3">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full border border-gray-200 dark:border-gray-500 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;