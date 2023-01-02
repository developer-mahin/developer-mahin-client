import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import AllProjects from '../../components/AllProjects';

const Projects = () => {


    const { data: categories = [] } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/categories")
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
            {/* <div className='text-center flex items-center justify-center gap-4 mt-5'>
                <button className='bg-gradient-to-r from-cyan-500 to-blue-500 lg:px-5 py-1 rounded-full text-white font-medium text-sm'>All</button>
                {
                    categories.map(category => <div className='' key={category._id}>

                        <Link to={`/projects_details/${category.category_name}`} className='bg-gradient-to-r from-cyan-500 to-blue-500 lg:px-5 py-2 rounded-full text-white font-medium text-sm'>{category.category_name}</Link>
                    </div>)
                }
            </div> */}
            <div className=''>
                <AllProjects></AllProjects>
            </div>
        </div>
    );
};

export default Projects;