import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlink = ({ open, setOpen }) => {
    return (
        <>
            <li className='md:ml-10 md:mb-0 mb-4'>
                <NavLink onClick={() => setOpen(!open)} style={({ isActive }) => {
                    return isActive ? { color: '#333' } : undefined
                }} className='text-base font-medium text-gray-400 hover:text-[#333] duration-200' to='/'>Home</NavLink>
            </li>
            <li className='md:ml-10 md:mb-0 mb-4'>
                <NavLink onClick={() => setOpen(!open)} style={({ isActive }) => {
                    return isActive ? { color: '#333' } : undefined
                }} className='text-base font-medium text-gray-400 hover:text-[#333] duration-200' to='/about'>About Me</NavLink>
            </li>
            <li className='md:ml-10 md:mb-0 mb-4'>
                <NavLink onClick={() => setOpen(!open)} style={({ isActive }) => {
                    return isActive ? { color: '#333' } : undefined
                }} className='text-base font-medium text-gray-400 hover:text-[#333] duration-200' to='/services'>Services</NavLink>
            </li>
            <li className='md:ml-10 md:mb-0 mb-4'>
                <NavLink onClick={() => setOpen(!open)} style={({ isActive }) => {
                    return isActive ? { color: '#333' } : undefined
                }} className='text-base font-medium text-gray-400 hover:text-[#333] duration-200' to='/skills'>Skills</NavLink>
            </li>
            <li className='md:ml-10 md:mb-0 mb-4'>
                <NavLink onClick={() => setOpen(!open)} style={({ isActive }) => {
                    return isActive ? { color: '#333' } : undefined
                }} className='text-base font-medium text-gray-400 hover:text-[#333] duration-200' to='/projects'>Projects</NavLink>
            </li>

            <li className='md:ml-10 md:mb-0 mb-4'>
                <NavLink onClick={() => setOpen(!open)} style={({ isActive }) => {
                    return isActive ? { color: '#333' } : undefined
                }} className='text-base font-medium text-gray-400 hover:text-[#333] duration-200' to='/blogs'>Blogs</NavLink>
            </li>

            <li className='md:ml-10 md:mb-0 mb-4'>
                <NavLink onClick={() => setOpen(!open)} style={({ isActive }) => {
                    return isActive ? { color: '#333' } : undefined
                }} className='text-base font-medium text-gray-400 hover:text-[#333] duration-200' to='/contact'>Contact</NavLink>
            </li>
        </>
    );
};

export default Navlink;