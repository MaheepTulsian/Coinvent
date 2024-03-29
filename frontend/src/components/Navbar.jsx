import React from 'react'
import logo from './../assets/Logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
      <div className='w-full h-16 px-5 border-b-2 bg-slate-900 flex items-center justify-between text-white'>
        <img src={logo} alt="" />
        <div className='flex items-center justify-center gap-4'>
          <Link to="/organise" className='p-2 bg-slate-600 hover:bg-slate-800 rounded-lg'>
            <p className='text-white text-sm'>Organize a Event</p>
          </Link>
          <Link to="/user" className='p-2 bg-slate-600 hover:bg-slate-800 rounded-lg'>
            <p className='text-white text-sm'>Participate in a Event</p>
          </Link>
        </div>

        <Link to="/register" className="w-24 h-8 text-white font-semibold flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-md hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer">
          Register
        </Link>
      </div>
  )
}

export default Navbar
