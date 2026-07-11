import React from 'react'

const Home5 = () => {
    const images = [
        'https://antra.ibthemespro.com/assets/img/sponsor/sponsor-5.png',
        'https://antra.ibthemespro.com/assets/img/sponsor/sponsor-6.png',
        'https://antra.ibthemespro.com/assets/img/sponsor/sponsor-1.png',
        'https://antra.ibthemespro.com/assets/img/sponsor/sponsor-2.png',
        'https://antra.ibthemespro.com/assets/img/sponsor/sponsor-3.png',
        'https://antra.ibthemespro.com/assets/img/sponsor/sponsor-4.png'
    ]
  return (
    <>
    <div className='w-full overflow-hidden h-[1200px] relative'>
      <div className='px-8 xl:py-60 py-40'>
        <img src="https://antra.ibthemespro.com/assets/img/images/project-house.png" alt="" />
      </div>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='font-bold text-2xl mx-auto'>Our Website <span className='text-[#CAA05C]'>75000</span>+ VIP Customer</h1></div>
        <div className='flex mt-20 justify-around'>
        {images.map((images, idx)=>(
          <img key={idx} src={images} alt="" />
        ))}
      </div>
    </div>
    <div className='w-full h-full'>
      <img className='w-[40%] h-[50%]' src="https://antra.ibthemespro.com/assets/img/shapes/team-bg-shape-1.png" alt="" />
      </div>
      </>
  )
}

export default Home5
