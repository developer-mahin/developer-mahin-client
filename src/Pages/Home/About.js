import { Tab } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import AboutDiv from '../../components/About/AboutDiv';
import Education from '../../components/About/Education';
import Experience from '../../components/About/Experience';

const About = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <div className='lg:py-16 py-6 px-3' id="about-section">
            <div className='text-center' p-2 rounded-full bg-blue-400>
                <h1 className='text-gray-300 lg:text-7xl text-5xl font-semibold' data-aos="fade-up">About Me</h1>
                <h3 className='lg:text-3xl text-xl font-semibold text-gray-800' data-aos="fade-up">A little description</h3>
            </div>


            <div data-aos="zoom-in" className='md:flex gap-5 items-start justify-between sm:mx-10 md:mx-20 lg:mx-40 py-4'>
                {/* Details */}
                <div className='flex-1'>
                    <Tab.Group
                        selectedIndex={selectedIndex}
                        onChange={setSelectedIndex}
                        defaultIndex={0}
                    >
                        <Tab.List>
                            <div className='container flex flex-wrap items-center py-4 mx-auto overflow-y-auto whitespace-nowrap'>
                                <Tab as={Fragment}>
                                    {({ selected }) => (
                                        <button
                                            className={selected ? 'bg-gradient-to-r from-cyan-500 to-blue-500 lg:px-6 py-2 px-3 rounded-full text-white font-medium text-sm' : 'text-gray-800 lg:px-6 py-2 px-3 text-sm shadow-lg rounded-full mx-2 border'}
                                        >
                                            About Me
                                        </button>
                                    )}
                                </Tab>

                                <Tab as={Fragment}>
                                    {({ selected }) => (
                                        <button
                                            className={selected ? 'bg-gradient-to-r from-cyan-500 to-blue-500 lg:px-6 py-2 px-3 rounded-full text-white font-medium text-sm' : 'text-gray-800 lg:px-6 py-2 px-3 text-sm shadow-lg rounded-full mx-2 border'}
                                        >
                                            Experience
                                        </button>
                                    )}
                                </Tab>

                                <Tab as={Fragment}>
                                    {({ selected }) => (
                                        <button
                                            className={selected ? 'bg-gradient-to-r from-cyan-500 to-blue-500 lg:px-6 py-2 px-3 rounded-full text-white font-medium text-sm' : 'text-gray-800 lg:px-6 py-2 px-3 text-sm shadow-lg rounded-full mx-2 border'}
                                        >
                                            Education
                                        </button>
                                    )}
                                </Tab>
                            </div>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                <AboutDiv></AboutDiv>
                            </Tab.Panel>
                            <Tab.Panel>
                                <Experience></Experience>
                            </Tab.Panel>
                            <Tab.Panel>
                                <Education></Education>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>

            <div className='md:flex gap-5 items-start justify-between sm:mx-10 md:mx-20 px-4 lg:mx-40 py-4' data-aos="zoom-in">
                <div className='flex items-center justify-center gap-4'>

                    <a
                        className='text-center p-2 rounded-full bg-blue-100 text-lg text-[#3786F3] hover:bg-[#3786F3] hover:text-white'
                        href="https://www.facebook.com/mahin.khan.77398/"
                        target="blank"
                    > <FaFacebookF></FaFacebookF> </a>

                    <a
                        className='text-center p-2 rounded-full bg-blue-100 text-lg text-[#3786F3] hover:bg-[#3786F3] hover:text-white'
                        href="https://twitter.com/MahinKh38241967"
                        target="blank"
                    > <FaTwitter></FaTwitter> </a>

                    <a
                        className='text-center p-2 rounded-full bg-blue-100 text-lg text-[#3786F3] hover:bg-[#3786F3] hover:text-white'
                        href="https://www.linkedin.com/in/md-mahen-khan/"
                        target="blank"
                    > <FaLinkedinIn></FaLinkedinIn> </a>

                    <a
                        className='text-center p-2 rounded-full bg-blue-100 text-lg text-[#3786F3] hover:bg-[#3786F3] hover:text-white'
                        href="https://github.com/developer-mahin"
                        target="blank"
                    > <FaGithub></FaGithub> </a>

                    <a
                        className='text-center p-2 rounded-full bg-blue-100 text-lg text-[#3786F3] hover:bg-[#3786F3] hover:text-white'
                        href="https://www.instagram.com/mahin4263/?hl=en"
                        target="blank"
                    > <FaInstagram></FaInstagram> </a>
                </div>
            </div>
        </div>
    );
};

export default About;