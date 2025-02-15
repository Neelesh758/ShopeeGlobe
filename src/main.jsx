import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import SignIn from './Components/SignIn.jsx'
import Cart from './Components/cart.jsx'
import Productdetails from './Components/productdetails.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import Productlist from './Components/Productlist.jsx'
let approuter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<ErrorPage />,
    children:[
      {
        index: true, // ✅ This makes Productlist the default route when visiting "/"
        element: <Productlist />,
      },
      {
        path:"/cart",
        element:<Cart />
      },
      {
        path:"/productdetails/:id",
        element:<Productdetails />
      }
    ]
  },
  
])
createRoot(document.getElementById('root')).render(
 <RouterProvider router={approuter} />
)
