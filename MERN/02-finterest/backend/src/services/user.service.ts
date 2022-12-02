import { connection } from '../database/SqlServerConnection';
import { IPerson } from '../interfaces/IPerson';
import { ILastId } from '../interfaces/ILastId';
import { Int, VarChar } from 'mssql';
import { hashedPassword } from '../utils/bcrypt.handle';
import { IUser } from '../interfaces/IUser';
import { genJWT } from '../utils/jwt.handle';

export const getLastIdFromPerson = async (): Promise<number> => {
    const sql = await connection();
    const result = await sql.request()
    .query( 'SELECT dbo.getLastIdFromPersons() AS LastId' );
    let lastId: ILastId = result.recordset[0];
    sql.close();
    //console.log(lastId);
    return lastId.LastId;
}

export const existsUserById = async ( userEmail: string ): Promise<IUser> => {
    const sql = await connection();
    const result = await sql.request()
    .input( 'userEmail', VarChar, userEmail )
    .execute( 'GET_USER_BY_EMAIL' );
    return result.recordset[0];
}

export const registerNewUser = async ( user: IPerson ): Promise<string> => {
    // OBTENEMOS ULTIMO ID DE LA TABLA Y HASHEAMOS LA CLAVE
    let lastId = await getLastIdFromPerson();
    const hashedPass = await hashedPassword(user.userData.userPassword);

    // CREAMOS A LA PERSONA
    let personInserted: boolean = false;
    let userInserted: boolean = false;
    const sql = await connection();
    const result = await sql.request()
    .input( 'personId', Int, lastId )
    .input( 'personStatus', Int, user.personStatus?.statusId )
    .input( 'firstName', VarChar, user.firstName )
    .input( 'lastName', VarChar, user.lastName )
    .input( 'avatar', VarChar, user.avatar )
    .execute('CREATEPERSON');

    //console.log(result);
    if ( result.rowsAffected[0] > 0 ) {
        personInserted = true;
        // CREAMOS AL USUARIO
        const result2 = await sql.request()
        .input( 'personId', Int, lastId )
        .input( 'userEmail', VarChar, user.userData.userEmail )
        .input( 'userPassword', VarChar, hashedPass )
        .execute('CREATEUSER');
        if ( result2.rowsAffected[0] > 0 ) {
            userInserted = true;
        }
    } else {
        personInserted = false;
        userInserted = false
    }

    sql.close();
    
    if ( userInserted === true && personInserted === true ) {
        // GENERAMOS TOKEN
        let token: string = genJWT( lastId );
        return token;
    } else {
        // GENERAMOS ERROR
        let message: string = ( !personInserted ) ? 'Error: Person Not Inserted' : 'Error: User Not Inserted';
        return message;
    }
}