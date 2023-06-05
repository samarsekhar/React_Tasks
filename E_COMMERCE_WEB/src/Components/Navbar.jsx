import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const Navbar = () => {
  const { totalUniqueItems } = useCart();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-drak bg-light">
        <div className='container'>
          <Link to='/' className="navbar-brand fw-bold fs-4">
            <i className="fa-sharp fa-solid fa-cart-shopping"></i>{' '}{' '}{''}
            Shopping Time
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <Link to='/Home' className='nav-link'>Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/Products' className='nav-link'>Products</Link>
              </li>
              <li className='nav-item'>
                <Link to='/About' className='nav-link'>About Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='buttons'>
          <Link to='/Login' className='btn btn-outline me-2'>
            <i className='fa fa-sign-in me-4'>Login</i>
          </Link>
          <Link to='/Register' className='btn btn-outline me-2'>
            <i class="fa-solid fa-user-plus">Register</i>
          </Link>
          < Link to='/Cart' className='btn btn-outline me-2'>
            <i class="fa-solid fa-cart-arrow-down">cart({totalUniqueItems}) </i>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar