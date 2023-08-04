import React from 'react'

import HTML from '../assets/img/html.png'
import CSS from '../assets/img/css.png'
import JS from '../assets/img/js.png'
import CPP from '../assets/img/cpp.png'
import CSHARP from '../assets/img/c#.png'
import PY from '../assets/img/py.png'
import REACTIMG from '../assets/img/react.png'
import GITHUB from '../assets/img/github.png'

import STO from '../assets/img/sto.png'
import UE from '../assets/img/ue.png'
import PUP from '../assets/img/pup.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-fit bg-black text-white py-4'>
        <span> </span>
      {/*container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-white'>Technologies</p>
                <p className='py-4'>I have experience using the following...</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img src={HTML} alt="HTMLicon" className='w-20 mx-auto'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img src={CSS} alt="CSSicon" className='w-20 mx-auto'/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img src={JS} alt="JSicon" className='w-20 mx-auto'/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img src={CPP} alt="CPPicon" className='w-20 mx-auto'/>
                    <p className='my-4'>C++</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img src={CSHARP} alt="C#icon" className='w-20 mx-auto'/>
                    <p className='my-4'>C#</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img src={PY} alt="PYicon" className='w-20 mx-auto'/>
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img src={REACTIMG} alt="REACTicon" className='w-20 mx-auto'/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img src={GITHUB} alt="GITHUBicon" className='w-20 mx-auto'/>
                    <p className='my-4'>GitHub</p>
                </div>
            </div>

        {/*Education*/}
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-white'>Education</p>
                <p className='py-4'>I have attended the following schools...</p>
            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img src={STO} alt="STOicon" className='w-20 mx-auto'/>
                    <p className='my-4'>SNNS</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img src={UE} alt="UEicon" className='w-20 mx-auto'/>
                    <p className='my-4'>UE</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img src={PUP} alt="PUPicon" className='w-20 mx-auto'/>
                    <p className='my-4'>PUP</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
