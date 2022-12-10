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