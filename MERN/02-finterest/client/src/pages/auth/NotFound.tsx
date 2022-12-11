import React from 'react';
import notFound from '../../assets/not-found.svg';
import { NavLink } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-12 mx-auto">
        <div className="animate__animated card animate__flipInX">
          <div className="card-header bg-danger text-white text-center">
            <h3 className='display-5'>Page Not Found</h3>
          </div>
          <div className="card-body">
            <img src={ notFound } alt="Not Found" className='img-fluid' />
          </div>
          <div className="card-footer bg-danger text-center">
            <NavLink to='/' className="btn btn-success">Go Home</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
