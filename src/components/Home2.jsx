import React from 'react'
import Home3 from './Home3'

const Home2 = () => {
  const data = [
    {
      img: 'https://antra.ibthemespro.com/assets/img/icon/service-icon-1.png',
      h1: 'Architectural Design',
      p: 'Dream it, we’ll design it! From big picture layouts to the tiniest details, our architectural magic brings your ideas to life with creativity and precision!'
    },
    {
      img: 'https://antra.ibthemespro.com/assets/img/icon/service-icon-2.png',
      h1: 'Interior Design & Planning',
      p: 'Dream it, we’ll design it! From big picture layouts to the tiniest details, our architectural magic brings your ideas to life with creativity and precision!'
    },
    {
      img: 'https://antra.ibthemespro.com/assets/img/icon/service-icon-3.png',
      h1: 'Consulting Services',
      p: 'Dream it, we’ll design it! From big picture layouts to the tiniest details, our architectural magic brings your ideas to life with creativity and precision!'
    },
    {
      img: 'https://antra.ibthemespro.com/assets/img/icon/service-icon-4.png',
      h1: 'Project Manangement',
      p: 'Dream it, we’ll design it! From big picture layouts to the tiniest details, our architectural magic brings your ideas to life with creativity and precision!'
    },
  ]
  return (
    <>
      <div className='bg-white min-h-screen xl:h-[1100px] px-8 xl:py-40 py-16  w-full'>
        <div className='xl:flex-row justify-between flex flex-col w-full'>
          <div className='xl:w-[30%] w-full'>
            <span className="items-center w-fit inline-block uppercase justify-center text-xs font-semibold tracking-wider text-black backdrop-blur-sm bg-transparent border border-gray-300 rounded-full py-1.5 px-4 mb-6">
              <span className='text-[#CAA05C]'>•</span> Who WE are
            </span>
          </div>
          <div className='xl:w-[70%] w-full max-w-5xl'>
            <h1 className='capitalize text-3xl lg:text-5xl md:text-4xl w-full xl:text-7xl font-bold leading-tighter tracking-tighter'>Experience<span className='text-[#CAA05C]'> the art of Interior </span>Design</h1>
            <p className='text-gray-700 mt-4 xl:mt-6 xl:mb-12 md:text-md tracking-wide lg:text-md max-w-xl'>We specialize in transforming visions into reality.<br/>
              Explore our portfolio of innovative architectural and interior design projects
              crafted with precision.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 mt-12 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:px-4 '>
          {data.map((data, idx) => (
            <div key={idx} className='w-full h-[500px] bg-white border rounded-3xl px-4 xl:px-12 py-10 shadow-2xl border-gray-50'>
              <img src={data.img} alt="" />
              <h1 className='text-2xl font-extrabold mt-4'>{data.h1}</h1>
              <p className='text-gray-700 text-md mt-16 border-t pt-12 border-gray-200'>{data.p}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default Home2
