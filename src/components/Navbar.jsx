import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import {navLists} from '../constants'

const Navbar = () => {
  const handleSearchClick = () => {
    window.location.href = 'https://www.apple.com/in'; // You can change this URL to any desired destination
  };

  return (
    <header className='flex items-center justify-between w-full px-5 py-5 sm:px-10'>
      <nav className='flex w-full screen-max-width'>
        <img src={appleImg} alt="Apple Logo" width={14} height={18} />

        <div className="flex items-center mx-auto space-x-8 max-sm:hidden "> 
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm text-gray-200 transition duration-300 cursor-pointer hover:text-white">
              {nav}
            </div>
          ))}
        </div>
        
        <div className="flex items-baseline space-x-4 gap-7 max-sm:justify-end max-sm:flex-1">
          <img 
            src={searchImg}
            alt="search" 
            width={18} 
            height={18} 
            onClick={handleSearchClick}
            className="cursor-pointer"
          />
          <img src={bagImg} alt="bag" width={18} height={18} onClick={handleSearchClick}/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar