import { ArrowUpRight } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Home = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1689701843837-647ae31f90c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    "https://imagef2.promeai.pro/process/do/023aba0d512c53dce9324f18055781a0.webp?sourceUrl=/g/p/gallery/publish/2024/12/02/a98264a8f66245eeae933a838f57bbae.jpg&x-oss-process=image/resize,w_500,h_500/format,webp&sign=34b0858cc7f4a38f19a621312969bc20",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
      setAnimationKey((prev) => prev + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className='w-full min-h-screen overflow-hidden lg:h-[1200px] xl:h-[1300px] relative bg-black flex justify-center flex-col'>
      {/*background images*/}
      {images.map((img, idx) => (
        <div key={idx}
          className={`absolute h-full w-full inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${idx === currentSlide ? 'opacity-100 scale-100 animate-[zoomOut_6s_ease-out_forwards]' : 'opacity-0 scale-105'}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      {/*dark overlay to make text pop*/}
      <div className='absolute xl:py-80 py-40 w-full h-full inset-0 bg-black/30 z-10 p-6'>
        {/*content overlay*/}
        <div className='relative z- w-full flex flex-col text-white py-20'>
          <span className="items-center w-fit inline-block uppercase justify-center text-md font-semibold tracking-wider text-white backdrop-blur-sm bg-transparent border border-white/80 rounded-full py-1.5 px-4 mb-6">
            <span className='text-[#CAA05C]'>•</span> Fast and Reliable
          </span>
          {/*animated heading*/}
          <h1 className='text-4xl lg:text-6xl md:text-5xl w-full xl:text-8xl font-bold leading-tight'>
         The Art Of Stunning<br/> Interior Design
          </h1>
          <div className='xl:flex justify-between'>
            <div>
          <p className='text-white md:text-md lg:text-xl xl:mt-20 xl:pl-34 max-w-md'>Whether it's your home, office, or a commercial project, we are always dedicated to bringing your vision to life.</p>
          <div className='xl:pl-34'>
           <button className='xl:py-5 flex items-center justify-center py-3 gap-3 xl:px-6 px-6 text-xl font-semibold rounded-full text-white xl:mt-20 bg-[#CAA05C] mt-6'>Take Counsel <ArrowUpRight/></button>
           </div>
           </div>
           <div className='md:flex hidden flex-col md:flex-row gap-4 mt-6'>
             <div className='w-90 p-12 h-full bg-transparent backdrop-blur-2xl rounded-xl'>
            <h1 className='text-white text-5xl font-extrabold'>260+</h1>
            <p className='text-2xl mt-4'>Successfull projects and counting</p>
            <p className='text-2xl mt-24'>Tech Specifications</p>
            <p className='text-2xl'>Design Project</p>
            <p className='text-2xl'>3D Visualization</p>
            </div>
            <img className='rounded-xl w-90 h-full' src="https://antra.ibthemespro.com/assets/img/images/slider-thumb-1.png" alt="" />
           </div>
           </div>
        </div>
      </div>
    </div>
  )
}
export default Home
