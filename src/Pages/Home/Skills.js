import React from 'react';
import 'react-circular-progressbar/dist/styles.css';


const Skills = () => {
    const skills = [
        { id: 1, name: "HTML", img: "https://i.ibb.co/smb0vHq/Html.png" },
        { id: 2, name: "CSS", img: "https://i.ibb.co/NZJDwpc/css.png" },
        { id: 3, name: "BootStrap", img: "https://i.ibb.co/hsbN5q9/Bootstrap-logo-svg.png" },
        { id: 4, name: "TailwindCSS", img: "https://i.ibb.co/m4DGVWF/Tailwind-CSS-Logo-svg.png" },
        { id: 5, name: "JavaScript", img: "https://i.ibb.co/n0kBm73/java-Script.png" },
        { id: 6, name: "React.JS", img: "https://i.ibb.co/8Xpm8Jc/React-icon-svg.png" },
        { id: 7, name: "Firebase", img: "https://i.ibb.co/N6J5kjF/firebase.png" },
        { id: 8, name: "Node.JS", img: "https://i.ibb.co/nLxFKCs/590px-Node-js-logo-svg.png" },
        { id: 9, name: "MongoDB", img: "https://i.ibb.co/FKfc3v9/mongo.png" },
        { id: 10, name: "Express.JS", img: "https://i.ibb.co/0C5fH6d/download-2-removebg-preview.png" },
        { id: 11, name: "WordPress", img: "https://i.ibb.co/WkBf0K0/Word-Press-svg.png" },
        { id: 12, name: "Elementor", img: "https://ps.w.org/elementor/assets/icon.svg?rev=2597493" },
        { id: 13, name: "DIVI", img: "https://i.ibb.co/vxQf0Rq/divi-logo-sq.png" },
        { id: 14, name: "WooCommerce", img: "https://www.pngkey.com/png/full/119-1194431_woocommerce-icon-wordpress-woocommerce.png" },
    ]

    const familiars = [
        {
            id: 1,
            img: "https://i.ibb.co/rFnGjcC/download.png",
            name: "TypeScript"
        },
        {
            id: 2,
            img: "https://i.ibb.co/cvGnJ3s/800px-Nextjs-logo-svg.png",
            name: "Next.JS"
        },
        {
            id: 3,
            img: "https://i.ibb.co/JyNpnND/5848309bcef1014c0b5e4a9a.png",
            name: "Redux"
        }
    ]

    const softSkills = [
        {
            id: 5,
            img: "https://i.ibb.co/wd8nyP0/download-1.png",
            name: "Git"
        },
        {
            id: 4,
            img: "https://i.ibb.co/bvCHhCn/25231.png",
            name: "GitHub"
        },
        {
            id: 3,
            img: "https://i.ibb.co/GnhbPjd/vercel-icon-512x449-3422jidz.png",
            name: "Vercel"
        },
        {
            id: 2,
            img: "https://i.ibb.co/Z1BMyGX/download-2.png",
            name: "Netlify"
        },
        {
            id: 1,
            img: "https://i.ibb.co/WVbDgFB/download-3.png",
            name: "VS Code"
        },
        {
            id: 6,
            img: "https://i.ibb.co/SvqPtST/ai.png",
            name: "Adobe AI"
        },
        {
            id: 7,
            img: "https://i.ibb.co/JcCRqmW/figma.png",
            name: "Figma"
        },
        {
            id: 8,
            img: "https://i.ibb.co/djTW7qz/ps.png",
            name: "Adobe PS"
        },
    ]


    return (
        <div id='skills-section' className='lg:py-16 py-6 px-3 sm:mx-10 md:mx-20 lg:mx-40'>
            <div className='text-center' p-2 rounded-full bg-blue-400>
                <h1 className='text-gray-300 lg:text-7xl text-5xl font-semibold' data-aos="fade-up">Skills</h1>
                <h3 className='lg:text-3xl text-xl font-semibold text-gray-800' data-aos="fade-up">Skills are achievement</h3>
            </div>

            <div className='py-6 md:py-0'>
                <div>
                    <div className='mt-6'>
                        <h2 data-aos="zoom-in" className='text-center text-xl text-gray-500'>Technology That I used</h2>
                        <hr className='lg:w-1/2 w-10/12 mx-auto border border-gray-200 rounded' />
                    </div>
                    <div className='grid lg:grid-cols-7 md:grid-cols-4 grid-cols-3 gap-6 items-center justify-items-center lg:mt-6 mt-6'>

                        {
                            skills.map(skill => <div data-aos="zoom-in" className='flex justify-between items-center gap-1 skillImg' key={skill.id}>

                                <img className='w-6 h-6 skillImg' src={skill.img} alt="" />
                                <h2>{skill.name}</h2>

                            </div>)
                        }

                    </div>


                </div>
            </div>

            <div className='py-6 md:py-0'>
                <div className='lg:mt-10 mt-3'>
                    <h2 data-aos="zoom-in" className='text-center text-xl text-gray-500'>With Familiar</h2>
                    <hr className='lg:w-1/2 w-10/12 mx-auto border border-gray-200 rounded' />
                </div>
                <div className='grid lg:grid-cols-7 md:grid-cols-4 grid-cols-3 gap-6 items-center justify-items-center lg:mt-6 mt-6'>

                    {
                        familiars.map(familiar => <div data-aos="zoom-in" className='flex justify-between items-center gap-1 skillImg' key={familiar.id}>

                            <img className='w-6 h-6 skillImg' src={familiar.img} alt="" />
                            <h2>{familiar.name}</h2>

                        </div>)
                    }

                </div>
            </div>

            <div className='py-6 md:py-0'>
                <div className='lg:mt-10 mt-3'>
                    <h2 data-aos="zoom-in" className='text-center text-xl text-gray-500'>Soft Skills</h2>
                    <hr className='lg:w-1/2 w-10/12 mx-auto border border-gray-200 rounded' />
                </div>
                <div className='grid lg:grid-cols-7 md:grid-cols-4 grid-cols-3 gap-6 items-center justify-items-center lg:mt-6 mt-6'>

                    {
                        softSkills.map(softSkill => <div data-aos="zoom-in" className='flex justify-between items-center gap-1 skillImg' key={softSkill.id}>

                            <img className='w-6 h-6 skillImg' src={softSkill.img} alt="" />
                            <h2>{softSkill.name}</h2>

                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Skills;