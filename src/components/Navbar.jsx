import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png';
import {Link, Outlet} from 'react-router-dom';
const Navbar = () => {
    const [nav, setNav]=useState(false); 
    const handleClick = () => setNav(!nav);
  return (
    <>
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#d731ff] text-black-300'>
        <div> {/* logo container */}
            <img src={Logo} alt='Logo Image' style={{width:'250px'}}/>
        </div>
        {/* menu container */}
        <div className='hidden md:flex'>
            <ul className='hidden md:flex text-[#edfe58]'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/services'>Services</Link>
                </li>
                <li>
                    <Link to='/work'>Works</Link>
                </li>
                <li>
                    <Link to='/contact'>Contacts</Link>
                </li>
            </ul>
        </div>
    

    {/*Hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars style={{color:'yellow'}}/> :<FaTimes/> }
        </div>
        {/*mobile menu*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-violet-500 to-yellow-300 flex flex-col justify-center items-center' }>
                <li  className='py-6 text-4xl'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to='/about'>About</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to='/services'>Services</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to='/work'>Works</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to='/contact'>Contacts</Link>
                </li>
        </ul>
        {/*Social icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center 
                ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-yellow-400 bg-violet-500 rounded-lg '>
                        Facebook <FaFacebook size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center 
                ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-yellow-400 bg-violet-500 rounded-lg '>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center 
                ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-yellow-400 bg-violet-500 rounded-lg '>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center 
                ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-yellow-400 bg-violet-500 rounded-lg  '>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
        </div>
        <Outlet />
        </>
  );
};

export default Navbar
