import React from 'react';
import { Link } from 'react-router-dom';

export const Nabvar = () => {
  return (
    <header>
        <div className="container">
            <Link to='/'>Workouts Bryan</Link>
            <nav>
              <div>
                <Link to='/sign-in'>Login</Link>
                <Link to='/sign-up'>Register</Link>
              </div>
            </nav>
        </div>
    </header>
  );
};
