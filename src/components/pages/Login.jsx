import React, { useState } from 'react'
import {useNavigate, useLocation, Link, Navigate} from 'react-router-dom'

const Login = () => {
    const [loginFormData, setLoginFormData] = useState({username: "", password: ""})
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.pathname || '/host'

    const handleSubmit = async (e) => {
        e.preventDefault()
     
        const requestOptions = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(loginFormData)

        }

        try{

            const res = await fetch('http://localhost:8000/api/token/' , requestOptions)
            const data = await res.json()
            localStorage.setItem('access_token', data.access)
            localStorage.setItem('refresh_token', data.refresh)
            
            
            if(!res.ok){
                // console.log(res.status)
                return
            }
            // console.log('login successful')
            navigate(from, {replace:true})
            setLoginFormData({username: '', password: ''})
        }catch(e){
            console.error('Error:', e)
        }

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
        {location.state?.message && <h3 style={{color:'red', textAlign: 'center'}}>{location.state.message} <span><Link to="/register" className="back-button">&larr; <span>Click Here</span></Link> </span> </h3>}
        <h1>Sign in to your account</h1>
        <form action="" onSubmit={handleSubmit} className='login-form'>
            <input type="text" name='username' onChange={handleChange} placeholder='Username' value={loginFormData.username}/>
            <input type="password" name='password' onChange={handleChange} placeholder='Password' value={loginFormData.password}/>
            <button disabled={false}>Log in</button>

        </form>
    </div>
  )
}

export default Login