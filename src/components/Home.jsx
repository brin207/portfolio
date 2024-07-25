import React from 'react'
import {Link} from 'react-scroll'
import {FaArrowRight} from 'react-icons/fa'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#c6c0b8] dark:bg-[#474139]'>
      
      {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#4a3c26] dark:text-[#d9cbb5]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#4a3c26] dark:text-[#d9cbb5]'>Bren Buan</h1>
            <h2 className='text-4xl sm:text-7xl font-black pb-1 bg-gradient-to-r from-[#be731e] to-[#474700] bg-clip-text text-transparent dark:from-[#e19741] dark:to-[#ffffb8]'> A Computer Engineer.</h2>
            <p className='text-[#4a3c26] dark:text-[#d9cbb5] py-4 max-w-[700px]'> A quote that best describes my mindset would be "Sic Parvis Magna" which essentially translates to "From Nothing Comes Greatness". I believe that if you truly put the effort in, no matter how long it takes nothing can stop you from achieving your goal.</p>
            <div>
                <button href="" className='rounded-lg text-[#c6c0b8] border-[#be731e] bg-[#be731e] hover:text-[#be731e] hover:bg-[#c6c0b8] hover:border-[#be731e] dark:bg-[#e19741] dark:text-[#474139] dark:border-[#e19741] dark:hover:text-[#e19741] dark:hover:bg-[#474139] dark:hover:border-[#e19741] group border-2 px-6 py-3 my-2 flex items-center'>
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
