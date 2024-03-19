import React from 'react'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'

const Events = () => {
  return (
    <div className="w-full overflow-y-scroll no-scrollbar rounded-3xl grid grid-cols-3 place-items-center gap-12 py-8">
      <Link to="/organise/eventdetails">
        <Card />
      </Link>
      <Card />
      <Card />
      <Card />
      
    </div>
  )
}

export default Events
