import React from 'react';
import { useLocation , Link } from 'react-router-dom'
import { HomeIcon , ArrowLeftEndOnRectangleIcon , GlobeAltIcon , CurrencyDollarIcon} from '@heroicons/react/24/outline'

const Sidebar = () => {

  const { pathname } = useLocation();
  const subpage = pathname.split("/user/")?.[1];
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

        <div className='w-5/6 h-32 pb-4 border-b-2 flex items-center justify-center'>
          <img src="https://source.unsplash.com/random/100x100" alt="" className='rounded-full h-full border-2 border-indigo-100 shadow-md shadow-black' />
        </div>

        <Link to="../user/events" className={Linkness("events")}>
          <GlobeAltIcon className='ml-2 text-white h-6 w-auto' />
          <p className='ml-3 text-white text-sm lg:text-lg'>Events</p>
        </Link>

        <Link to="../user/favourites" className={Linkness("favourites")}>
          <CurrencyDollarIcon className='ml-2 text-white h-6 w-auto' />
          <p className='ml-3 text-white text-sm lg:text-lg'>Favourites</p>
        </Link>

        <Link to="../user/nfts" className={Linkness("nfts")}>
          <CurrencyDollarIcon className='ml-2 text-white h-6 w-auto' />
          <p className='ml-3 text-white text-sm lg:text-lg'>Your NFTs</p>
        </Link>

        <Link to="../user/purchasehistory" className={Linkness("purchasehistory")}>
          <CurrencyDollarIcon className='ml-2 text-white h-6 w-auto' />
          <p className='ml-3 text-white text-sm lg:text-lg'>Your Purchases</p>
        </Link>

      </div>
      
      <div className='w-5/6 flex flex-col items-center justify-center gap-5'>
        <button className='w-full h-10 rounded-lg flex items-center justify-center bg-[#f5c754]'>
          <p className='text-black text-lg font-bold'>Connect Wallet</p>
        </button>

        <Link to="../" className='w-full align-middle pt-5 border-t-2 flex items-center justify-center'>
          <ArrowLeftEndOnRectangleIcon className='text-red-700 h-6 w-auto' />
          <p className='ml-1 text-red-700 font-semibold text-sm lg:text-lg'>Logout</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;