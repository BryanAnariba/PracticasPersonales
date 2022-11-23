import { connect } from "mongoose";
import 'colors';

export const connectMe = async () => {
    try {
        const conn = await connect( `${process.env.MONGO_URI}` );
        console.log( `MongoDB started at port: ${ conn.connection.host }`.bgMagenta );
    } catch ( err ) {
        throw new Error( `Error: ${ err }` );
    }
}