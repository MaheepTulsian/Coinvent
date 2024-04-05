import React, { useState } from 'react';
import { BookmarkIcon, BookmarkSlashIcon } from '@heroicons/react/24/outline';
// import axios from 'axios';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const [bookmarked, setBookmarked] = useState(false);
  const link = "./" + props.id;

  const toggleBookmark = async () => {
    try {
      if (bookmarked) {
        // Call backend API to remove from favorites
        // await axios.post('/api/favorites/remove', { id: props.id });
        console.log("Remove from favourite API called");
      } else {
        // Call backend API to add to favorites
        // await axios.post('/api/favorites/add', { id: props.id });
        console.log("Add to favourite API called");
      }
      setBookmarked(!bookmarked);
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  };

  return (
    <div className="flex w-72 flex-col rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 bg-clip-border text-white hover:shadow-md hover:shadow-white">
      <Link to={link} className="mx-2 -mt-6 h-40 overflow-hidden rounded-xl">
        <img src={props.img} alt="" className='rounded-xl'/>
      </Link>
      <div className="h-20 px-4 flex items-center justify-between">
        <h5 className="mb-2 w-4/5 text-xl font-semibold text-blue-gray-900">
          {props.title}
        </h5>
        <div className="cursor-pointer z-30" onClick={toggleBookmark}>
          {bookmarked ? (
            <BookmarkIcon className="h-6 text-yellow-500" />
          ) : (
            <BookmarkSlashIcon className="h-6" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
