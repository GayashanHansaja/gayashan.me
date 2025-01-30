import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="container mx-auto">
      {PROJECTS.map((project, index) => (
        <div 
          key={index} 
          className={`flex flex-col  mb-10 ${
            index % 2===0 ? 'lg:flex-row ': 'lg:flex-row-reverse'
          } items-start gap-22 max-w-8xl mx-auto py-16`}
          >
          {/* Left Side - Image */}
          <motion.div
           whileInView={{opacity:1, x:0}}
           initial={{x:index % 2===0 ? -100 : 100, opacity:0}}
           /* animate={{x:0, opacity:1}} */
           transition={{duration:0.6}}
           className="w-full lg:w-3/5 ">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full max-w-xl lg:max-w-full rounded-md shadow-lg"
            />
          </motion.div>

          {/* Right Side - Project Details */}
          <div className="w-full lg:w-2/5 flex flex-col lg:items-start px-6 text-center lg:text-left">
            <h6 className="text-2xl font-semibold text-white mb-2">
              {project.title}
            </h6>
            <p className="text-white mb-4">{project.description}</p>
            <div className="flex flex-wrap justify-center lg:justify-start">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="mr-2 mb-2 bg-gray-800 text-white rounded px-3 py-1 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
