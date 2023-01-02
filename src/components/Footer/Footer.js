import React from 'react';
import { FaFacebook, FaGithub, FaLinkedinIn, FaLongArrowAltRight, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='lg:py-16 py-6 bg-gray-800 px-3'>
            <div className='container mx-auto'>
                <div className='grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-6'>
                    <div data-aos="zoom-in" className='col-span-3'>
                    <h3 className='text-3xl font-semibold text-white'>About Me</h3>
                    <p className='text-gray-300 pb-6'>I consider myself a quick learner, self-motivated, responsible, and disciplined person who always curious about new knowledge and the latest technology.</p>
                    <span className='font-medium text-sm text-gray-400 '>Copyright &copy; 2022 - All right reserved by Md. Mahen Khan</span>
                </div>
                <div data-aos="zoom-in"
                data-aos-easing="linear"
                        data-aos-duration="1500" className='col-span-2'>
                <h3 className='text-3xl font-semibold text-white'>Newsletter</h3>
                <span className='text-gray-300 pb-6'>Stay updated with our latest trends</span>
                <div className='flex items-center mt-6'>
                    <input
                        className='w-full border border-gray-500 bg-transparent text-gray-300 rounded px-6 py-2 outline-none'
                        type="email"
                        placeholder='Email Address'
                    />
                    <button className='px-4 py-3 buttonRadius'><FaLongArrowAltRight></FaLongArrowAltRight></button>
                </div>
            </div>
            <div data-aos="zoom-in"
            data-aos-easing="linear"
                        data-aos-duration="1500" className='col-span-1'>
            <h3 className='text-3xl font-semibold text-white'>Follow Me</h3>
            <span className='text-gray-300 pb-6'>Let us be social</span>
            <div className='flex items-center gap-2 mt-6'>
                <a className=' text-gray-100 text-lg' target="blank" href="https://www.linkedin.com/in/md-mahen-khan/">
                    <FaLinkedinIn />
                </a>
                <a className=' text-gray-100 text-lg' target="blank" href="https://github.com/developer-mahin">
                    <FaGithub />
                </a>
                <a className=' text-gray-100 text-lg' target="blank" href="https://www.facebook.com/mahin.khan.77398/">
                    <FaFacebook />
                </a>
                <a className=' text-gray-100 text-lg' target="blank" href="https://twitter.com/MahinKh38241967">
                    <FaTwitter />
                </a>
            </div>
        </div>
                </div >
            </div >

        </div >
    );
};

export default Footer;