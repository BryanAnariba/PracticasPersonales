import 'dotenv/config';
import 'colors';
import express, { Application, json, urlencoded } from "express";
import cors from 'cors';
import { router } from './routes';

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
    //console.clear();
    console.log( `============================`.blue );
    console.log( `Server started on port: ${ app.get( 'PORT' ) }`.cyan );
    console.log( `============================`.blue );
});