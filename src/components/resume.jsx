import React from 'react';
import resume from "../assets/DavidMooreResume_new.pdf"

const Resume = () => {
  const downloadResume = () => {
    const resumeUrl = resume
    const anchor = document.createElement('a');
    anchor.href = resumeUrl;
    anchor.download = "DavidMooreResume_new.pdf";
    anchor.click();
  };

  return (
    <div className="container mx-auto mt-8 text-center">
      <div className="text-green-400 text-3xl font-bold mb-4 text-center">Resume Page</div>
      <div className="mb-8">
        <p className="text-gray-300 mb-2 text-lg">Download my resume:</p>
        <button onClick={downloadResume} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-600">Download</button>
      </div>
      <div>
        <h2 className="text-3xl font-semibold mb-2 text-gray-300">Proficiencies</h2>
        <ul className="pl-4 text-gray-300 text-xl">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
          <li>Tailwind</li>
          <li>jQuery</li>
          <li>Git</li>
          <li>Express</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;


