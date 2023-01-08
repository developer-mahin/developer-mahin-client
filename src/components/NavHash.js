import React from 'react';
import { Link } from "react-scroll"

const NavHash = ({ open, setOpen }) => {
    return (
        <>
            <li className='md:ml-10 md:mb-0 mb-4 lg:border-none border-2 border-b-gray-400 cursor-pointer'>
                <Link activeClass="active" to="hero-section" spy={true} duration={500} smooth={true} offset={-100}>
                    Hero
                </Link>
            </li>
            <li className='md:ml-10 md:mb-0 mb-4 lg:border-none border-2 border-b-gray-400 cursor-pointer'>
                <Link activeClass="active" to="about-section" spy={true} duration={500} smooth={true} offset={-50}>
                    About Me
                </Link>
            </li>
            <li className='md:ml-10 md:mb-0 mb-4 lg:border-none border-2 border-b-gray-400 cursor-pointer'>
                <Link activeClass="active" to="skills-section" spy={true} duration={500} smooth={true} offset={-50}>
                    Skills
                </Link>
            </li>
            <li className='md:ml-10 md:mb-0 mb-4 lg:border-none border-2 border-b-gray-400 cursor-pointer'>
                <Link activeClass="active" to="service-section" spy={true} duration={500} smooth={true} offset={-50}>
                    Service
                </Link>
            </li>
            <li className='md:ml-10 md:mb-0 mb-4 lg:border-none border-2 border-b-gray-400 cursor-pointer'>
                <Link activeClass="active" to="projects-section" spy={true} duration={500} smooth={true} offset={-50}>
                    Projects
                </Link>
            </li>
            <li className='md:ml-10 md:mb-0 mb-4 lg:border-none border-2 border-b-gray-400 cursor-pointer'>
                <Link activeClass="active" to="contact-section" spy={true} duration={500} smooth={true} offset={-50}>
                    Contact
                </Link>
            </li>
        </>
    );
};

export default NavHash;