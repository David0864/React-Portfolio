// ProjectCard.js
import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, image, description, link } = project;

  return (
    <div class="bg-white shadow-lg rounded-lg p-4">
      <img src={image} alt={title} class="w-full h-32 object-cover mb-4" />
      <h2 class="text-lg font-semibold mb-2">{title}</h2>
      <p class="text-gray-600">{description}</p>
      <a href={link} class="text-blue-500 hover:underline">GitHub</a>
    </div>
  );
};

export default ProjectCard;
