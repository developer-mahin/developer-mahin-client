import React from 'react';

const NavHash = ({ open, setOpen }) => {
    return (
        <>
            <li className='md:ml-10 md:mb-0 mb-4 lg:border-none border-2 border-b-gray-400'>
                <a href="#hero-section">
                    Hero
                </a>
            </li>
            <li className='md:ml-10 md:mb-0 mb-4 lg:border-none border-2 border-b-gray-400'>
                <a href="#about-section">
                    About Me
                </a>
            </li>
            <li className='md:ml-10 md:mb-0 mb-4 lg:border-none border-2 border-b-gray-400'>
                <a href="#skills-section">
                    Skills
                </a>
            </li>
            <li className='md:ml-10 md:mb-0 mb-4 lg:border-none border-2 border-b-gray-400'>
                <a href="#service-section">
                    Service
                </a>
            </li>
            <li className='md:ml-10 md:mb-0 mb-4 lg:border-none border-2 border-b-gray-400'>
                <a href="#projects-section">
                    Projects
                </a>
            </li>
            <li className='md:ml-10 md:mb-0 mb-4 lg:border-none border-2 border-b-gray-400'>
                <a href="#contact-section">
                    Contact
                </a>
            </li>
        </>
    );
};

export default NavHash;