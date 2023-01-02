import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { GiSmartphone } from "react-icons/gi"
import { ImLocation2 } from "react-icons/im";
import { MdAttachEmail } from "react-icons/md";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_mv4heq6',
            'template_3u6p59j',
            form.current,
            'BLs4I68p-JWBiWffD'
        )
            .then((result) => {
                toast.success("Successful")
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='contact-section' className='lg:py-20 py-6 px-3 lg:w-[1000px] w-full mx-auto'>
            <div className='text-center' p-2 rounded-full bg-blue-400>
                <h1 className='text-gray-300 lg:text-7xl text-5xl font-semibold' data-aos="zoom-in">Contact</h1>
                <h3 className='lg:text-3xl text-xl font-semibold text-gray-800' data-aos="zoom-in">Get in touch</h3>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center lg:mt-16 mt-6'>
                <div data-aos="zoom-in">

                    <div className='flex items-center gap-2 my-6'>
                        <GiSmartphone className='text-[#3687F3] text-4xl'></GiSmartphone>
                        <div>
                            <h2 className='text-lg text-gray-600'><a href="tel:+8801785767584">+8801785767584</a></h2>
                            <p className='text-sm font-medium text-gray-500'>My Phone Number</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 my-6'>
                        <ImLocation2 className='text-[#3687F3] text-4xl'></ImLocation2>
                        <div>
                            <h2 className='text-lg text-gray-600'>Dhaka, BanglaDesh</h2>
                            <p className='text-sm font-medium text-gray-500'>Bhuapur-Tangail</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 my-6' >
                        <MdAttachEmail className='text-[#3687F3] text-4xl'></MdAttachEmail>
                        <div>
                            <h2 className='text-lg text-gray-600'><a href="mailto:mahinkhan4238@gmail.com">mahinkhan4238@gmail.com</a></h2>
                            <p className='text-sm font-medium text-gray-500'>My Email Address</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>

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
                <form className='lg:col-span-2 lg:mt-0 mt-6' data-aos="zoom-in" ref={form} onSubmit={sendEmail}>

                    <input
                        type="text"
                        name="user_name"
                        placeholder='Enter your name'
                        className='input input-bordered w-full mb-3 rounded-lg'
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder='Enter your email'
                        className='input input-bordered w-full mb-3 rounded-lg'
                    />
                    <input
                        type="number"
                        name="user_phone"
                        placeholder='Enter phone number'
                        className='input input-bordered w-full mb-3 rounded-lg'
                    />
                    <textarea
                        name="message"
                        placeholder='Message.....'
                        className='w-full h-20 mb-3 rounded-lg border px-4 py-3'
                        id=""
                    ></textarea>
                    <button className='bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-md rounded-br-3xl text-gray-100 font-medium button' type="submit">Submit</button>
                </form>
            </div>

        </div>
    );
};

export default Contact;