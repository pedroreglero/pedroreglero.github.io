import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'React Native', 'Next.js', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'ASP .Net', 'MySQL', 'SQL Server']
    },
    {
      category: 'Other',
      items: ['Git', 'NPM', 'Agile Development', 'Docker', 'Kubernetes', 'Xamarin']
    }
  ];

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 py-10 px-8"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
      <div className="flex flex-row flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden w-60">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{skill.category}</h3>
              <ul className="list-disc list-inside">
                {skill.items.map((item, index) => (
                  <li key={index} className="text-gray-700 mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
