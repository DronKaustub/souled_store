import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Sneakers from './Pages/Sneakers';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes=createBrowserRouter(
  [
    {
      path:"/",
      element:<Men/>
    },
    {
      path:"/Women",
      element:<Women/>
    },
    {
      path:"/Sneakers",
      element:<Sneakers/>
    }
  ]
)



root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
