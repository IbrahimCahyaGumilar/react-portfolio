import React from 'react'
import { FaInstagram, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Social = () => {
    const links = [
        {
            id: 1,
            social: (
                <>
                    <HiOutlineMail size={25} />
                </>
            ),
            href: 'mailto:ibrahimcahya08@gmail.com',
        },
        {
            id: 2,
            social: (
                <>
                    <FaGithub size={25} />
                </>
            ),
            href: 'https://github.com/IbrahimCahyaGumilar',
        },
        {
            id: 3,
            social: (
                <>
                    <FaInstagram size={25} />
                </>
            ),
            href: 'https://www.instagram.com/ibrahim_cahya00/',

        },
    ]

    return (
        <div className='hidden lg:flex flex-col fixed top-[70%] left-10'>
            <ul className='flex flex-col gap-8'>
                {links.map(({ id, social, href }) => (
                    <li>
                        <a href={href} target="_blank" rel="noreferrer" className='text-white'>
                            {social}
                        </a>
                    </li>
                ))}
                <div className='flex items-center ml-3 w-[2px] h-[10rem] bg-white'></div>
            </ul>
        </div>
    )
}

export default Social

