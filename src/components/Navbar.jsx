import { Search, TextAlignJustify } from 'lucide-react';
import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className='w-full xl:p-6 p-4 flex justify-between items-center absolute top-0 bg-transparent z-10'>
         <img className='object-cover w-35 lg:w-45' src="https://antra.ibthemespro.com/assets/img/logo/logo-2.png" alt="" />
         <ul className='xl:flex hidden gap-8'>
         <Link className='text-white 2xl:text-2xl text-xl hover:text-[#CAA05C] transition-colors duration-300 font-semibold' to='/'>Home</Link>
         <Link className='text-white 2xl:text-2xl text-xl hover:text-[#CAA05C] transition-colors duration-300 font-semibold' to='/services'>Services</Link>
         <Link className='text-white 2xl:text-2xl text-xl hover:text-[#CAA05C] transition-colors duration-300 font-semibold' to='/portfolio'>Portfolio</Link>
         <Link className='text-white 2xl:text-2xl text-xl hover:text-[#CAA05C] transition-colors duration-300 font-semibold' to='/pages'>Pages</Link>
         <Link className='text-white 2xl:text-2xl text-xl hover:text-[#CAA05C] transition-colors duration-300 font-semibold' to='/blog'>Blog</Link>
         <Link className='text-white 2xl:text-2xl text-xl hover:text-[#CAA05C] transition-colors duration-300 font-semibold' to='/contact'>Contact</Link>
         </ul>
         <div className='flex gap-4'>
            <button className='2xl:py-5 md:py-1 2xl:px-10 md:px-6 hidden md:block text-xl font-semibold rounded-full text-white bg-[#CAA05C]'>Get in Touch</button>
            <button className='text-white hover:bg-[#CAA05C] transition-colors duration-300 2xl:p-6 p-4 hidden xl:block rounded-full bg-[#7e7874] border border-[#96908c]'><Search size={18}/></button>
            <button className='text-white p-4 hover:text-[#CAA05C] transition-colors duration-300 2xl:p-6 rounded-full bg-[#7c7874] border border-[#96908c]'><TextAlignJustify size={18}/></button>
         </div>
      </div>
    </>
  )
}

export default Navbar
