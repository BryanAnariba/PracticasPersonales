import 'dotenv/config';
import 'colors';
import express, { Application, json, urlencoded } from "express";
import cors from 'cors';
import { router } from './routes';
import { connectMe } from './utils/mongo.connection';

// Settings
const app: Application = express();
app.set( 'PORT', process.env.PORT || 8888 );

// Middlwares
app.use( cors() );
app.use( json() );
app.use( urlencoded( { extended: true } ) );

// Routes
app.use( router );

// Start Server
app.listen( app.get( `PORT` ), () => {
    console.clear();
    connectMe()
    .then((res) => {
        console.log( `============================`.blue );
        console.log( `Server started on port: ${ app.get( 'PORT' ) }`.cyan );
        console.log( `MongoDB is connected: ${ res.connection.port }`.cyan );
        console.log( `============================`.blue );
    })
    .catch((ex) => {
        throw new Error( `Error, connection failed: ${ ex }` );
    });
});