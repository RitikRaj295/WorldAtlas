import React,{Suspense} from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Contact from './pages/Contact';
import AppLayout from './components/Layout/AppLayout';
import ErrorPage from './pages/ErrorPage';

const CountryDetails=React.lazy(()=>import('./pages/CountryDetails'))
const Country=React.lazy(()=> import('./pages/Country'))
const Home=React.lazy(()=> import('./pages/Home'))
const About=React.lazy(()=>import('./pages/About'))

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
            element:(<Suspense fallback={<p className='suspenseMessage'>Home Page Loading..</p>}>
            <Home/></Suspense>)
          },
          {
            path:'about',
            element:(<Suspense fallback={<p className='suspenseMessage'>About Page Loading..</p>}>
            <About/></Suspense>)
          },
          {
            path:'country',
            element:(<Suspense fallback={<p className='suspenseMessage'>Country Page Loading..</p>}>
            <Country/></Suspense>)
          },
          {
            path:'contact',
            element:<Contact/>
          },
           {
            path:'country/:id',
            element:( 
            <Suspense fallback={<p className="suspenseMessage"> Details Loading...</p>}>
            <CountryDetails/>
            </Suspense>)
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
