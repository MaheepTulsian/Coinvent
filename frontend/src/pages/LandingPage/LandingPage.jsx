import React from 'react'
import { Outlet } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default LandingPage