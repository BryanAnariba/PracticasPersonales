import { endPoint } from "../config/endPoint";
import { IPerson } from "../interfaces/IPerson";

export const regiterUser = async ( person: IPerson )  => {
    return await fetch(`${ endPoint }/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 123123'
        },
        body: JSON.stringify( person )
    });
}