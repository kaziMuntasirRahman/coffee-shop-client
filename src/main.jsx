import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCoffee from './components/AddCoffee.jsx'
import UpdateCoffee from './components/UpdateCoffee.jsx'
import Coffees from './components/Coffees.jsx'
import SignUp from './components/SignUp.jsx'
import SignIn from './components/SignIn.jsx'

import AuthProvider from './components/AuthProvider.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/coffees",
    element: <Coffees />,
    loader: () => fetch('http://localhost:8000/coffee')
  },
  {
    path: "/addcoffee",
    element: <AddCoffee />
  },
  {
    path: "/updatecoffee/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) => fetch(`http://localhost:8000/coffee/${params.id}`)
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/signin",
    element: <SignIn />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
