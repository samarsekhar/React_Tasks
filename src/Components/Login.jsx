import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [auth, setAuth] = useState(false)
  if (auth) {
    return <Navigate to='/Home' />
  }
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6'>
          <form>
            <div class="form-group">
              <label>Email address</label>
              <input type="email" class="form-control" placeholder="Enter your email" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" placeholder=" Enter Your Password" />
            </div>
            <button type="submit" class="btn btn-primary" onClick={() => setAuth(true)}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Login;