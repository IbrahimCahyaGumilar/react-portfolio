import React from 'react'
import { FaInstagram, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Contact = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    <HiOutlineMail size={20} />
                </>
            ),
            href: 'mailto:ibrahimcahya08@gmail.com',
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={20} />
                </>
            ),
            href: 'https://github.com/IbrahimCahyaGumilar',
        },
        {
            id: 3,
            child: (
                <>
                    <FaInstagram size={20} />
                </>
            ),
            href: 'https://www.instagram.com/ibrahim_cahya00/',

        },
    ]

    return (
        <div>
            <div name='contact' className='active bg-[#111] w-full h-[90vh]'>
                <div className='max-w-screen-lg mx-auto px-4 w-full h-full flex flex-col justify-center'>
                    <div className='flex flex-col mb-8'>
                        <h1 className='text-4xl font-semibold text-primary'>Contact :</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        <form action="https://getform.io/f/7162633a-4d48-4c88-8741-6b277928d1f6" method='POST' className='flex flex-col w-full md:w-1/2'>
                            <input type="text" name='name' placeholder='Name :' className='bg-[#333] text-white focus:outline-none rounded-md h-10 pl-4' />
                            <input type="text" name='email' placeholder='Email :' className='bg-[#333] text-white focus:outline-none rounded-md h-10 pl-4 my-6' />
                            <textarea name="message" rows="10" placeholder='Message :' className='bg-[#333] text-white focus:outline-none rounded-md pl-4'></textarea>
                            <div className='flex justify-start'>
                                <button className='bg-secondary px-10 py-2 rounded-lg font-semibold hover:bg-primary text-[#111] mt-8'>Send</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
            <div className='flex flex-col gap-4 text-sm text-white justify-center items-center lg:hidden h-[10vh] bg-[#111]'>
                        <div>
                            <h1>© Copyright by Ibrahim Cahya Gumilar</h1>
                        </div>
                        <ul className='flex justify-center gap-6'>
                            {links.map(({ id, child, href }) => (
                                <li>
                                    <a href={href} target="_blank" rel="noreferrer" className='text-white'>
                                        {child}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
            <div className='hidden lg:flex justify-center text-white h-[5vh] bg-[#111]'>
                <h1>© Copyright by Ibrahim Cahya Gumilar</h1>
            </div>
        </div>
    )
}

export default Contact