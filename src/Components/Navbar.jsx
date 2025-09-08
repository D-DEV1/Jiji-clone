import React from 'react'


const Navbar = () => {


  return (
    <nav className='bg-[#00b53f] flex justify-between items-center shadow-md sticky top-0 z-40 p-2'>
      <div className='flex justify-center items-center w-12 h-10 object-contain ml-3'>
        <img src="./src/assets/newj.jpg" alt="logo" />
      </div>
     
      <div className='hidden md:flex items-center gap-4 text-white'>
        <a className='tracking-tight text-[13px] font-semibold' href="#">Sign in</a>
        <span>|</span>
        <a className='tracking-tight text-[13px] font-semibold' href="#">Registration</a>
        <button className='bg-[#fea03c] py-2.5 px-12 mx-2 rounded-lg shadow-xs hover:bg-[rgb(248,124,23)] text-[14px] font-semibold'>SELL</button>
      </div>
    </nav>
  )
}

export default Navbar;
