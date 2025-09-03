import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='bg-[#00b53f] flex justify-between items-center shadow-md sticky top-0 z-50'>
    <div className='flex justify-center items-center py-4 w-12 h-14 object-contain ml-6'><img src="./src/assets/newj.jpg" alt="logo" /></div>
    <div className='flex items-center gap-2 text-white mr-6 '>
  <a className='tracking-tight text-[13px] font-semibold' href="#">Sign in</a>
    <span>|</span>
  <a className='tracking-tight text-[13px] font-semibold' href="#">Registration</a>
    <button className='bg-[#fea03c] py-2.5 px-12 rounded-lg shadow-xs hover:bg-[rgb(248,124,23)]  text-[14px] font-semibold mx-2'>SELL</button>

    </div>

    </div>
    </>
  )
}

export default Navbar
