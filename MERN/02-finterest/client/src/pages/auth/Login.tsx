import { useState } from "react";
import { useLogin } from "../../hooks/auth/useLogin";
import { IUser } from "../../interfaces/IUser";

export const Login = () => {
  const [ userEmail, setUserEmail ] = useState<string>( '' );
  const [ userPassword, setUserPassword ] = useState<string>( '' );
  const { login, isLoading, error } = useLogin();

  const handleLogin = async ( e: React.FormEvent ) => {
    e.preventDefault();
    const loginData: IUser = {
      userEmail: userEmail,
      userPassword: userPassword
    };

    //console.log( `User Data: `, loginData );
    await login( loginData );
    if ( error === '' ) {
      setUserEmail( '' );
      setUserPassword( '' );
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="card">
            <div className="card-header bg-dark text-center text-white">
              <h3>Login</h3>
            </div>
            <form className="form" onSubmit={ handleLogin }>
              <div className="card-body">
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
                <div className="form-floating">
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
                <button type="submit" className="btn btn-primary mb-3">
                  Login
                </button>
              </div>
            </form>
            <div className="card-footer bg-primary">
              {
                ( error !== '' )
                &&
                  <div className="alert alert-danger" role="alert">
                    { error }
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
