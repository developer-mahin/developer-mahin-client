import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllProjects from '../../components/AllProjects';

const Projects = () => {


    const { data: categories = [] } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await fetch("https://developer-mahin-server.vercel.app/categories")
            const data = await res.json()
            return data
        }
    })

    console.log(categories)


    return (
        <div id='projects-section' className='lg:py-16 py-6 container mx-auto px-3'>
            <div className='text-center' p-2 rounded-full bg-blue-400>
                <h1 className='text-gray-300 lg:text-7xl text-5xl font-semibold' data-aos="fade-up">My Projects</h1>
                <h3 className='lg:text-3xl text-xl font-semibold text-gray-800' data-aos="fade-up">Recent Works</h3>
            </div>
            <div className=''>
                <AllProjects></AllProjects>
            </div>
        </div>
    );
};

export default Projects;