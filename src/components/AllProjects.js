import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleProjects from './SingleProjects';

const AllProjects = () => {

    const { data: allProjects = [] } = useQuery({
        queryKey: ["allProjects"],
        queryFn: async () => {
            const res = await fetch("https://developer-mahin-server.vercel.app/allProjects")
            const data = await res.json()
            return data
        }
    })

    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 mt-6 '>
            {
                allProjects.map(project => <SingleProjects
                    key={project._id}
                    project={project}
                ></SingleProjects>)
            }
        </div>
    );
};

export default AllProjects;