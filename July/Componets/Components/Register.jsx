import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Register = () => {
  const [auth, setAuth] = useState(false)
  if (auth) {
    return <Navigate to='/Login' />
  }

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6'>
          <form>
            <div class="form-group">
              <label>User Name</label>
              <input type="text" class="form-control" placeholder="Enter Name" />
            </div>
            <div class="form-group">
              <label>Email Address</label>
              <input type="email" class="form-control" placeholder=" Enter Email" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" placeholder=" Enter Password" />
            </div>
            <div class="form-group">
              <label>Re-type Password</label>
              <input type="password" class="form-control" placeholder=" Re-Enter Password" />
            </div>
            <button class="btn btn-info" onClick={() => setAuth(true)}>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register