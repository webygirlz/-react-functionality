import React from 'react'
import Home from './Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getUserDataByLoder } from './Fetchdata';
import Error from './Error';
import AddUser from './AddUser';
import { AddUserAction } from './AddUserAction';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader:getUserDataByLoder,
    errorElement: <Error/>, // Handles route errors
  },
  {
    path:'/add-user',
    element:<AddUser/>,
    action:AddUserAction,
  }
]);
function App1() {
  return <RouterProvider router={router} />;
}

export default App1;
