import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/auth/useAuthContext';
import { useLogOut } from '../hooks/auth/useLogOut';
export const Navbar = () => {
    const { user } = useAuthContext();
    const { logOut } = useLogOut();
    const handleLogOut = () => {
        console.log( `Handle Logout Works` );
        logOut();
    }
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to='/'>Finterest</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    {
                        ( user.token !== '' && user.userEmail !== '' )
                        ?
                        <ul className="navbar-nav" id="nabvarLogin">
                            <li className="nav-item">
                                <Link className='nav-link active' aria-current="page" to='/images'>Images</Link>
                            </li>
                            <li className="nav-item">
                                <button className='btn btn-outline-danger btn-rounded' onClick={ handleLogOut }>
                                    Log Out
                                </button>
                            </li>
                        </ul>
                        :
                        <ul className="navbar-nav" id="nabvarLogin">
                            <li className="nav-item">
                                <Link className='nav-link active' aria-current="page" to='/login'>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link active' aria-current="page" to='/register'>Register</Link>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        </nav>
    )
}
