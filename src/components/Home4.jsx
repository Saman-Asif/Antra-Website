import React from 'react'
import { ArrowUpRight } from 'lucide-react';
const Home4 = () => {
  const data = [
   { 
    span:'01',
    li: 'Residential Interior Design'
  },
   {
    span: '02',
    li: 'Commercial Interior Design'
  }, 
   {
    span: '03',
    li: 'Interior Design Consultation'
  },
   {
    span: '04',
    li: 'Outdoor & Landscape Design'
  },
   {
    span: '05',
    li: 'Renovation and Remodeling'
  },
  ]
  return (
    <>
      <div className='w-full overflow-hidden h-[2500px] relative'>
       <div className='xl:px-8 xl:py-60 py-16 px-4'>
         <div className='xl:flex-row justify-between flex flex-col w-full'>
          <div className='xl:w-[30%] w-full'>
            <span className="items-center w-fit inline-block uppercase justify-center text-xs font-semibold tracking-wider text-black backdrop-blur-sm bg-transparent border border-gray-300 rounded-full py-1.5 px-4 mb-6">
              <span className='text-[#CAA05C]'>•</span> Who WE are
            </span>
          </div>
          <div className='xl:w-[70%] max-w-5xl w-full'>
            <h1 className='capitalize text-3xl lg:text-5xl md:text-4xl w-full xl:text-6xl font-bold leading-tighter tracking-tighter'>Explore our<span className='text-[#CAA05C]'> comprehensive interior design  </span> services</h1>
            <p  className='text-gray-700 mt-6 mb-12 md:text-md tracking-wide lg:text-md max-w-xl'>We specialize in transforming visions into reality.<br/>
              Explore our portfolio of innovative architectural and interior design projects
              crafted with precision.
            </p>
          </div>
        </div>
        <div className='flex flex-col xl:flex-row h-full w-full justify-between'>
          <div className='xl:flex-5'>
             <img className='w-full rounded-3xl h-full' src="https://antra.ibthemespro.com/assets/img/service/feature-img-1.png" alt="" />
          </div>
          <div className='xl:flex-5 p-6'>
           {data.map((data,idx)=>(
              <ul key={idx} className='flex justify-center flex-col border-b border-gray-300'>
              <li className='flex items-center gap-6 p-2 md:p-8 text-sm md:text-3xl font-bold'><span className='md:text-xl text-xs text-gray-700 text-center'>{data.span}</span>{data.li}<ArrowUpRight className='bg-[#CAA05C] text-white rounded-full p-2 md:p-3 h-6 w-6 md:w-10 md:h-10'/></li>
             </ul>
           ))} 
          </div>
        </div>
        <div className='w-full h-full'>
         <img src="https://antra.ibthemespro.com/assets/img/images/counter-img-1.png" alt="" />
          <span className="items-center w-fit inline-block uppercase justify-center text-xs font-semibold tracking-wider text-black backdrop-blur-sm bg-transparent border border-gray-300 rounded-full py-1.5 px-4 mb-6">
              <span className='text-[#CAA05C]'>•</span> Who WE are
            </span>
              <h1 className='capitalize text-3xl lg:text-5xl md:text-4xl w-full xl:text-6xl font-bold leading-tighter tracking-tighter'>Description<span className='text-[#CAA05C]'> Architecture process </span>for exceptional results.</h1>
            <p  className='text-gray-700 mt-6 mb-12 md:text-md tracking-wide lg:text-md max-w-xl'>
                Our process is alive - adapting, refining, and growing
with your vision. Always.
Like artists with a blank canvas, we transform rooms
into living works of art.
            </p>
       </div>
      </div>
      </div>
      <div className='w-full h-full'>
      <img className='w-full h-full' src="https://media.licdn.com/dms/image/v2/C4E1BAQG3aAsQN38TkQ/company-background_10000/company-background_10000/0/1585293632886/orata_engineering_cover?e=2147483647&v=beta&t=l1h3xJ7gneNnIBbEAv2i1yReLBi5rKKu-P7RVJNpo_w" alt="" />
      </div>
      <div className='w-full h-full'>
      <img className='w-full h-full' src="https://thumbs.dreamstime.com/b/detailed-pencil-sketch-modern-two-story-house-large-glass-windows-flat-roof-set-against-clean-white-background-346461782.jpg" alt="" />
      </div>
    </>
  )
}

export default Home4
