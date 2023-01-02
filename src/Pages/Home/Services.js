import React from 'react';

const Services = () => {

    const servicesInfo = [

        {
            id: 1,
            img: "https://i.ibb.co/Rb9Rnjv/webpage.png",
            title: "WEB DESIGN",
            description: "Front End Development is building the visual components of a website. Using HTML, CSS, and Javascript, I build fast, interactive websites."
        },
        {
            id: 2,
            img: "https://i.ibb.co/09VBVFh/online-shop.png",
            title: "Online store & shopping",
            description: "I can create a fully functional online store with any type of payment gateway support and add shopping cart functionality into you’re existing website."
        },
        {
            id: 3,
            img: "https://i.ibb.co/54XY78L/coding.png",
            title: "XD/FIGMA/SKETCH TO HTML",
            description: "Abode XD/Sketch file convert to HTML/REACT/VUE to make perfect web pages."
        },
        {
            id: 4,
            img: "https://i.ibb.co/mSTCZQs/hypothesis.png",
            title: "Fixing problems",
            description: "Website problem & bugs it’s a common problem for every website. Don’t worry about bugs and problems. I can fix any type of problems & bugs for any website."
        },
        {
            id: 5,
            img: "https://i.ibb.co/L1xwVzV/monitoring.png",
            title: "Maintenance & Optimized",
            description: "Slow loading website it’s the biggest problem for every website. I can boost your website’s speed by optimization your website. And if you don’t have time to maintain your website don’t worry I’m here."
        },
        {
            id: 6,
            img: "https://i.ibb.co/Pjcc9W4/meeting.png",
            title: "Discussion",
            description: "To understand the project needs & requirements it’s very important for me, for that I discuss with every details to related projects if needed I communicate by video or audio conversations."
        }

    ]

    return (
        <div id='service-section' className='container mx-auto lg:py-16 py-6 px-3'>
            <div className='text-center' p-2 rounded-full bg-blue-400>
                <h1 className='text-gray-300 lg:text-7xl text-5xl font-semibold' data-aos="fade-up">SERVICES</h1>
                <h3 className='lg:text-3xl text-xl font-semibold text-gray-800' data-aos="fade-up">What I Do</h3>
            </div>

            <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
                {
                    servicesInfo.map(service => <div key={service.id} className='border shadow-lg rounded-lg p-6' data-aos="zoom-in">
                        <div className='flex justify-center items-center'>
                            <div className='w-24 h-24 rounded-full border-2 flex justify-center items-center'>
                                <img className='w-16 h-16 ' src={service.img} alt="" />
                            </div>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold text-gray-700 text-center'>{service.title}</h3>
                            <p className='text-center'>{service.description}</p>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Services;