import React, { useState } from 'react'
import {useLocation} from 'react-router-dom'


const Register = () => {
    const [registeFormData, setRegisterFormData] = useState({username: '', password: ''})
    const location = useLocation()

    
    const handleChange = (e) => {
        const {name, value} = e.target 
        setRegisterFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(registeFormData)
        }

        try{
            const response = await fetch('http://localhost:8000/api/register', requestOptions)
            if(!response.ok){
                console.log(response.status)
                return
            }

            console.log('registered')
            // resetting the form data after successful submission

            setRegisterFormData({username: '', password: ''})
        }catch(error) {
            console.error('Error:', error)
        }
    }
  return (
    <div className='login-container'>
        <h1>Register to Continue</h1>
        <form action="" onSubmit={handleSubmit} className='login-form'>
            <input type="text" name='username' onChange={handleChange} placeholder='Username' value={registeFormData.username}/>
            <input type="password" name='password' onChange={handleChange} placeholder='Password' value={registeFormData.password}/>
            <button>Sign in</button>

        </form>
    </div>
  )
}

export default Register