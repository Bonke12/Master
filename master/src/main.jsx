import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/aboutus",
    element: <AboutUS/>,
  },
  {
    path: "/contacts",
    element: <Contacts/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
