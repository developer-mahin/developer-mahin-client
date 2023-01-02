import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from 'react-router-dom';
import NavHash from "../NavHash";


const Header = () => {
    const [open, setOpen] = useState(false);
    return (

        <div className='sticky bg-[#e7e7e7b9] top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-lg'>
            <div>
                <div className='container mx-auto py-2'>
                    <nav className='md:container mx-auto flex justify-between items-center relative'>
                        <Link to="/" className='flex items-center md:ml-0 ml-2'>

                            <img src="https://i.ibb.co/93VdwBc/Developer-Mahin.png" className="w-80" alt="" />

                        </Link>
                        <ul className={`md:bg-transparent rounded-lg md:flex md:justify-end md:static absolute w-full z-50 ${open ? 'top-16 bg-[#e7e7e7e5] w-1/2 text-left px-4' : 'top-[-260px]'}`}>
                            <NavHash open={open} setOpen={setOpen}></NavHash>
                        </ul>
                        <div className='md:hidden md:pr-0 pr-3'>
                            {
                                open ?
                                    <HiX onClick={() => setOpen(!open)} className="h-9 w-9 text-black cursor-pointer" /> :
                                    <HiMenuAlt3 onClick={() => setOpen(!open)} className="h-9 w-9 text-black cursor-pointer" />
                            }
                        </div>
                    </nav>
                </div>
            </div>

        </div >
    );
};

export default Header;