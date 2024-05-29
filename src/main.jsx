import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './components/homePage/HomePage.jsx';
import Destination from './components/destination/Destination .jsx';
import Crew from './components/crew/Crew.jsx';
import TechnologiesList from './components/Technology/Technolgy.jsx';
const router = createHashRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path:"/destination",
    element:<Destination/>
  },
  {
    path:"/crew",
    element:<Crew/>
  },
  {
    path:"/technology",
    element:<TechnologiesList/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
