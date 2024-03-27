import React from 'react';
import Logo from './../../assets/Logo.png'
import { useLocation , Link } from 'react-router-dom'
import { HomeIcon , ArrowLeftEndOnRectangleIcon , GlobeAltIcon , CurrencyDollarIcon} from '@heroicons/react/24/outline'

const Sidebar = () => {
  const handleLogout = () => {
    fetch('http://localhost:3000/organisations/logout', {
      method: 'POST',
      credentials: 'same-origin', // Include cookies in the request
    })
    .then(response => {
      if (response.ok) {
        // If logout was successful, redirect to login page or do any other necessary actions
        // window.location.href = '../'; // Redirect to Landing page
        console.log("Successful logout.");
      } else {
        // Handle error response
        console.error('Logout failed');
      }
    })
    .catch(error => {
      console.error('Error occurred while logging out:', error);
    });
  };
  

  const { pathname } = useLocation();
  const subpage = pathname.split("/organise/")?.[1];
  console.log(subpage);
  function Linkness(type) {
    let classes = "w-5/6 h-10 rounded-lg flex items-center justify-start hover:bg-indigo-600";
    if (type === subpage) {
      classes += " bg-indigo-600";
    }
    return classes;
  }

  return (
    <div className="w-1/5 h-11/12 mr-2 py-10 pl-10 bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col items-start justify-between gap-3 overflow-hidden rounded-3xl z-50">
      <div className="w-full flex flex-col items-start gap-3">

        <div className='w-5/6 h-32 border-b-2 flex items-center justify-center '>
          <img src={Logo} alt="" className='h-24' />
        </div>

        <Link to="../organise/list" className={Linkness("list")}>
          <GlobeAltIcon className='ml-2 text-white h-6 w-auto' />
          <p className='ml-3 text-white text-sm lg:text-lg'>Create Event</p>
        </Link>

        <Link to="../organise/myEvents" className={Linkness("myEvents")}>
          <CurrencyDollarIcon className='ml-2 text-white h-6 w-auto' />
          <p className='ml-3 text-white text-sm lg:text-lg'>My Events</p>
        </Link>

      </div>
      
      <div className='w-5/6 flex flex-col items-center justify-center gap-5'>
        <button className='w-full h-10 rounded-lg flex items-center justify-center bg-[#f5c754]'>
          <p className='text-black text-lg font-bold'>Connect Wallet</p>
        </button>

        <button onClick={handleLogout} className='w-full align-middle pt-5 border-t-2 flex items-center justify-center'>
          <ArrowLeftEndOnRectangleIcon className='text-red-700 h-6 w-auto' />
          <p className='ml-1 text-red-700 font-semibold text-sm lg:text-lg'>Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;