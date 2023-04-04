import React from 'react'
import Html from '../assets/images/html.png'
import Css from '../assets/images/css.png'
import Tailwind from '../assets/images/tailwind.png'

const Skill = () => {

    const skills = [
        {
            id: 1,
            image: Html,
            title: 'HTML',

        },
        {
            id: 2,
            image: Css,
            title: 'CSS',
        },
        {
            id: 3,
            image: Tailwind,
            title: 'Tailwind',
        },
    ]

    return (
        <div name='skill' className='bg-[#111] w-full h-screen md:h-[50vh] pt-10'>
            <div className='max-w-screen-lg mx-auto px-4 flex flex-col justify-center'>
                <div className='mb-8'>
                    <h1 className='text-4xl font-semibold text-primary'>Skills</h1>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {
                        skills.map(({ id, image, title }) => (
                            <div key={id} className='shadow-md shadow-primary'>
                                <div className='flex flex-col items-center justify-center py-5'>
                                    <img src={image} alt="" className='w-20 duration-200 hover:scale-105' />
                                    <p className='mt-4 text-white font-semibold'>{title}</p>
                                </div>

                                <div>

                                </div>
                            </div>
                        ))
                    }


                </div>


            </div>
        </div>
    )
}

export default Skill
