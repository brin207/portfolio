import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import RESUME from '../assets/Buan_Resume.pdf'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-white'>
      <div>
        <Link to="home" smooth={true}  duration={500}>
            Bren Buan
        </Link>
      </div>

      {/* menu */}
        <ul className='hidden md:flex'>
            <li>
                <Link to="about" smooth={true}  duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link to="skills" offset={-100} smooth={true}  duration={500}>
                    Skill
                </Link>
            </li>
            <li>
                <Link to="experience" offset={-100} smooth={true}  duration={500}>
                    Experience
                </Link>
            </li>
            <li>
                <Link to="contact" offset={-50} smooth={true}  duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true}  duration={500}>
                    About
                </Link></li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} offset={-100} to="skills" smooth={true}  duration={500}>
                    Skill
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} offset={-100} to="experience" smooth={true}  duration={500}>
                    Experience
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} offset={-50} to="contact" smooth={true}  duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* social icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3B5998]'>
                    <a className='flex justify-between items-center w-full text-white'
                    target="_blank" rel="noreferrer" href="https://www.facebook.com/bren.buan/">
                        Facebook <FaFacebook size={30}/>
                    </a>
                </li>   
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077B5]'>
                    <a className='flex justify-between items-center w-full text-white'
                    target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bren-erjo-l-buan-2535b6248/">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#211F1F]'>
                    <a className='flex justify-between items-center w-full text-white'
                    target="_blank" rel="noreferrer" href="https://github.com/brin207">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c71610]'>
                    <a className='flex justify-between items-center w-full text-white'
                    target="_blank" rel="noreferrer" href="mailto:brenbuan207@gmail.com">
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565F69]'>
                    <a className='flex justify-between items-center w-full text-white'
                    target="_blank" rel="noreferrer" href={RESUME} download="Buan Resume">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar
