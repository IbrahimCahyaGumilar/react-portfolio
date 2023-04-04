import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import cv from '../assets/images/cv-ibrahim.pdf'


const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div name="home" className='active bg-[#111] w-full h-screen flex md:justify-center'>
        <div className='container mx-auto px-10 py-4 xl:px-[14rem] lg:px-[10rem] md:px-[4rem] flex items-center'>
          <div>
            <div>
              <h2 className='text-primary md:text-xl font-bold' >Hi, my name is</h2>
              <h1 className='text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold py-6' >Ibrahim Cahya <br /> Gumilar</h1>
              <p className='text-white md:text-xl font-bold italic'>Front-end Web Developer</p>
            </div>

            <div className='pt-8'>
              <a href={cv} target="_blank" rel="noopener noreferrer">
                <button className='border-2 border-primary text-primary px-10 py-2 md:px-16 md:py-4 rounded-lg hover:bg-[#9ed8ff] hover:text-[#111]'>
                  <span className='font-bold'>CV</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home