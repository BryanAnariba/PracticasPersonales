import { endPoint } from "../config/endPoint";
import { IPerson } from "../interfaces/IPerson";
import { IUser } from "../interfaces/IUser";

export const regiterUser = async ( person: IPerson )  => {
    return await fetch(`${ endPoint }/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( person )
    });
}

export const logInUser = async ( user: IUser ) => {
    return await fetch( `${ endPoint }/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( user ),
    });
}

