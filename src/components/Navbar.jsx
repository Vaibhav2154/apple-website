import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import {navLists} from '../constants'

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex items-center justify-between'>
      <nav className='flex w-full screen-max-width'>
        <img src={appleImg} alt="Apple Logo" width={14} height={18} />

        <div className="flex items-center space-x-8 mx-auto max-sm:hidden "> 
          {navLists.map((nav) => (
            <div key={nav} className="cursor-pointer text-sm px-5 text-gray-200 hover:text-white transition duration-300">
              {nav}
            </div>
          ))}
        </div>
        
        <div className="flex space-x-4 items-baseline gap-7
        max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar