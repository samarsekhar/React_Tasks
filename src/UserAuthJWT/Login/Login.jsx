import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoginUser }) => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "", password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("https://localhost:9002/login", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                navigate("/")
            })
        //.then(res) => console.log(res))
    }

    return (
        <div className='login'>
            {console.log(user)}
            <h1>Login</h1>
            <input type='text' name='email' value={user.email} onChange={handleChange} placeholder='Enter Email' />
            <input type='password' name='password' value={user.password} onChange={handleChange} placeholder='Enter Password' />
            <div className='button' onClick={login}>Login</div>
            <div>or</div>
            <div className='button' onClick={() => navigate("/register")}>Register</div>

        </div>
    )
}

export default Login;