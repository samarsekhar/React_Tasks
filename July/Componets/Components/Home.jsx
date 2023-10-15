import React from 'react';
import Products from './Products';

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className="card bg-dark text-white">
          <img src="https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg?w=2000" alt="Background image" height='700px' />
          <div className="card-img-overlay d-flex flex-column justify-content-center">    <hr />
            <h1 className="card-title  fw-border mb-0 text-center" style={{ fontSize: '90px', color: "skyBlue" }}>New offer is Available</h1>

            <p className="card-text lead  text-center fw-border mb-0" style={{ fontSize: '60px', color: 'orange', fontStyle: 'italic', fontWeight: "bolder" }}>Check out all the Trends </p>
          </div>
        </div>
        <Products />
      </div>
    </>
  )
}
export default Home;