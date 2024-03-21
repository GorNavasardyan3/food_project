import React from 'react'
import { NavLink } from 'react-router-dom'
export  function Header() {
  return (
    <>
    <nav className=' z-50 text-lg fixed w-full p-4 bg-gradient-to-r from-blue-900 to-red-500 flex justify-center items-center'>
        <NavLink className=' mr-2' to='/'>Home</NavLink>
        <NavLink className=' mr-2' to='/about'>About</NavLink>
        <NavLink className=' mr-2' to='/contact'>Contact</NavLink>
    </nav>
    <div className=' h-[9vh]'></div>
    </>
  )
}
