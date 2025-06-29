import React, { useEffect, useState } from 'react'

const navigation = [
     { title: 'home', url: '#home' },
     { title: 'projects', url: '#projects' },
     { title: 'about', url: '#about' },
     { title: 'skills', url: '#skills' },
     { title: 'contact', url: '#contact' },

]


const Navbar = ({ isClicked, toggleNavClick }) => {
     const [activeLink, setActiveLink] = useState('home');

     useEffect(() => {
          const handleScroll = () => {
               const scrollPosition = window.scrollY;
               const sections = document.querySelectorAll('section[id]');

               sections.forEach((section) => {
                    if (section) {
                         const sectionTop = section.offsetTop;
                         const sectionHeight = section.clientHeight;


                         if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                              setActiveLink(section.id);
                         }

                    }
               })

          };
          window.addEventListener('scroll', handleScroll)
          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, [])
     return (
          <>
               {/* mobile nav */}
               <nav className={` ${isClicked ? 'translate-x-0' : ' -translate-x-[190.25rem]'}  fixed left-0 top-0 h-screen w-full flex-center justify-start transition-all duration-500 lg:hidden `}>
                    <ul className='h-full w-[60%] bg-gray-900 pl-4 pt-22'>
                         {navigation.map((item) => (
                              <li key={item.title} className='mb-4 text-lg font-medium capitalize '>
                                   <a href={item.url}
                                        className={`${activeLink === item.title ? 'text-blue-600' : 'text-white'}
                                         hover:text-blue-600 transition-colors duration-300 ease-in`}
                                         onClick={() => toggleNavClick()}
                                   >
                                        {item.title}
                                   </a>
                              </li>
                         ))}
                    </ul>
               </nav>


               {/* desktop nav */}
               <nav className='hidden'>
               
               
               
               </nav>
          </>
     )
}

export default Navbar