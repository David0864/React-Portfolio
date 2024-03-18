import React from 'react';
import img from '../assets/tumblr_ojqd3j0iKi1rrftcdo1_500.png';

const About = () => {
  return (
    <div>
      <div class="text-green-400 text-3xl font-bold mb-4">About Page</div>
      <br/>
      <img src={img}/>
      <p class="text-green-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, architecto at officiis unde consequuntur voluptatibus quisquam suscipit ea eveniet ullam odit repellat rerum totam sequi distinctio praesentium? Eius, a odit?</p>
      <br/>
      <p class="text-green-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus commodi nisi non, eaque esse molestiae enim distinctio cupiditate aspernatur iusto magnam? Doloribus, libero nihil? Odit saepe sapiente fugiat molestias cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis cumque libero commodi animi modi iusto neque sed quibusdam odio deleniti, illo voluptatem ad harum tempora, distinctio in consectetur unde?</p>
    </div>
  );
};

export default About;