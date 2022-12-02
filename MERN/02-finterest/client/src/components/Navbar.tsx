import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
            <Link className="navbar-brand" to='/'>Finterest</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav" id="nabvarLogin">
                    <li className="nav-item">
                        <Link className='nav-link active' aria-current="page" to='/login'>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link active' aria-current="page" to='/register'>Register</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
