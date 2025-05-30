import React from 'react'
import {useRouteError,NavLink} from 'react-router-dom'

const ErrorPage = () => {
    const error=useRouteError();
    console.log(error)
  return (
    <div>
      <h1>Oops! An error occured</h1>

      {error && <p>Status: {error.status} and Message:{error.data}</p>}
      <NavLink to='/'><button>Go Home</button></NavLink>
    </div>
  )
}

export default ErrorPage
