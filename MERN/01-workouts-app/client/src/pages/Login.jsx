import React from 'react';
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

export const Login = () => {
const { loginUser, error, isLoading } = useLogin();
    const [ email, setEmail ] = useState( '' ) ;
    const [ password, setPassword ] = useState( '' );

    const handleLogin = async ( e ) => {
        e.preventDefault();
        console.log('Credentials: ', { email, password });
        await loginUser( email, password );
    }
    return (
        <form className="login" onSubmit={ handleLogin } >
            <h3>Sign In</h3>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" value={ email } onChange={ (e) => setEmail( e.target.value ) } />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" value={ password } onChange={ (e) => setPassword( e.target.value ) } />
            <button type='submit' disabled={ isLoading }>Login</button>
            {
                error && <div className="error">{ error }</div>
            }
        </form>
    );
}
