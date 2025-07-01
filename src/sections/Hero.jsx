import HeroImg from '../assets/hero-image.png'
import HeroImg2 from '../assets/hero-image2.png'
import React from 'react'
import CV from '../assets/resume_achraf_bogryn.pdf'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
     return (
          <section id='home'>
               <div className='z-40'>
                    <div className='container h-screen flex items-center justify-center text-center'>
                         <div className='max-w-[800px] mx-auto'>
                              <div className='mb-6'>
                                   {/* Image */}
                                   <img className='size-[150px] rounded-full mx-auto bg-gradient-to-r from-blue-600 to-purple-600 object-cover' src={HeroImg2} alt='Hero image' />
                              </div>

                              {/* content */}
                              <div>
                                   <h1 className='mb-2 text-3xl font-extrabold capitalize leading-[1.2] md:text-5xl'>
                                        Data Scientist & {' '}
                                        <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                                             ML Engineering
                                        </span>{' '}
                                   </h1>
                                   <div className='flex gap-4 mt-4 mb-8 justify-center'>
                                        <a href='https://github.com/achraf-bogryn' target='_blank' rel='noopener noreferrer'>
                                             <FaGithub size={32} className='hover:text-blue-600 transition-colors' />
                                        </a>
                                        <a href='https://www.linkedin.com/in/achraf-bogryn/' target='_blank' rel='noopener noreferrer'>
                                             <FaLinkedin size={32} className='hover:text-blue-600 transition-colors' />
                                        </a>
                                   </div>
                                   <p className='mb-4 md:text-lg'>
                                        I am a passionate Data Scientist with a strong background in Machine Learning Engineering. I love turning data into actionable insights and building models that solve real-world problems.
                                   </p>
                                   <a href={CV} download className='px-6 py-3 inline-block capitalize font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md'>
                                        Resumer
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default Hero

