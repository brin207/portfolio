import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaMoon, FaSun} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import RESUME from '../assets/Buan_Resume.pdf'
import LOGO from '../assets/img/bblogo.svg'
import LOGO2 from '../assets/img/bblogo2.svg'

const NavBar = ({light, handleLight}) => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex items-center px-4 bg-[#c6c0b8] text-[#4a3c26] dark:bg-[#474139] dark:text-[#d9cbb5]'>
      <div> 
        <Link to="home" smooth={true} style={{cursor: "pointer"}}  duration={500}>
            <img src={light ? LOGO2 : LOGO} alt="logo" className="m-5" style={{ width: "50px"}}/>
        </Link>
      </div>

      <div className='items-center ml-auto mr-5 md:flex'>

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
                    <Link to="experience" offset={0} smooth={true}  duration={500}>
                        Experience
                    </Link>
                </li>
                <li>
                    <Link to="contact" offset={-50} smooth={true}  duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* toggle switch for light/dark mode */}
            <div>
                <ToggleSwitch
                    switch="switch"
                    onClick={handleLight}
                    defaultChecked={light}
                    light={light}
                />
            </div>
      </div>

        {/* hamburger */}
        <div onClick={handleNav} className={'md:hidden z-10'}>
            {!nav ? <FaBars/> : <FaTimes />}
        </div>

        {/* mobile menu */}
        
        <ul className={!nav ? 'hidden' : 'md:hidden absolute top-0 left-0 w-full h-screen bg-[#c6c0b8] dark:bg-[#474139] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleNav} to="about" smooth={true}  duration={500}>
                    About
                </Link></li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleNav} offset={-100} to="skills" smooth={true}  duration={500}>
                    Skill
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleNav} offset={-100} to="experience" smooth={true}  duration={500}>
                    Experience
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleNav} offset={-50} to="contact" smooth={true}  duration={500}>
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

const ToggleSwitch = (props) => {
	return (
        <>
             <label
                className="flex items-center cursor-pointer select-none"
                >
                <div className="relative">
                    <input
                        id={props.id}
                        type="checkbox"
                        name={props.name}
				        onClick={props.onClick}
                        defaultChecked={props.defaultChecked}
                        className="peer sr-only"
                        />
                    <div
                        className="block h-8 w-14 rounded-full bg-[#ECECEC]"
                        ></div>
                    <div
                        className="absolute flex items-center justify-center w-6 h-6 transition bg-[#c6c0b8] rounded-full dot dark:bg-[#474139] left-1 top-1 peer-checked:translate-x-full peer-checked:bg-primary"
                        >
                        <span className={
                            props.defaultChecked ? 'hidden' : 'flex'
                        }>
                            <FaMoon/>
                        </span>
                        <span className={
                            props.defaultChecked ? 'flex' : 'hidden'
                        }>
                            <FaSun/>
                        </span>
                    </div>
                </div>
                </label>
        </>
	);
};
