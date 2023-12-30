import React from 'react'

import DKCOC from '../assets/img/dkcoc.png'
import DOSTCOC from '../assets/img/dostcoc.jpg'
import HELIOS from '../assets/img/helios.png'
import IPLATE from '../assets/img/iplate.png'
import PUPMAP from '../assets/img/pupmap.png'
import TTT from '../assets/img/tictactoe.png'
import LOGO2 from '../assets/img/bblogo2.svg'

const Experience = () => {
  return (
    <div>
        <div name='experience' className='w-full md:h-fit bg-[#c6c0b8] text-[#4a3c26] dark:text-[#d9cbb5] dark:bg-[#474139] py-20'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#4a3c26] dark:text-[#d9cbb5] dark:border-[#d9cbb5]'>Experience</p>
                    <p className='py-6'>I have worked on the following projects...</p>
                </div>
                {/*container*/}
                <div
                className='rounded-lg grid md:grid-cols-3 gap-4'>
                    <div style={{backgroundImage:`url(${DOSTCOC})`}}
                        className='group container rounded-md flex justify-center items-center mx-auto content-div bg-[#be731e] dark:bg-[#e19741] col-span-2'>
        
                        {/*hover*/}
                        <div className='text-center opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-[#d9cbb5] tracking-wider'>
                                On-the-Job Training 2
                            </span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" rel="noreferrer" href="https://www.dost.gov.ph/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-[#c6c0b8] border-2 border-[#be731e] bg-[#be731e] hover:text-[#be731e] hover:bg-[#c6c0b8] hover:border-[#be731e] dark:bg-[#e19741] dark:text-[#474139] dark:border-[#e19741] dark:hover:text-[#e19741] dark:hover:bg-[#474139] dark:hover:border-[#e19741] font-bold text-lg'>View More</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url(${HELIOS})`}}
                        className='group container rounded-md flex justify-center items-center mx-auto content-div bg-[#bc4024] dark:bg-[#db5e43]'>
        
                        {/*hover*/}
                        <div className='text-center opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-[#d9cbb5] tracking-wider'>
                                H.E.L.I.O.S Discord Bot
                            </span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" rel="noreferrer" href="https://github.com/brin207/HELIOS-Project">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-[#c6c0b8] border-2 border-[#be731e] bg-[#be731e] hover:text-[#be731e] hover:bg-[#c6c0b8] hover:border-[#be731e] dark:bg-[#e19741] dark:text-[#474139] dark:border-[#e19741] dark:hover:text-[#e19741] dark:hover:bg-[#474139] dark:hover:border-[#e19741] font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url(${IPLATE})`}}
                        className='group container rounded-md flex justify-center items-center mx-auto content-div bg-[#4a3c26] dark:bg-[#d9cbb5]'>
        
                        {/*hover*/}
                        <div className='text-center opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-[#d9cbb5] tracking-wider'>
                                iPlate
                            </span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" rel="noreferrer" href="https://github.com/brin207/iPlate">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-[#c6c0b8] border-2 border-[#be731e] bg-[#be731e] hover:text-[#be731e] hover:bg-[#c6c0b8] hover:border-[#be731e] dark:bg-[#e19741] dark:text-[#474139] dark:border-[#e19741] dark:hover:text-[#e19741] dark:hover:bg-[#474139] dark:hover:border-[#e19741] font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url(${DKCOC})`}}
                        className='group container rounded-md flex justify-center items-center mx-auto col-span-2 content-div bg-[#474700] dark:bg-[#ffffb8]'>
        
                        {/*hover*/}
                        <div className='text-center opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-[#d9cbb5] tracking-wider'>
                                On-the-Job Training 1
                            </span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" rel="noreferrer" href="https://www.virtualbadge.io/certificate-validator?credential=cer-8a5a6ac5-a3d4-4c4b-8247-229bf4e8">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-[#c6c0b8] border-2 border-[#be731e] bg-[#be731e] hover:text-[#be731e] hover:bg-[#c6c0b8] hover:border-[#be731e] dark:bg-[#e19741] dark:text-[#474139] dark:border-[#e19741] dark:hover:text-[#e19741] dark:hover:bg-[#474139] dark:hover:border-[#e19741] font-bold text-lg'>View More</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url(${PUPMAP})`}}
                        className='group container rounded-md flex justify-center items-center mx-auto content-div bg-[#be731e] dark:bg-[#e19741]'>
        
                        {/*hover*/}
                        <div className='text-center opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-[#d9cbb5] tracking-wider'>
                                PUP Interactive Map
                            </span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" rel="noreferrer" href="https://brin207.github.io/PUP-Main-Interactive-Map/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-[#c6c0b8] border-2 border-[#be731e] bg-[#be731e] hover:text-[#be731e] hover:bg-[#c6c0b8] hover:border-[#be731e] dark:bg-[#e19741] dark:text-[#474139] dark:border-[#e19741] dark:hover:text-[#e19741] dark:hover:bg-[#474139] dark:hover:border-[#e19741] font-bold text-lg'>Demo</button>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://github.com/brin207/PUP-Main-Interactive-Map">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-[#c6c0b8] border-2 border-[#be731e] bg-[#be731e] hover:text-[#be731e] hover:bg-[#c6c0b8] hover:border-[#be731e] dark:bg-[#e19741] dark:text-[#474139] dark:border-[#e19741] dark:hover:text-[#e19741] dark:hover:bg-[#474139] dark:hover:border-[#e19741] font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url(${TTT})`}}
                        className='group container rounded-md flex justify-center items-center mx-auto content-div bg-[#bc4024] dark:bg-[#db5e43]'>
        
                        {/*hover*/}
                        <div className='text-center opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-[#d9cbb5] tracking-wider'>
                                Tic-Tac-Toe Game
                            </span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" rel="noreferrer" href="https://github.com/brin207/Tic-Tac-Toe">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-[#c6c0b8] border-2 border-[#be731e] bg-[#be731e] hover:text-[#be731e] hover:bg-[#c6c0b8] hover:border-[#be731e] dark:bg-[#e19741] dark:text-[#474139] dark:border-[#e19741] dark:hover:text-[#e19741] dark:hover:bg-[#474139] dark:hover:border-[#e19741] font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url(${LOGO2})`}}
                        className='group container rounded-md flex justify-center items-center mx-auto content-div bg-[#4a3c26] dark:bg-[#d9cbb5]'>
        
                        {/*hover*/}
                        <div className='text-center opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-[#d9cbb5] tracking-wider'>
                                E-portfolio
                            </span>
                            <div className='pt-8 text-center'>
                                <a target="_blank" rel="noreferrer" href="https://brin207.github.io/portfolio/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-[#c6c0b8] border-2 border-[#be731e] bg-[#be731e] hover:text-[#be731e] hover:bg-[#c6c0b8] hover:border-[#be731e] dark:bg-[#e19741] dark:text-[#474139] dark:border-[#e19741] dark:hover:text-[#e19741] dark:hover:bg-[#474139] dark:hover:border-[#e19741] font-bold text-lg'>Demo</button>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://github.com/brin207/portfolio">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 text-[#c6c0b8] border-2 border-[#be731e] bg-[#be731e] hover:text-[#be731e] hover:bg-[#c6c0b8] hover:border-[#be731e] dark:bg-[#e19741] dark:text-[#474139] dark:border-[#e19741] dark:hover:text-[#e19741] dark:hover:bg-[#474139] dark:hover:border-[#e19741] font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="grid auto-rows-[192px] grid-cols-3 gap-4 max-w-[1000px] mx-auto">
        {[...Array(6)].map((_, i) => (
            <div
            key={i}
            className={`group container flex justify-center items-center mx-auto content-div row-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${
                i % 3 === 0 ? "col-span-2" : ""
            }`}
            style={{backgroundImage:`url(${PUPMAP})`}}
            ></div>
        ))}
        </div> */}
    </div>
  )
}

export default Experience
