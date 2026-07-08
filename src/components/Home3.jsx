import { ArrowRight, Check, CheckCheck } from 'lucide-react'
import React from 'react'

const Home3 = () => {
  return (
    <>
      <div className='w-full overflow-hidden h-[1000px] relative'>
       <div className=' blur-xs h-full w-full inset-0 bg-cover bg-center absolute'
       style={{ backgroundImage: "url('https://images.unsplash.com/photo-1774551351897-c64cd76a7c22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D')" }}
      />
      <div className='absolute py-24 px-12 w-full h-full inset-0 bg-black/30 z-10 p-6'>
       <div className='w-full flex'>
        <div className='w-1/2 flex flex-col'>
         <span className="items-center w-fit inline-block uppercase justify-center text-md font-semibold tracking-wider text-white backdrop-blur-sm bg-transparent border border-gray-300 rounded-full py-1.5 px-4 mb-8">
              <span className='text-[#CAA05C]'>•</span> STARTED in 1991
            </span>
            <h1 className='capitalize text-4xl text-white lg:text-6xl md:text-5xl w-full xl:text-7xl font-bold leading-tighter tracking-tighter'> Where Spaces<br/>
Inspire, and  <span className='text-[#CAA05C]'>Design<br/>
Comes Alive</span> </h1>
<div className='flex items-center mt-12 justify-between text-white max-w-xl font-medium text-xl'>
  <ul>
    <li className='flex gap-4 justify-center items-center'><CheckCheck className='text-[#CAA05C]'/>Latest technologies</li>
    <li className='flex gap-4 justify-center items-center'><CheckCheck className='text-[#CAA05C]'/>High-Quality Designs</li>
  </ul>
  <ul>
    <li className='flex gap-4 justify-center items-center'><CheckCheck className='text-[#CAA05C]'/>5 Years Warranty</li>
    <li className='flex gap-4 justify-center items-center'><CheckCheck className='text-[#CAA05C]'/>Reaidential Design</li>
  </ul>
</div>
            <p  className='text-white mt-12 mb-12 md:text-md tracking-wide lg:text-xl max-w-2xl'>
              Whether its your home, office, or a commercial project,we are always dedicated to bringing your vision to life.our numbers speak better then words:
            </p>
             <button className='xl:py-5 w-fit flex items-center justify-center py-3 gap-3 xl:px-6 px-6 text-xl font-semibold rounded-full text-white bg-[#CAA05C] mt-6'>Take Counsel <ArrowRight/></button>
        </div>
        <div className='w-1/2'>
          <img className='rounded-2xl object-cover' src="https://antra.ibthemespro.com/assets/img/images/about-img-1.png" alt="" />
        </div>
       </div>
       </div>
       </div>
    </>
  )
}

export default Home3
