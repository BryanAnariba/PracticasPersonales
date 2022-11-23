const API = 'http://localhost:8888/api/workouts';

export const getWorkOuts = async () => {
    const response = await fetch( `${ API }` );
    const jsonResponse = await response.json();
    return jsonResponse;
}

export const createWotkOut = async ( workOut ) => {
    return await fetch( `${ API }`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( workOut ),
    });
}