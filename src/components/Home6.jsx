import React from 'react'

const Home6 = () => {
  return (
    <div className='w-full overflow-hidden h-[1000px] relative'>
       <div className=' h-full w-full inset-0 bg-cover bg-center absolute'
       style={{ backgroundImage: "url('https://images.unsplash.com/photo-1721614464891-0c21eb7d71b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8')" }}
      />
      <div className='absolute py-120 px-12 w-full h-full inset-0 bg-black/30 z-10 p-6'>
        <h1 className='capitalize text-white text-4xl lg:text-6xl md:text-5xl w-full xl:text-9xl font-bold leading-tighter tracking-tighter'>Unlock Your Dream<br/> House Today!</h1>
            <p  className='text-gray-200 mt-6 mb-12 md:text-md tracking-wide lg:text-xl max-w-2xl'>We specialize in transforming visions into reality.<br/>
              Explore our portfolio of innovative architectural and interior design projects
              crafted with precision.
            </p>
      </div>
      </div>
  )
}

export default Home6
