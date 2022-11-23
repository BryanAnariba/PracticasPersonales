import 'dotenv/config';
import 'colors';
import express, { Application, json, urlencoded } from "express";
import cors from 'cors';
import { IndexRoutes } from './routes';
import { connectMe } from './database/mongo';

// SETTINGS
const app: Application = express();
app.set( 'PORT', process.env.PORT || 8888 );

// MIDDLEWARES
app.use( cors() );
app.use( json() );
app.use( urlencoded({ extended: true }) );

// ROUTES
app.use( IndexRoutes );

// START SERVER
app.listen( app.get( 'PORT' ), async () => {
    console.clear();
    console.log( `===================================================================`.cyan );
    console.log( `Server started on port: ${ app.get( 'PORT' ) }`.bgMagenta );
    await connectMe();
    console.log( `===================================================================`.cyan );
});





