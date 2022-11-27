const API = 'http://localhost:8888/api/users';

export const loginUser = async ( firstName, lastName, email, password ) => {
    return await fetch( `${ API }/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
    });
}

export const logInUser = async ( email, password ) => {
    return await fetch( `${ API }/signin`,  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    });
}
