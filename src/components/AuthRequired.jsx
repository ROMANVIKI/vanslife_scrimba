import React from 'react'
import { useState } from 'react'
import {Navigate, Outlet, useLocation} from 'react-router-dom'


const AuthRequired = () => {
    const auth = false
    const location = useLocation()

    if(!auth){
        return <Navigate to="/login" state={{message: 'You must login first, If you dont have an account kindly register.', 
        from: location.pathname
      }} />
    }
  return   <Outlet />
}

export default AuthRequired