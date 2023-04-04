import React from 'react'
import webBook from '../assets/images/portfolio/web-book.png'
import webSchool from '../assets/images/portfolio/web-school.png'

const Projects = () => {

    const projects = [
        { id: 1, src: webBook, live: 'https://ibrahimcahyagumilar.github.io/web-book/public/index.html', repo: 'https://github.com/IbrahimCahyaGumilar/web-book' },
        { id: 2, src: webSchool, live: 'https://ibrahimcahyagumilar.github.io/web-school/index.html', repo: 'https://github.com/IbrahimCahyaGumilar/web-school' },
    ]

    return (
        <div name="projects" className='active bg-[#111] w-full md:h-[50vh] text-white sm:pt-32 md:pt-0'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='mb-8'>
                    <h1 className='font-semibold text-4xl text-primary'>Projects</h1>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0'>
                    {projects.map(({ id, src, live, repo }) => (
                        <div key={id} className='shadow-md shadow-primary rounded-lg'>
                            <div>
                                <img src={src} alt="" className='duration-200 hover:scale-105' />
                            </div>
                            <div className='flex justify-center gap-5 py-3'>
                                <a href={live} target="_blank" rel="noopener noreferrer">
                                    <button className='text-[10px] md:text-md lg:text-[15px] font-semibold sm:py-1 sm:px-2 lg:py-3 lg:px-6 md:py-2 md:px-4 p-2 border-2 border-primary hover:bg-[#5bbdff] hover:text-black'>View Live</button>
                                </a>
                                <a href={repo} target="_blank" rel="noopener noreferrer">
                                    <button className='text-[10px] md:text-md lg:text-[15px] font-semibold sm:py-1 sm:px-2 lg:py-3 lg:px-6 md:py-2 md:px-4 p-2 border-2 border-primary hover:bg-[#5bbdff] hover:text-black'>Github Repo</button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
