import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-black text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-white'>
                    About
                </p>
            </div>
            <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
            <div className='sm:text-right text-4xl font-bold'>
                <p>
                    I'm Bren Erjo L. Buan<br></br>and I am an aspiring <br></br>web developer.
                </p>
            </div>
            <div>
                <p>
                    At a young age, I was exposed to a variety of computer games the likes of Ragnarok and Counter-Strike: Source. This in turn made me profecient in using computers. Since then, I am fascinated on how computers work which made me take up Computer Engineering as my course. During my years studying at the Polytechnic University of the Philippines, I was taught programming languages such as Python and C#. On the other hand for web development, languages such as HTML, CSS, and Javascript. With that in mind, I am keen to learn and be better every single day.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
