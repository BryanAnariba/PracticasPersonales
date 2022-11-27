const API = 'http://localhost:8888/api/workouts';

export const getWorkOuts = async ( token ) => {
    const response = await fetch( `${ API }`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ token }`,
        }
    });
    const jsonResponse = await response.json();
    return jsonResponse;
}

export const createWotkOut = async ( workOut, token ) => {
    return await fetch( `${ API }`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ token }`,
        },
        body: JSON.stringify( workOut ),
    });
}

export const deleteWorkout = async ( workOutId, token ) => {
    return await fetch( `${ API }/${ workOutId }`,{
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${ token }`,
            'Content-Type': 'application/json',
        }
    });
}