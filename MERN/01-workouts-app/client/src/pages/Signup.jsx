import React from 'react';
import { useState } from 'react';

export const Signup = () => {

    const [ email, setEmail ] = useState( '' ) ;
    const [ password, setPassword ] = useState( '' );
    const [ firstName, setFirstName ] = useState( '' );
    const [ lastName, setLastName ] = useState( '' ) ;

    const handleLogin = async ( e ) => {
        e.preventDefault();
        console.log('Register Data: ', { firstName, lastName, email, password });
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
            <button type='submit'>Login</button>
        </form>
    );
}