import HeroImg from '../assets/hero-image.png'
import HeroImg2 from '../assets/hero-image2.png'
import React from 'react'

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
                                   <p className='mb-4 md:text-lg'>
                                        I am a passionate Data Scientist with a strong background in Machine Learning Engineering. I love turning data into actionable insights and building models that solve real-world problems.
                                   </p>
                                   <a href='#projects' className='px-6 py-3 inline-block capitalize font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md'>
                                        View My Work
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default Hero

