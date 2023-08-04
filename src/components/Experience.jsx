import React from 'react'

import DKCOC from '../assets/img/dkcoc.png'
import HELIOS from '../assets/img/helios.png'
import IPLATE from '../assets/img/iplate.png'
import PUPMAP from '../assets/img/pupmap.png'
import TTT from '../assets/img/tictactoe.png'

const Experience = () => {
  return (
    <div name='experience' className='w-full md:h-fit text-white bg-black'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-white border-white'>Experience</p>
                <p className='py-6'>I have worked on the following projects...</p>
            </div>

            {/*container*/}
            <div
            className='rounded-lg grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                <div style={{backgroundImage:`url(${DKCOC})`}}
                    className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*hover*/}
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            On-the-Job Training 1
                        </span>
                        <div className='pt-8 text-center'>
                            <a target="_blank" rel="noreferrer" href="https://www.virtualbadge.io/certificate-validator?credential=cer-8a5a6ac5-a3d4-4c4b-8247-229bf4e8">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>View More</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${HELIOS})`}}
                    className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*hover*/}
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            H.E.L.I.O.S Discord Bot
                        </span>
                        <div className='pt-8 text-center'>
                            <a target="_blank" rel="noreferrer" href="https://github.com/brin207/HELIOS-Project">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${IPLATE})`}}
                    className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*hover*/}
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            iPlate
                        </span>
                        <div className='pt-8 text-center'>
                            <a target="_blank" rel="noreferrer" href="https://github.com/brin207/iPlate">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${PUPMAP})`}}
                    className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*hover*/}
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            PUP Interactive Map
                        </span>
                        <div className='pt-8 text-center'>
                            <a target="_blank" rel="noreferrer" href="https://brin207.github.io/PUP-Main-Interactive-Map/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Demo</button>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/brin207/PUP-Main-Interactive-Map">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${TTT})`}}
                    className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*hover*/}
                    <div className='text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Tic-Tac-Toe Game
                        </span>
                        <div className='pt-8 text-center'>
                            <a target="_blank" rel="noreferrer" href="https://github.com/brin207/Tic-Tac-Toe">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience
