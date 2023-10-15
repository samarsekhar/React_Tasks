import React, { useState } from 'react';
import Register from './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "", email: "", password: "", reEnterpassword: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const regi = () => {
        const { name, email, password, reEnterpassword } = user
        if (name && email && password && (password === reEnterpassword)) {
            axios.post("https://localhost:9002/register", user)
                .then(res => alert(res.data.message))
            navigate('/login')
            alert('Success')
        } else {
            alert('Invalid Data')
        }
    }
    return (
        <div className='register'>
            {console.log("User", user)}
            <h1>Register Page</h1>
            <input type='text' name='name' value={user.name} onChange={handleChange} placeholder='Enter name' />
            <input type='email' name='email' value={user.email} onChange={handleChange} placeholder='Enter email' />
            <input type='password' name='password' value={user.password} onChange={handleChange} placeholder='Enter password' />
            <input type='password' name='reEnterpassword' value={user.reEnterpassword} onChange={handleChange} placeholder='Re-enter password' />
            <div className='button' onClick={regi}>Register</div>
            <div>OR</div>
            <div className='button' onClick={() => navigate('/login')}>Login</div>
        </div>
    )
}

export default Register;