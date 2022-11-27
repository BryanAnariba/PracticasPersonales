import React from 'react';
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

export const Signup = () => {
    const { login, isLoading, error } = useSignup();
    const [ email, setEmail ] = useState( '' ) ;
    const [ password, setPassword ] = useState( '' );
    const [ firstName, setFirstName ] = useState( '' );
    const [ lastName, setLastName ] = useState( '' ) ;

    const handleLogin = async ( e ) => {
        e.preventDefault();
        console.log('Register Data: ', { firstName, lastName, email, password });
        await login( firstName, lastName, email, password );
    }
    return (
        <form className="login" onSubmit={ handleLogin } >
            <h3>Sign Up</h3>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" name="firstName" value={ firstName } onChange={ (e) => setFirstName( e.target.value ) } />
            <label htmlFor="lastName">First Name: </label>
            <input type="text" name="lastName" value={ lastName } onChange={ (e) => setLastName( e.target.value ) } />
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" value={ email } onChange={ (e) => setEmail( e.target.value ) } />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" value={ password } onChange={ (e) => setPassword( e.target.value ) } />
            <button type='submit' disabled={ isLoading } >Register</button>
            {
                error && <div className='error'>{ error }</div>
            }
        </form>
    );
}

//@Asdf.4567