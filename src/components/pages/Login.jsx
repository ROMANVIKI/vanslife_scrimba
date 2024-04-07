import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [loginFormData, setLoginFormData] = useState({email: "", password: ""})

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(loginFormData)
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

  return (
    <div className="login-container">
        <h1>Sign in to your accound</h1>
        <form action="" onSubmit={handleSubmit} className='login-form'>
            <input type="email" name='email' onChange={handleChange} placeholder='Email Address' value={loginFormData.email}/>
            <input type="password" name='password' onChange={handleChange} placeholder='Password' value={loginFormData.password}/>
            <button>Log in</button>

        </form>
    </div>
  )
}

export default Login