import React from 'react'
import { useState } from 'react'
import {Navigate, Outlet} from 'react-router-dom'


const AuthRequired = () => {
    const auth = false
    if(!auth){
        return <Navigate to="/login" state={{message: 'You must login first, If you dont have an account kindly register.'}} />
    }
  return   <Outlet />
}

export default AuthRequired