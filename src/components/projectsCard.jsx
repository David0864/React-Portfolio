import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, image, description, link } = project;

  return (
    <div className="bg-neutral-400 shadow-lg rounded-lg p-4">
      <img src={image} alt={title} className="w-full h-32 object-cover mb-4" />
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-800 text-lg">{description}</p>
      <a href={link} className="text-blue-500 hover:underline">GitHub</a>
    </div>
  );
};

export default ProjectCard;
