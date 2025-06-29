import React, { useState } from 'react'
import Navbar from './Navbar'
import { AlignLeft, X } from 'lucide-react'

const Header = () => {
     const [isClicked, setIsClicked] = useState(false)

     const toggleNavClick = () => {
          setIsClicked(!isClicked)
     }
     return (
          <header className='fixed top-0 z-[500] w-full'>
               <div className='container flex items-center justify-between py-4'>
                    {/* logo */}
                    <div className='z-10'>
                         <a className='font-bold text-white md:text-lg' href='/'>
                              Achraf{' '}
                              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                                   Bogryn
                              </span>
                         </a>
                    </div>

                    {/* Navigation */}
                    <Navbar isClicked={isClicked} toggleNavClick={toggleNavClick} />

                    {/* menu buttons */}
                    <button
                         onClick={toggleNavClick}
                         className='text-white cursor-pointer z-10 flex items-center md:hidden'
                    >
                         {isClicked ? (
                                   <X size={28} />
                         ) : (
                                   <AlignLeft size={28} />
                         )}



                    </button>
               </div>
          </header>
     )
}

export default Header