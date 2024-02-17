import React from 'react'
import ReactDOM from 'react-dom/client'
import Owner from './Owner';
import Navbar from './Navbar';
import Home from './Home';
import HomeAdmin from './HomeAdmin';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Navbar/>
  },
  {
    path:"/Owner",
    element:<Owner/>
  },
  {
    path:"/Home",
    element:<Home/>
  },
  {
    path:"/HomeAdmin",
    element:<HomeAdmin/>
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
