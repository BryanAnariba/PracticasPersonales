import { useState } from "react";
import { useRegister } from "../../hooks/auth/useRegister";
import { IPerson } from "../../interfaces/IPerson";

import { ToastContainer, toast } from 'react-toastify';

export const Register = () => {
  const [ firstName, setFirstName ] = useState<string>( '' );
  const [ lastName, setLastName ] = useState<string>( '' );
  const [ userEmail, setUserEmail ] = useState<string>( '' );
  const [ userPassword, setUserPassword ] = useState<string>( '' );
  const { register, isLoading, error, status } = useRegister();


  const handleRegister = async ( e: React.FormEvent ) => {
    e.preventDefault();
    const registerData: IPerson = {
      firstName: firstName,
      lastName: lastName,
      userEmail: userEmail,
      userPassword: userPassword
    };

    //console.log( `User Data: `, registerData );
    await register( registerData );

    if ( status === 200 || status === 201 ) {
      setFirstName( '' );
      setLastName( '' );
      setUserEmail( '' );
      setUserPassword( '' );
      toast.success( error )
    } else {
      toast.error( error );
    }
  }

  return (
   <div className="container">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="card">
            <div className="card-header bg-dark text-center text-white">
              <h3>Register User</h3>
            </div>
            <form className="form" onSubmit={ handleRegister }>
              <div className="card-body">
                <div className="form-floating mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="firstName" 
                    placeholder="First Name" 
                    value={ firstName }
                    onChange={ ( e ) => setFirstName( e.target.value ) }
                    autoFocus
                  />
                  <label htmlFor='firstName'>First Name:</label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="lastName" 
                    placeholder="Last Name" 
                    value={ lastName }
                    onChange={ ( e ) => setLastName( e.target.value ) }
                  />
                  <label htmlFor='lastName'>Last Name:</label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                    type="email" 
                    className="form-control" 
                    id="userEmail" 
                    placeholder="Email User" 
                    value={ userEmail }
                    onChange={ ( e ) => setUserEmail( e.target.value ) }
                  />
                  <label htmlFor='userEmail'>Email:</label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                    type="password" 
                    className="form-control" 
                    id="userPassword" 
                    placeholder="Password" 
                    value={ userPassword }
                    onChange={ ( e ) => setUserPassword( e.target.value ) }
                  />
                  <label htmlFor='password'>Password:</label>
                </div>
              </div>
              <div className="d-flex" id="centrar">
                <button type="submit" className="btn btn-primary mb-3" disabled={ isLoading }>
                  Register
                </button>
              </div>
            </form>
            <div className="card-footer bg-primary">
              {
                <ToastContainer />
              }
            </div>
        </div>
      </div>
    </div>
   </div>
  );
};
