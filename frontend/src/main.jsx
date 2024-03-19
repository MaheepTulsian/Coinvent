import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import './index.css';

import EventDetails from './components/EventDetails';
import LandingPage from './pages/LandingPage/LandingPage';
import LandComponents from './pages/LandingPage/LandComponents';
import OrganisationDashboard from './pages/OrganizationDashboard/OrganisationDashboard';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import ListEvent from './pages/OrganizationDashboard/ListEvent';
import MyEvents from './pages/OrganizationDashboard/MyEvents';
import Events from './pages/UserDashboard/Events';
import Favourites from './pages/UserDashboard/Favourites';
import PurchaseHistory from './pages/UserDashboard/PurchaseHistory';
import NFTs from './pages/UserDashboard/NFTs';


const router= createBrowserRouter(
  createRoutesFromElements(
      <Route path="" element={<LandingPage />} >

        <Route path="/" element={<LandComponents />} />
      
        <Route path="/organise" element={<OrganisationDashboard />} >
          <Route path="/organise" element={<MyEvents />}/>
          <Route path="/organise/list" element={<ListEvent />}/>
          <Route path="/organise/myEvents" element={<MyEvents />}/>
          <Route path="/organise/eventdetails" element={<EventDetails />}/>
        </Route>
        
        <Route path="/user" element={<UserDashboard />} >
        <Route path="/user" element={<Events />}/>
          <Route path="/user/events" element={<Events />}/>
          <Route path="/user/favourites" element={<Favourites />}/>
          <Route path="/user/nfts" element={<NFTs />}/>
          <Route path="/user/purchasehistory" element={<PurchaseHistory />}/>
        </Route>
      </Route>
  )
)

ReactDOM.render(
<React.StrictMode>
  
  <RouterProvider router={router}/>
  
</React.StrictMode>
,
  document.getElementById('root')
);