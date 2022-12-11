import { endPoint } from "../config/endPoint";
export const uploadFile = async ( data: FormData, token: string ) => {
    return await fetch( `${ endPoint }/images/uploads`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${ token.trim() }`
        },
        body: data
    });
}

export const getFiles = async ( token: string ) => { 
    const response = await fetch( `${ endPoint }/images`, { method: 'GET', headers: { 'Authorization': `Bearer ${ token.trim() }` } } );
    return await response.json();
}

export const deleteFile = async ( token: string, imageId: number,  path: string ) => {
    let data = {
        path
    }
    console.log(data);
    
    return await fetch ( `${endPoint}/images/${ imageId }`, { 
        method: 'DELETE', 
        headers: { 
            'Authorization': `Bearer ${ token.trim() }`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}