import React from 'react';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div id='hero-section'>
            <div className='grid lg:grid-cols-2 grid-cols-1 items-center justify-center justify-items-start lg:gap-0 gap-6 lg:py-16 py-6 banner px-3 container mx-auto '>
                <div className='abced' data-aos="zoom-in-down">
                    <img className="lg:w-[450px] lg:h-[450px] h-[350px] w-[350px] rounded-full border-white border-8 object-cover" src="https://i.ibb.co/1GMhnXK/mahin.png" alt="" />
                </div>
                <div className=''>
                    <h2 data-aos="fade-down"
                        className='lg:text-6xl text-3xl font-bold text-gray-700'>I'm Mahen Khan</h2>
                    <div data-aos="fade-down"
                        className='flex gap-2'>
                        <h3 className="lg:text-3xl text-xl font-semibold text-gray-600">A </h3>
                        <h3 className="lg:text-3xl text-xl font-semibold text-gray-600"><Typewriter
                            options={{
                                strings: ['front-end developer', 'React.js developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></h3>
                    </div>
                    <p data-aos="fade-right" className='text-base'>
                        I’m Mahen Khan Passionate at web development. I love to do this it’s my life-everything. I am a Passionate Web Developer, fast learner, and team player also have strong desire to develop professionally and constantly enhance my skills.</p>
                    <div data-aos="fade-down" className='flex items-center mt-4'>
                        <a
                            href="https://drive.google.com/file/d/1Z5Wn4cORBnpx7-bh304lIqb2evd_6QCG/view"
                            target={`_blank`}
                            className='bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-md rounded-br-3xl text-gray-100 font-medium mr-4 flex items-center gap-2 button'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
                            </svg>
                            <button>Resume</button>
                        </a>
                        <button className='bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-full text-gray-100 font-medium button'>Contact Me</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;