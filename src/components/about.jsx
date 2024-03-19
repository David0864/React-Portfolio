import React from 'react';
import img from '../assets/tumblr_ojqd3j0iKi1rrftcdo1_500.png';

const About = () => {
  return (
      <div class="flex flex-col justify-center items-center py-8 px-4 md:px-20 mt-20">
        <div class="relative mb-8">
          <img class="rounded-full w-56 h-56 md:w-80 md:h-80 mx-auto" src={img} />
        </div>

        <div class="text-center">
          <div class="text-green-400 text-3xl font-bold mt-5 mb-12">About Me</div>
          <p class="text-green-400 text-2xl mb-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, architecto at officiis unde consequuntur voluptatibus quisquam suscipit ea eveniet ullam odit repellat rerum totam sequi distinctio praesentium? Eius, a odit?</p>
          <p class="text-green-400 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus commodi nisi non, eaque esse molestiae enim distinctio cupiditate aspernatur iusto magnam? Doloribus, libero nihil? Odit saepe sapiente fugiat molestias cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis cumque libero commodi animi modi iusto neque sed quibusdam odio deleniti, illo voluptatem ad harum tempora, distinctio in consectetur unde?</p>
        </div>
      </div>
    );
  };

export default About;