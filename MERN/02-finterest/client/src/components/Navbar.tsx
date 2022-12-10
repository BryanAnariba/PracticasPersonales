import React from 'react';
import { NavLink } from 'react-router-dom';
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
                <NavLink className="navbar-brand" to='/'>
                    Finterest
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    {
                        ( user.token !== '' && user.userEmail !== '' )
                        ?
                        <ul className="navbar-nav" id="nabvarLogin">
                            <li className="nav-item">
                                <NavLink 
                                    className={({ isActive }) => { return isActive ? 'nav-link is-active' : 'nav-link' }}
                                    aria-current="page" 
                                    to='/images'
                                >
                                    Images
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    className={({ isActive }) => { return isActive ? 'nav-link is-active' : 'nav-link' }}
                                    aria-current="page" 
                                    to='/upload'
                                >
                                    Upload New File
                                </NavLink>
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
                                <NavLink 
                                    className={({ isActive }) => { return isActive ? 'nav-link is-active' : 'nav-link' }}
                                    to='/login'
                                >
                                    Login
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    className={({ isActive }) => { return isActive ? 'nav-link is-active' : 'nav-link' }}
                                    aria-current="page" 
                                    to='/register'
                                >
                                    Register
                                </NavLink>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        </nav>
    )
}
