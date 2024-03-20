import React from 'react'
import { Link } from 'react-router-dom'
import organisation from './../../assets/organisation.jpg'
import user from './../../assets/user.jpg'

const bifurcate = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center dark:bg-white bg-black dark:bg-grid-black/[0.2] bg-grid-white/[0.2]'>
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] "></div>
        <div className='w-full flex items-center justify-center gap-10'>
            <Link to="/organisation-register" className='flex p-10 bg-slate-800 rounded-3xl'>
                {/* <img src={organisation} alt="" /> */}
                <p className='text-xl text-white font-bold'>Organisation</p>
            </Link>

            <Link to="/user-register" className='flex p-10 bg-slate-800 rounded-3xl'>
                {/* <img src={user} alt="" /> */}
                <p className='text-xl text-white font-bold'>User</p>
            </Link>
        </div>  
    </div>
  )
}

export default bifurcate
