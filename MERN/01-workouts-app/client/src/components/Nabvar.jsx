import React from 'react';
import { Link } from 'react-router-dom';

import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';  
import { useWorkoutContext } from '../hooks/useWorkoutContext'; 

export const Nabvar = () => {
  const { dispatch } = useWorkoutContext()
  const { user } = useAuthContext();

  const { logOut } = useLogout();
  const handleLogOut = () => {
    logOut();
    dispatch({
      type: 'SET_WORKOUTS',
      payload: []
    })
  }

  return (
    <header>
        <div className="container">
            <Link to='/'>Workouts Bryan</Link>
            <nav>
              {
                ( user )
                ? 
                  <div>
                    <span>{ user.user }</span>
                    &nbsp;
                    <button onClick={ handleLogOut }>Log Out</button>  
                  </div>
                :
                  <div>
                    <Link to='/sign-in'>Login</Link>
                    <Link to='/sign-up'>Register</Link>
                  </div>
              }
              
            </nav>
        </div>
    </header>
  );
};
