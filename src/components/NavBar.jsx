import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';


const NavBar = () => {

    const [open, setOpen] = useState(false);

    const links = [
        { name: 'home', link: 'home' },
        { name: 'about', link: 'about' },
        { name: 'projects', link: 'projects' },
        { name: 'contact', link: 'contact' },
    ]

    return (
        <div className='shadow-md fixed top-0 left-0 w-full'>
            <div className='bg-transparent flex justify-between items-center px-0 md:px-10 py-4'>
                <div>
                    <Link spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer font-logo text-white text-5xl'>Ibrahim</Link>
                </div>

                <div onClick={() => setOpen(!open)} className='md:hidden absolute top-7 right-6'>
                    {open ? <FaTimes size={30} className='text-white' /> : <FaBars size={30} className='text-white' />}
                </div>cc

                <ul className={`overflow-hidden flex flex-col md:flex-row gap-10 absolute md:static bg-[#222] md:bg-transparent pt-32 md:pt-0 w-full h-screen md:w-auto md:h-auto left-0 top-0 z-[-1] md:z-auto transition-all duration-500 ease-in-out ${open ? 'left-0' : 'left-[100%]'}`}>
                    {links.map((link) => (
                        <li key={link.name} className='animasi-nav capitalize font-navbar text-white hover:text-primary xl:text-3xl lg:text-2xl text-xl px-4'>
                            <a href={link.link} className='animasi-nav'>
                                <Link to={link.link} spy={true} smooth={true} offset={-100} duration={500}>
                                    {link.name}
                                </Link>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default NavBar