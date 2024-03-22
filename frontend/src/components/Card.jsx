import React from 'react'
import {Link} from 'react-router-dom'
import { BookmarkIcon} from '@heroicons/react/24/outline'

const Card = (props) => {
  const link="/organise/myEvents/"+props.id;
  return (
    <Link to={link} class="flex w-72 flex-col rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 bg-clip-border text-white hover:shadow-md hover:shadow-white">
      <img src={props.img} alt="" class=" mx-2 -mt-6 h-40 overflow-hidden rounded-xl" />
      <div class="py-6 px-4 flex items-center justify-between">
        <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {props.title}
        </h5>
        <BookmarkIcon className='h-6' />
      </div>
    </Link>
  )
}

export default Card