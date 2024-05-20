import React from 'react';
import img from '../assets/me.jpg';

const About = () => {
  return (
      <div className="flex flex-col justify-center items-center py-8 px-4 md:px-20 mt-20">
        <div className="relative mb-8">
          <img className="rounded-full w-64 h-64 md:w-96 md:h-96 mx-auto" src={img} alt="David Moore" />
        </div>

        <div className="text-center">
          <div className="text-green-400 text-4xl font-bold mt-5 mb-12">About Me</div>
          <p class="text-green-400 text-3xl lg:inline-block lg:text-center lg:w-1/2">My name is David Moore. I am a web developer from Florida who specializes in front-end development with experience working on back-end. I enjoy working on projects that are both user-friendly and eye-catching.</p>
        </div>
      </div>
    );
  };

export default About;