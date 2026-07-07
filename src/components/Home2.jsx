import React from 'react'

const Home2 = () => {
    const data = [
        {
            img:'https://antra.ibthemespro.com/assets/img/icon/service-icon-1.png',
            h1:'Architectural Design',
            p:'Dream it, we’ll design it! From big picture layouts to the tiniest details, our architectural magic brings your ideas to life with creativity and precision!'
        },
        {
           img:'https://antra.ibthemespro.com/assets/img/icon/service-icon-2.png',
           h1:'Interior Design & Planning',
           p:'Dream it, we’ll design it! From big picture layouts to the tiniest details, our architectural magic brings your ideas to life with creativity and precision!'
        },
         {
           img:'https://antra.ibthemespro.com/assets/img/icon/service-icon-3.png',
           h1:'Consulting Services',
           p:'Dream it, we’ll design it! From big picture layouts to the tiniest details, our architectural magic brings your ideas to life with creativity and precision!'
        },
         {
           img:'https://antra.ibthemespro.com/assets/img/icon/service-icon-4.png',
           h1:'Project Manangement',
           p:'Dream it, we’ll design it! From big picture layouts to the tiniest details, our architectural magic brings your ideas to life with creativity and precision!'
        },
    ]
  return (
    <div className='bg-white h-screen w-full'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4 px-6 xl:py-80 py-40'>
      {data.map((data, idx)=>(
        <div key={idx} className='w-full h-[600px] bg-white border rounded-3xl px-12 py-14 shadow-2xl border-gray-50'>
          <img src={data.img} alt="" />
          <h1 className='text-4xl font-extrabold mt-6'>{data.h1}</h1>
          <p className='text-gray-700 text-xl mt-30 border-t pt-12 border-gray-200'>{data.p}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Home2
