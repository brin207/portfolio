import React from 'react'
import {Link} from 'react-scroll'
import {FaArrowRight} from 'react-icons/fa'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-white dark:bg-black'>
      
      {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-black dark:text-white'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-black dark:text-white'>Bren Buan</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-black dark:text-white'> A Computer Engineering Student.</h2>
            <p className='text-black dark:text-white py-4 max-w-[700px]'> A quote that best describes my mindset would be "Sic Parvis Magna" which essentially translates to "From Nothing Comes Greatness". I believe that if you truly put the effort in, no matter how long it takes nothing can stop you from achieving your goal.</p>
            <div>
                <button href="" className='text-black border-black hover:text-white hover:bg-black hover:border-black dark:text-white dark:border-white dark:hover:text-black dark:hover:bg-white dark:hover:border-white group border-2 px-6 py-3 my-2 flex items-center'>
                  <Link offset={-100} to="experience" smooth={true}  duration={500}>
                    View Work
                  </Link>
                <span className='group-hover:rotate-90 duration-300'>
                  <FaArrowRight className='ml-3'/>
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home
