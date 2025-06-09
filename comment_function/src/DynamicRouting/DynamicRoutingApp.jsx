import React from 'react'
import DynamicRouting from './DynamicRouting'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import PostDetails from './pages/PostDetails';

function DynamicRoutingApp() {
  const router = createBrowserRouter([
    {path:'/',element:<Home/>},
    {path:'/addPost',element:<AddPost/>},
    {path:'/addPost/:id',element:<PostDetails/>},
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default DynamicRoutingApp;
