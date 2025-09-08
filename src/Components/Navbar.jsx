import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='bg-[#00b53f] flex justify-between items-center shadow-md sticky top-0 z-40 p-4'>
      <div className='flex justify-center items-center w-12 h-14 object-contain'><img src="./src/assets/newj.jpg" alt="logo" /></div>

      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center gap-4 text-white'>
        <a className='tracking-tight text-[13px] font-semibold' href="#">Sign in</a>
        <span>|</span>
        <a className='tracking-tight text-[13px] font-semibold' href="#">Registration</a>
        <button className='bg-[#fea03c] py-2.5 px-6 rounded-lg shadow-xs hover:bg-[rgb(248,124,23)] text-[14px] font-semibold'>SELL</button>
      </div>

      {/* Mobile Menu Button */}
      <div className='md:hidden flex items-center'>
        <button onClick={toggleMobileMenu} className='text-white text-2xl focus:outline-none'>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className='md:hidden absolute top-0 left-0 w-full h-screen bg-[#00b53f] flex flex-col items-center justify-center space-y-8 text-white z-50'>
          <button onClick={toggleMobileMenu} className='absolute top-4 right-4 text-white text-3xl focus:outline-none'>
            <FaTimes />
          </button>
          <a className='text-lg font-semibold' href="#" onClick={toggleMobileMenu}>Sign in</a>
          <a className='text-lg font-semibold' href="#" onClick={toggleMobileMenu}>Registration</a>
          <button className='bg-[#fea03c] py-3 px-16 rounded-lg shadow-xs hover:bg-[rgb(248,124,23)] text-lg font-semibold' onClick={toggleMobileMenu}>SELL</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
