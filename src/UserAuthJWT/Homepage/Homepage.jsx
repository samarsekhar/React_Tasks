import React from 'react';
import './Homepage.css';

const Homepage = ({ setLoginUser }) => {
    return (
        <div className='homepage'>
            <h1>Hello Homepage</h1>
            <div className='buuton' onClick={() => setLoginUser({})}>Logout</div>
        </div>
    )
}

export default Homepage;