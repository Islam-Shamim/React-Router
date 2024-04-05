import React, {children} from 'react'
import ReactDOM from 'react-dom/client'
import './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navber from './Component/Navber/Navber.jsx';
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Users from './Component/Users/Users.jsx';
import Details from './Component/UserDetails/Details.jsx';
import Posts from './Component/Posts/Posts.jsx';
import ShowPost from './Component/ShowPost/ShowPost.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';

 const router = createBrowserRouter([
  {
    path: '/',
    element: <Navber></Navber>,
    errorElement:<ErrorPage></ErrorPage>,
    children : [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },{
        path: '/users',
        loader : () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>
      },{
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <Details></Details>
      },{
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },{
        path: '/post/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`),
        element:<ShowPost></ShowPost>
      }
        
    ]
  }
 ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
