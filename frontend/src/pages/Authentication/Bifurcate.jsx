import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './../../components/Navbar'
import Footer from './../../components/Footer'
import organisation from './../../assets/organisation.jpg'
import user from './../../assets/user.jpg'

const Bifurcate = () => {
  return (
    <>
      <Navbar />
      <div className='w-full h-screen flex'>
          <Link to="/organisation" className='bg-black w-1/2 flex flex-col items-center justify-center'>
              <div className='w-96 h-96 flex flex-col items-center justify-center'>
                <img src={organisation} alt="" className='h-full'/>
                <p className='text-white text-xl font-bold'>Organisation</p>
              </div>
          </Link>
          
          <Link to="/user" className='bg-black w-1/2 flex flex-col items-center justify-center'>
            <div className='w-96 h-96 flex flex-col items-center justify-center'>
              <img src={user} alt="" className='h-full'/>
              <p className='text-white text-xl font-bold'>User</p>
            </div>
          </Link>
      </div>
      <Footer />
    </>
  )
}

export default Bifurcate
