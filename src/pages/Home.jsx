import React, { useEffect, useState } from 'react'

const Home = () => {
  const images = [
    "https://유성비앤제이.com/image/intro_bg.png",
    "https://imagef2.promeai.pro/process/do/023aba0d512c53dce9324f18055781a0.webp?sourceUrl=/g/p/gallery/publish/2024/12/02/a98264a8f66245eeae933a838f57bbae.jpg&x-oss-process=image/resize,w_500,h_500/format,webp&sign=34b0858cc7f4a38f19a621312969bc20",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDolrJEkprKpbH_YqNbe_lhIRKtm7Ahg-lGVUd7bja90rnxUY_i8mXDt8&s=10"
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
    <div className=' w-full h-screen relative overflow-hidden bg-black flex items-center pl-[-10]'>
      {/*background images*/}
      {images.map((img, idx) => (
        <div key={idx}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${idx === currentSlide ? 'opacity-100 scale-100 animate-[zoomOut_6s_ease-out_forwards]' : 'opacity-0 scale-105'}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      {/*dark overlay to make text pop*/}
      <div className='absolute py-40 inset-0 bg-black/30 z-10'>
        {/*content overlay*/}
        <div className='relative z-20 max-w-[600px] text-white'>
          <span className="items-center inline-block uppercase justify-center text-md font-semibold tracking-wider text-white backdrop-blur-sm bg-transparent border border-white/80 rounded-full py-1.5 px-4 mb-6">
            <span className='text-[#CAA05C]'>•</span> Fast and Reliable
          </span>
          {/*animated heading*/}
          <h1 key={animationKey} className='text-5xl md:text-6xl font-bold leading-tight opacity-0 translate-y-8 animate-[fadeUp_1.2s_cubic-bezier(0,25,1,0,5,1)_0.5s_forwards]'>
         The Art Of Stunning<br/>
         Interior Design
          </h1>
        </div>
      </div>
    </div>
  )
}
export default Home
