import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Pages/Home/Home.jsx'
import Error from './Components/Error/Error.jsx'
import About from './Components/Pages/About/About.jsx'
import Contact from './Components/Pages/Contact/Contact.jsx'
import Posts from './Components/Pages/Posts/Posts.jsx'
import Usres from './Components/Pages/Users/Usres.jsx'
import PostDetails from './Components/Pages/Posts/PostDetails/PostDetails.jsx'
import NotFound from './Components/NotFound/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/posts",
        element: <Posts />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts/')
      },
      {
        path: "/post/:postId",
        element: <PostDetails />,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: "/users",
        element: <Usres />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
