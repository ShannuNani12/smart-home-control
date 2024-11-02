import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import RegistraionComp from './RegistraionComp'
import Dashboard from './Dashboard'
import Home from './Home'
import Services from './Services'
import About from './About'
import Contact from './Contact'

let r=createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[{
        path:"/regpage",
        element:<RegistraionComp/>
    },
    {
        path:"/dashboard",
        element:<Dashboard/>
    },
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/services",
      element:<Services/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    }
]
}])

const RoutingSHC = () => {
  return (
    <RouterProvider router={r}></RouterProvider>
  )
}

export default RoutingSHC