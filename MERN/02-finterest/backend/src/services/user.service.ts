import { connection } from '../database/SqlServerConnection';
import { IPerson } from '../interfaces/IPerson';
import { ILastId } from '../interfaces/ILastId';
import { Int, VarChar } from 'mssql';
import { hashedPassword } from '../utils/bcrypt.handle';
import { IUser } from '../interfaces/IUser';

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

export const registerNewUser = async ( user: IPerson ): Promise<number> => {
    const userFound = await existsUserById( user.userData.userEmail );
    console.log(userFound);
    
    return 1;
    // let lastId = await getLastIdFromPerson();
    // const hashedPass = await hashedPassword(user.userData.userPassword);

    // // CREAMOS A LA PERSONA
    // let userInserted: boolean = false;
    // const sql = await connection();
    // const result = await sql.request()
    // .input( 'personId', Int, lastId )
    // .input( 'personStatus', Int, user.personStatus?.statusId )
    // .input( 'firstName', VarChar, user.firstName )
    // .input( 'lastName', VarChar, user.lastName )
    // .input( 'avatar', VarChar, user.avatar )
    // .execute('CREATEPERSON');

    // //console.log(result);
    // if ( result.rowsAffected[0] > 0 ) {
    //     // CREAMOS AL USUARIO
    //     const result2 = await sql.request()
    //     .input( 'personId', Int, lastId )
    //     .input( 'userEmail', VarChar, user.userData.userEmail )
    //     .input( 'userPassword', VarChar, hashedPass )
    //     .execute('CREATEUSER');
    //     if ( result2.rowsAffected[0] > 0 ) {
    //         userInserted = true;
    //     }
    // } 

    // sql.close();
    // if ( userInserted  ) {
    //     return lastId;
    // } else {
    //     return 0;
    // }
}