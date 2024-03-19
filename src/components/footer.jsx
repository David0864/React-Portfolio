import React from "react";
import GitHub from "../assets/github-mark.png"
import Linkedin from "../assets/linkedin.png"
import X from "../assets/Twitter_new_X_logo.png"

const Footer = () => {
    return (
        <footer class="py-8 relative top-12 mt-12 pt-12 w-full">
            <div class="flex justify-center items-center">
                <a href="https://github.com/David0864" class="mx-8">
                    <img class="w-24 h-24 mx-20" src={GitHub}/>
                </a>
                <a href="https://www.linkedin.com/?trk=guest_homepage-jobseeker_nav-header-logo" class="mx-8">
                    <img class="w-24 h-24 mx-20" src={Linkedin}/>
                </a>
                <a href="https://twitter.com/?lang=en" class="mx-8">
                    <img class="w-24 h-24 mx-20" src={X}/>
                </a>
            </div>
        </footer>
    );
};


export default Footer;