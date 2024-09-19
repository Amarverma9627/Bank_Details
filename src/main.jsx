import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Dashboard from "./Dashboard.jsx";
import NewAc from "./createAc.jsx"
import Deposit from './Deposit.jsx'
import Widthdraw from './Widthdraw.jsx'

let approute= createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  },
  {
    path:"/createAc",

    element:<NewAc/>
  },
  {
    path:"/deposit",

    element:<Deposit/>
  },
  {
    path:"/widthdraw",

    element:<Widthdraw/>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={approute}>
  <App/>
</RouterProvider>
)
