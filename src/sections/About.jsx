import React from 'react'
import AboutImg from '../assets/about-img.jpg'
import AboutImg2 from '../assets/profile_achraf.PNG'
import Title from '../components/Title'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
const About = () => {
     return (
          <section id='about' className='pt-32'>
               <div className='container'>
                    <div className='md:grid md:grid-cols-2 md:gap-8 items-center'>
                         <div className='mb-8 md:mb-0'>
                              <img
                                   className='object-cover rounded-2xl'
                                   src={AboutImg2}
                                   alt='About Image'
                              />
                         </div>
                         <div>
                              <Title
                                   title='about'
                                   highlight='me'
                                   subtitle='Get to know me better'
                                   isCenter={false}
                              />
                              <p className='leading-7 '>
                                   Hi, I’m Achraf Bogryn, a junior data scientist with a Master’s degree in Data Science and Engineering. I’m currently deepening my expertise in machine learning, big data technologies, and data analysis by working on personal projects and staying up-to-date with the latest industry trends. I’m actively seeking internships or entry-level roles where I can apply my skills to solve real-world problems, collaborate with experienced teams, and contribute to data-driven decision making. My goal is to grow as a data professional by continuously learning and tackling impactful challenges in the field.
                              </p>
                              <div className='flex gap-4 mt-4'>
                                   <a href='https://github.com/achraf-bogryn' target='_blank' rel='noopener noreferrer'>
                                        <FaGithub size={32} className='hover:text-blue-600 transition-colors' />
                                   </a>
                                   <a href='https://www.linkedin.com/in/achraf-bogryn/' target='_blank' rel='noopener noreferrer'>
                                        <FaLinkedin size={32} className='hover:text-blue-600 transition-colors' />
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default About