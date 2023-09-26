import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Root from './pages/Root'
import Error from './pages/Error'
import Statistics from './pages/statistics/statistics'
import AppliedJobs from './pages/applied jobs/AppliedJobs'
import Blog from './pages/blog/Blog'
import Home from './pages/home/Home'
import JobDetails from './pages/jobDetails/JobDetails'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/appliedjobs/:id',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader:() => fetch('../jobs.json')
      }
    ]
    
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
