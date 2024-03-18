import React from "react";
import GitHub from "../assets/github-mark.png"
import Linkedin from "../assets/linkedin.png"
import X from "../assets/Twitter_new_X_logo.png"

const Footer = () => {
    return (
        <footer class="py-8 mt-auto lg:mt-40 xl:mt-56">
            <div class="flex justify-center items-center">
                <a href="https://github.com/David0864">
                    <img class="w-16 h-16 mx-16" src={GitHub}/>
                </a>
                <a href="https://www.linkedin.com/?trk=guest_homepage-jobseeker_nav-header-logo">
                    <img class="w-16 h-16 mx-16" src={Linkedin}/>
                </a>
                <a href="https://twitter.com/?lang=en">
                    <img class="w-16 h-16 mx-16" src={X}/>
                </a>
            </div>
        </footer>
    );
};


export default Footer;