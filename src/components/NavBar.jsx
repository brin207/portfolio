import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaMoon, FaSun} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import RESUME from '../assets/Buan_Resume.pdf'

const NavBar = ({light, handleLight}) => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-white text-black dark:bg-black dark:text-white'>
      <div>
        <Link to="home" smooth={true} style={{cursor: "pointer"}}  duration={500}>
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
                <Link to="experience" offset={0} smooth={true}  duration={500}>
                    Experience
                </Link>
            </li>
            <li>
                <Link to="contact" offset={-50} smooth={true}  duration={500}>
                    Contact
                </Link>
            </li>
            <li>
                <ToggleSwitch 
                    switch="switch"
                    onClick={handleLight}
                    defaultChecked={light}
                    light={light}
                />
            </li>
        </ul>

        {/* hamburger */}
        <div onClick={handleNav} className={'md:hidden z-10'}>
            {!nav ? <FaBars/> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-white dark:bg-black flex flex-col justify-center items-center'}>
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
		<label className="w-10 inline-block pl-[0.15rem] hover:cursor-pointer">
			{ }
			<input
				id={props.id}
				name={props.name}
				onClick={props.onClick}
				type="checkbox"
				defaultChecked={props.defaultChecked}
                className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
			/>
            {props.light ? <FaMoon style={{margin:"auto 0px 0px 0px"}}/> : <FaSun style={{margin:"0px 0px 0px 15px"}}/>}
		</label>
	);
};
