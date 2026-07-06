import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='w-full bg-cover bg-no-repeat min-h-screen'>
       <Navbar/>
       <Home/>
    </div>
  )
}

export default App

   
    