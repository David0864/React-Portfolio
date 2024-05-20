import React from "react";
import GitHub from "../assets/github-mark.png"
import Linkedin from "../assets/linkedin.png"

const Footer = () => {
    return (
        <footer className="py-8 relative top-12 mt-12 pt-12 w-full">
            <div className="flex justify-center items-center">
                <a href="https://github.com/David0864" className="mx-8">
                    <img className="w-24 h-24 mx-20" src={GitHub}/>
                </a>
                <a href="https://www.linkedin.com/in/david-moore-bb04b530a/" className="mx-8">
                    <img className="w-24 h-24 mx-20" src={Linkedin}/>
                </a>
            </div>
        </footer>
    );
};


export default Footer;