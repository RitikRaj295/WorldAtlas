import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Country from './pages/Country';
import Contact from './pages/Contact';
import About from './pages/About'
import AppLayout from './components/Layout/AppLayout';
import ErrorPage from './pages/ErrorPage';
import CountryDetails from './pages/CountryDetails';
import './App.css';

const App = () => {
 
  const router=createBrowserRouter(
    [
      {
        path:'/',
        element:<AppLayout/>,
        errorElement:<ErrorPage/>,
        children:[
          {
            path:'/',
            element:<Home/>
          },
          {
            path:'about',
            element:<About/>
          },
          {
            path:'country',
            element:<Country/>
          },
          {
            path:'contact',
            element:<Contact/>
          },
           {
            path:'country/:id',
            element:<CountryDetails/>
          },
        
          
        ]
      }
      
    ]
  )

  return (
    
      <RouterProvider router={router}> </RouterProvider>
    
  )
}

export default App
