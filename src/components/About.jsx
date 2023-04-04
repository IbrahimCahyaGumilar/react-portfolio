import React from 'react'
import HeroImage from '../assets/images/heroImage.jpeg'


const About = () => {

    return (
        <div id='about' name="about" className='active bg-[#111] w-full h-screen flex justify-center items-center'>
            <div className='max-w-screen-lg container mx-auto px-4 flex flex-col md:flex-row gap-5 md:gap-20 justify-center items-center w-full h-full'>
                <div>
                    <div className='pb-0 md:pb-5'>
                        <h1 className='text-3xl md:text-4xl font-md text-primary'>About</h1>
                    </div>

                    <div className='hidden md:block'>
                        <p className='text-white text-justify'>Nama saya Ibrahim Cahya Gumilar, saya adalah seorang mahasiswa Teknik Informatika di Universitas Nusaputra sejak tahun 2020, saya mulai tertarik terhadap Front-End Web sekitar 1 tahun yang lalu dan sampai saat ini saya terus belajar agar bisa berkembang dan mengikuti perubahan.</p>
                        
                    </div>

                </div>

                <div>
                    <div>
                        <img src={HeroImage} alt="profile" className='mx-auto w-1/2 md:w-full rounded-2xl ' />
                    </div>
                </div>

                <div className='block md:hidden'>
                    <p className='text-white '>Nama saya Ibrahim Cahya Gumilar, saya adalah seorang mahasiswa Teknik Informatika di Universitas Nusaputra sejak tahun 2020, saya mulai tertarik terhadap Front-End Web sekitar 1 tahun yang lalu dan sampai saat ini saya terus belajar agar bisa berkembang dan mengikuti perubahan.</p>
                </div>
            </div>

        </div>
    )
}

export default About
