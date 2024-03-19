import React from 'react';
import { projectsData } from './projectsData';
import ProjectCard from './projectsCard';

const Portfolio = () => {
  return (
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-green-400 text-3xl font-bold mb-4 text-center">Portfolio Page</h1>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};


export default Portfolio;