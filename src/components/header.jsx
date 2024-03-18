import React from "react";

const Header = ({ setActiveSection }) => {
  return (
    <header className='flex flex-wrap justify-between py-8 md:px-20'>
      <div>
        <h1 class="text-green-400 text-4xl">David Moore's Portfolio</h1>
      </div>
      <nav>
        <ul class="text-green-400 inline-flex space-x-6 text-2xl">
          <li onClick={() => setActiveSection("about")} class="hover:underline cursor-pointer">About Me</li>
          <li onClick={() => setActiveSection("portfolio")} class="hover:underline cursor-pointer">Portfolio</li>
          <li onClick={() => setActiveSection("contact")} class="hover:underline cursor-pointer">Contact</li>
          <li onClick={() => setActiveSection("resume")} class="hover:underline cursor-pointer">Resume</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
