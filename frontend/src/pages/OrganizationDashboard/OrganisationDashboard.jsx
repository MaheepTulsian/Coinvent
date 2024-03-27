import React from 'react';
import Sidebar from './Sidebar';
import { Outlet , Link } from "react-router-dom";
import { UserCircleIcon } from '@heroicons/react/24/outline'


const OrganisationDashboard = () => {

  return (
    <div className="h-screen w-full dark:bg-white bg-black dark:bg-grid-black/[0.2] bg-grid-white/[0.2] flex py-4 px-2">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] "></div>
      <Sidebar />
      <div className="w-4/5 h-11/12 pb-2 overflow-y-scroll no-scrollbar rounded-t-3xl z-50">
        <div className=' w-full h-12 bg-gradient-to-b from-gray-800 to-gray-900 backdrop-filter backdrop-blur-lg mb-4 rounded-full sticky top-0 flex items-center justify-between'>
          <div className='w-1/2 ml-2 rounded-full'>
            <div className="relative flex items-center w-full h-8 rounded-full shadow-lg bg-gray-200 overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
              className="h-full w-full outline-none text-sm text-black pr-2 bg-gray-200"
              type="text"
              id="search"
              placeholder="Search something.." /> 
            </div>
          </div>

          <Link to="/organise/profile" className='h-8 w-8 mr-2 bg-white rounded-full'>
            <UserCircleIcon />
          </Link>

        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default OrganisationDashboard
